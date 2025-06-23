import React from 'react'

const features = [
  {
    title: "Mood Tracking",
    content: "Record your daily mood on a simple 1-5 scale",
    icon: "📊"
  },
  {
    title: "Journaling",
    content: "Optional notes to capture how you're feeling",
    icon: "📝"
  },
  {
    title: "Visual Insights",
    content: "See your emotional patterns over time",
    icon: "👁️"
  }
];

const AboutSection = React.forwardRef(function AboutSection(props, ref) {
  const isDark = typeof window !== 'undefined' && document.documentElement.classList.contains('dark');
  return (
    <section ref={ref} className={`relative p-8 rounded-2xl shadow-xl overflow-hidden border-2 ${isDark ? 'bg-[#f3f4f6] text-[#23272e] border-[#bdbdbd]' : 'bg-[#23272e] text-[#f3f4f6] border-[#23272e]'}`}>
      {/* Floating 3D avatar (emoji for now) */}
      <div className="absolute -top-10 right-8 z-10 animate-bounce">
        <span className="text-6xl drop-shadow-lg">🧠</span>
      </div>
      <h2 className="mb-4 text-3xl font-extrabold">About MindTrack</h2>
      <div className="space-y-4">
        <p>
          MindTrack helps you monitor your mental wellbeing through simple mood tracking and journaling.
          Understanding your emotional patterns is the first step toward better mental health.
        </p>
        <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-3">
          {features.map((item) => (
            <div
              key={item.title}
              className={`p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col items-center border-2 ${isDark ? 'bg-[#f3f4f6] text-[#23272e] border-[#bdbdbd]' : 'bg-[#23272e] text-[#f3f4f6] border-[#23272e]'}`}
            >
              <div className="mb-3 text-4xl animate-pulse drop-shadow-lg">{item.icon}</div>
              <h3 className="font-bold text-lg mb-1 text-center">{item.title}</h3>
              <p className="mt-1 text-sm text-center">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
});

export default AboutSection;