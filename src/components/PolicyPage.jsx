import React from "react";

export default function PolicyPage() {
  return (
    <div className="max-w-2xl mx-auto py-12 px-4 text-[#23272e] dark:text-[#f3f4f6]">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">MindTrack values your privacy. This policy explains how we handle your information:</p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>We collect only the information you provide (such as email, mood entries, and journal notes).</li>
        <li>Your data is used solely to provide and improve the MindTrack experience.</li>
        <li>We do not sell or share your data with third parties.</li>
        <li>You may request deletion of your data at any time by contacting us.</li>
      </ul>
      <p className="mb-2">For privacy questions or requests, contact: <a href="mailto:hello@mindtrack.app" className="underline text-blue-500">hello@mindtrack.app</a></p>
    </div>
  );
} 