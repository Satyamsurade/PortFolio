// src/components/Certificate.jsx
import React, { useState } from "react";
import { CERTIFICATES } from "../constants";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Certificate = () => {
  const [revealed, setRevealed] = useState(
    Array(CERTIFICATES.length).fill(false)
  );

  const handleReveal = (index) => {
    setRevealed((prev) =>
      prev.map((v, i) => (i === index ? true : v))
    );
  };

  const handleHideAndOpen = (index, link) => {
    // Re-blur the card
    setRevealed((prev) =>
      prev.map((v, i) => (i === index ? false : v))
    );
    // Open certificate in new tab
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="certificates"
      className="w-full flex flex-col items-center py-6"
    >
      <h1 className="text-center text-4xl font-bold mb-10">Certificates</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8 max-w-6xl">
        {CERTIFICATES.map((cert, index) => (
          <div
            key={index}
            className="relative bg-white dark:bg-neutral-800 shadow-lg rounded-xl overflow-hidden
                       transform hover:scale-105 transition duration-300 flex flex-col"
          >
            {/* Image with blur until revealed */}
            <img
              src={cert.image}
              alt={cert.title}
              className={`w-full h-48 object-cover transition duration-300 ${
                revealed[index] ? "blur-0" : "blur-md"
              }`}
            />

            {/* Overlay Eye Button – show when blurred */}
            {!revealed[index] && (
              <button
                onClick={() => handleReveal(index)}
                className="absolute inset-0 flex items-center justify-center
                           bg-black/40 hover:bg-black/50 transition
                           text-white text-3xl"
                title="View Certificate"
              >
                <FaEye />
              </button>
            )}

            {/* Card Content */}
            <div className="p-4 flex-1 flex flex-col justify-between">
              <h3 className="text-lg font-semibold mb-2 text-center">
                {cert.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm text-center">
                {cert.description}
              </p>
            </div>

            {/* Eye slash – click to re-blur & open certificate in new tab */}
            {revealed[index] && (
              <button
                onClick={() => handleHideAndOpen(index, cert.link)}
                className="absolute top-2 right-2 bg-black/40 hover:bg-black/60
                           text-white p-2 rounded-full transition"
                title="Hide & Open Certificate"
              >
                <FaEyeSlash />
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificate;
