import React from "react";
import './NavBar.css';
import bandIcon from "../../images/band_icon.png";
import menuButton from "../../images/menu.png";
import youtube from "../../images/navYoutube.png";
import facebook from "../../images/navFacebook.png"

interface NavProps {
    isClicked: boolean;
    setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
};

function NavBar(props: NavProps): JSX.Element {
    const {isClicked, setIsClicked} = props;
    const mediaLinks: Record<string, Record<string, string>> = {
        "youtube": {
            "image": youtube,
            "link": "https://www.youtube.com/watch?v=1sivrmZTbXk"
        },
        "facebook": {
            "image": facebook,
            "link": "https://facebook.com/luvsikangel/"
        }
    }
    
    function keniBurke(): void {    
        const body = document.documentElement || document.body;
        body.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setIsClicked(false);
    };
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
            <div className="nav-media-links">
                {Object.entries(mediaLinks).map(([key, value]: [string, Record<string, string>]): JSX.Element => ( 
                    <a target="_blank" rel="noreferrer" className="nav-media-link" href={value.link}>
                        <img 
                            className="nav-media-item"
                            src={value.image} 
                            alt={key} 
                        />
                    </a>
                ))}
            </div>
            <div className="menu-button-cont">
                <img 
                    className="menu-button"
                    onClick={() => {setIsClicked(!isClicked)}}
                    src={menuButton} 
                    alt="Menu" 
                />
            </div>
        </div>
    );
};
export default NavBar;