import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#12343B] w-full fixed top-0 left-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Name aligned to the left */}
        <div className="text-white text-xl font-bold font-[Cardo]">
          Gabrijela Pavlović
        </div>

        {/* Hamburger icon for mobile */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden lg:flex space-x-8 font-[Cardo]">
          <a href="#my-work" className="text-white">
            My Work
          </a>
          <a href="#about" className="text-white">
            About
          </a>
          <a href="#certification" className="text-white">
            Certification 
          </a>
          <a href="#contact" className="text-white ">
            Contact
          </a>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
  <div className="lg:hidden px-6 pb-4 space-y-3 font-[Cardo]">
    <a href="#my-work" className="block text-white" onClick={toggleMenu}>
      My Work
    </a>
    <a href="#about" className="block text-white" onClick={toggleMenu}>
      About
    </a>
    <a href="#sertification" className="block text-white" onClick={toggleMenu}>
      Certification 
    </a>
    <a href="#contact" className="block text-white" onClick={toggleMenu}>
      Contact
    </a>
  </div>
)}
    </nav>
  );
};

export default Navbar;
