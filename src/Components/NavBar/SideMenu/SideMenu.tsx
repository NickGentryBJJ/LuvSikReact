import React from "react";
import "./SideMenu.css";

interface menuProps {
    setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
};

function SideMenu(props: menuProps) {
    const {setIsClicked} = props
    function scrollToShows(): void {
        const aboutSection = document.getElementById('show-section');
        if (aboutSection) {
            const sectionTop = aboutSection.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({ top: sectionTop - 70, behavior: 'smooth' });
            setIsClicked(false);
        }
    }
    function scrollToMedia(): void {
        const mediaSection = document.getElementById('media-section');
        if (mediaSection) {
            mediaSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setIsClicked(false);
        }
    }
    function scrollToContact(): void {
        const contactSection = document.getElementById('contact-section');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setIsClicked(false);
        }
    }
    function scrollToAbout(): void {
        const aboutSection = document.getElementById('about-section');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setIsClicked(false);
        }
    }
    function keniBurke(): void {    
        const body = document.documentElement || document.body;
        body.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setIsClicked(false);
    };
    return (
        <div className="links-menu">
            <p onClick={keniBurke} className="header-links">
                HOME
            </p>
            <p onClick={scrollToShows} className="header-links">
                SHOWS
            </p>
            <p onClick={scrollToMedia} className="header-links">
                GALLERY
            </p>
            <p onClick={scrollToAbout} className="header-links">
                ABOUT
            </p>
            <p onClick={scrollToContact} className="header-links">
                CONTACT
            </p>
        </div> 
    );
};
export default SideMenu;