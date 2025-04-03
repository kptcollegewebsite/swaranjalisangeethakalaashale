import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone } from "lucide-react";
import React from "react";

function Footer() {
  return (
    <footer className="body-font bg-gray-900 text-gray-300 dark:bg-gray-800 dark:text-gray-300">
      {/* Gradient Separator */}
      <div className="h-[3px] w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-40 mb-6"></div>

      {/* Main Footer Content */}
      <div className="container px-5 py-8 mx-auto flex flex-wrap justify-between items-center lg:flex-nowrap">
        {/* Academy Name and Logo */}
        <div className="flex items-center space-x-4 mb-6 lg:mb-0">
          <img src="/images/ach1.jpg" alt="Academy Logo" className="w-16 h-16 rounded-lg shadow-lg" />
          <h1 className="text-3xl font-bold text-white">Carnatic Music Academy</h1>
        </div>

        {/* Contact and Address */}
        <div className="flex flex-wrap justify-between w-full lg:w-auto space-y-4 lg:space-y-0 lg:space-x-12 text-sm text-gray-400 mt-2 sm:mt-0">
          {/* Phone */}
          <div className="flex items-center space-x-2">
            <Phone size={20} className="text-gray-300" />
            <span className="hover:text-white transition-colors">+91 99023 39387</span>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-2">
            <Mail size={20} className="text-gray-300" />
            <span className="hover:text-white transition-colors">sangeethamdaiveekam@gmail.com</span>
          </div>

          {/* Address */}
          <div className="text-gray-400">
            <strong className="text-gray-300">Address:</strong>
            <p className="leading-relaxed text-sm">
              1-19-1353/2, Sumangala, <br />
              1st Floor, Marigudi Temple Road, <br />
              Urwa Market, Mangaluru, <br />
              Dakshina Kannada - 575006
            </p>
          </div>
        </div>
      </div>

      {/* Footer Social Links & Copyright */}
      <div className="container px-5 pb-6 mx-auto flex flex-col items-center justify-center">
        {/* Social Icons */}
        <div className="flex space-x-6 mt-4">
          <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">
            <Facebook size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">
            <Twitter size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-pink-500 transition duration-300">
            <Instagram size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-600 transition duration-300">
            <Linkedin size={24} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm text-center mt-4">
          &copy; 2025 Swaranjali Sangeetha Kalaa Shaale. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
