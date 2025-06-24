import React, { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MoodEntry from "./components/MoodEntry";
import MoodHistory from "./components/MoodHistory";
import AboutSection from "./components/AboutSection";
import WelcomeBanner from "./components/WelcomeBanner";
import ResourcesSection from "./components/ResourcesSection";
import LoadingScreen from "./components/LoadingScreen";
import { Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import TermsPage from './components/TermsPage';
import PolicyPage from './components/PolicyPage';
import "./App.css";

export default function App() {
  const [entries, setEntries] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Section refs for smooth scrolling
  const welcomeRef = useRef(null);
  const journalRef = useRef(null);
  const statsRef = useRef(null);
  const aboutRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  useEffect(() => {
    // Show loading screen for 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleNewEntry = (entry) => {
    setEntries([...entries, entry]);
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="flex flex-col min-h-screen bg-[#ffffff] dark:bg-[#23272e] transition-colors duration-300">
        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          user={user}
          onLogout={() => setUser(null)}
          sectionRefs={{ welcomeRef, journalRef, statsRef, aboutRef, footerRef }}
        />
        <main className="flex-grow w-full max-w-4xl px-4 py-8 mx-auto sm:px-6 lg:px-8">
          {/* Always render the main page sections (hidden on auth pages) for Home scroll */}
          <div style={{ position: 'absolute', left: '-9999px', top: 0, height: 0, width: 0, overflow: 'hidden' }} aria-hidden="true">
            <div ref={welcomeRef}>
              <WelcomeBanner user={user} />
            </div>
            <div className="grid gap-8 mb-12 md:grid-cols-2">
              <div ref={journalRef}>
                <MoodEntry onNewEntry={handleNewEntry} user={user} />
              </div>
              <div ref={statsRef}>
                <MoodHistory entries={entries} />
              </div>
            </div>
            <AboutSection ref={aboutRef} />
            <ResourcesSection />
          </div>
          <Routes>
            <Route path="/" element={
              <>
                <div ref={welcomeRef}>
                  <WelcomeBanner user={user} />
                </div>
                <div className="grid gap-8 mb-12 md:grid-cols-2">
                  <div ref={journalRef}>
                    <MoodEntry onNewEntry={handleNewEntry} user={user} />
                  </div>
                  <div ref={statsRef}>
                    <MoodHistory entries={entries} />
                  </div>
                </div>
                <AboutSection ref={aboutRef} />
                <ResourcesSection />
              </>
            } />
            <Route path="/register" element={<Register onAuth={setUser} />} />
            <Route path="/login" element={<Login onAuth={setUser} />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/policy" element={<PolicyPage />} />
          </Routes>
        </main>
        <Footer ref={footerRef} sectionRefs={{ welcomeRef, journalRef, aboutRef, footerRef }} />
      </div>
    </div>
  );
}
