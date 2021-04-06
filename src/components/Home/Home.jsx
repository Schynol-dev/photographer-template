import React from "react";
import { animateScroll as scroll } from "react-scroll";

function Home() {

    return (
        <section id="home">
            <div className="content">
                <h2>Hello</h2>
                <p>Welcome to Photographer a responsive site template developed by <a href="http://kamilschynol.com/" target="_blank" rel="noreferrer">Kamil Schynol</a></p>
                <a href="#do" onClick={() => scroll.scrollTo(document.querySelector("#do").getBoundingClientRect().top + window.screenY - document.body.getBoundingClientRect().top)}>
                    <div className="button"></div>
                </a>
            </div>
        </section>
    );
}

export default Home;