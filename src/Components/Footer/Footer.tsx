import React from 'react';
import './Footer.css';
import Social from "./Social/Social"
import MobileTrademarks from "./MobileTrademarks/MobileTrademarks"
import DesktopTrademarks from "./DesktopTrademarks/DesktopTrademarks"
import ContactButtons from "./ContactButtons/ContactButtons"

function Footer(): JSX.Element {
    return (
        <footer id="contact-section">
            <div  className="footer-container">
                <div className="footer-wrapper">
                    <div className="foot-left">
                        <h1 className="foot-title">
                            LuvSikAngel
                        </h1>                   
                        <span className="last-words-footer">
                            Thank you for visiting!
                        </span>
                        <Social/>
                        <MobileTrademarks/>        
                    </div>
                    <ContactButtons/>
                </div>
                <DesktopTrademarks/>
            </div>
        </footer>     
    );
};
export default Footer;