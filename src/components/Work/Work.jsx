import React, { useRef } from "react";
import { useIntersection }  from "react-use"

import { fadeIn, fadeOut } from "../../utils/gsap/fade";

function Work() {

    const intersectionRef = useRef(null);

    const intersection = useIntersection(intersectionRef, {
        root: null,
        rootMargin: '0px',
        threshold: .2
    });

    intersection && intersection.intersectionRatio < .2 ? fadeOut(".fade-work") : fadeIn(".fade-work");

    return (
        <section ref={intersectionRef} id="work">
            <div className="container wrapper">
                <h2 className="fade-work">See My Work</h2>
                <p className="fade-work">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eros nunc, fringilla tincidunt erat vitae, pulvinar suscipit felis. 
                    Fusce ipsum ex, tempus ac velit id, venenatis consequat ligula. Sed bibendum auctor magna, at facilisis massa eleifend eget.</p>
                <div className="photos">
                    <div className="item one fade-work"></div>
                    <div className="item two fade-work"></div>
                    <div className="item three fade-work"></div>
                    <div className="item four fade-work"></div>
                    <div className="item five fade-work"></div>
                    <div className="item six fade-work"></div>
                </div>
            </div>
        </section>
    );
}

export default Work;