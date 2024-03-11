import React from "react";
import './NavBar.css';

function NavBar() {
    function scrollToShows() {
        var aboutSection = document.getElementById('show-section');
        var sectionTop = aboutSection.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: sectionTop - 70, behavior: 'smooth' });
    }
    function scrollToMedia() {
        var mediaSection = document.getElementById('media-section');
        mediaSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    function scrollToContact() {
        var contactSection = document.getElementById('contact-section');
        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    function scrollToAbout() {
        var aboutSection = document.getElementById('about-section');
        aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    // Risin' to the top!
    function keniBurke() {    
        const body = document.documentElement || document.body;
        body.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    return (
        <div id="stickyHeader" className="header-links-wrapper">
                <div>
                    <img 
                        onClick={keniBurke} 
                        className="nav-logo" 
                        src={require("../../images/band_icon.png") }
                        alt="LuvSikAngel"/>
                </div>
                <div className="links">
                    <p onClick={scrollToShows} className="header-links">SHOWS</p>
                    <p onClick={scrollToMedia} className="header-links">GALLERY</p>
                    <p onClick={scrollToAbout} className="header-links">ABOUT</p>
                    <p onClick={scrollToContact} className="header-links">CONTACT</p>
                </div> 
        </div>
    )
}
export default NavBar;