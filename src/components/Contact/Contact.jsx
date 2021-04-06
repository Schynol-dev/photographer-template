import React, { useRef } from "react";
import { useIntersection }  from "react-use"

import { fadeIn, fadeOut } from "../../utils/gsap/fade";

function Contact() {

    const intersectionRef = useRef(null);

    const intersection = useIntersection(intersectionRef, {
        root: null,
        rootMargin: '0px',
        threshold: .5
    });

    intersection && intersection.intersectionRatio < .5 ? fadeOut(".fade-contact") : fadeIn(".fade-contact");

    return (
        <section ref={intersectionRef} id="contact" className="wrapper style2">
            <div className="container">
                <h2 className="fade-contact">Contact Me Any Time</h2>
                <p className="fade-contact">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className="form fade-contact">
                    <div className="field half fade-contact">
                        <input type="text" placeholder="Name" />
                    </div>
                    <div className="field half fade-contact">
                        <input type="email" placeholder="Email" />
                    </div>
                    <div className="field fade-contact">
                        <textarea type="text" placeholder="Message"></textarea>
                    </div>
                    <button className="fade-contact">Send Message</button>
                </div>
            </div>
        </section>
    );
}

export default Contact;