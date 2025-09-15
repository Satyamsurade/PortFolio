import React from "react";
import { EDUCATION } from "../constants";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, type: "spring" },
  }),
};

const Education = () => {
  return (
    <section id="experience" className="border-b border-neutral-900 px-5 md:px-20 py-16 relative">
      {/* Section Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center text-5xl font-extrabold mb-14 tracking-wide
                   text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400"
      >
        Education
      </motion.h1>

      {/* Animated Cards */}
      <div className="flex flex-col items-center gap-12">
        {EDUCATION.map((edu, index) => (
          <motion.a
            key={index}
            href={edu.link}
            target="_blank"
            rel="noopener noreferrer"
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="w-full md:w-[700px] rounded-2xl
                       shadow-lg bg-neutral-900/90 border border-neutral-800
                       hover:border-cyan-400 transition-all duration-300
                       cursor-pointer group p-8"
          >
            <h2 className="text-2xl font-semibold mb-2 text-cyan-300 group-hover:text-purple-300 transition">
              {edu.degree}
            </h2>
            <p className="text-neutral-300 mb-1 text-lg">{edu.institute}</p>
            <p className="text-neutral-400 text-sm">{edu.duration}</p>
          </motion.a>
        ))}
      </div>

      {/* Subtle decorative glows */}
      <div className="pointer-events-none absolute -left-20 top-1/3 w-72 h-72 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-2/3 w-72 h-72 rounded-full bg-purple-500/20 blur-3xl" />
    </section>
  );
};

export default Education;
