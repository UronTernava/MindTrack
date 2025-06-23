import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    // TODO: handle forgot password logic
    setMessage('If this email is registered, a reset link will be sent.');
  };

  return (
    <div className="flex items-center justify-center min-h-[80vh] bg-transparent">
      <div className="w-full max-w-md p-8 rounded-2xl shadow-2xl border border-gray-200 dark:border-[#23272e] bg-white dark:bg-[#23272e]">
        <h2 className="mb-6 text-3xl font-extrabold text-center text-[#3b82f6] dark:text-[#3ddc97]">Forgot Password</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input name="email" type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#3b82f6] dark:focus:ring-[#3ddc97] bg-gray-50 dark:bg-[#181b20] text-[#23272e] dark:text-[#f3f4f6]" />
          <button type="submit" className="w-full py-2 mt-2 font-bold rounded-lg bg-[#3b82f6] dark:bg-[#3ddc97] text-white dark:text-[#23272e] hover:scale-105 transition-all shadow-md">Reset Password</button>
        </form>
        {message && <div className="mt-4 text-green-500 text-center">{message}</div>}
        <div className="mt-4 text-center text-sm text-gray-500 dark:text-gray-300">
          Remembered? <Link to="/login" className="text-[#3b82f6] dark:text-[#3ddc97] font-semibold hover:underline">Login</Link>
        </div>
      </div>
    </div>
  );
} 