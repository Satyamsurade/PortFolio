// import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Technologies", href: "#technologies" },
    { name: "Projects", href: "#projects" },
    { name: "Certificates", href: "#certificates" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-neutral-900/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Left: Logo or Name */}
        <div className="flex items-center space-x-2">
          {/* <img src={logo} alt="logo" className="w-10 h-10" /> */}
          <a
            href="#hero"
            className="text-2xl font-bold tracking-wide text-white hover:text-blue-400 transition-colors"
          >
            Satyam
          </a>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center space-x-8 text-white">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="transition-colors hover:text-blue-400"
              >
                {link.name}
              </a>
            </li>
          ))}

          {/* 👉 Resume Button */}
          <li>
            <a
              href="/resume.pdf"  // ✅ must match the exact file name in public folder
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex items-center gap-4 text-2xl text-white">
          <a
            href="https://www.linkedin.com/in/satyamsurade06/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <FaLinkedin className="hover:text-blue-500 transition-transform hover:scale-110" />
          </a>
          <a
            href="https://github.com/Satyamsurade"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            title="GitHub"
          >
            <FaGithub className="hover:text-gray-400 transition-transform hover:scale-110" />
          </a>
          <a
            href="https://www.instagram.com/satyam_surade/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            title="Instagram"
          >
            <FaInstagram className="hover:text-pink-500 transition-transform hover:scale-110" />
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white text-3xl focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-neutral-900/90 backdrop-blur-md px-6 pb-4">
          <ul className="flex flex-col space-y-4 text-white">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block transition-colors hover:text-blue-400"
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}

            {/* 👉 Resume Button for Mobile */}
            <li>
              <a
                href="/resume.pdf"  // ✅ same here
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
                onClick={() => setOpen(false)}
              >
                Resume
              </a>
            </li>

            <div className="flex gap-4 text-2xl pt-4">
              <a
                href="https://www.linkedin.com/in/satyamsurade06/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="hover:text-blue-500 transition-transform hover:scale-110" />
              </a>
              <a
                href="https://github.com/Satyamsurade"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub className="hover:text-gray-400 transition-transform hover:scale-110" />
              </a>
              <a
                href="https://www.instagram.com/satyam_surade/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram className="hover:text-pink-500 transition-transform hover:scale-110" />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
