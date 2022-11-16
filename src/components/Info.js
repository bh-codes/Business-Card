import React from "react";
import { MdOutlineMail } from "react-icons/md";

export default function Info() {
  return (
    <header>
      <img className="portrait" src={require("./portrait.jpg")} alt="me" />
      <h1>Betty Han</h1>
      <h5>Frontend Developer</h5>
      <p className="portfolio-link">
        <a href="https://bh-codes.github.io/portfolio/">Website</a>
      </p>

      <button className="email-btn">
        <a href="mailto:bettybhan@gmail.com">
          <MdOutlineMail className="email--icon" />
          Email
        </a>
      </button>
    </header>
  );
}
