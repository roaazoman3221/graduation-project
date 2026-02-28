import './NavBar.css'
import { IoMoon } from "react-icons/io5";
import { FaBarsStaggered } from "react-icons/fa6";
import { useState } from 'react';

const NavBar = () => {
    const [active, setActive] = useState("home");
    return (
        <nav className="navbar">
            <h2 className='my-name'>Roaa</h2>

            <ul className="nav-links">
                <li className='li home'>
                    <a 
                        href="#home"
                        className={active === "home" ? "active" : ""}
                        onClick={() => setActive("home")}
                    >Home</a>
                </li>

                <li className='li about-me'>
                    <a href="#about-me"
                    className={active === "about-me" ? "active" : ""}
                    onClick={() => setActive("about-me")}
                    >About Me</a>
                </li>

                <li className='li education'>
                    <a 
                        href="#education" className={active === "education" ? "active" : ""} onClick={() => setActive("education")}
                    >Education</a>
                </li>

                <li className='li projects'>
                    <a 
                        href="#projects" className={active === "projects" ? "active" : ""} onClick={() => setActive("projects")}
                    >Projects</a>
                </li>

                <li className='li contact'>
                    <a 
                        href="#contact" className={active === "contact" ? "active" : ""} onClick={() => setActive("contact")}
                    >Contact</a>
                </li>
            </ul>

            <div className="icons">
                <button className='moon'>
                    <IoMoon className='moon-icon' />
                </button>

                <button className='bars'>
                    <FaBarsStaggered className='bars-icon'/>
                </button>
            </div>
        </nav>
    )
}

export default NavBar;