import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Navigation from "./Navigation";

function NavBar({ aboutPage, contactPage, handleToggleNavBar, toggleNavBar }) {
  const [home, setHome] = useState(false);
console.log('handleToggleNavBar',handleToggleNavBar);
console.log('toggleNavBar',toggleNavBar);
  useEffect(() => {
    setHome(true);
  }, []);

  return (
    <>
      <nav className="nav">
        <div className="leftlogo">
          <h1>Chiranjib Rout</h1>
        </div>
        <div className="toggleBtn" onClick={()=>handleToggleNavBar()}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="navigation">
         <Navigation
         handleToggleNavBar={handleToggleNavBar}
         toggleNavBar={toggleNavBar}
          aboutPage={aboutPage}
          contactPage={contactPage}
          toggleNavBar={toggleNavBar}
        /> 
        </div>
      </nav>
    </>
  );
}
export default NavBar;
