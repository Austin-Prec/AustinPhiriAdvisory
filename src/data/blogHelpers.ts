import { Shield, Search, FileCheck, TrendingUp, LucideIcon } from 'lucide-react';
import { supabase, BlogPost } from '../lib/supabase';

// Map a post's category to an icon for the Insights grid.
// This keeps the same visual language as the old hardcoded articles.
const CATEGORY_ICONS: Record<string, LucideIcon> = {
  Governance: Shield,
  'Forensic Finance': Search,
  Compliance: FileCheck,
  Strategy: TrendingUp,
};

export const getIconForCategory = (category: string): LucideIcon => {
  return CATEGORY_ICONS[category] || Shield;
};

// Estimate reading time from plain-text length, ~200 words/min.
export const estimateReadTime = (htmlContent: string): string => {
  const text = htmlContent.replace(/<[^>]*>/g, ' ');
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
};

// Turn a title into a URL-safe, unique-enough slug.
export const slugify = (title: string): string => {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .slice(0, 80);
};

export const formatDisplayDate = (isoDate: string | null): string => {
  if (!isoDate) return '';
  return new Date(isoDate).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
};

// Public site: only published posts, newest first.
export const getPublishedPosts = async (): Promise<BlogPost[]> => {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('status', 'published')
    .order('published_at', { ascending: false });

  if (error) {
    console.error('Error fetching published posts:', error);
    return [];
  }
  return data || [];
};

// Public site: a single published post by slug.
export const getPublishedPostBySlug = async (
  slug: string
): Promise<BlogPost | null> => {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .eq('status', 'published')
    .maybeSingle();

  if (error) {
    console.error('Error fetching post by slug:', error);
    return null;
  }
  return data;
};

// Admin: every post regardless of status, newest edited first.
export const getAllPostsForAdmin = async (): Promise<BlogPost[]> => {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .order('updated_at', { ascending: false });

  if (error) {
    console.error('Error fetching admin posts:', error);
    return [];
  }
  return data || [];
};

// Admin: fetch one post by id, draft or published, for editing.
export const getPostById = async (id: string): Promise<BlogPost | null> => {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('id', id)
    .maybeSingle();

  if (error) {
    console.error('Error fetching post by id:', error);
    return null;
  }
  return data;
};

interface SavePostInput {
  id?: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  cover_image_url: string;
  category: string;
  status: 'draft' | 'published';
  read_time: string;
}

// Create or update a post. Sets published_at the first time a post goes live.
export const savePost = async (
  input: SavePostInput
): Promise<{ data: BlogPost | null; error: string | null }> => {
  const { id, ...fields } = input;

  if (id) {
    const existing = await getPostById(id);
    const updates: Record<string, unknown> = { ...fields };

    if (fields.status === 'published' && existing?.status !== 'published') {
      updates.published_at = new Date().toISOString();
    }

    const { data, error } = await supabase
      .from('blog_posts')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) return { data: null, error: error.message };
    return { data, error: null };
  } else {
    const insertPayload: Record<string, unknown> = { ...fields };
    if (fields.status === 'published') {
      insertPayload.published_at = new Date().toISOString();
    }

    const { data, error } = await supabase
      .from('blog_posts')
      .insert(insertPayload)
      .select()
      .single();

    if (error) return { data: null, error: error.message };
    return { data, error: null };
  }
};

export const deletePost = async (
  id: string
): Promise<{ error: string | null }> => {
  const { error } = await supabase.from('blog_posts').delete().eq('id', id);
  return { error: error ? error.message : null };
};

// Check a slug isn't already taken by a different post.
export const isSlugAvailable = async (
  slug: string,
  excludeId?: string
): Promise<boolean> => {
  let query = supabase.from('blog_posts').select('id').eq('slug', slug);
  if (excludeId) {
    query = query.neq('id', excludeId);
  }
  const { data, error } = await query;
  if (error) {
    console.error('Error checking slug availability:', error);
    return false;
  }
  return (data || []).length === 0;
};

// Upload an image (cover or in-post, dropped/pasted/selected) to the
// blog-images storage bucket and return its public URL.
export const uploadBlogImage = async (
  file: File
): Promise<{ url: string | null; error: string | null }> => {
  const ext = file.name.split('.').pop() || 'jpg';
  const filename = `${crypto.randomUUID()}.${ext}`;
  const path = `posts/${filename}`;

  const { error: uploadError } = await supabase.storage
    .from('blog-images')
    .upload(path, file, {
      cacheControl: '31536000',
      upsert: false,
    });

  if (uploadError) {
    return { url: null, error: uploadError.message };
  }

  const { data } = supabase.storage.from('blog-images').getPublicUrl(path);
  return { url: data.publicUrl, error: null };
};
