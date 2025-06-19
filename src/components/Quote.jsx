import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const Quote = () => {
  return (
    <div className="bg-[#f0f4f4] border-l-4 border-[#12343B] p-6 my-12 relative rounded-xl shadow-md max-w-lg mx-auto">
      <FaQuoteLeft className="text-[#12343B] text-3xl absolute -top-4 -left-3 bg-white p-1 rounded-full shadow" />
      <p className="italic text-lg text-[#12343B] leading-relaxed">
        "Choose a job you love, and you will never have to work a day in your life."
      </p>
    </div>
  );
};

export default Quote;
