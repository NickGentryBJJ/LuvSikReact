import React from "react";
import './NavBar.css';
import bandIcon from "../../images/band_icon.png";
import menuButton from "../../images/menu.png";

interface NavProps {
    isClicked: boolean;
    setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
};

function NavBar(props: NavProps): JSX.Element {
    const {isClicked, setIsClicked} = props;
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