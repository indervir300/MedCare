"use client";
import { useState, useEffect, useRef } from "react";
import { FaHome, FaEnvelope, FaAnchor, FaStethoscope, FaNotesMedical, FaAdjust, FaSun, FaMoon } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import Link from "next/link";
import ThemeToggle from "./themeContext";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        menuButtonRef.current &&
        !(menuRef.current as HTMLElement).contains(event.target as Node) &&
        !(menuButtonRef.current as HTMLElement).contains(event.target as Node)
      ) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  const navLinks = [
    { href: "/", label: "Home", icon: <FaHome className="mr-2" /> },
    { href: "/services", label: "Services", icon: <FaStethoscope className="mr-2" /> },
    { href: "/treatments", label: "Treatments", icon: <FaNotesMedical className="mr-2" /> },
    { href: "/contact", label: "Contact", icon: <FaEnvelope className="mr-2" /> }
  ];

  // Theme switch logic (separate component or hook)
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  );

  const handleThemeSwitch = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);

  };

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  return (
    <nav className="fixed w-11/12 top-3 z-50 bg-white dark:bg-gray-900 shadow-md rounded-full left-1/2 transform -translate-x-1/2 border border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 md:px-6 py-3 md:py-4 flex justify-between items-center max-w-7xl">

        {/* Logo Section */}
        <Link href="/" className="flex items-center space-x-2 md:space-x-3 group">
          <FaAnchor className="text-blue-600 text-2xl md:text-3xl transition-all duration-200 ease-in-out transform hover:scale-110" />
          <span className="text-xl md:text-2xl font-semibold text-gray-800 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-300 transition-colors">
            MedCare
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-4 lg:space-x-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`group relative flex items-center text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-300 transition-colors duration-300 px-3 py-2 rounded-lg text-sm lg:text-base`}>
                <span className="flex items-center">
                  {link.icon}
                  <span className="font-medium">{link.label}</span>
                </span>
                <span
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </Link>
            </li>
          ))}
          <li>
            <ThemeToggle />
          </li>
        </ul>

        {/* Call to Action Button */}
        <div className="hidden md:block">

          <Link
            href="/book_appointment"
            className="px-4 lg:px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 flex items-center space-x-2 text-sm lg:text-base shadow-md hover:shadow-xl transform hover:scale-105">
            <FaStethoscope className="text-sm lg:text-base" />
            <span>Book Appointment</span>
          </Link>
        </div>


        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            ref={menuButtonRef}
            onClick={toggleMenu}
            className="text-gray-600 hover:text-blue-700 focus:outline-none dark:text-gray-200 dark:hover:text-blue-300">
            <HiMenu className="h-6 w-6 md:h-7 md:w-7 transition-colors ease-in-out" />
          </button>
        </div>

        {/* Mobile Context Menu */}
        {isMenuOpen && (
          <div
            ref={menuRef}
            className="absolute top-16 md:top-20 right-4 w-64 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-100 dark:border-gray-700">
            <div className="py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="group flex items-center px-5 py-3 text-sm text-gray-700 hover:bg-blue-50 dark:text-gray-200 dark:hover:bg-blue-950 transition-colors">
                  <div className="flex items-center space-x-3">
                    {link.icon}
                    <span className="group-hover:text-blue-700 dark:group-hover:text-blue-300 font-medium">
                      {link.label}
                    </span>
                  </div>
                </Link>
              ))}


              <button
                onClick={() => {
                  handleThemeSwitch();
                  // closeMenu();
                }}
                className="group flex items-center px-5 py-3 text-sm text-gray-700 hover:bg-blue-50 dark:text-gray-200 dark:hover:bg-blue-950 transition-colors w-full text-left">
                <div className="flex items-center space-x-3">
                  {theme === 'dark' ? <FaSun /> : <FaMoon />} {/* Render sun for dark theme, moon for light theme */}
                  <span className="group-hover:text-blue-700 dark:group-hover:text-blue-300 font-medium">
                    {theme === 'dark' ? 'Light Theme' : 'Dark Theme'}
                  </span>
                </div>
              </button>

              <div className="border-t mt-2 pt-2 px-5">
                <Link
                  href="/book_appointment"
                  onClick={closeMenu}
                  className="w-full px-4 py-2 text-center bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors flex items-center justify-center">
                  <FaStethoscope className="mr-2" />
                  Book Appointment
                </Link>
              </div>
              
            </div>
          </div>
        )}

      </div>
    </nav>
  );
}
