import './NavBar.css'
import { IoMoon } from "react-icons/io5";
import { MdOutlineWbSunny } from "react-icons/md";
import { FaBarsStaggered } from "react-icons/fa6";
import { useState, useEffect } from 'react';

const NavBar = () => {

const [active,setActive]=useState("home");

/* حفظ الثيم في localStorage */

const [darkMode,setDarkMode]=useState(
localStorage.getItem("theme")==="dark"
);

const [menuOpen,setMenuOpen]=useState(false);

/* تطبيق الثيم عند التغيير */

useEffect(()=>{

if(darkMode){
document.body.classList.add("dark");
localStorage.setItem("theme","dark");
}else{
document.body.classList.remove("dark");
localStorage.setItem("theme","light");
}

},[darkMode])

/* تغيير الثيم */

const toggleTheme=()=>{
setDarkMode(!darkMode);
}

/* التنقل بين الأقسام */

const scrollToSection=(id)=>{

const section=document.getElementById(id);

if(section){
section.scrollIntoView({behavior:"smooth"});
}

setActive(id);
setMenuOpen(false);

}

return(

<nav className="navbar">

<h2 className='my-name'>Roaa</h2>

<ul className="nav-links">

<li>
<a
onClick={()=>scrollToSection("home")}
className={active==="home"?"active":""}
>
Home
</a>
</li>

<li>
<a
onClick={()=>scrollToSection("about-me")}
className={active==="about-me"?"active":""}
>
About Me
</a>
</li>

<li>
<a
onClick={()=>scrollToSection("education")}
className={active==="education"?"active":""}
>
Education
</a>
</li>

<li>
<a
onClick={()=>scrollToSection("projects")}
className={active==="projects"?"active":""}
>
Projects
</a>
</li>

<li>
<a
onClick={()=>scrollToSection("contact")}
className={active==="contact"?"active":""}
>
Contact
</a>
</li>

</ul>

<div className="icons">

<button className='moon' onClick={toggleTheme}>
{darkMode
? <MdOutlineWbSunny className='sun-icon'/>
: <IoMoon className='moon-icon'/>
}
</button>

<button className='bars' onClick={()=>setMenuOpen(true)}>
<FaBarsStaggered className='bars-icon'/>
</button>

</div>

{/* MOBILE MENU */}

<div className={`mobile-menu ${menuOpen ? "open" : ""}`}>

<button
className="close-menu"
onClick={()=>setMenuOpen(false)}
>
×
</button>

<a onClick={()=>scrollToSection("home")}>Home</a>
<a onClick={()=>scrollToSection("about-me")}>About Me</a>
<a onClick={()=>scrollToSection("education")}>Education</a>
<a onClick={()=>scrollToSection("projects")}>Projects</a>
<a onClick={()=>scrollToSection("contact")}>Contact</a>

</div>

</nav>

)

}

export default NavBar