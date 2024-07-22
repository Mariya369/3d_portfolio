import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaGoogle, FaBehance } from 'react-icons/fa';
import { socialLinks } from "../constants";

const SecondaryNav = () => {
  return (
    <div className="flex items-center space-x-4">
      <a
        href={socialLinks.github}
        target="_blank"
        rel="noopener noreferrer"
        className="violet-gradient text-white hover:text-gray-300 transition-colors duration-300 cursor-pointer icon-style"
      >
        <FaGithub />
      </a>
      <a
        href={socialLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="violet-gradient text-white hover:text-gray-300 transition-colors duration-300 cursor-pointer icon-style"
      >
        <FaLinkedin />
      </a>
      <a
        href={socialLinks.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="violet-gradient text-white hover:text-gray-300 transition-colors duration-300 cursor-pointer icon-style"
      >
        <FaInstagram />
      </a>
      <a
        href={socialLinks.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="violet-gradient text-white hover:text-gray-300 transition-colors duration-300 cursor-pointer icon-style"
      >
        <FaFacebook />
      </a>
      <a
        href={socialLinks.google}
        target="_blank"
        rel="noopener noreferrer"
        className="violet-gradient text-white hover:text-gray-300 transition-colors duration-300 cursor-pointer icon-style"
      >
        <FaGoogle />
      </a>
      <a
        href={socialLinks.behance}
        target="_blank"
        rel="noopener noreferrer"
        className="violet-gradient text-white hover:text-gray-300 transition-colors duration-300 cursor-pointer icon-style"
      >
        <FaBehance />
      </a>
    </div>
  );
};

export default SecondaryNav;
