"use client";
import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ThemeToggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Effect to load theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    } else if (prefersDarkMode) {
      setIsDarkMode(true);
    }
  }, []);

  // Effect to apply the theme and save to localStorage
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  // Toggle the theme
  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
<button
  onClick={toggleTheme}
  aria-label="Toggle theme"
  className={`
    w-9 h-9 rounded-full flex items-center justify-center
    transition-all duration-300 ease-in-out
    ${isDarkMode
      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
    }
    shadow-lg hover:shadow-xl transform hover:scale-110
  `}
>
  {isDarkMode ? (
    <FaSun className="w-6 h-6 animate-rotate-in" />
  ) : (
    <FaMoon className="w-6 h-6 animate-rotate-in" />
  )}
</button>
  );
};

export default ThemeToggle;
