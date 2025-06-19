import React from 'react';
import heroImage from '../assets/logo.png';
import { FiChevronDown } from 'react-icons/fi';

const Hero = () => {
  return (
    <section className="w-full min-h-screen bg-[#12343B] text-white pt-20 flex items-center justify-center overflow-x-hidden">
      {/* Content wrapper */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 max-w-6xl w-full">
        
        {/* Left side - text block */}
        <div className="flex-shrink-0 text-center md:text-left mb-10 md:mb-0 md:w-1/2 md:pl-12">
          <h1 className="text-3xl md:text-5xl font-bold font-[Cardo] mb-4 animate__animated animate__fadeInDown">
            Hey! My name is Gabrijela.
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed">
          I am a front-end developer turning design dreams into digital reality.
          </p>
        </div>

        {/* Right side - image block */}
        <div className="flex-shrink-0 mt-6 md:mt-0 md:w-1/2 md:ml-6 lg:ml-10">
          <img
            src={heroImage}
            alt="Hero Logo"
            className="w-60 md:w-[320px] lg:w-[400px] h-auto object-contain mx-auto md:mx-0 animate__animated animate__bounceIn animate__delay-1s"
          />
        </div>
      </div>

      {/* Animated arrow icon */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate__animated animate__bounceIn animate__delay-2s">
        <FiChevronDown className="text-3xl text-white animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;
