import React from "react";

export default function Author(props) {
  return (
    <section className="section professional-exp p-4">
      <h2>Professional Experience</h2>
      <div className="card mb-3">
        <div className="card-header d-flex">
          <a href="http://www.adp.com/" target="blank">
            <figure>
              <img
                src={require("../assets/adp-logo.png")}
                height={50}
                width={70}
                alt="..."
              />
            </figure>
          </a>

          <div className="d-flex flex-grow-1 ml-2 justify-content-between align-items-center">
            <label>
              <b>
               Application Developer <br /> ADP Inc, NJ
              </b>
            </label>
            <label>Mar 2021 - Present</label>
          </div>
        </div>
        <div className="card-body">
          <ul className="py-3 m-0">
            <li>
              Enhanced accessibility across multiple components by using semantic UI; supported internationalization of the application.
            </li>
          
          </ul>
        </div>
        <div className="card-footer">
          Tech Stack: ReactJs, Redux, Typescript
        </div>
      </div>
      <div className="card">
        <div className="card-header d-flex">
          <a href="http://www.twinelabs.com/" target="blank">
            <figure>
              <img
                src={require("../assets/twine_logo.png")}
                height={50}
                alt="..."
              />
            </figure>
          </a>

          <div className="d-flex flex-grow-1 justify-content-between align-items-center">
            <label>
              <b>
                Software Engineer Intern <br /> Twine Labs, NY
              </b>
            </label>
            <label>Jun 2020 - Dec 2020</label>
          </div>
        </div>
        <div className="card-body">
          <ul className="py-3 m-0">
            <li>
              Debugged and resolved known bugs in the product and delivered user
              friendly, responsive web applications.
            </li>
            <li>
              Implemented Django models to capture the details of the user
              request and notify them in the slack channel.
            </li>
            <li>
              Converted Figma Wireframes into interactive user-facing features
              coupled with in-built carousel and animations using React hooks.
            </li>
            <li>
              Developed a user rating module for the coming-soon feature using
              Django and ReactJs to gain user interest.
            </li>
            <li>
              Reimplemented few functionalities which previously used Redux into
              in-built custom React hooks.
            </li>
            <li>
              Implemented the new analytics dashboard as a part of the core
              product.
            </li>
          </ul>
        </div>
        <div className="card-footer">
          Tech Stack: ReactJs, Redux, Django, PostgreSQL, AWS
        </div>
      </div>
      <div className="card">
        <div className="card-header d-flex">
          <a href="http://www.tavant.com/" target="blank">
            <figure>
              <img
                src={require("../assets/tavant-logo.png")}
                height={50}
                alt="..."
              />
            </figure>
          </a>

          <div className="d-flex flex-grow-1 ml-2 justify-content-between align-items-center">
            <label>
              <b>
                Software Engineer <br /> Tavant Technologies, India
              </b>
            </label>
            <label>Aug 2016 - Jun 2019</label>
          </div>
        </div>
        <div className="card-body">
          <h6>Summary:</h6>
          <ul className="my-3">
            <li>
              Experienced in front-end development with backend system
              integrations and in building and consuming RESTful API web
              services.
            </li>
            <li>
              Proficient in using Unit testing framework along with Jasmine,
              Karma, and jest test runners and in using React JS components, and
              Redux concept.
            </li>
            <li>
              Possess working knowledge in creating Custom Reusable React
              Components and in Redux architecture using complex Object-Oriented
              concepts in improving the performance of the websites.
            </li>
          </ul>
          <h6>Key Responsibilites:</h6>
          <ul className="my-3">
            <li>
              Evaluated user stories, analyzed the feasibility, estimated the
              effort and time of development, and deployed the sprint tasks
              following agile methodology (SDLC).
            </li>
            <li>
              Participated in peer code reviews and mentored junior developers
              on web page optimization & best coding practices which helped them
              deliver high-quality codes with 100% unit test coverage and with
              no cross-browser compatibility issues.
            </li>
          </ul>
        </div>
        <div>
          <h6 style={{ padding: "0 1.25rem", fontSize: 18 }}>Projects:</h6>
          <div className="accordion">
            <div className="card">
              <div className="card-header" id="headingOne">
                <h6 className="mb-0">1. Web Service Project for a Client</h6>
              </div>

              <div className="card-body">
                <ul className="border-bottom">
                  <li>
                    Developed a Web service that enables the client to track and
                    monitor mortgages, assets, repayments, and other activities
                    of their customers.
                  </li>
                  <li>
                    Adapted new initiative to bring best practices in
                    development by incorporating coding guidelines and modular
                    project structure such as Atomic Design concepts and BEM
                    methodology.
                  </li>
                  <li>
                    Developed various components from scratch to utilize the
                    same throughout the entire project and developed different
                    visualization modules to help read and analyze the data
                    seamlessly.
                  </li>
                </ul>
                <div>
                  Tech Stack: React JS, Redux-Saga, Jasmine, Enzyme,
                  Material-UI, and Recharts
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-header" id="headingThree">
                <h6 className="mb-0">
                  2. Feedback and Monitoring Application for Internal Teams
                </h6>
              </div>

              <div className="card-body">
                <ul className="border-bottom">
                  <li>
                    Developed an organization-wide application that records the
                    achievements of Tavant employees, enables respective
                    managers to rate the employees, and helps the Human Resource
                    department monitor the performance.
                  </li>
                  <li>
                    Integrated the application with LDAP and automated mailing
                    module to push notification and feedback mail to employees.
                  </li>
                </ul>
                <div>Tech Stack: React JS, Node JS, My SQL, Highcharts</div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingTwo">
                <h6 className="mb-0">
                  3. Web Modernization Project for a Client
                </h6>
              </div>

              <div className="card-body">
                <ul className="border-bottom">
                  <li>
                    Revamped and optimized the client's existing mortgage
                    website by using modern web technologies to increase
                    efficiency and delivered the desired output to the client.
                  </li>
                  <li>
                    Customized the themes and other aspects on the website to
                    suit the branding of third party vendors of the client that
                    log in to their respective portals of the website.
                  </li>
                  <li>
                    Incorporated module bundlers like Webpack into the build
                    environment to reduce page load time of web applications by
                    40%.
                  </li>
                </ul>
                <div>
                  Tech Stack: jQuery, HTML, CSS, LESS pre-processor, and
                  Bootstrap
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
}
