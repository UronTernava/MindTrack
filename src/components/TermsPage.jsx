import React from "react";

export default function TermsPage() {
  return (
    <div className="max-w-2xl mx-auto py-12 px-4 text-[#23272e] dark:text-[#f3f4f6]">
      <h1 className="text-3xl font-bold mb-6">Terms of Agreement</h1>
      <p className="mb-4">By accessing or using MindTrack, you agree to the following terms:</p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>This software is proprietary and owned by Uron Tërnava.</li>
        <li>You may not use, copy, modify, distribute, or sublicense any part of MindTrack without explicit written permission.</li>
        <li>All content, features, and intellectual property remain the exclusive property of the owner.</li>
        <li>Violation of these terms may result in legal action.</li>
      </ul>
      <p className="mb-2">For questions or licensing requests, contact: <a href="mailto:hello@mindtrack.app" className="underline text-blue-500">hello@mindtrack.app</a></p>
    </div>
  );
} 