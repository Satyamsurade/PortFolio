import React from "react";
import { CERTIFICATES } from "../constants";

const Certificate = () => {
  return (
    <section
      id="certificates"
      className="w-full flex flex-col items-center py-6"
    >
      {/* 🌈 Animated Gradient Heading */}
      <h1 className="text-center text-4xl font-bold certificate-heading mb-10">
        Certificates
      </h1>

      {/* Grid with slightly larger cards and more spacing */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 md:px-10 max-w-7xl">
        {CERTIFICATES.map((cert, index) => (
          <div
            key={index}
            className="relative bg-white dark:bg-neutral-800 
                       shadow-lg hover:shadow-[0_0_25px_rgba(0,123,255,0.7)]
                       rounded-xl overflow-hidden
                       transform hover:scale-105 transition duration-300 flex flex-col
                       h-[420px] w-full"
          >
            {/* Slightly blurred image */}
            {cert.image && (
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-56 object-cover transition duration-300"
                style={{ filter: "blur(4px)" }}
              />
            )}

            {/* Card content */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <h3 className="text-xl font-semibold mb-3 text-center">
                {cert.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-base text-center mb-2">
                {cert.description}
              </p>
            </div>

            {/* Open certificate PDF */}
            <div className="px-6 pb-6 text-center">
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-3 py-2 text-sm bg-blue-600 hover:bg-blue-700 
                           text-white rounded-lg shadow-lg transition duration-300"
              >
                View Original Certificate
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Gradient animation for heading */}
      <style>{`
        .certificate-heading {
          background: linear-gradient(270deg, #00f0ff, #ff00ff, #00f0ff);
          background-size: 600% 600%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientMove 6s ease infinite;
        }
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
};

export default Certificate;
