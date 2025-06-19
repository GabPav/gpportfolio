import React from 'react';
import { FaReact, FaGithub, FaGitAlt, FaCode } from 'react-icons/fa';
import { SiTailwindcss, SiAffinitydesigner } from 'react-icons/si';

const Skills = () => {
  return (
    <section className="bg-[#FAFAFA] py-16 px-6 text-[#12343B]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-[Cardo] mb-4">
          Tools & Technologies
        </h2>
        <p className="text-lg text-gray-600 mb-10">
          Technologies and tools I use in my daily work.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-10 text-5xl">
          <FaGithub title="GitHub" className="hover:text-black transition" />
          <FaGitAlt title="Git" className="hover:text-[#F05032] transition" />
          <FaReact title="React" className="hover:text-[#61DAFB] transition" />
          <SiTailwindcss title="Tailwind CSS" className="hover:text-[#38BDF8] transition" />
          <SiAffinitydesigner title="Affinity Publisher" className="hover:text-[#7E4DD2] transition" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
