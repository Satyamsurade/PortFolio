// src/components/Certificate.jsx
import React from "react";
import { CERTIFICATES } from "../constants";

const Certificate = () => {
  return (
    <section className="w-full flex flex-col items-center py-12">
      {/* Section Heading */}
      <h1 className="text-center text-4xl font-bold mb-10">
        Certificates
      </h1>

      {/* Cards Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8 max-w-6xl">
        {CERTIFICATES.map((cert, index) => (
          <a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white dark:bg-neutral-800 shadow-lg rounded-xl overflow-hidden
                       transform hover:scale-105 transition duration-300 flex flex-col"
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 flex-1 flex flex-col justify-between">
              <h3 className="text-lg font-semibold mb-2 text-center">
                {cert.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm text-center">
                {cert.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Certificate;
