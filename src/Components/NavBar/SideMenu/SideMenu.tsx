import React from "react";
import "./SideMenu.css";
import cross from "../../../images/cross.png";

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
        <div className="menu-wrapper">
            <img 
                src={cross} 
                alt="Close" 
                className="close-icon"
                onClick={() => {setIsClicked(false)}}
            />
            <div className="links-menu">
                <p onClick={keniBurke} className="header-links">
                    Home
                </p>
                <p onClick={scrollToShows} className="header-links">
                    Calender
                </p>
                <p onClick={scrollToMedia} className="header-links">
                    Gallery
                </p>
                <p onClick={scrollToAbout} className="header-links">
                    Meet The Band
                </p>
                <p onClick={scrollToContact} className="header-links">
                    Contact
                </p>
            </div> 
        </div>
    );
};
export default SideMenu;