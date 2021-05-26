import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function NavBar({ aboutPage,contactPage }) {

    const [home, setHome] = useState(false);

    useEffect(() => {
        setHome(true);
    }, [])

    return (
        <>
            <nav className="nav">
                <div className="leftlogo">
                    <h1>Chiranjib Rout</h1>
                </div>
                <div className="toggleBtn" >
                 <span></span>
                 <span></span>
                 <span></span>
                </div>
                <div className="rightMenu">
                    <NavLink className={aboutPage || contactPage ? "" : "home"} to="/" ><a>Home</a></NavLink>
                    <a href="https://github.com/Chiranjivnit?tab=repositories" target="_blank">Projects</a>
                    <NavLink  className={aboutPage ? "about" : ""} to='/resumeViewer' ><a>About</a></NavLink>
                </div>
            </nav>
        </>
    )
}
export default NavBar;