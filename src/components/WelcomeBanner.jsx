import React, { useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import ReleaseOnScroll from "./ReleaseOnScroll";

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
    <ReleaseOnScroll>
      <div className={`relative p-4 mb-6 rounded-2xl overflow-hidden shadow-xl border-2 sm:p-6 md:p-8 ${isDark ? 'bg-[#f3f4f6] text-[#23272e] border-[#bdbdbd]' : 'bg-[#23272e] text-[#f3f4f6] border-[#23272e]'}`}>
        <div className="relative flex flex-col items-center text-center sm:flex-row sm:text-left sm:items-start">
          {/* 3D Orb */}
          <ReleaseOnScroll delay={200}>
            <div className="w-16 h-16 mb-4 sm:w-20 sm:h-20 sm:mr-6 sm:mb-0 md:w-24 md:h-24 flex-shrink-0">
              <Canvas camera={{ position: [0, 0, 3] }}>
                <ambientLight intensity={0.8} />
                <directionalLight position={[2, 2, 2]} intensity={1.1} />
                <FloatingOrb />
              </Canvas>
            </div>
          </ReleaseOnScroll>
          <ReleaseOnScroll delay={400}>
            <div className="flex-1">
              <h3 className="text-xl font-bold drop-shadow-lg sm:text-2xl md:text-3xl">{greeting} <span className="align-middle">👋</span></h3>
              <p className="mt-1 text-sm drop-shadow sm:text-base md:text-lg">
                How are you feeling today? Track your mood to see patterns over time.
              </p>
              <div className="mt-2 text-xs italic animate-fade-in sm:text-sm md:text-base">
                "{quote}"
              </div>
            </div>
          </ReleaseOnScroll>
        </div>
      </div>
    </ReleaseOnScroll>
  );
}
