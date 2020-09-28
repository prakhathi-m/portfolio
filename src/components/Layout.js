import React, { useState } from "react";
import {
  FaHome,
  FaLinkedin,
  FaGithub,
  FaDownload,
  FaFileAlt,
} from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import "../styles/aboutme.scss";
import Projects from "./Projects";
import Home from "./Home";
import Experience from "./Experience";
import "../styles/App.scss";

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
            <FaHome size={tab === "home" ? 24 : 22} color={"#eeecda"} />
          </li>
          <li
            onClick={() => setTab("skills")}
            className={tab === "skills" ? "active" : ""}
          >
            Skills
            <span className="menu-underline"></span>
          </li>
          <li
            onClick={() => setTab("projects")}
            className={tab === "projects" ? "active" : ""}
          >
            Projects
            <span className="menu-underline"></span>
          </li>
          <li
            onClick={() => setTab("experience")}
            className={tab === "experience" ? "active" : ""}
          >
            Experience
            <span className="menu-underline"></span>
          </li>
          {/* <li>Skills</li> */}
        </ul>
      </header>
      <article className="wrapper">
        {tab === "home" && (
          <section className="sidenav">
            <div>
              <h1 className="pb-4">Prakhathi Murugesan</h1>
              <div className="line animate-line">
                I love to code and develop web applications.
              </div>
              <figure className="py-4">
                <img
                  src={require("../assets/profile_pic.jpg")}
                  alt="Profile"
                  style={{ width: "250px", borderRadius: "50%" }}
                />
                <div className="d-flex contact justify-content-center mb-3">
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
                  <a
                    download
                    href={require("../assets/Prakhathi-Resume.pdf")}
                    id="resume"
                  >
                    <FaFileAlt size={18} />
                  </a>
                </div>
                <figcaption style={{ textAlign: "justify" }}>
                  As a kid, I used to get fascinated by technology and science.
                  I was amazed by the fact that technology is used to solve
                  day-to-day problems. I love challenges; learning something new
                  and solving problems is my sanctuary. My inclination towards
                  problem-solving, analytical thinking and passion for
                  technology led me to pursue a Bachelor's in Information
                  technology and a Masters in Computer Science. <br /> <br />
                  Right after undergrad, I started my career as a web developer.
                  I have built various multi-platform responsive customer-facing
                  web solutions. I took every opportunity available to learn
                  more, which led me to do frontend, backend, and full-stack web
                  development. From building websites & consuming API to
                  building API, I stumbled, learned, and evolved. My passion and
                  interest accelerated throughout my Master's program. The
                  courses that I have taken stimulates my obsession with
                  technology. 
                  <br /> <br />I seek a challenging work environment that
                  engages and motivates me to build beautiful and meaningful
                  applications that could improve people's lives. 
                </figcaption>
              </figure>
            </div>
            <a
              className="primary-button"
              download
              href={require("../assets/Prakhathi-Resume.pdf")}
            >
              <FaDownload size={20} style={{ marginBottom: 2 }} />{" "}
              <span className="px-2">Resume</span>
            </a>
          </section>
        )}
        {tab === "skills" && <Home />}
        {tab === "projects" && <Projects />}
        {tab === "experience" && <Experience />}
      </article>
    </div>
  );
}
