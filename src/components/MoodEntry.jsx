import React, { useState } from "react";

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
    <div className={`relative p-8 shadow-xl rounded-2xl overflow-hidden border-2 ${isDark ? 'bg-[#f3f4f6] text-[#23272e] border-[#bdbdbd]' : 'bg-[#23272e] text-[#f3f4f6] border-[#23272e]'}`}>
      {/* Floating emoji orb */}
      <div className="absolute -top-8 right-8 z-10 animate-bounce text-5xl drop-shadow-lg">
        {moodEmojis[mood - 1]}
      </div>
      <h2 className="mb-4 text-2xl font-extrabold">How are you feeling today?</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className={`w-full p-2 border rounded-md ${isDark ? 'bg-[#f3f4f6] text-[#23272e] border-[#bdbdbd]' : 'bg-[#23272e] text-[#f3f4f6] border-[#23272e]'}`}
            required
          />
        </div>
        <div>
          <label className="block mb-2">Mood (1-5)</label>
          <div className="flex justify-between gap-2">
            {moodEmojis.map((emoji, idx) => (
              <button
                key={emoji}
                type="button"
                onClick={() => setMood(idx + 1)}
                className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-lg transition-all duration-200 border-2 
                  ${mood === idx + 1 ? (isDark ? 'bg-[#bdbdbd] text-[#23272e] scale-110 border-[#bdbdbd]' : 'bg-[#23272e] text-[#f3f4f6] scale-110 border-[#23272e]') : (isDark ? 'bg-[#f3f4f6] text-[#23272e] border-[#bdbdbd]' : 'bg-[#23272e] text-[#f3f4f6] border-[#23272e]')}
                  hover:scale-110`}
                aria-label={`Mood ${idx + 1}`}
              >
                {emoji}
              </button>
            ))}
          </div>
        </div>
        <textarea
          className="w-full h-32 p-3 mt-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
          placeholder="Write your thoughts, feelings, or anything on your mind..."
          value={journal}
          onChange={e => setJournal(e.target.value)}
        />
        <button
          type="submit"
          className={`w-full py-2 font-bold transition rounded-md hover:scale-105 hover:shadow-xl duration-200 border-2 ${isDark ? 'bg-[#bdbdbd] text-[#23272e] border-[#bdbdbd]' : 'bg-[#23272e] text-[#f3f4f6] border-[#23272e]'} ${!user ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={!user}
        >
          Add Entry
        </button>
        {!user && <div className="mt-2 text-sm text-red-500 text-center">You must be logged in to add an entry.</div>}
      </form>
    </div>
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