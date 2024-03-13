import React from "react";
import "./SideMenu.css";
import cross from "../../../images/close.png";  // <a href="https://www.freepik.com/search">Icon by khld939</a>

interface menuProps {
    isClicked: boolean;
    setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
};

function SideMenu(props: menuProps) {
    const {isClicked, setIsClicked} = props;
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
    const linkItems: Record<string, () => void> = {  
        "Home": keniBurke,
        "Calender": scrollToShows,
        "Gallery": scrollToMedia,
        "Meet The Band": scrollToAbout,
        "Contact": scrollToContact
    };
    return (
        <div className={`menu-wrapper ${isClicked ? "show" : ""}`}>
            <img 
                src={cross} 
                alt="Close" 
                className="close-icon"
                onClick={() => {setIsClicked(false)}}
            />
            <div className="links-menu">
                {Object.entries(linkItems).map(([key, value]: [string, () => void], index): JSX.Element => {
                    return (
                        <p key={index} onClick={value} className="header-links show">{key}</p>
                    )
                })}
            </div> 
        </div>
    );
};
export default SideMenu;