import React, { useState } from "react";
import ReleaseOnScroll from "./ReleaseOnScroll";

const moodEmojis = ["😢", "😔", "😐", "😊", "😁"];

export default function MoodEntry({ onNewEntry, user }) {
  const [mood, setMood] = useState(3);
  const [journal, setJournal] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const isDark = typeof window !== 'undefined' && document.documentElement.classList.contains('dark');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user) return;
    onNewEntry({
      date,
      mood,
      journal,
      sentiment: analyzeSentiment(journal),
    });
    setJournal("");
    setMood(3);
  };

  return (
    <ReleaseOnScroll>
      <div className={`relative p-4 shadow-xl rounded-2xl overflow-hidden border-2 sm:p-6 md:p-8 ${isDark ? 'bg-[#f3f4f6] text-[#23272e] border-[#bdbdbd]' : 'bg-[#23272e] text-[#f3f4f6] border-[#23272e]'}`}>
        {/* Floating emoji orb */}
        <ReleaseOnScroll delay={200}>
          <div className="absolute -top-6 right-4 z-10 animate-bounce text-3xl drop-shadow-lg sm:-top-8 sm:right-8 sm:text-4xl md:text-5xl">
            {moodEmojis[mood - 1]}
          </div>
        </ReleaseOnScroll>
        <ReleaseOnScroll delay={300}>
          <h2 className="mb-4 text-xl font-extrabold sm:text-2xl md:text-3xl">How are you feeling today?</h2>
        </ReleaseOnScroll>
        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
          <ReleaseOnScroll delay={400}>
            <div>
              <label className="block mb-1 text-sm sm:text-base">Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className={`w-full p-2 text-sm border rounded-md sm:p-3 sm:text-base ${isDark ? 'bg-[#f3f4f6] text-[#23272e] border-[#bdbdbd]' : 'bg-[#23272e] text-[#f3f4f6] border-[#23272e]'}`}
                required
              />
            </div>
          </ReleaseOnScroll>
          <ReleaseOnScroll delay={500}>
            <div>
              <label className="block mb-2 text-sm sm:text-base">Mood (1-5)</label>
              <div className="flex justify-between gap-1 sm:gap-2">
                {moodEmojis.map((emoji, idx) => (
                  <button
                    key={emoji}
                    type="button"
                    onClick={() => setMood(idx + 1)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-lg shadow-lg transition-all duration-200 border-2 sm:w-12 sm:h-12 sm:text-xl md:text-2xl
                      ${mood === idx + 1 ? (isDark ? 'bg-[#bdbdbd] text-[#23272e] scale-110 border-[#bdbdbd]' : 'bg-[#23272e] text-[#f3f4f6] scale-110 border-[#23272e]') : (isDark ? 'bg-[#f3f4f6] text-[#23272e] border-[#bdbdbd]' : 'bg-[#23272e] text-[#f3f4f6] border-[#23272e]')}
                      hover:scale-110`}
                    aria-label={`Mood ${idx + 1}`}
                  >
                    {emoji}
                  </button>
                ))}
              </div>
            </div>
          </ReleaseOnScroll>
          <ReleaseOnScroll delay={600}>
            <textarea
              className="w-full h-24 p-3 mt-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 text-sm sm:h-28 sm:text-base md:h-32"
              placeholder="Write your thoughts, feelings, or anything on your mind..."
              value={journal}
              onChange={e => setJournal(e.target.value)}
            />
          </ReleaseOnScroll>
          <ReleaseOnScroll delay={700}>
            <button
              type="submit"
              className={`w-full py-2 mt-2 font-bold transition rounded-md hover:scale-105 hover:shadow-xl duration-200 border-2 text-sm sm:py-3 sm:text-base ${isDark ? 'bg-[#bdbdbd] text-[#23272e] border-[#bdbdbd]' : 'bg-[#23272e] text-[#f3f4f6] border-[#23272e]'} ${!user ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={!user}
            >
              Add Entry
            </button>
          </ReleaseOnScroll>
          {!user && (
            <ReleaseOnScroll delay={800}>
              <div className="mt-2 text-xs text-red-500 text-center sm:text-sm">You must be logged in to add an entry.</div>
            </ReleaseOnScroll>
          )}
        </form>
      </div>
    </ReleaseOnScroll>
  );
}

// Simple sentiment analysis (unchanged)
function analyzeSentiment(text) {
  if (!text) return "neutral";
  const positiveWords = ["happy", "good", "great", "joy", "excited"];
  const negativeWords = ["sad", "bad", "angry", "depressed", "anxious"];
  const score = text.split(" ").reduce((acc, word) => {
    if (positiveWords.includes(word.toLowerCase())) return acc + 1;
    if (negativeWords.includes(word.toLowerCase())) return acc - 1;
    return acc;
  }, 0);
  return score > 0 ? "positive" : score < 0 ? "negative" : "neutral";
}