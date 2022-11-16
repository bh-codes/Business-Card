import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer-container">
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/betty-han/">
            <FaLinkedinIn className="icon" />
          </a>
        </li>
        <li>
          <a
            href="
https://github.com/bh-codes"
          >
            <FaGithub className="icon" />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
