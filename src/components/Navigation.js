import React from "react";
import { NavLink } from "react-router-dom";

function Navigation({ aboutPage, contactPage, handleToggleNavBar, toggleNavBar,resumePage }) {
  console.log('toggleNavBar',toggleNavBar);
  return (
    <>
      <div className={resumePage ? "rightMenuResumeView":"rightMenu"} >
        <NavLink className={aboutPage || contactPage ? "" : "home"} to="/">
          <a>Home</a>
        </NavLink>
        <a
          href="https://github.com/Chiranjivnit?tab=repositories"
          target="_blank"
        >
          Projects
        </a>
        <NavLink className={aboutPage ? "about" : ""} to={{pathname:"/resumeViewer",handleToggleNavBar:{handleToggleNavBar} , state:{toggleNavBar}}}>
          <a>About</a>
        </NavLink>
      </div>
    </>
  );
}
export default Navigation;
