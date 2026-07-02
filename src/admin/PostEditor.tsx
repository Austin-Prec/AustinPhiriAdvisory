import { useState, useEffect, useCallback, useRef } from 'react';
import {
  ArrowLeft,
  Loader2,
  Image as ImageIcon,
  Trash2,
  Eye,
  Check,
} from 'lucide-react';
import RichTextEditor from './components/RichTextEditor';
import {
  savePost,
  getPostById,
  deletePost,
  slugify,
  estimateReadTime,
  isSlugAvailable,
  uploadBlogImage,
} from '../data/blogHelpers';
import type { BlogPost } from '../lib/supabase';

const CATEGORIES = ['Governance', 'Forensic Finance', 'Compliance', 'Strategy'];

interface PostEditorProps {
  postId: string | null; // null = creating a new post
  onBack: () => void;
}

type SaveState = 'idle' | 'saving' | 'saved' | 'error';

export default function PostEditor({ postId, onBack }: PostEditorProps) {
  const [loading, setLoading] = useState(!!postId);
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [slugManuallyEdited, setSlugManuallyEdited] = useState(false);
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [coverImageUrl, setCoverImageUrl] = useState('');
  const [status, setStatus] = useState<'draft' | 'published'>('draft');
  const [currentId, setCurrentId] = useState<string | null>(postId);

  const [saveState, setSaveState] = useState<SaveState>('idle');
  const [saveMessage, setSaveMessage] = useState<string | null>(null);
  const [isUploadingCover, setIsUploadingCover] = useState(false);
  const coverInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (postId) {
      getPostById(postId).then((post: BlogPost | null) => {
        if (post) {
          setTitle(post.title);
          setSlug(post.slug);
          setExcerpt(post.excerpt);
          setContent(post.content);
          setCategory(post.category);
          setCoverImageUrl(post.cover_image_url);
          setStatus(post.status);
          setSlugManuallyEdited(true); // don't auto-rewrite an existing slug
        }
        setLoading(false);
      });
    }
  }, [postId]);

  // Auto-derive the slug from the title until the user edits the slug
  // field directly — same behaviour as WordPress's permalink field.
  useEffect(() => {
    if (!slugManuallyEdited) {
      setSlug(slugify(title));
    }
  }, [title, slugManuallyEdited]);

  const handleCoverUpload = useCallback(async (file: File) => {
    setIsUploadingCover(true);
    const { url, error } = await uploadBlogImage(file);
    setIsUploadingCover(false);
    if (url) setCoverImageUrl(url);
    if (error) {
      setSaveMessage(`Cover image upload failed: ${error}`);
      setSaveState('error');
    }
  }, []);

  const handleSave = async (publishNow: boolean) => {
    if (!title.trim()) {
      setSaveState('error');
      setSaveMessage('Give the post a title before saving.');
      return;
    }
    if (!slug.trim()) {
      setSaveState('error');
      setSaveMessage('The post needs a URL slug.');
      return;
    }

    setSaveState('saving');
    setSaveMessage(null);

    const slugOk = await isSlugAvailable(slug, currentId || undefined);
    if (!slugOk) {
      setSaveState('error');
      setSaveMessage(
        `The URL "${slug}" is already used by another post. Change the slug and try again.`
      );
      return;
    }

    const finalStatus: 'draft' | 'published' = publishNow
      ? 'published'
      : status === 'published'
      ? 'published' // keep published posts published on a plain "Save"
      : 'draft';

    const { data, error } = await savePost({
      id: currentId || undefined,
      title: title.trim(),
      slug: slug.trim(),
      excerpt: excerpt.trim() || title.trim(),
      content,
      cover_image_url: coverImageUrl,
      category,
      status: finalStatus,
      read_time: estimateReadTime(content),
    });

    if (error || !data) {
      setSaveState('error');
      setSaveMessage(error || 'Something went wrong while saving.');
      return;
    }

    setCurrentId(data.id);
    setStatus(data.status);
    setSaveState('saved');
    setSaveMessage(
      publishNow ? 'Published — now live on the site.' : 'Draft saved.'
    );
    setTimeout(() => setSaveState('idle'), 2500);
  };

  const handleDelete = async () => {
    if (!currentId) return;
    if (
      !window.confirm(
        `Delete "${title}"? This cannot be undone, and the post will disappear from the live site immediately.`
      )
    ) {
      return;
    }
    const { error } = await deletePost(currentId);
    if (error) {
      setSaveState('error');
      setSaveMessage(error);
      return;
    }
    onBack();
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Loader2 className="animate-spin text-navy-400" size={28} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top bar */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-500 hover:text-navy-500 font-arial text-sm transition-colors"
          >
            <ArrowLeft size={16} /> All posts
          </button>

          <div className="flex items-center gap-3">
            {saveMessage && (
              <span
                className={`font-arial text-sm flex items-center gap-1.5 ${
                  saveState === 'error' ? 'text-crimson-500' : 'text-navy-500'
                }`}
              >
                {saveState === 'saved' && <Check size={15} />}
                {saveMessage}
              </span>
            )}

            {currentId && status === 'published' && (
              <a
                href={`/insights/${slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-1.5 text-navy-500 hover:text-navy-600 font-arial text-sm font-semibold px-3 py-1.5 border border-navy-200 rounded-lg transition-colors"
              >
                <Eye size={15} /> View live
              </a>
            )}

            <button
              onClick={() => handleSave(false)}
              disabled={saveState === 'saving'}
              className="font-arial text-sm font-semibold px-4 py-1.5 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-60"
            >
              Save draft
            </button>
            <button
              onClick={() => handleSave(true)}
              disabled={saveState === 'saving'}
              className="font-arial text-sm font-semibold px-4 py-1.5 rounded-lg bg-crimson-400 text-white hover:bg-crimson-500 transition-colors disabled:opacity-60 flex items-center gap-2"
            >
              {saveState === 'saving' && (
                <Loader2 size={14} className="animate-spin" />
              )}
              {status === 'published' ? 'Update' : 'Publish'}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main column */}
          <div className="lg:col-span-2 space-y-5">
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Post title"
              className="w-full font-garamond text-3xl font-bold text-navy-500 placeholder:text-gray-300 focus:outline-none bg-transparent"
            />

            <textarea
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              placeholder="Short excerpt shown on the Insights page (optional — the title is used if left blank)"
              rows={2}
              className="w-full font-arial text-sm text-gray-600 placeholder:text-gray-400 border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:border-navy-300 resize-none bg-white"
            />

            <RichTextEditor
              value={content}
              onChange={setContent}
              placeholder="Start writing, or paste in content from anywhere — Word, Google Docs, another article. You can also drag and drop images straight into this box."
            />
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <label className="block font-arial text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                Status
              </label>
              <span
                className={`inline-block text-xs font-semibold px-2.5 py-1 rounded ${
                  status === 'published'
                    ? 'bg-navy-50 text-navy-500'
                    : 'bg-gray-100 text-gray-500'
                }`}
              >
                {status === 'published' ? 'Published' : 'Draft'}
              </span>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <label className="block font-arial text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 font-arial text-sm focus:outline-none focus:border-navy-300 bg-white"
              >
                {CATEGORIES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <label className="block font-arial text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                Cover image
              </label>
              {coverImageUrl ? (
                <div className="relative group">
                  <img
                    src={coverImageUrl}
                    alt="Cover"
                    className="w-full h-32 object-cover rounded-lg"
                  />
                  <button
                    onClick={() => setCoverImageUrl('')}
                    className="absolute top-2 right-2 bg-white/90 text-crimson-500 p-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                    title="Remove cover image"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => coverInputRef.current?.click()}
                  disabled={isUploadingCover}
                  className="w-full h-32 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center gap-1.5 text-gray-400 hover:border-navy-300 hover:text-navy-400 transition-colors"
                >
                  {isUploadingCover ? (
                    <Loader2 size={20} className="animate-spin" />
                  ) : (
                    <>
                      <ImageIcon size={20} />
                      <span className="font-arial text-xs">
                        Click to upload
                      </span>
                    </>
                  )}
                </button>
              )}
              <input
                ref={coverInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) handleCoverUpload(file);
                  e.target.value = '';
                }}
              />
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <label className="block font-arial text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                URL
              </label>
              <div className="flex items-center gap-1 font-arial text-xs text-gray-400 mb-1.5">
                <span>/insights/</span>
              </div>
              <input
                value={slug}
                onChange={(e) => {
                  setSlug(slugify(e.target.value));
                  setSlugManuallyEdited(true);
                }}
                className="w-full border border-gray-300 rounded-lg px-3 py-1.5 font-arial text-sm focus:outline-none focus:border-navy-300"
              />
            </div>

            {currentId && (
              <button
                onClick={handleDelete}
                className="w-full flex items-center justify-center gap-2 text-crimson-500 hover:bg-crimson-50 font-arial text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
              >
                <Trash2 size={15} /> Delete post
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
