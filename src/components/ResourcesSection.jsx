import React from "react";

const resources = [
  {
    title: "Mental Health America",
    url: "https://mhanational.org/",
    desc: "Information, screening tools, and support for mental health. (External Resource)"
  },
  {
    title: "Crisis Text Line",
    url: "https://www.crisistextline.org/",
    desc: "Free, 24/7 support for those in crisis. Text HOME to 741741. (External Resource)"
  },
  {
    title: "National Suicide Prevention Lifeline",
    url: "https://988lifeline.org/",
    desc: "24/7, free and confidential support for people in distress."
  },
  {
    title: "Mindfulness Exercises",
    url: "https://www.mindful.org/category/mindfulness-practice/",
    desc: "Guided meditations and mindfulness practices."
  }
];

export default function ResourcesSection() {
  const isDark = typeof window !== 'undefined' && document.documentElement.classList.contains('dark');
  return (
    <section className={`relative p-8 mt-12 rounded-2xl shadow-xl overflow-hidden border-2 ${isDark ? 'bg-[#f3f4f6] text-[#23272e] border-[#bdbdbd]' : 'bg-[#23272e] text-[#f3f4f6] border-[#23272e]'}`}>
      <h2 className="mb-4 text-2xl font-extrabold">Resources & Tips</h2>
      <ul className="space-y-6">
        {resources.map((res) => (
          <li key={res.title} className={`p-4 rounded-xl border-2 ${isDark ? 'bg-[#f3f4f6] text-[#23272e] border-[#bdbdbd]' : 'bg-[#181b20] text-[#f3f4f6] border-[#23272e]'}`}>
            <a href={res.url} target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-blue-400">
              {res.title}
              <span className="ml-1" aria-label="external" title="External Resource">↗</span>
            </a>
            <p className="mt-1 text-sm">{res.desc}</p>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <h3 className="font-semibold mb-2">Quick Tips</h3>
        <ul className="list-disc pl-6 space-y-1 text-sm">
          <li>Take a few minutes each day to check in with yourself.</li>
          <li>Practice deep breathing or mindfulness when stressed.</li>
          <li>Reach out to friends or family if you need support.</li>
          <li>Remember: It's okay to ask for help.</li>
        </ul>
      </div>
    </section>
  );
} 