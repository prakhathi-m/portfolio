import React, { useState } from "react";
import "./App.scss";
import { FaLink, FaGithub, FaDownload } from "react-icons/fa";

const Projects = () => {
  return (
    <div>
      <div>
        <div className="d-flex justify-content-between border-bottom">
          <h6>Entertain Me</h6>
          <label>
            <a href="https://photos.app.goo.gl/9ytGdnizQU2DeLydA">
              <FaLink size={20} />
            </a>
            <a href="" className="ml-2">
              <FaDownload size={20} />
            </a>
          </label>
        </div>
        <div>
          <ul>
            <li>
              Designed, documented and developed a cross-platform mobile
              application that helps customers in finding, communicating,
              negotiating, and booking entertainers seamlessly.
            </li>
            <li>
              The app consists of Live Chat, Search & filter entertainers,
              Payment gateway (stripe), Feedback, and Rating features.
            </li>
            <li> The app is built using React-Native and NodeJS. </li>
            <li>
              MS SQL of Amazon RDS is used as a database and the AWS S3 bucket
              is used to upload media files.
            </li>
            <li>
              The backend Node server of the app is hosted in an AWS EC2
              instance.
            </li>
          </ul>

          <p>Tech Stack: React-Native, NodeJs, AWS, MSSQL</p>
        </div>
        <div>
          <div className="d-flex justify-content-between border-bottom">
            <h6>Multi-lingual Search System using tweets</h6>
            <label>
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
            </label>
          </div>
          <div>
            <ul>
              <li>
                Built an end to end Information Retrieval based website which is
                hosted on AWS.
              </li>
              <li>
                Collected the dataset which includes tweets of the various
                person of interest using Twitter API and indexed them in Solr to
                provide relevant results for queries.
              </li>
              <li>
                Implemented search functionality and provided sort, filter
                options on the search result. Implemented query parser which
                translates query into different languages to improves the IR
                system to retrieve more relevant results.
              </li>
              <li>
                Implemented analytics on the search results, and included Charts
                and Map-based visualizations that provide insights on the POIs’
                tweets and their impact.
              </li>
              <li>
                Analyzed the impact of the political rhetoric of influential
                actors by monitoring social media response to tweets (sentiment
                analysis, keyword analysis, response volume).
              </li>
              <li>
                Scraped relevant news articles in different languages for the
                search keyword.
              </li>
            </ul>

            <p>
              Technology Stack: ReactJs, Python Flask, Material-UI, Apache Solr,
              AWS (EC2), Google Charts
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
