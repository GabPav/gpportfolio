import React from 'react';

const Certificates = () => {
  return (
    <section id='certification' className="bg-[#12343B] text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-[Cardo] mb-4">
          My Certificates
        </h2>
        <p className="text-lg text-gray-300 mb-10">
          Here are a few certificates I’ve earned through my journey.
        </p>

        <div className="flex flex-col md:flex-row md:space-x-15 space-y-6 md:space-y-0 justify-center items-center">
          {/* Meta Certificate */}
          <div className="flex flex-col justify-center items-center text-center transform transition duration-500 hover:scale-105">
            <a
              href="https://coursera.org/share/891c6954ce40e58ca0c81e8ff83a1e81"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~BY2L0Y3R2BJZ/CERTIFICATE_LANDING_PAGE~BY2L0Y3R2BJZ.jpeg"
                alt="Meta Certificate"
                className="w-75 h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </a>
            <p className="mt-3 text-md font-semibold">
              Meta Front-End Developer <br />Professional Certificate
            </p>
          </div>

          {/* UX/UI Design Certificate */}
          <div className="flex flex-col justify-center items-center text-center transform transition duration-500 hover:scale-105">
            <a
              href="https://coursera.org/share/a3447c605cf63db1f1ead872e07a4476"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~46HYSM4EVBR6/CERTIFICATE_LANDING_PAGE~46HYSM4EVBR6.jpeg"
                alt="UX/UI Design Certificate"
                className="w-75 h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </a>
            <p className="mt-3 text-md font-semibold">
              Google UX Design <br />Professional Certificate
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
