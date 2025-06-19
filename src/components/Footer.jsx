import React from 'react';
import Logo from '../assets/logo.png';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#12343B] text-white py-6 shadow-[inset_0_6px_6px_-6px_rgba(0,0,0,0.6)]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center text-center gap-6">
          
          {/* Left: Logo */}
          <div className="flex justify-center md:justify-start">
            <img src={Logo} alt="Logo" className="w-25 h-25 object-contain" />
          </div>

          {/* Middle: Icons */}
          <div className="flex justify-center gap-6 text-xl">
            <a href="#contact" aria-label="Email" className="hover:text-gray-300 transition-colors">
              <FaEnvelope />
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-gray-300 transition-colors">
              <FaLinkedin />
            </a>
            <a href="https://github.com/gabpav" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-gray-300 transition-colors">
              <FaGithub />
            </a>
          </div>

          {/* Right: Copyright */}
          <div className="text-sm text-gray-300 flex justify-center md:justify-end">
            © {new Date().getFullYear()} Gabrijela Pavlović. All rights reserved.
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
