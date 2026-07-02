import { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';
import type { Session } from '@supabase/supabase-js';
import { getSession, onAuthStateChange } from '../lib/auth';
import AdminLogin from './AdminLogin';
import AdminDashboard from './AdminDashboard';
import PostEditor from './PostEditor';

type View = { name: 'dashboard' } | { name: 'editor'; postId: string | null };

export default function AdminApp() {
  const [session, setSession] = useState<Session | null>(null);
  const [checkingSession, setCheckingSession] = useState(true);
  const [view, setView] = useState<View>({ name: 'dashboard' });

  useEffect(() => {
    getSession().then((s) => {
      setSession(s);
      setCheckingSession(false);
    });
    const subscription = onAuthStateChange((s) => setSession(s));
    return () => subscription.unsubscribe();
  }, []);

  if (checkingSession) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-navy-500">
        <Loader2 className="animate-spin text-white" size={28} />
      </div>
    );
  }

  if (!session) {
    return <AdminLogin />;
  }

  if (view.name === 'editor') {
    return (
      <PostEditor
        postId={view.postId}
        onBack={() => setView({ name: 'dashboard' })}
      />
    );
  }

  return (
    <AdminDashboard
      onEditPost={(id) => setView({ name: 'editor', postId: id })}
      onNewPost={() => setView({ name: 'editor', postId: null })}
    />
  );
}
