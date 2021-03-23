import React from "react";

function Contact() {

    return (
        <section id="contact" className="wrapper style2">
            <div className="container">
                <h2>Contact Me Any Time</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className="form">
                    <div className="field half">
                        <input type="text" placeholder="Name" />
                    </div>
                    <div className="field half">
                        <input type="email" placeholder="Email" />
                    </div>
                    <div className="field">
                        <textarea type="text" placeholder="Message"></textarea>
                    </div>
                    <button>Send Message</button>
                </div>
            </div>
        </section>
    );
}

export default Contact;