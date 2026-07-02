import { useState, useEffect } from 'react';
import { Plus, LogOut, Loader2, Calendar, ExternalLink } from 'lucide-react';
import { getAllPostsForAdmin, formatDisplayDate } from '../data/blogHelpers';
import { signOut } from '../lib/auth';
import type { BlogPost } from '../lib/supabase';

interface AdminDashboardProps {
  onEditPost: (id: string) => void;
  onNewPost: () => void;
}

export default function AdminDashboard({
  onEditPost,
  onNewPost,
}: AdminDashboardProps) {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  const loadPosts = () => {
    setLoading(true);
    getAllPostsForAdmin().then((data) => {
      setPosts(data);
      setLoading(false);
    });
  };

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-navy-500">
        <div className="max-w-5xl mx-auto px-6 py-6 flex items-center justify-between">
          <div>
            <h1 className="font-garamond text-white text-2xl font-bold">
              Insights — Posts
            </h1>
            <p className="font-arial text-navy-200 text-sm mt-0.5">
              Write, edit, and publish directly to the live site
            </p>
          </div>
          <button
            onClick={() => signOut()}
            className="flex items-center gap-1.5 text-navy-200 hover:text-white font-arial text-sm transition-colors"
          >
            <LogOut size={15} /> Sign out
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="flex justify-end mb-5">
          <button
            onClick={onNewPost}
            className="flex items-center gap-2 bg-crimson-400 text-white font-arial text-sm font-semibold px-4 py-2.5 rounded-lg hover:bg-crimson-500 transition-colors"
          >
            <Plus size={16} /> New post
          </button>
        </div>

        {loading ? (
          <div className="flex justify-center py-16">
            <Loader2 className="animate-spin text-navy-400" size={26} />
          </div>
        ) : posts.length === 0 ? (
          <div className="bg-white border border-gray-200 rounded-lg p-12 text-center">
            <p className="font-arial text-gray-500 mb-4">
              No posts yet. Your first one takes about two minutes.
            </p>
            <button
              onClick={onNewPost}
              className="text-crimson-400 font-arial text-sm font-semibold hover:text-crimson-500"
            >
              Write your first post →
            </button>
          </div>
        ) : (
          <div className="bg-white border border-gray-200 rounded-lg divide-y divide-gray-100">
            {posts.map((post) => (
              <div
                key={post.id}
                className="flex items-center justify-between px-5 py-4 hover:bg-gray-50 transition-colors cursor-pointer"
                onClick={() => onEditPost(post.id)}
              >
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className={`text-xs font-semibold px-2 py-0.5 rounded ${
                        post.status === 'published'
                          ? 'bg-navy-50 text-navy-500'
                          : 'bg-gray-100 text-gray-500'
                      }`}
                    >
                      {post.status === 'published' ? 'Published' : 'Draft'}
                    </span>
                    <span className="font-arial text-xs text-gray-400">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="font-garamond text-navy-500 text-lg font-bold truncate">
                    {post.title || 'Untitled post'}
                  </h3>
                  <div className="flex items-center gap-1.5 text-gray-400 text-xs mt-1">
                    <Calendar size={12} />
                    <span>
                      {post.status === 'published' && post.published_at
                        ? `Published ${formatDisplayDate(post.published_at)}`
                        : `Last edited ${formatDisplayDate(post.updated_at)}`}
                    </span>
                  </div>
                </div>

                {post.status === 'published' && (
                  <a
                    href={`/insights/${post.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="ml-4 flex-shrink-0 p-2 text-gray-400 hover:text-navy-500 transition-colors"
                    title="View live"
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
