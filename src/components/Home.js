import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <section name="education" className="section education">
        <h2 className="text-center">Education</h2>
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-12 mb-2">
            <div class="card">
              <figure style={{ background: "#015dbc" }}>
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

              <div className="card-header">
                <div className="d-flex justify-content-between">
                  <h5 className="m-0">Master of Science</h5>

                  <span>GPA 3.7/4</span>
                </div>
                <strong className="d-block">Computer Science</strong>

                <span className="label-lite">Aug 2019 - Dec 2020</span>
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
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-12 mb-2">
            <div class="card">
              <figure style={{ background: "#680000" }}>
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

              <div className="card-header">
                <div className="d-flex justify-content-between">
                  <h5 className="m-0">Bachelor of Technology</h5>
                  <span>GPA 3.7/4</span>
                </div>
                <strong className="d-block">Information Technology</strong>

                <span className="label-lite">July 2012 - May 2016</span>
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
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <section name="skills" className="section">
        <h2 className="text-center">Technical Skills</h2>
        <div>Web Technologies:</div>
        <ul style={{ clear: "both", padding: 0 }}>
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
