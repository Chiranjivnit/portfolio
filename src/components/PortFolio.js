import React from "react";
import "../App.css";
import fullstack from '../image/fullstack.png';
import NavBar from './NavBar';

function Portfolio() {

  return (
    <>
      <header className="top_header">
        <section>
          <NavBar/>
        </section>
        <main>
          <div className="leftContainer">
            <h3>Hello</h3>
            <h1>I'm Chiranjib Rout</h1>
            <h2>MERN Developer <span className="content_change"></span> </h2>
            <a className="button1" href="https://github.com/Chiranjivnit/portfolio" target="_blank" >Source Code</a>
            <a href="https://www.linkedin.com/in/chiranjiv-rout-904662139/" target="_blank" className="button2" >Linkedin</a>
          </div>
          <div className="rightContainer">
            <img alt="fullstack" src={fullstack} ></img>
          </div>
        </main>
      </header>
    </>
  );
}
export default Portfolio;
