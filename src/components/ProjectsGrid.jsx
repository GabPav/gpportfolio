import React, { useState } from 'react';
import WeddingPhoto from '../assets/wedding_landing_page.png';
import RestaurantPhoto from '../assets/mo_restaurant.png';
import LittleLemon from '../assets/little_lemon.png';
import PlantGuardian from '../assets/plantGuardian.png';
import UniversaFp from '../assets/universaFirstPage.png';

const projects = [
  {
    title: 'Wedding Landing Page',
    image: WeddingPhoto,
    link: 'https://gabpav.github.io/wedding_landing_page/',
    category: 'React',
  },
  {
    title: 'Restaurant Website',
    image: RestaurantPhoto,
    link: 'https://gabpav.github.io/mo_restaurant/',
    category: 'React',
  },
  {
    title: 'Coming Soon',
    image: 'https://images.unsplash.com/photo-1597941265658-46a50fb4efc4?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '',
    category: 'React',
  },
  {
    title: 'Table Bookig App',
    image: LittleLemon,
    link: 'https://www.figma.com/proto/LWLAIAkefPVxQPK3UFL3we/Little-Lemon-Restaurant-table-reservation?node-id=14-58&starting-point-node-id=14%3A58&t=LyxWgpd1b1yh3e12-1',
    category: 'Design',
  },
  {
    title: 'Plant Guardian App',
    image: PlantGuardian,
    link: 'https://www.figma.com/proto/yKbMWc4smBV24LOKSNujqx/Plants-app?node-id=43-662&p=f&t=6jAgAd8vIpNgaOMu-1&scaling=min-zoom&content-scaling=fixed&page-id=43%3A660',
    category: 'Design',
  },
  {
    title: 'Universa Catalogue',
    image: UniversaFp,
    link: '/universa.pdf',
    category: 'Grafic Design',
  },
];

const ProjectsGrid = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="my-work" className="max-w-6xl mx-auto py-20 px-4">
      <h2 className="text-4xl font-bold mb-8 text-center font-[Cardo] text-[#12343B]">My Projects</h2>
      <p className="text-center text-gray-600 mb-4 text-lg">
        Explore a selection of my recent projects — ranging from React applications and interactive UI/UX designs to innovative graphic design works.
      </p>

      {/* Project Descriptions */}
<div className="max-w-5xl mx-auto mb-8 leading-relaxed text-gray-700 text-base py-8">
  {showMore && (
    <>
      <p className="mb-4 text-left">
        <a href={projects[0].link} target="_blank" rel="noopener noreferrer" className="font-bold text-[#12343B] hover:underline">
          Wedding Landing Page:
        </a>{' '}
        A simple and elegant landing page concept for a fictional wedding photography business. This project demonstrates my basic frontend skills, including responsive layout, clean UI, and use of React with Tailwind CSS. It's one of my earlier works, focused on structure, styling, and mobile-friendly design.
      </p>
      <p className="mb-4 text-left">
        <a href={projects[1].link} target="_blank" rel="noopener noreferrer" className="font-bold text-[#12343B] hover:underline">
          Restaurant Website:
        </a>{' '}
        A modern and responsive React application for a fictional restaurant. This project highlights my skills in building clean, user-friendly interfaces using Tailwind CSS, featuring smooth navigation, menu sections, and a reservation interface optimized for both desktop and mobile devices.
      </p>
      <p className="mb-4 text-left">
        <a href="#" className="font-bold text-[#12343B] hover:underline">
          Architecture Lovers Social Network:
        </a>{' '}
        An upcoming social media platform designed exclusively for architecture enthusiasts to share, discover, and discuss inspiring architectural photography. Users will be able to upload their own photos, browse others’ work, and connect with like-minded creatives. This project is currently in development and aims to combine community building with a clean, modern user experience.
      </p>
      <p className="mb-4 text-left">
        <a href={projects[3].link} target="_blank" rel="noopener noreferrer" className="font-bold text-[#12343B] hover:underline">
          Little Lemon Restaurant Table Reservation:
        </a>{' '}
        A sleek and user-friendly table reservation design prototype for Little Lemon Restaurant, created in Figma. This interactive prototype demonstrates a smooth booking flow with clear UI elements, intuitive navigation, and a focus on user experience. The project highlights my skills in UI/UX design and prototyping for hospitality applications.
      </p>
      <p className="mb-4 text-left">
        <a href={projects[4].link} target="_blank" rel="noopener noreferrer" className="font-bold text-[#12343B] hover:underline">
          Plant Guardian App:
        </a>{' '}
        An interactive UI/UX prototype designed for a plant care app, created in Figma. This project showcases a clean, modern interface that helps users track plant health, watering schedules, and care tips. The design focuses on simplicity and usability, demonstrating my skills in creating engaging, user-centered digital experiences for lifestyle applications.
      </p>
      <p className="mb-4 text-left">
        <a href={projects[5].link} target="_blank" rel="noopener noreferrer" className="font-bold text-[#12343B] hover:underline">
          Universa Catalogue:
        </a>{' '}
        A professionally designed product catalog for Universa, showcasing industrial laundry machines. Created using Affinity Publisher and Canva, this catalog highlights my skills in graphic design, layout composition, and visual communication. The design focuses on clear presentation of technical details with clean, modern aesthetics suitable for B2B marketing materials.
      </p>
    </>
  )}

  <div className="flex justify-center">
    <button
      className="mt-4 px-6 py-2 bg-[#12343B] text-white rounded-lg hover:bg-[#0f292f] transition"
      onClick={() => setShowMore(!showMore)}
    >
      {showMore ? 'View less' : 'Read more about my projects'}
    </button>
  </div>
</div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group w-[90%] max-w-[250px] mx-auto shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition"
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="relative block group">
              <div className="aspect-square w-full overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 font-[Cardo]"
                />
                <div className="absolute inset-0 bg-[#12343B]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center justify-center h-full">
                    <h3 className="text-white text-xl font-semibold text-center px-4 font-[Cardo]">{project.title}</h3>
                  </div>
                </div>
              </div>
            </a>

            <div className="p-4 bg-white">
              <p className="text-sm text-gray-500 uppercase tracking-wide">
                {project.category}
              </p>
              <h3 className="text-lg font-semibold mt-1">{project.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsGrid;
