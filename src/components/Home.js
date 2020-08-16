import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <section name="skills" className="section skills">
        <h2>Technical Skills</h2>
        <figure className="text-center">
          <img
            src={require("../assets/skills.png")}
            className="skill-img"
            alt="..."
          />
        </figure>
      </section>
      <section name="education" className="section education">
        <h2>Education</h2>
        <div className="row">
          <div className="mb-4">
            <div className="card">
              <div>
                <div className="card-header">
                  <div className="d-flex">
                    <a href="http://www.buffalo.edu/" target="blank">
                      <figure style={{ background: "#015dbc" }}>
                        <img
                          src={require("../assets/ub.jpg")}
                          className="card-img-top"
                          width={60}
                          alt="..."
                        />
                      </figure>
                    </a>
                    <div className="w-100 px-2">
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
                <div className="card-body">
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
                  {/* <a href="#" className="btn btn-primary">
                  Go somewhere
                </a> */}
                </div>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <div className="card">
              <div>
                <div className="card-header">
                  <div className="d-flex">
                    <a href="https://www.cit.edu.in/" target="blank">
                      <figure style={{ background: "#680000" }}>
                        <img
                          src={require("../assets/cit.png")}
                          className="card-img-top"
                          style={{ width: 60 }}
                          alt="..."
                        />
                      </figure>
                    </a>
                    <div className="w-100 px-2">
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
                <div className="card-body">
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
    </React.Fragment>
  );
}
