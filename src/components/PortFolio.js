import React from "react";
import "../App.css";
import fullstack from '../image/fullstack.png'

function Portfolio() {
  return (
    <>
      <header className="top_header">
        <section>
          <nav className="nav">
            <div className="leftlogo">
              <h1>Chiranjib Rout</h1>
            </div>
            <div className="rightMenu">
              <a >Home</a>
              <a href="https://github.com/Chiranjivnit?tab=repositories" target="_blank">Projects</a>
              <a>About</a>
              <a>Contact</a>
            </div>
          </nav>
        </section>
        <main>
          <div className="leftContainer">
            <h3>Hello</h3>
            <h1>I'm Chiranjib Rout</h1>
            <h2>MERN Developer <span className="content_change"></span> </h2>
            <a className="button1" >Source Code</a>
            <a href="https://www.linkedin.com/in/chiranjiv-rout-904662139/" target="_blank" className="button2" >Linkedin</a>
          </div>
          <div className="rightContainer">
            <img src={fullstack} ></img>
          </div>
        </main>
      </header>
    </>
  );
}
export default Portfolio;
