import aboutImg from "../assets/about.jpeg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <style>{`
        /* ===== Animated Gradient Heading ===== */
        .about-heading {
          background: linear-gradient(
            270deg,
            #00f0ff,
            #ff00ff,
            #00f0ff
          );
          background-size: 600% 600%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientMove 6s ease infinite;
        }
        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>

      <div
        id="about"
        className="border-b border-neutral-900 px-4 flex flex-col items-center justify-center"
      >
        {/* Section Heading with animated gradient */}
        <h1 className="mb-10 text-center text-4xl font-bold about-heading">
          About
          <span className="text-neutral-500"> Me</span>
        </h1>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center mb-10 justify-center w-full max-w-6xl lg:space-x-10 space-y-10 lg:space-y-0">
          {/* Image */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <img
              className="rounded-2xl max-w-full h-auto"
              src={aboutImg}
              alt="about"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2 flex justify-center lg:justify-start"
          >
            <p className="my-2 max-w-xl text-justify font-semibold">
              {ABOUT_TEXT}
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;
