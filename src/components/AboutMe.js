import React, { useState } from "react";
import { FaHome, FaLinkedin, FaGithub } from "react-icons/fa";
import "../styles/aboutme.scss";
import Projects from "./Projects";
import Home from "./Home";
import Experience from "./Experience";

export default function AboutMe() {
  const [tab, setTab] = useState("home");

  return (
    <div>
      <header className="d-flex position-fixed w-100 p-2 bd-highlight">
        <ul>
          <li onClick={() => setTab("home")}>
            <FaHome size={20} />
          </li>
          <li onClick={() => setTab("projects")}>Projects</li>
          <li onClick={() => setTab("experience")}>Experience</li>
          {/* <li>Skills</li> */}
        </ul>
      </header>
      <div className="wrapper">
        <nav className="sidenav position-fixed">
          <div>
            <h1 className="mb-3">Prakhathi Murugesan</h1>
            <figure>
              <img
                src={require("../assets/profile_pic.jpg")}
                alt="Profile"
                style={{ width: "50%", borderRadius: "50%" }}
              />
              <figcaption>
                I'm a graduate student pursuing Master's of Science in Computer
                Science at University at Buffalo - SUNY. I'm currently doing an
                internship at Twine labs. I started my career as a web developer
                right after my Bachelor's and I was intrigued by the working of
                browser and frontend development. Since then, I have developed
                various multiplatform web solutions and mobile applications
                using modern JavaScript Frameworks.
              </figcaption>
            </figure>
          </div>
          <div className="d-flex contact">
            <a
              href="https://www.linkedin.com/in/prakhathimurugesan/"
              target="_blank"
              id="linkedin"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://github.com/prakhathi-m"
              target="blank"
              id="github"
              rel="noopener noreferrer"
            >
              <FaGithub size={20} />
            </a>
          </div>
        </nav>
        <article>
          {tab === "home" && <Home />}
          {tab === "projects" && <Projects />}
          {tab === "experience" && <Experience />}
        </article>
      </div>
    </div>
  );
}
