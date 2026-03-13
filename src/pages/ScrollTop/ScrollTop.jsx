import { useState, useEffect } from "react";
import { IoArrowUp } from "react-icons/io5";
import "./ScrollTop.css";

const ScrollTop = () => {

const [visible,setVisible]=useState(false);

useEffect(()=>{

const toggleVisibility=()=>{

if(window.scrollY>300){
setVisible(true);
}else{
setVisible(false);
}

};

window.addEventListener("scroll",toggleVisibility);

return()=>window.removeEventListener("scroll",toggleVisibility);

},[])

const scrollToTop=()=>{
window.scrollTo({
top:0,
behavior:"smooth"
});
}

return(

<button
className={`scroll-top ${visible ? "show" : ""}`}
onClick={scrollToTop}
>

<IoArrowUp/>

</button>

)

}

export default ScrollTop