import React, { useRef } from "react";
import {useIntersection}  from "react-use"

import { fadeIn, fadeOut } from "../../utils/gsap/fade";

function About() {

    const intersectionRef = useRef(null);

    const intersection = useIntersection(intersectionRef, {
        root: null,
        rootMargin: '0px',
        threshold: .5
    });

    intersection && intersection.intersectionRatio < .5 ? fadeOut(".fade-about") : fadeIn(".fade-about");

    return (
        <section ref={intersectionRef} id="about">
            <div className="container wrapper">
                <div className="content fade-about">
                    <h2 className="fade-about">Get To Know Me</h2>
                    <p className="fade-about">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eros nunc, fringilla tincidunt erat vitae, pulvinar suscipit felis. 
                        Fusce ipsum ex, tempus ac velit id, venenatis consequat ligula. Sed bibendum auctor magna, at facilisis massa eleifend eget.
                        Mauris vehicula ante id auctor rhoncus. Mauris in nunc auctor diam sodales euismod. Sed blandit pretium sem, id placerat sem consectetur in. 
                        Mauris vulputate velit mauris, eget malesuada diam facilisis nec. Fusce tincidunt libero vel magna convallis convallis. 
                        Sed nec nisi non nunc varius ultricies. Pellentesque pulvinar magna eget mauris tempus aliquet. Praesent vitae diam sem. Pellentesque purus leo, 
                        feugiat a nibh sed, consequat convallis ligula. Integer sit amet velit laoreet, consequat metus ac, scelerisque velit. Aliquam lacinia nulla ut velit 
                        suscipit, et condimentum ex maximus.</p>
                </div>
            </div>
        </section>
    );
}

export default About;