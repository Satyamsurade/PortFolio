import { HERO_CONTENT } from "../constants";
import Satyam from "../assets/projects/Satyam.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay }
  }
});

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative border-b border-neutral-900 overflow-hidden
                 px-4 sm:px-8 lg:px-16 py-10 lg:py-20"
    >
      {/* ---- Background / Hero Image ---- */}
      <motion.img
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.5 }}
        transition={{ duration: 1, delay: 0.3 }}
        src={Satyam}
        alt="Satyam"
        className="
          absolute top-0 right-0
          w-2/3 max-w-[420px] h-auto
          opacity-40
          hidden lg:block
        "
      />

      {/* ---- Foreground Content ---- */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start lg:gap-12">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <motion.h1
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="pb-4 text-4xl sm:text-5xl lg:text-7xl font-thin font-serif tracking-tight"
          >
            Satyam Surade
          </motion.h1>

          <motion.span
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500
                       bg-clip-text text-transparent
                       text-2xl sm:text-3xl lg:text-4xl font-serif tracking-tight"
          >
            MERN Stack Web Developer
          </motion.span>

          <motion.p
            variants={container(0.1)}
            initial="hidden"
            animate="visible"
            className="my-6 max-w-xl mx-auto lg:mx-0
                       font-light tracking-tight leading-relaxed text-justify
                       text-base sm:text-lg"
          >
            {HERO_CONTENT}
          </motion.p>
        </div>

        {/* Mobile Image (shown only on small screens) */}
        <motion.img
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          src={Satyam}
          alt="Satyam"
          className="block lg:hidden w-full max-w-[300px] h-auto mt-6"
        />
      </div>
    </section>
  );
};

export default Hero;
