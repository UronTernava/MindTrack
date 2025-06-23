import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Footer = React.forwardRef(function Footer({ sectionRefs }, ref) {
  const isDark = typeof window !== 'undefined' && document.documentElement.classList.contains('dark');
  const navigate = useNavigate();
  return (
    <footer ref={ref} className={`relative mt-12 border-t-4 shadow-2xl rounded-t-2xl overflow-hidden border-2 ${isDark ? 'bg-[#f3f4f6] text-[#23272e] border-[#bdbdbd]' : 'bg-[#23272e] text-[#f3f4f6] border-[#23272e]'}`}>
      <div className="max-w-6xl px-4 py-8 mx-auto sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Logo and tagline */}
          <div>
            <button type="button" onClick={() => sectionRefs?.welcomeRef?.current?.scrollIntoView({ behavior: 'smooth' })} className="flex items-center group bg-transparent border-none outline-none cursor-pointer">
              <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 drop-shadow-lg group-hover:scale-110 transition-transform duration-300">
                MindTrack
              </span>
            </button>
            <p className="mt-2 text-sm">Your mental health companion</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase">Quick Links</h3>
            <div className="mt-4 space-y-2">
              <button type="button" onClick={() => sectionRefs?.welcomeRef?.current?.scrollIntoView({ behavior: 'smooth' })} className="block hover:underline w-full text-left">Home</button>
              <button type="button" onClick={() => sectionRefs?.aboutRef?.current?.scrollIntoView({ behavior: 'smooth' })} className="block hover:underline w-full text-left">About</button>
              <button type="button" onClick={() => sectionRefs?.journalRef?.current?.scrollIntoView({ behavior: 'smooth' })} className="block hover:underline w-full text-left">Journal</button>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase">Resources</h3>
            <div className="mt-4 space-y-2">
              <Link to="/terms" className="block hover:underline">Terms of Agreement</Link>
              <Link to="/policy" className="block hover:underline">Privacy Policy</Link>
              <a href="https://mhanational.org/" target="_blank" rel="noopener noreferrer" className="block hover:underline">Mental Health Tips</a>
              <a href="https://www.crisistextline.org/" target="_blank" rel="noopener noreferrer" className="block hover:underline">Crisis Hotlines</a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase">Contact</h3>
            <div className="mt-4 space-y-2">
              <p>hello@mindtrack.app</p>
              <div className="flex mt-2 space-x-4">
                <a href="https://github.com/UronTernava" target="_blank" rel="noopener noreferrer" className="hover:underline" aria-label="GitHub">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 7.07c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" /></svg>
                </a>
                <a href="https://www.instagram.com/u.ternava" target="_blank" rel="noopener noreferrer" className="hover:underline" aria-label="Instagram">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" /></svg>
                </a>
                <a href="https://www.linkedin.com/in/uron-ternava-806350304/" target="_blank" rel="noopener noreferrer" className="hover:underline" aria-label="LinkedIn">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.88v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z" /></svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 mt-8 text-sm text-center border-t">
          © {new Date().getFullYear()} MindTrack. All rights reserved.
        </div>
      </div>
    </footer>
  );
});

export default Footer;
