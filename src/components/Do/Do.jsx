import React, { useRef } from "react";
import {useIntersection}  from "react-use"

import { fadeIn, fadeOut } from "../../utils/gsap/fade";

function Do() {

    const intersectionRef = useRef(null);

    const intersection = useIntersection(intersectionRef, {
        root: null,
        rootMargin: '0px',
        threshold: .5
    });

    intersection && intersection.intersectionRatio < .5 ? fadeOut(".fade") : fadeIn(".fade");

    return (
        <section ref={intersectionRef} id="do">
            <div className="container wrapper">
                <div className="content left fade">
                    <h2 className="fade">What I Do</h2>
                    <p className="fade">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eros nunc, fringilla tincidunt erat vitae, pulvinar suscipit felis. Fusce ipsum ex, tempus ac velit id, venenatis consequat ligula. Sed bibendum auctor magna, at facilisis massa eleifend eget. Mauris vehicula ante id auctor rhoncus. Mauris in nunc auctor diam sodales euismod. Sed blandit pretium sem, id placerat sem consectetur in.</p>
                </div>
                <div className="content right fade">
                    <h2 className="fade">More What I Do</h2>
                    <p className="fade">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eros nunc, fringilla tincidunt erat vitae, pulvinar suscipit felis. Fusce ipsum ex, tempus ac velit id, venenatis consequat ligula. Sed bibendum auctor magna, at facilisis massa eleifend eget. Mauris vehicula ante id auctor rhoncus. Mauris in nunc auctor diam sodales euismod. Sed blandit pretium sem, id placerat sem consectetur in.</p>
                </div>
            </div>
        </section>
    );
}

export default Do;