import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <section name="education" className="section education">
        <h2>Education</h2>
        <div className="row">
          <div className="mb-4">
            <div class="card">
              <a href="http://www.buffalo.edu/" target="blank">
                <figure
                  style={{ background: "#015dbc" }}
                  className="desktop-view"
                >
                  <img
                    src={require("../assets/ub.jpg")}
                    class="card-img-top"
                    width={250}
                    alt="..."
                  />
                  <figcaption>
                    <strong class="card-title">University at Buffalo</strong>
                    <span className="d-block">
                      The State University of New York
                    </span>
                  </figcaption>
                </figure>
              </a>
              <div>
                <div className="card-header">
                  <div className="d-flex">
                    <a href="http://www.buffalo.edu/" target="blank">
                      <figure
                        style={{ background: "#015dbc" }}
                        className="mobile-view"
                      >
                        <img
                          src={require("../assets/ub.jpg")}
                          class="card-img-top"
                          width={250}
                          alt="..."
                        />
                      </figure>
                    </a>
                    <div className="w-100">
                      <div className="d-flex justify-content-between">
                        <div>
                          <h5 className="m-0">Master of Science</h5>
                          <strong className="d-block">Computer Science</strong>
                          <span className="label-lite">
                            Aug 2019 - Dec 2020
                          </span>
                        </div>
                        <span>GPA 3.7/4</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-body">
                  <div className="label-lite">Coursework:</div>
                  <p className="card-text">
                    <ul>
                      <li>Introduction to Machine Learning</li>
                      <li>Information Retrieval</li>
                      <li>Algorithms Analysis and Design</li>
                      <li>Data-Intensive Computing</li>
                      <li>Data Models and Query languages</li>
                      <li>Distributed Systems*</li>
                      <label>(* - planned for upcoming semesters)</label>
                    </ul>
                  </p>
                  {/* <a href="#" class="btn btn-primary">
                  Go somewhere
                </a> */}
                </div>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <div class="card">
              <a href="https://www.cit.edu.in/" target="blank">
                <figure
                  style={{ background: "#680000" }}
                  className="desktop-view"
                >
                  <img
                    src={require("../assets/cit.png")}
                    class="card-img-top"
                    width={150}
                    alt="..."
                  />
                  <figcaption>
                    <strong class="card-title">
                      Coimbatore Institute of Technology
                    </strong>
                    <span className="d-block">India</span>
                  </figcaption>
                </figure>
              </a>
              <div>
                <div className="card-header">
                  <div className="d-flex">
                    <a href="https://www.cit.edu.in/" target="blank">
                      <figure
                        style={{ background: "#680000" }}
                        className="mobile-view"
                      >
                        <img
                          src={require("../assets/cit.png")}
                          class="card-img-top"
                          style={{ width: 60 }}
                          alt="..."
                        />
                      </figure>
                    </a>
                    <div className="w-100">
                      <div className="d-flex justify-content-between">
                        <div>
                          <h5 className="m-0">Bachelor of Technology</h5>
                          <strong className="d-block">
                            Information Technology
                          </strong>

                          <span className="label-lite">
                            July 2012 - May 2016
                          </span>
                        </div>
                        <span>GPA 3.7/4</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-body">
                  <div className="label-lite">Coursework:</div>
                  <p className="card-text">
                    <ul>
                      <li>Data Structure and Algorithms</li>
                      <li>Database Management System</li>
                      <li>Object-Oriented Programming</li>
                      <li>Operating Systems</li>
                      <li>Web Technologies</li>
                      <li>Software Engineering</li>
                      <li>Data Warehousing and Data Mining.</li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <section name="skills" className="section">
        <h2>Technical Skills</h2>
        <ul style={{ clear: "both", padding: 10 }}>
          <li>Programming Language: Python, C and C++</li>
          <li>
            Web Development: JavaScript, JQuery, ReactJS, Angular JS, HTML, CSS,
            LESS, SASS, Bootstrap, Ajax, XML, XQuery, JSON.
          </li>
          <li>
            Frameworks and Libraries: React-Native, Redux, Redux-saga, Hadoop
            MapReduce, Apache Spark, and Material-UI
          </li>
          <li>Unit Testing Framework: Jasmine, Jest and Enzyme</li>
          <li>Version Control: SVN, GIT</li>
          <li>Database: MySQL, MSSQL, PostgreSQL and Heidi SQL</li>
          <li>Project Management Tools: Jira and Trello</li>
          <li>
            Visualization Tools – Recharts, Google Chart, D3.js and Highcharts
          </li>
          <li>Agile Workflow Process</li>
          <li>Web Optimization</li>
        </ul>
      </section>
    </React.Fragment>
  );
}
