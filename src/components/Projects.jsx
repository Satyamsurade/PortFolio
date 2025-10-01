import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section id="projects" className="border-b border-neutral-900 px-5 md:px-20 pb-20">
      {/* --- Top Divider Line --- */}
      <div className="w-full border-t border-neutral-900 mt-0 mb-12" />

      {/* --- Section Heading with Animated Gradient --- */}
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="text-center text-4xl font-bold mb-16 projects-heading"
      >
        Projects
      </motion.h1>

      {/* --- Projects Cards --- */}
      <div className="flex flex-col items-center gap-10">
        {PROJECTS.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="block w-full md:w-[700px] rounded-2xl shadow-lg
                       bg-neutral-900 hover:bg-neutral-800 transition-all
                       hover:shadow-[0_0_25px_rgba(0,123,255,0.7)]
                       duration-300 p-5 cursor-pointer"
          >
            {/* ✅ Option 1: Show full image (no crop) */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full max-h-72 md:max-h-96 object-contain rounded-xl mb-4"
            />

            {/* ✅ Option 2: Cropped preview but responsive 
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 sm:h-64 md:h-72 object-cover rounded-xl mb-4"
            />
            */}

            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="text-neutral-400 mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="text-sm px-2 py-1 rounded-lg bg-neutral-800 text-neutral-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>

      {/* 🔑 Gradient animation for heading */}
      <style>{`
        .projects-heading {
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

export default Projects;
