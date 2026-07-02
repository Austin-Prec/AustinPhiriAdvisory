import { useState, FormEvent } from 'react';
import { Lock, Loader2 } from 'lucide-react';
import { signIn } from '../lib/auth';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const { error: signInError } = await signIn(email, password);
    setLoading(false);
    if (signInError) {
      setError('Incorrect email or password.');
    }
    // On success, the onAuthStateChange listener in AdminApp re-renders
    // the app into the dashboard automatically — no redirect needed here.
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-navy-500 px-6">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-navy-400 mb-4">
            <Lock size={24} className="text-white" />
          </div>
          <h1 className="font-garamond text-white text-2xl font-bold">
            Austin Phiri Advisory
          </h1>
          <p className="font-arial text-navy-200 text-sm mt-1">
            Sign in to manage Insights posts
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg p-6 shadow-xl"
        >
          <div className="mb-4">
            <label className="block font-arial text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
              Email
            </label>
            <input
              type="email"
              required
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-navy-400 font-arial text-sm"
              placeholder="you@example.com"
            />
          </div>

          <div className="mb-5">
            <label className="block font-arial text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-navy-400 font-arial text-sm"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <div className="mb-4 px-3 py-2 bg-crimson-50 text-crimson-500 text-sm rounded-lg">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-navy-500 text-white py-2.5 rounded-lg font-arial text-sm font-semibold hover:bg-navy-600 transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
          >
            {loading && <Loader2 size={16} className="animate-spin" />}
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
