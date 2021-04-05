import React from "react";
import { animateScroll as scroll } from "react-scroll";

function Navigation() {

    // Section Y positions
    const sectionPositionY = (section) => {
        switch(section) {
            case "home":
               return document.querySelector("#home").getBoundingClientRect().top + window.screenY - document.body.getBoundingClientRect().top;
            case "do":
                return  document.querySelector("#do").getBoundingClientRect().top + window.screenY - document.body.getBoundingClientRect().top;
            case "about":
                return  document.querySelector("#about").getBoundingClientRect().top + window.screenY - document.body.getBoundingClientRect().top;
            case "work":
                return  document.querySelector("#work").getBoundingClientRect().top + window.screenY - document.body.getBoundingClientRect().top;
            case "contact":
                return document.querySelector("#contact").getBoundingClientRect().top + window.screenY - document.body.getBoundingClientRect().top;
            default:
                return window.screenY; 
        }
        
    }

    return (
        <div id="nav">
            <div className="logo">
                <h3>Photographer</h3>
            </div>
            <div className="list">
                <ul>
                    <li><a href="#home" onClick={() => scroll.scrollTo(sectionPositionY("home"))}>Home</a></li>
                    <li><a href="#do" onClick={() => scroll.scrollTo(sectionPositionY("do"))}>What I Do</a></li>
                    <li><a href="#about" onClick={() => scroll.scrollTo(sectionPositionY("about"))}>About Me</a></li>
                    <li><a href="#work" onClick={() => scroll.scrollTo(sectionPositionY("work"))}>My Work</a></li>
                    <li><a href="#contact" onClick={() => scroll.scrollTo(sectionPositionY("contact"))}>Contact</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Navigation;