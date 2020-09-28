import React from "react";
import { FaLink, FaGithub, FaDownload } from "react-icons/fa";

const Projects = () => {
  return (
    <section>
      <div className="project-wrapper">
        <h2>Projects</h2>

        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-12 mb-4">
            <div className="border">
              <figure className="effect">
                <picture>
                  <img src={require("../assets/stearns_1.png")} alt="Stearns" />
                </picture>
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

          <div className="col-xl-6 col-lg-6 col-md-6 col-12 mb-4">
            <div className="border">
              <figure className="effect">
                <img src={require("../assets/twine.png")} alt="twine" />
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
          <div className="col-xl-6 col-lg-6 col-md-6 col-12 mb-4">
            <div className="border">
              <figure className="effect">
                <img src={require("../assets/twitter.jpeg")} alt="search" />
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
          <div className="col-xl-6 col-lg-6 col-md-6 col-12 mb-4">
            <div className="border">
              <figure className="effect">
                <img src={require("../assets/em_app.png")} alt="app" />
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
                    {/* <a
                      className="ml-2"
                      href="https://github.com/prakhathi-m/EntertainMe"
                      target="blank"
                    >
                      <FaGithub size={20} />
                    </a> */}
                    {/* <a
                      href="https://expo.io/@prakhathi/entertain-me"
                      className="ml-2"
                    >
                      <FaDownload size={20} />
                    </a> */}
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>

        <h3>Note-worthy Projects:</h3>
        <hr />

        <div className="tile py-4">
          <div className="title">
            <a
              href="https://github.com/prakhathi-m/Pyspark"
              target="blank"
              id="github"
            >
              <h4>Movie genre prediction model using Apache Spark</h4>
            </a>

            <label>May 2020</label>
          </div>

          <h6>Project Description:</h6>
          <ul>
            <li>
              Implemented a multi-label classification algorithm to build a
              movie genre prediction model using Apache Spark.
            </li>
            <li>
              Done preprocessing the movie plot to remove stop words, create
              tokens to increase efficiency.
            </li>
            <li>
              Used Logistic regression to predict the genre and calculated the
              F1 score for the result.
            </li>
            <li>
              Improved F1 score by using TF_IDF to train the model with the
              words that are important/relevant.
            </li>
            <li>
              Implemented custom engineering word2vec to create a distributed
              vector which improved the F1 score significantly.
            </li>
          </ul>
          <p>
            <b>Tech Stack: Pyspark</b>
          </p>
        </div>
        <hr />
        <div className="tile py-4">
          <div className="title">
            <a
              href="https://github.com/prakhathi-m/Hadoop"
              target="blank"
              id="github"
            >
              <h4>Big Data Processing with Hadoop using MapReduce</h4>
            </a>
            <label>Feb 2020 – Mar 2020</label>
          </div>

          <h6>Project Description:</h6>
          <ul>
            <li>
              Implemented a MapReduce algorithm to produce the count of every
              word in the given dataset using the Hadoop framework.
            </li>
            <li>
              Implemented a MapReduce algorithm that will read the dataset and
              produce modified tri-grams around the keywords, after replacing
              the keyword with '$'. This algorithm also returned the 10 most
              occurred modified tri-gram in the dataset.
            </li>
            <li>
              Implemented a MapReduce algorithm to produce an inverted index for
              the given dataset.
            </li>
            <li>
              Implemented a MapReduce algorithm to join two datasets using a
              primary key.
            </li>
            <li>Implemented KNN algorithm using MapReduce.</li>
          </ul>
          <p>
            <b>Tech stack: Python, Hadoop</b>
          </p>
        </div>

        <hr />

        <div className="tile py-4">
          <div className="title">
            <a
              href="https://github.com/prakhathi-m/Machine-Learning"
              target="blank"
              id="github"
            >
              <h4> Reinforcement Learning</h4>
            </a>

            <label>Dec, 2019</label>
          </div>

          <h6>Project Description:</h6>
          <ul>
            <li>
              The goal of the project is to train the agent to navigate through
              the classic grid-world environment and reach the goal and achieve
              the maximum reward.
            </li>
            <li>
              The agent is trained using the Q-Learning algorithm, which allows
              it to take optimal action to reach the goal.
            </li>
            <li>
              The environment and the agent are built using OpenAI Gym, and the
              Q-table is updated for each action, and the rewards are recorded.
            </li>
          </ul>
          <p>
            <b>Tech stack: Python</b>
          </p>
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
