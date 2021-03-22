import React from "react";

function Navigation() {

    return (
        <div id="nav">
            <div className="logo">
                <h3>Photographer</h3>
            </div>
            <div className="list">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#home">What I Do</a></li>
                    <li><a href="#home">About Me</a></li>
                    <li><a href="#home">My Work</a></li>
                    <li><a href="#home">Contact</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Navigation;