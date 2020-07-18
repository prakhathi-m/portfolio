import React, { useState } from "react";
import { FaHome, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import "../styles/aboutme.scss";
import Projects from "./Projects";
import Home from "./Home";
import Experience from "./Experience";

export default function AboutMe() {
  const [tab, setTab] = useState("home");

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
            <div className="line animate-line">
              I love to code and develop web applications.
            </div>
            <figure>
              <img
                src={require("../assets/profile_pic.jpg")}
                alt="Profile"
                style={{ width: "50%", borderRadius: "50%" }}
              />
              <figcaption style={{ textAlign: "justify" }}>
                I’m an international student currently pursuing Masters in
                Computer Science at UB with the graduation date on Dec 2020.
                Right after undergrad, I worked as a web developer that’s when I
                discovered my interest in developing web & mobile applications.
                From building websites, consuming API to building API, I
                stumbled, learned, and evolved. Throughout my experience, the
                one thing I have taken to my heart is to always think of the
                ways to build a reusable optimized component. I have built
                various Multiplatform responsive customer-facing web solutions
                using modern Javascript frameworks which include ReactJs, Redux,
                NodeJs.
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
