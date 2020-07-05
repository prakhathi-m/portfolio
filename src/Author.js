import React from 'react';
import { TiArrowBack } from 'react-icons/ti';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Author(props) {
  return (
    <div className="author-wrapper">
      <main>
        <nav class="sidebar">
          <button className="primary-button small" onClick={props.goBack}><TiArrowBack/></button>
          <ul style={{clear: 'both', padding: 0}}>
          <li style={{'textAlign' : 'center'}}><b>Skills</b></li>
          <li>Web Development: JavaScript, JQuery, ReactJS, Redux, Redux-saga, Angular JS, HTML, CSS, LESS, SASS, Bootstrap, Ajax</li>
          <li>Unit Testing Framework: Jasmine, Enzyme</li>
          <li>Version Control: SVN, GIT</li>
          <li>Database: MySQL, Heidi SQL</li>
          <li>Project Management Tools: Jira and Trello</li>
          <li>Agile Workflow Process</li>
          <li>Web Optimization</li>
          <li style={{'textAlign' : 'center'}}>
            <a href="http://github.com/prakhathi-m" target="blank"><FaGithub size={20}/></a>
            <a href="http://www.linkedin.com/in/prakhathimurugesan" target="blank"><FaLinkedin size={20}/></a>
          </li>
          </ul>
        </nav>
        <section id="home" class="content">
          <p> I am Prakhathi Murugesan, currently pursuing Master of Science in Computer Science at the University at Buffalo.
          </p>
          <p>I started my career as a web developer - building responsive websites with customised themes  and interactive features,
           revamping the existing websites with modern technologies. I am a result-oriented person, with a knack for writing clean, readable,
           high-performance, reusable and maintainable code for UI component. I am Knowledgeable about usability principles, coding standards,
           cross-browser compatibility, and HTML document architecture. I am good in building and consuming RESTful API web services
           and writing unit test cases for UI component.
          </p>
          <p>
            I thrive by learning new technologies and improve myself. Hence, I wanted to explore cutting-edge technologies so I decided to purse
            Masters in computer science. From my course, I learned new concepts and technologies like Information Retrieval, Machine Learning, Edge Computing,etc.
          </p>
          <p>
            This website is a single-page Application(SPA) built using ReactJs. As the website doesn't require much data, it is ideal to create SPA
            because of the following reasons:
            <ul>
            <li>SPA doesn't require page reloads and significantly saves waiting time.
            </li>
            <li> SPA downloads most of the resources only once throughout the lifespan of an application. SPA don't update the entire page but it loads only the
            required content which are already downloaded. Thus, SPA contributes to improving a website's speed.
            </li>
            <li>SPA caches the local data and works offline efficiently.</li>
            </ul>
          </p>
          <p>I have used ReactJs because it's fast, scalable and simple. It uses virtual DOM concept to manipulate and update the content. Once the changes are done, it uses 'Diffing' algorithm to figure out the newly made changes and then the changes are updated in real DOM.
          This improves the performance significantly as manipulating the real DOM is slow and expensive.
          </p>
        </section>
      </main>
    </div>
  )
}

export default Author;
