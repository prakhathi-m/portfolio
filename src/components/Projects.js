import React, { useState } from "react";
import { FaLink, FaGithub, FaDownload } from "react-icons/fa";

const Projects = () => {
  return (
    <section>
      <div className="project-wrapper">
        <h2>Projects</h2>

        <div className="row">
          <div className="col-xl-6 col-lg-12 col-md-12 col-12 mb-4">
            <div className="border">
              <figure className="effect">
                <img src={require("../assets/stearns_1.png")} />
                <figcaption>
                  <h5>Web Application for Home Loans, Mortgage & refinance.</h5>
                  <p>
                    Revamped and optimized the mortgage website by using modern
                    web technologies to increase efficiency and delivered the
                    desired output to the client.
                  </p>
                  <hr />
                  <p>
                    <b>
                      Tech Stack: jQuery, HTML, CSS, LESS pre-processor, and
                      Bootstrap
                    </b>
                  </p>
                  <div>
                    <a href="https://stearns.com/" target="blank">
                      <FaLink size={20} />
                    </a>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>

          <div className="col-xl-6 col-lg-12 col-md-12 col-12 mb-4">
            <div className="border">
              <figure className="effect">
                <img src={require("../assets/twine.png")} />
                <figcaption>
                  <h5>People Analytics Startup - Twine</h5>
                  <p>
                    Delivered user friendly, responsive, interactive features
                    for the product. Debugged and resolved known bugs in the
                    product.
                  </p>
                  <hr />
                  <p>
                    <b>
                      Tech Stack: Tech Stack: ReactJs, Redux, Django,
                      PostgreSQL, AWS
                    </b>
                  </p>
                  <div>
                    <a href="http://app.twinelabs.com/" target="blank">
                      <FaLink size={20} />
                    </a>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="col-xl-6 col-lg-12 col-md-12 col-12 mb-4">
            <div className="border">
              <figure className="effect">
                <img src={require("../assets/twitter.jpeg")} />
                <figcaption>
                  <h5>Multi-lingual Search System</h5>
                  <p>
                    Built an end to end Information Retrieval based web
                    application which analyses tweets and allows user to search
                    query, filter, and sort.
                  </p>
                  <hr />
                  <p>
                    <b>
                      Tech Stack: ReactJs, Python Flask, Material-UI, Apache
                      Solr, AWS (EC2), Google Charts
                    </b>
                  </p>
                  <div>
                    <a
                      href="https://drive.google.com/file/d/1ke3FsmDYe9VojB6Y6ErGQ144q8WqZ9rz/view?usp=sharing"
                      target="blank"
                    >
                      <FaLink size={20} />
                    </a>
                    <a
                      className="ml-2"
                      href="https://github.com/prakhathi-m/IR-Tweet-Search"
                      target="blank"
                    >
                      <FaGithub size={20} />
                    </a>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="col-xl-6 col-lg-12 col-md-12 col-12 mb-4">
            <div className="border">
              <figure className="effect">
                <img src={require("../assets/em_app.png")} />
                <figcaption>
                  <h5>Entertain Me - Mobile Application</h5>
                  <p>
                    Designed and developed a cross-platform mobile application
                    that helps customers in finding, communicating, negotiating,
                    and booking entertainers seamlessly.
                  </p>
                  <hr />
                  <p>
                    <b>Tech Stack: React-Native, NodeJs, AWS, MSSQL </b>
                  </p>

                  <div>
                    <a href="https://photos.app.goo.gl/9ytGdnizQU2DeLydA">
                      <FaLink size={20} />
                    </a>
                    <a
                      className="ml-2"
                      href="https://github.com/prakhathi-m/EntertainMe"
                      target="blank"
                    >
                      <FaGithub size={20} />
                    </a>
                    <a href="" className="ml-2">
                      <FaDownload size={20} />
                    </a>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
      {/* <iframe
        src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6690287763876642816"
        height="680"
        width="504"
        frameborder="0"
        allowfullscreen=""
        title="Embedded post"
      ></iframe> */}
    </section>
  );
};

export default Projects;
