import React from 'react'
import ReleaseOnScroll from './ReleaseOnScroll'

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
    <ReleaseOnScroll>
      <section ref={ref} className={`relative p-4 rounded-2xl shadow-xl overflow-hidden border-2 sm:p-6 md:p-8 ${isDark ? 'bg-[#f3f4f6] text-[#23272e] border-[#bdbdbd]' : 'bg-[#23272e] text-[#f3f4f6] border-[#23272e]'}`}>
        {/* Floating 3D avatar (emoji for now) */}
        <ReleaseOnScroll delay={300}>
          <div className="absolute -top-8 right-4 z-10 animate-bounce sm:-top-10 sm:right-8">
            <span className="text-4xl drop-shadow-lg sm:text-5xl md:text-6xl">🧠</span>
          </div>
        </ReleaseOnScroll>
        <ReleaseOnScroll delay={200}>
          <h2 className="mb-3 text-2xl font-extrabold sm:text-3xl md:text-4xl">About MindTrack</h2>
        </ReleaseOnScroll>
        <div className="space-y-3 sm:space-y-4">
          <ReleaseOnScroll delay={400}>
            <p className="text-sm sm:text-base md:text-lg">
              MindTrack helps you monitor your mental wellbeing through simple mood tracking and journaling.
              Understanding your emotional patterns is the first step toward better mental health.
            </p>
          </ReleaseOnScroll>
          <div className="grid grid-cols-1 gap-4 mt-6 sm:gap-6 sm:mt-8 md:grid-cols-3">
            {features.map((item, index) => (
              <ReleaseOnScroll key={item.title} delay={600 + (index * 200)}>
                <div
                  className={`p-4 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col items-center border-2 sm:p-6 ${isDark ? 'bg-[#f3f4f6] text-[#23272e] border-[#bdbdbd]' : 'bg-[#23272e] text-[#f3f4f6] border-[#23272e]'}`}
                >
                  <div className="mb-2 text-3xl animate-pulse drop-shadow-lg sm:text-4xl md:text-5xl">{item.icon}</div>
                  <h3 className="font-bold text-base mb-1 text-center sm:text-lg md:text-xl">{item.title}</h3>
                  <p className="text-xs text-center sm:text-sm md:text-base">{item.content}</p>
                </div>
              </ReleaseOnScroll>
            ))}
          </div>
        </div>
      </section>
    </ReleaseOnScroll>
  )
});

export default AboutSection;