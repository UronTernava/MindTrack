import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ReleaseOnScroll from './ReleaseOnScroll';

export default function Register({ onAuth }) {
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' });
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    if (form.password !== form.confirm) {
      setError('Passwords do not match');
      return;
    }
    // Mock register logic
    if (onAuth) onAuth({ name: form.name, email: form.email });
    navigate('/login');
  };

  return (
    <div className="flex items-center justify-center min-h-[80vh] bg-transparent">
      <ReleaseOnScroll>
        <div className="w-full max-w-md p-8 rounded-2xl shadow-2xl border border-gray-200 dark:border-[#23272e] bg-white dark:bg-[#23272e]">
          <ReleaseOnScroll delay={200}>
            <h2 className="mb-6 text-3xl font-extrabold text-center text-[#3b82f6] dark:text-[#3ddc97]">Create Account</h2>
          </ReleaseOnScroll>
          <form onSubmit={handleSubmit} className="space-y-4">
            <ReleaseOnScroll delay={300}>
              <input name="name" type="text" placeholder="Name" value={form.name} onChange={handleChange} required className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#3b82f6] dark:focus:ring-[#3ddc97] bg-gray-50 dark:bg-[#181b20] text-[#23272e] dark:text-[#f3f4f6]" />
            </ReleaseOnScroll>
            <ReleaseOnScroll delay={400}>
              <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#3b82f6] dark:focus:ring-[#3ddc97] bg-gray-50 dark:bg-[#181b20] text-[#23272e] dark:text-[#f3f4f6]" />
            </ReleaseOnScroll>
            <ReleaseOnScroll delay={500}>
              <div className="relative">
                <input name="password" type={showPassword ? 'text' : 'password'} placeholder="Password" value={form.password} onChange={handleChange} required className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#3b82f6] dark:focus:ring-[#3ddc97] bg-gray-50 dark:bg-[#181b20] text-[#23272e] dark:text-[#f3f4f6] pr-10" />
                <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-xl text-gray-400 hover:text-[#3b82f6] dark:hover:text-[#3ddc97]" onClick={() => setShowPassword(v => !v)} tabIndex={-1} aria-label="Toggle password visibility">
                  {showPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.956 9.956 0 012.223-3.592m3.34-2.591A9.956 9.956 0 0112 5c4.478 0 8.268 2.943 9.542 7a9.965 9.965 0 01-4.293 5.411M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3l18 18" /></svg>
                  )}
                </button>
              </div>
            </ReleaseOnScroll>
            <ReleaseOnScroll delay={600}>
              <div className="relative">
                <input name="confirm" type={showConfirm ? 'text' : 'password'} placeholder="Confirm Password" value={form.confirm} onChange={handleChange} required className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#3b82f6] dark:focus:ring-[#3ddc97] bg-gray-50 dark:bg-[#181b20] text-[#23272e] dark:text-[#f3f4f6] pr-10" />
                <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-xl text-gray-400 hover:text-[#3b82f6] dark:hover:text-[#3ddc97]" onClick={() => setShowConfirm(v => !v)} tabIndex={-1} aria-label="Toggle confirm password visibility">
                  {showConfirm ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.956 9.956 0 012.223-3.592m3.34-2.591A9.956 9.956 0 0112 5c4.478 0 8.268 2.943 9.542 7a9.965 9.965 0 01-4.293 5.411M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3l18 18" /></svg>
                  )}
                </button>
              </div>
            </ReleaseOnScroll>
            {error && (
              <ReleaseOnScroll delay={650}>
                <div className="text-red-500 text-sm">{error}</div>
              </ReleaseOnScroll>
            )}
            <ReleaseOnScroll delay={700}>
              <button type="submit" className="w-full py-2 mt-2 font-bold rounded-lg bg-[#3b82f6] dark:bg-[#3ddc97] text-white dark:text-[#23272e] hover:scale-105 transition-all shadow-md">Register</button>
            </ReleaseOnScroll>
          </form>
          <ReleaseOnScroll delay={800}>
            <div className="mt-4 text-center text-sm text-gray-500 dark:text-gray-300">
              Already have an account? <Link to="/login" className="text-[#3b82f6] dark:text-[#3ddc97] font-semibold hover:underline">Login</Link>
            </div>
          </ReleaseOnScroll>
        </div>
      </ReleaseOnScroll>
    </div>
  );
} 