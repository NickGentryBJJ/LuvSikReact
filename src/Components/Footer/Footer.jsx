import React from 'react';
import './Footer.css';
import Social from "../Footer/Social/Social"
import MobileTrademarks from "../Footer/MobileTrademarks/MobileTrademarks"
import DesktopTrademarks from "../Footer/DesktopTrademarks/DesktopTrademarks"

function Footer() {
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
                    {/* <!-- CONTACT BUTTONS --> */}
                    <div className="contact-foot">
                        <div className="email-foot">
                            <h1 className="want-email">
                                Book Us Now!
                            </h1>
                            <a 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                href="mailto:luvsikangel@gmail.com">
                                <button className="email-button">
                                    <img 
                                        className="kokachin" 
                                        src={require("../../images/Email.png")}
                                        alt="Email"/>
                                </button>
                            </a>
                        </div>
                    </div> 
                </div>
                <DesktopTrademarks/>
            </div>
        </footer>     
    );
};
export default Footer;