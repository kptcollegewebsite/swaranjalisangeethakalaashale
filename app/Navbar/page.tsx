"use client";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleMenuItemClick = (id: string) => {
    scrollToSection(id);
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* 📢 Contact Info (Scrolls Away) */}
      <div className="w-full bg-gradient-to-r from-gray-400 via-white to-gray-300 dark:from-gray-200 dark:via-gray-800 dark:to-gray-400 text-gray-900 dark:text-gray-100 text-right py-1 text-sm font-semibold shadow-md pr-2">
        <span className="relative inline-block mr-2">
          <span className="absolute inset-0 animate-ping text-red-500">📧</span> 📧
        </span>
        sangeethamdaiveekam@gmail.com |

        <span className="ml-4 relative inline-block mr-2">
          <span className=" absolute inset-0 animate-ping text-green-500">📞</span> 📞
        </span>
        +91 99023 39387
      </div>




      {/* 🌟 Sticky Navigation Bar */}
      <nav className="sticky top-0 w-full z-50 bg-gradient-to-r from-white via-gray-50 to-white dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 shadow-md p-3 flex justify-between items-center">
        {/* 🎵 Logo */}
        <h1 className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
          Swaranjali Sangeetha <br /> Kalaa Shaale
        </h1>

        {/* 🔗 Navigation Links (Desktop) */}
        <ul className="hidden md:flex space-x-6 text-gray-700 dark:text-gray-200">
          {["home", "about", "courses", "schedule", "achievers", "programs", "faq", "testimonials", "gallery", "contact"].map((section) => (
            <li key={section}>
              <button onClick={() => scrollToSection(section)} className="hover:text-indigo-500 dark:hover:text-indigo-300 transition-all">
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            </li>
          ))}
        </ul>

        {/* 📱 Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            className="text-gray-700 dark:text-gray-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="block w-6 h-0.5 bg-gray-700 dark:bg-gray-200 mb-1"></span>
            <span className="block w-6 h-0.5 bg-gray-700 dark:bg-gray-200 mb-1"></span>
            <span className="block w-6 h-0.5 bg-gray-700 dark:bg-gray-200"></span>
          </button>
        </div>

        {/* 🌙 Theme Toggle */}
        <div className="flex items-center space-x-4">
          <ThemeToggle />
        </div>

        {/* 📜 Mobile Menu (Dropdown) */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 right-0 w-full bg-white dark:bg-gray-800 shadow-md p-4">
            <ul className="space-y-4 text-center">
              {["home", "about", "courses", "schedule", "achievers", "programs", "faq", "testimonials", "gallery", "contact"].map((section) => (
                <li key={section}>
                  <button onClick={() => handleMenuItemClick(section)} className="hover:text-indigo-500 dark:hover:text-indigo-300">
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
