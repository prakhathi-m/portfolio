import React from "react";
import "../styles/App.scss";
import MainLayout from "./Layout";

const App = () => {
  return (
    <React.Fragment>
      <main>
        <MainLayout />
      </main>
      <div className="animation-area">
        <div className="box">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
