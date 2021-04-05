import React from "react";

function Footer() {

    return (
        <div id="footer" className="wrapper style3">
            <div className="container">
                <div className="copyright">
                    <p>Copyright © {new Date().getFullYear()} || Photos: Usplash || Based on: BigPicture by HTML5 Up</p> 
                </div>
            </div>
        </div>
    );
}

export default Footer;