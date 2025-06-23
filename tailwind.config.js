/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "calm-blue": "#93C5FD",
        "calm-green": "#A7F3D0",
        "calm-purple": "#C7D2FE",
        "light-bg": "#f8fafc",
        "light-card": "#ffffffcc",
        "light-text": "#1e293b",
        "light-accent": "#6366f1",
        "dark-bg": "#181926",
        "dark-card": "#23263aee",
        "dark-text": "#f3f4f6",
        "dark-accent": "#a78bfa",
        "glass": "rgba(255,255,255,0.18)",
        "glass-dark": "rgba(24,25,38,0.7)",
        "vivid-pink": "#f472b6",
        "vivid-purple": "#a78bfa",
        "vivid-blue": "#60a5fa",
      },
    },
  },
  plugins: [],
};
