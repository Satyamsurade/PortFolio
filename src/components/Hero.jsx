import { HERO_CONTENT } from "../constants";
import Satyam from "../assets/projects/Satyam.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div id="hero" className="border-b border-neutral-900 pb-4 lg:mb-32">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 px-8 lg:px-16">
        
        {/* ---- Left : Hero Text ---- */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center"
        >
          <h1 className="pb-4 text-4xl lg:text-6xl font-bold">
            Satyam Surade
          </h1>

          <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500
                           bg-clip-text text-3xl font-semibold text-transparent">
            MernStack WebDeveloper
          </span>

          <p className="my-4 max-w-xl py-6 text-justify font-semibold">
            {HERO_CONTENT}
          </p>
        </motion.div>

        {/* ---- Right : Hero Image ---- */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <img
            src={Satyam}
            alt="Satyam"
            className="rounded-xl shadow-lg w-full max-w-[500px] h-auto"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
