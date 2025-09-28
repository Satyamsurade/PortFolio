import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

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
    // 👇 fixed instead of sticky
    <nav className="fixed top-0 left-0 w-full z-50 bg-neutral-900/70 backdrop-blur-md text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        {/* ---------- LOGO ---------- */}
        <a href="#hero" className="text-2xl font-bold tracking-wide">
          Port<span className="text-purple-500">folio </span>
        </a>

        {/* ---------- Desktop Menu ---------- */}
        <ul className="hidden md:flex items-center space-x-8">
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

          {/* 👉 Resume Button (Desktop) */}
          <li>
            <a
              href="/resume.pdf" // place resume.pdf inside public/ folder
              target="_blank"
              rel="noopener noreferrer"
              title="Get My ATS Friendly Resume"
              className="px-4 py-2 rounded-md text-white hover:text-blue-700 font-semibold transition-colors"
            >
              Resume
            </a>
          </li>

          {/* Social Icons (Desktop) */}
          <div className="flex items-center space-x-4 text-2xl">
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

        {/* ---------- Mobile Hamburger Button ---------- */}
        <button
          className="md:hidden p-2 text-3xl focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* ---------- Mobile Dropdown ---------- */}
      {open && (
        <div className="md:hidden bg-neutral-900/95 backdrop-blur-md px-4 pb-4">
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

            {/* 👉 Resume Button (Mobile) */}
            <li>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 rounded-md text-white font-medium hover:text-blue-700 transition-colors"
                onClick={() => setOpen(false)}
              >
                Resume
              </a>
            </li>

            {/* Social Icons (Mobile) */}
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
