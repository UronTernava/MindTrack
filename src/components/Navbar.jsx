import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar({ darkMode, setDarkMode, user, onLogout, sectionRefs }) {
  const isDark = typeof window !== 'undefined' && document.documentElement.classList.contains('dark');
  const location = useLocation();
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { label: "Home", ref: sectionRefs?.welcomeRef },
    { label: "About", onClick: () => sectionRefs?.aboutRef?.current?.scrollIntoView({ behavior: 'smooth' }) },
    { label: "Journal", ref: sectionRefs?.journalRef },
    { label: "Links", onClick: () => sectionRefs?.footerRef?.current?.scrollIntoView({ behavior: 'smooth' }) }
  ];

  const handleHomeClick = () => {
    if (location.pathname !== "/") {
      navigate("/");
    } else {
      sectionRefs?.welcomeRef?.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <nav className={`sticky top-0 z-50 shadow-lg rounded-b-2xl border-b-4 ${isDark ? 'bg-[#23272e] border-[#181b20]' : 'bg-[#f8fafc] border-[#bdbdbd]'}`}>
      <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <button
            type="button"
            onClick={handleHomeClick}
            className="flex items-center group bg-transparent border-none outline-none cursor-pointer"
          >
            <span className="mr-2 text-2xl">🧠</span>
            <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 drop-shadow-lg transition-transform duration-300 group-hover:scale-110">
              MindTrack
            </span>
          </button>

          <div className="flex-1 flex justify-center">
            <div className="flex gap-8">
              {navLinks.map(link => (
                <button
                  key={link.label}
                  type="button"
                  onClick={link.onClick ? link.onClick : link.label === 'Home' ? handleHomeClick : () => link.ref?.current?.scrollIntoView({ behavior: 'smooth' })}
                  className={`relative px-2 py-1 text-base font-medium transition-colors duration-200 bg-transparent border-none outline-none cursor-pointer
                    ${isDark ? 'text-[#f3f4f6] hover:text-green-300' : 'text-[#23272e] hover:text-indigo-600'}
                  `}
                >
                  <span
                    className={`pb-1 transition-all duration-200 border-b-2
                      group-hover:border-current
                    `}
                  >
                    {link.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                className={`flex items-center justify-center w-10 h-10 rounded-full border-2 shadow-md transition-all duration-150 ${user ? 'bg-green-100 border-green-500 text-green-600' : isDark ? 'bg-[#23272e] border-[#bdbdbd] text-[#bdbdbd]' : 'bg-[#f3f4f6] border-[#23272e] text-[#23272e]'} hover:scale-105`}
                aria-label="User menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill={user ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
                <svg className={`ml-1 w-4 h-4 transition-transform duration-150 ${dropdownOpen ? 'rotate-180' : ''} ${user ? 'text-green-600' : isDark ? 'text-[#bdbdbd]' : 'text-[#23272e]'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {dropdownOpen && (
                <div className={`absolute right-0 mt-2 w-52 rounded-xl shadow-lg z-50 ${isDark ? 'bg-[#23272e] text-[#f3f4f6] border border-[#181b20]' : 'bg-[#f8fafc] text-[#23272e] border border-[#bdbdbd]'}`}>
                  {user ? (
                    <>
                      <div className="px-4 py-3 border-b border-gray-200 dark:border-[#181b20] font-semibold">{user.name || user.email}</div>
                      <button onClick={onLogout} className="block w-full text-left px-4 py-2 transition-all duration-150 rounded-b-xl hover:bg-[#31343a] dark:hover:bg-[#f3f4f6] hover:text-green-400 dark:hover:text-[#23272e] hover:scale-105">Logout</button>
                    </>
                  ) : (
                    <>
                      <Link to="/login" className="block px-4 py-2 transition-all duration-150 rounded-t-xl hover:bg-[#31343a] dark:hover:bg-[#f3f4f6] hover:text-green-400 dark:hover:text-[#23272e] hover:scale-105">Login</Link>
                      <Link to="/register" className="block px-4 py-2 transition-all duration-150 hover:bg-[#31343a] dark:hover:bg-[#f3f4f6] hover:text-green-400 dark:hover:text-[#23272e] hover:scale-105">Register</Link>
                      <Link to="/forgot-password" className="block px-4 py-2 transition-all duration-150 rounded-b-xl hover:bg-[#31343a] dark:hover:bg-[#f3f4f6] hover:text-green-400 dark:hover:text-[#23272e] hover:scale-105">Forgot Password</Link>
                    </>
                  )}
                </div>
              )}
            </div>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full focus:outline-none border-2 ${isDark ? 'bg-[#23272e] border-[#181b20] text-[#f3f4f6]' : 'bg-[#f8fafc] border-[#bdbdbd] text-[#23272e]'}`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <span className="text-yellow-300 drop-shadow-lg">☀️</span>
              ) : (
                <span className="text-vivid-purple drop-shadow-lg">🌙</span>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
