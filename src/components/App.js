import React, { useState } from "react";
import "../styles/App.scss";
import MainLayout from "./Layout";

const App = () => {
  const [aboutMe, setAboutMe] = useState(true);

  return (
    <div>
      {aboutMe === false ? (
        <div className={aboutMe ? "hide" : "app-container"}>
          <section className="intro-wrapper">
            <div className="line animate-line">
              Hi, I'm Prakhathi. I love to code and develop web applications.
            </div>
            <button className="primary-button" onClick={() => setAboutMe(true)}>
              More about me
            </button>
          </section>
        </div>
      ) : (
        <main>
          <MainLayout goBack={() => setAboutMe(false)} />
        </main>
      )}
    </div>
  );
};

export default App;
