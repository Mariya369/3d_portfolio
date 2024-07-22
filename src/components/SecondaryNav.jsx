
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
        className="text-white hover:text-gray-300 transition-colors duration-300 cursor-pointer"
      >
        <FaGithub className="text-xl" />
      </a>
      <a
        href={socialLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-gray-300 transition-colors duration-300 cursor-pointer"
      >
        <FaLinkedin className="text-xl" />
      </a>
      <a
        href={socialLinks.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-gray-300 transition-colors duration-300 cursor-pointer"
      >
        <FaInstagram className="text-xl" />
      </a>
      <a
        href={socialLinks.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-gray-300 transition-colors duration-300 cursor-pointer"
      >
        <FaFacebook className="text-xl" />
      </a>
      <a
        href={socialLinks.google}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-gray-300 transition-colors duration-300 cursor-pointer"
      >
        <FaGoogle className="text-xl" />
      </a>
      <a
        href={socialLinks.behance}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-gray-300 transition-colors duration-300 cursor-pointer"
      >
        <FaBehance className="text-xl" />
      </a>
    </div>
  );
};

export default SecondaryNav;
