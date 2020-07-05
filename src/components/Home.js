import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <section name="education" className="section education">
        <h2 className="text-center">Education</h2>
        <div>
          <div className="d-flex">
            <div className="col-md-4 col-lg-4 col-12 pl-0">
              <strong>University at Buffalo</strong>
              <label className="d-block">
                The State University of New York
              </label>
              <label className="label-lite">Aug 2019 - Dec 2020</label>
            </div>
            <div className="col-md-8 col-lg-8 col-12">
              <div>
                <div>
                  <strong>Master of Science in Computer Science</strong>
                </div>
                <label>GPA 3.7/4</label>
              </div>
              <div className="label-lite">Coursework:</div>
              <p>
                Introduction to Machine Learning, Information Retrieval,
                Algorithms Analysis, and Design, Data-Intensive Computing, Data
                Models and Query languages, Distributed Systems* and Blockchain*
                <label>(* - planned for upcoming semesters)</label>
              </p>
            </div>
          </div>
          <div className="d-flex">
            <div className="col-md-4 col-lg-4 col-12 pl-0">
              <div>
                <strong>Coimbatore Institute of Technology</strong>
              </div>
              <label className="d-block">India</label>
              <label className="label-lite">July 2012 - May 2016</label>
            </div>
            <div className="col-md-8 col-lg-8 col-12">
              <div>
                <div>
                  <strong>
                    Bachelor of Technology in Information Technology
                  </strong>
                </div>
                <label>GPA 3.7/4</label>
              </div>
              <div className="label-lite">Coursework:</div>

              <p>
                Data Structure and Algorithms, Database Management System,
                Object-Oriented Programming, Operating Systems, Web
                Technologies, Software Engineering, Data Warehousing and Data
                Mining.
              </p>
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
