import React from 'react';

const ContactMe = () => {
  return (
    <section className=" mx-auto py-20 px-4 bg-[#12343B]" id="contact">
      <h2 className="text-4xl font-bold mb-6 text-center font-[Cardo] text-white">
        Contact Me
      </h2>
      <p className="text-center text-gray-300 mb-10 text-lg">
        Have a question or want to work together? Send me a message!
      </p>

      <form
        action="https://formspree.io/f/mbloerwv" 
        method="POST"
        className="max-w-3xl mx-auto bg-white shadow-md rounded-xl p-8 space-y-6"
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-[#12343B]"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Your Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-[#12343B]"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows="5"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-[#12343B]"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-[#12343B] text-white px-6 py-3 rounded-md hover:bg-[#0f2c33] transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactMe;
