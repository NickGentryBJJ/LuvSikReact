import React from "react";
import './NavBar.css';
import bandIcon from "../../images/band_icon.png";

function NavBar(): JSX.Element {
    function scrollToShows(): void {
        const aboutSection = document.getElementById('show-section');
        if (aboutSection) {
            const sectionTop = aboutSection.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({ top: sectionTop - 70, behavior: 'smooth' });
        }
    }
    function scrollToMedia(): void {
        const mediaSection = document.getElementById('media-section');
        if (mediaSection) {
            mediaSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
    function scrollToContact(): void {
        const contactSection = document.getElementById('contact-section');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
    function scrollToAbout(): void {
        const aboutSection = document.getElementById('about-section');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
    function keniBurke(): void {    
        const body = document.documentElement || document.body;
        body.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }    
    return (
        <div id="stickyHeader" className="header-links-wrapper">
            <div className="nav-logo-cont">
                <img 
                    onClick={keniBurke} 
                    className="nav-logo" 
                    src={bandIcon}
                    alt="LuvSikAngel"
                />
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