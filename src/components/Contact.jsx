import React from "react";
import { MdLocationOn, MdEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";

const Contact = () => {
  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  const contactItems = [
    {
      icon: <MdLocationOn className="text-3xl text-cyan-400" />,
      text: "Pune, Maharashtra, India",
      href: null,
      hoverColor: "hover:text-cyan-400",
    },
    {
      icon: <FiPhone className="text-3xl text-green-400" />,
      text: "+91-8482965386",
      href: "tel:+918482965386",
      hoverColor: "hover:text-green-400",
    },
    {
      icon: <MdEmail className="text-3xl text-pink-400" />,
      text: "satyamsurade06@gmail.com",
      href: isMobile
        ? "mailto:satyamsurade06@gmail.com" // 📱 Mobile → Gmail app
        : "https://mail.google.com/mail/?view=cm&fs=1&to=satyamsurade06@gmail.com", // 💻 Desktop → Gmail Web
      hoverColor: "hover:text-pink-400",
    },
  ];

  return (
    <div id="contact" className="border-b border-neutral-900 pb-20 px-5 md:px-20">
      <h1 className="my-10 text-center text-4xl font-bold contact-heading">
        Contact
      </h1>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-10">
        {contactItems.map((item, index) =>
          item.href ? (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-6 rounded-2xl
                         bg-neutral-800 shadow-lg transition-all cursor-pointer
                         transform hover:-translate-y-1 hover:scale-105
                         hover:shadow-[0_0_25px_rgba(0,123,255,0.7)]"
            >
              {item.icon}
              <span
                className={`mt-3 text-lg text-gray-300 ${item.hoverColor} transition-colors`}
              >
                {item.text}
              </span>
            </a>
          ) : (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 rounded-2xl
                         bg-neutral-800 shadow-lg transition-all cursor-pointer
                         transform hover:-translate-y-1 hover:scale-105
                         hover:shadow-[0_0_25px_rgba(0,123,255,0.7)]"
            >
              {item.icon}
              <span
                className={`mt-3 text-lg text-gray-300 ${item.hoverColor} transition-colors`}
              >
                {item.text}
              </span>
            </div>
          )
        )}
      </div>

      <style>{`
        .contact-heading {
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

export default Contact;
