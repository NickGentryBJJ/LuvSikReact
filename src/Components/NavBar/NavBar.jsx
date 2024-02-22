import React from "react";
import './NavBar.css';

function NavBar() {
    return (
        <div id="stickyHeader" className="header-links-wrapper">
            <div className="links">
                <a href="#home" className="header-links">
                    HOME
                </a>
                <a href="#show-section" className="header-links">
                    UPCOMING SHOWS
                </a>
                <a href="#media-section" className="header-links">
                    MEDIA
                </a>
                <a href="#contact-section" className="header-links">
                    CONTACT
                </a>
            </div>
        </div>
    )
}
export default NavBar;