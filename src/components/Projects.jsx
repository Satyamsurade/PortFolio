import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl font-bold"
      >
        Projects
      </motion.h1>

      <div className="flex flex-col items-center gap-12">
  {PROJECTS.map((project, index) => (
    <motion.a
      key={index}
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className="block w-full md:w-[700px] h-[420px] rounded-2xl shadow-lg bg-neutral-900 hover:bg-neutral-800 transition-all duration-300 p-5 cursor-pointer"
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover rounded-xl mb-4"
      />
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

    </div>
  );
};

export default Projects;

