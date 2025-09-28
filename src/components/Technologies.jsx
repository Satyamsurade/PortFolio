import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiMysql } from "react-icons/si";
import { motion } from "framer-motion";

const iconVarients = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div id="technologies" className="border-b border-neutral-800 pb-24">
      {/* 🌈 Animated Gradient Heading like About Me */}
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl font-bold about-heading"
      >
        Technologies
      </motion.h1>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-6"
      >
        {/* React */}
        <motion.a
          href="https://react.dev/"
          target="_blank"
          rel="noopener noreferrer"
          variants={iconVarients(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-6
                     text-white shadow-lg transition-all
                     hover:scale-110 hover:shadow-[0_0_30px_rgba(0,123,255,0.9)]"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.a>

        {/* Node.js */}
        <motion.a
          href="https://nodejs.org/"
          target="_blank"
          rel="noopener noreferrer"
          variants={iconVarients(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-6
                     text-white shadow-lg transition-all
                     hover:scale-110 hover:shadow-[0_0_30px_rgba(0,123,255,0.9)]"
        >
          <FaNodeJs className="text-7xl text-green-600" />
        </motion.a>

        {/* JavaScript */}
        <motion.a
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          target="_blank"
          rel="noopener noreferrer"
          variants={iconVarients(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-6
                     text-white shadow-lg transition-all
                     hover:scale-110 hover:shadow-[0_0_30px_rgba(0,123,255,0.9)]"
        >
          <SiJavascript className="text-7xl text-yellow-400" />
        </motion.a>

        {/* MongoDB */}
        <motion.a
          href="https://www.mongodb.com/"
          target="_blank"
          rel="noopener noreferrer"
          variants={iconVarients(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-6
                     text-white shadow-lg transition-all
                     hover:scale-110 hover:shadow-[0_0_30px_rgba(0,123,255,0.9)]"
        >
          <SiMongodb className="text-7xl text-green-500" />
        </motion.a>

        {/* MySQL */}
        <motion.a
          href="https://www.mysql.com/"
          target="_blank"
          rel="noopener noreferrer"
          variants={iconVarients(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-6
                     text-white shadow-lg transition-all
                     hover:scale-110 hover:shadow-[0_0_30px_rgba(0,123,255,0.9)]"
        >
          <SiMysql className="text-7xl text-blue-700" />
        </motion.a>
      </motion.div>

      {/* 🔑 Gradient animation keyframes for About Me style */}
      <style>{`
        .about-heading {
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
    </div>
  );
};

export default Technologies;
