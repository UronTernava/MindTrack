import React, { useMemo } from "react";
import { Canvas } from "@react-three/fiber";

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
}

const QUOTES = [
  "You are stronger than you think.",
  "Every day is a fresh start.",
  "Your feelings are valid.",
  "Progress, not perfection.",
  "Take a deep breath and keep going."
];

function getRandomQuote() {
  return QUOTES[Math.floor(Math.random() * QUOTES.length)];
}

function FloatingOrb() {
  // Simple animated orb using react-three-fiber
  return (
    <mesh position={[0, 0, 0]}>
      <sphereGeometry args={[0.7, 32, 32]} />
      <meshStandardMaterial color="#a78bfa" emissive="#f472b6" roughness={0.2} metalness={0.8} />
    </mesh>
  );
}

export default function WelcomeBanner() {
  const greeting = useMemo(getGreeting, []);
  const quote = useMemo(getRandomQuote, []);
  const isDark = typeof window !== 'undefined' && document.documentElement.classList.contains('dark');

  return (
    <div className={`relative p-6 mb-8 rounded-2xl overflow-hidden shadow-xl border-2 ${isDark ? 'bg-[#f3f4f6] text-[#23272e] border-[#bdbdbd]' : 'bg-[#23272e] text-[#f3f4f6] border-[#23272e]'}`}>
      <div className="relative flex items-center z-10">
        {/* 3D Orb */}
        <div className="w-24 h-24 mr-6 flex-shrink-0">
          <Canvas camera={{ position: [0, 0, 3] }}>
            <ambientLight intensity={0.8} />
            <directionalLight position={[2, 2, 2]} intensity={1.1} />
            <FloatingOrb />
          </Canvas>
        </div>
        <div>
          <h3 className="text-2xl font-bold drop-shadow-lg">{greeting} <span className="align-middle">👋</span></h3>
          <p className="mt-1 text-base drop-shadow">
            How are you feeling today? Track your mood to see patterns over time.
          </p>
          <div className="mt-3 text-sm italic animate-fade-in">
            "{quote}"
          </div>
        </div>
      </div>
    </div>
  );
}
