import React, { useState } from 'react';
import Navbar from './Navbar';

export default function DashboardPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signedIn, setSignedIn] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setSignedIn(true);
      setLoading(false);
    }, 700);
  };

  if (signedIn) {
    return (
      <div className="bg-white min-h-screen text-black">
        <Navbar />
        <main className="min-h-[80vh] bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">Dashboard</h1>
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 p-6 rounded-xl border border-black/10 bg-white">
                <p className="text-black/70">Welcome back. Your analytics will appear here after connecting your account.</p>
              </div>
              <div className="p-6 rounded-xl border border-black/10 bg-white">
                <p className="text-sm text-black/70">You are signed in as <span className="font-medium">{email || 'user'}</span>.</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen text-black">
      <Navbar />
      <main className="min-h-[80vh] bg-white flex items-center justify-center px-4">
        <div className="w-full max-w-md p-6 rounded-xl border border-black/10 bg-white shadow-sm">
          <h1 className="text-xl md:text-2xl font-semibold tracking-tight mb-1">Sign in</h1>
          <p className="text-sm text-black/60 mb-6">Access your Velodent dashboard</p>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm mb-1" htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="you@clinic.com"
                className="w-full px-3 py-2 border border-black/20 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div>
              <label className="block text-sm mb-1" htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••"
                className="w-full px-3 py-2 border border-black/20 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2.5 rounded-md bg-black text-white hover:opacity-90 disabled:opacity-60"
              disabled={loading}
            >
              {loading ? 'Signing in…' : 'Sign In'}
            </button>
          </form>
          <div className="mt-4 text-right">
            <a href="#" className="text-sm text-black/70 hover:text-black underline">Forgot Password?</a>
          </div>
        </div>
      </main>
    </div>
  );
}
