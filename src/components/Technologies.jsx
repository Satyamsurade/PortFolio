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
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {/* React */}
        <motion.a
          href="https://react.dev/"
          target="_blank"
          rel="noopener noreferrer"
          variants={iconVarients(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4
                     hover:scale-110 hover:border-red-600 transition-all"
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
          className="rounded-2xl border-4 border-neutral-800 p-4
                     hover:scale-110 hover:border-red-600 transition-all"
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
          className="rounded-2xl border-4 border-neutral-800 p-4
                     hover:scale-110 hover:border-red-600 transition-all"
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
          className="rounded-2xl border-4 border-neutral-800 p-4
                     hover:scale-110 hover:border-red-600 transition-all"
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
          className="rounded-2xl border-4 border-neutral-800 p-4
                     hover:scale-110 hover:border-red-600 transition-all"
        >
          <SiMysql className="text-7xl text-blue-700" />
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Technologies;
