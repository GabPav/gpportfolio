import React, { useState } from 'react';
import aboutImage from '../assets/personalPhotoWhite.png';
import Quote from './Quote';

const About = () => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleText = () => setShowFullText(!showFullText);

  const fullText = `
    I graduated from an architectural high school, which gave me a strong foundation in creativity and design thinking.
While I'm relatively new to programming, I'm passionate about front-end development and I primarily work with React and Tailwind CSS to build responsive and visually appealing interfaces.

I also enjoy working on UI/UX design, and all the projects in my portfolio were fully designed and developed by me — from concept to final implementation.

Currently, I’m working on an idea for a new project: a social media platform tailored for architecture enthusiasts to share inspiring visuals and connect over design. The concept is still in the early stages and marked as coming soon, but it reflects my drive to combine my background in architecture with my skills in front-end development to build something meaningful and creative.

I use ChatGPT as a helpful assistant in my workflow — this has taught me how to think critically, solve problems efficiently, and remain adaptable as I continue learning.

Additionally, I'm developing my skills in graphic design using Affinity Publisher, where I’ve created materials such as catalogs, invitations, and visual brand assets.

I speak English, Slovene, and Serbian fluently, and prefer working in a calm, focused environment from home where I can fully immerse myself in creative problem-solving.
  `;

  const shortText = fullText.slice(0, 300).trim() + '...';

  return (
    <section id='about' className="w-full bg-[#FAFAFA] py-20 px-6 md:px-12 text-[#12343B]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-10">

        {/* Left side – image */}
        <div className="w-full md:w-1/2">
          <img 
            src={aboutImage} 
            alt="About me" 
            className="w-[280px] md:w-[320px] lg:w-[380px] h-auto rounded-2xl mx-auto md:mx-0"
          />
        </div>
        

        {/* Right side – text content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold font-[Cardo] mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6 whitespace-pre-line">
            {showFullText ? fullText : shortText}
          </p>
          <button 
            onClick={toggleText}
            className="bg-[#12343B] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#1c4a52] transition-colors duration-300"
          >
            {showFullText ? 'See Less' : 'Learn More'}
          </button>
          <Quote />
        </div>

      </div>
    </section>
  );
};

export default About;
