import { HERO_CONTENT } from "../constants";
import Satyam from "../assets/projects/Satyam.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div
      id="hero"
      className="relative border-b border-neutral-900 pb-4 lg:mb-35 overflow-hidden"
    >
      {/* ---- Foreground: Text + Image wrapper ---- */}
      <div
        className="
          relative z-10 flex flex-col lg:flex-row
          items-center lg:items-start
          justify-center
          lg:justify-between
          h-auto lg:h-[500px]
          gap-6           /* ✅ space between text and image */
          px-8 lg:px-14    /* ✅ left/right padding */
        "
      >
        {/* ---- Left : Hero Content ---- */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center">
          <motion.h1
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="pb-8 text-2xl font-thin font-serif tracking-tight lg:text-6xl"
          >
            Satyam Surade
          </motion.h1>

          <motion.span
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500
                       bg-clip-text text-3xl font-serif tracking-tight text-transparent font-semibold"
          >
            MernStack WebDeveloper
          </motion.span>

          <motion.p
            variants={container(0.1)}
            initial="hidden"
            animate="visible"
            className="my-2 max-w-xl py-6 tracking-tighter leading-[1.7] text-justify font-semibold"
          >
            {HERO_CONTENT}
          </motion.p>
        </div>

        {/* ---- Right : Hero Image ---- */}
        <motion.img
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5 }}
          transition={{ duration: 1, delay: 0.3 }}
          src={Satyam}
          alt="Satyam"
          className="
            w-full max-w-[400px] h-auto
            lg:w-[400px] lg:h-[400px]
            rounded-xl shadow-lg
          "
        />
      </div>
    </div>
  );
};

export default Hero;
