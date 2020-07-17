import React, { useState } from "react";
import { FaHome, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import "../styles/aboutme.scss";
import Projects from "./Projects";
import Home from "./Home";
import Experience from "./Experience";

export default function AboutMe() {
  const [tab, setTab] = useState("experience");

  return (
    <div>
      <header className="d-flex position-fixed w-100 p-2 border-bottom">
        <ul>
          <li
            onClick={() => setTab("home")}
            className={tab === "home" ? "active" : ""}
          >
            <FaHome size={22} color={tab === "home" ? "#1b4d6f" : "#000"} />
          </li>
          <li
            onClick={() => setTab("projects")}
            className={tab === "projects" ? "active" : ""}
          >
            Projects
            <span class="menu-underline"></span>
          </li>
          <li
            onClick={() => setTab("experience")}
            className={tab === "experience" ? "active" : ""}
          >
            Experience
            <span class="menu-underline"></span>
          </li>
          {/* <li>Skills</li> */}
        </ul>
      </header>
      <div className="wrapper">
        <nav className="sidenav">
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
            <a
              href="mailto:prakhath@buffalo.edu"
              target="blank"
              id="mail"
              rel="noopener noreferrer"
            >
              <MdMailOutline size={24} />
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
