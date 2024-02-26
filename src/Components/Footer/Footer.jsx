import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer id="contact-section">
            {/* <!-- CONTACT SECTION --> */}
            <div  className="footer-container">
                <div className="footer-wrapper">
                    <div className="foot-left">
                        <h1 className="foot-title">
                            LuvSikAngel
                        </h1>                   
                        <span className="last-words-footer">
                            Thank you for visiting!
                        </span>
                        {/* <!-- MEDIA SECTION --> */}
                        <div className="media-wrapper">
                            <div className="media-container">
                                <a 
                                    target="_blank" 
                                    className="youtube-link" 
                                    href="https://www.youtube.com/watch?v=1sivrmZTbXk">
                                        <img 
                                            className="youtube-link" 
                                            src={require("../../images/youtube-link.png")} 
                                            alt="Youtube"/>
                                </a>
                                <a 
                                    target="_blank" 
                                    className="instagram-link" 
                                    href="https://www.instagram.com/explore/tags/luvsikangel/">
                                        <img 
                                            className="instagram-link" 
                                            src={require("../../images/insta-link.png")}
                                            alt="Instagram"/>
                                </a>
                                <a 
                                    target="_blank" 
                                    className="facebook-link" 
                                    href="https://facebook.com/luvsikangel/">
                                        <img 
                                            className="facebook-link" 
                                            src={require("../../images/facebook-icon.png" )}
                                            alt="Facebook"/>
                                </a>
                                <a 
                                    target="_blank" 
                                    className="gigsalad-link" 
                                    href="https://www.gigsalad.com/luvsikangel_concord1">
                                        <img 
                                            className="gigsalad-link" 
                                            src={require("../../images/band_icon.png")}
                                            alt="gigsalad"/>
                                </a>
                            </div>
                        </div>
                        {/* <!-- BOTTOM FOOTER TRADEMARKS MOBILE --> */}
                        <div className="bottom-footer-wrapper-mobile" >
                            <div className="bottom-footer-container">
                                <div className="my-row">
                                    <span className="host">
                                        Web-Developer
                                    </span>
                                    <span className="host">
                                        Nick Gentry
                                    </span>
                                </div>
                                <div className="my-row">
                                    <span className="host">
                                        Javascript
                                    </span>
                                    <span className="host">
                                        React
                                    </span>
                                    <span className="host">
                                        CSS
                                    </span>
                                </div>
                                <div className="my-row">
                                    <span className="host">
                                        Hosted on Github
                                    </span>
                                </div>
                                <div className="connect-with-me-wrapper">
                                    <div className="git-linked-cont">
                                        <a 
                                            target="_blank" 
                                            rel="noreferrer" 
                                            className='git-link' 
                                            href="https://github.com/NickGentryBJJ">
                                                <img 
                                                    className="git" 
                                                    src={require("../../images/github_2111425.png")}
                                                    alt="Github"/>
                                        </a>
                                        <a 
                                            target="_blank" 
                                            rel="noreferrer" 
                                            className='linked-in-link' 
                                            href="https://www.linkedin.com/in/nicholas-gentry-2721451b2/">
                                                <img 
                                                    className="linked-in" 
                                                    src={require("../../images/linkedin_1384088.png")}
                                                    alt="LinkedIn"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>        
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
                {/* <!-- BOTTOM FOOTER TRADEMARKS (DESKTOP) --> */}
                <div className="bottom-footer-wrapper">
                    <div className="bottom-footer-container">
                        <div className="my-row meh">
                            <span className="host">
                                Web-Designer
                            </span>
                            <span className="host">
                                Nick Gentry
                            </span>
                        </div>
                        <div className="my-row languages">
                            <span className="host jvscrpt">
                                Javascript
                            </span>
                            <span className="host htmltaa">
                                React
                            </span>
                            <span className="host">
                                CSS
                            </span>
                        </div>
                        <div className="my-row">
                            <span className="host">
                                Hosted on Github
                            </span>
                        </div>
                        <div className="connect-with-me-wrapper">
                            <div className="git-linked-cont">
                                <a 
                                    rel="noreferrer" 
                                    target="_blank" 
                                    className='git-link' 
                                    href="https://github.com/NickGentryBJJ">
                                        <img 
                                            className="git" 
                                            src={require("../../images/github_2111425.png")}
                                            alt="Github"/>
                                </a>
                                <a 
                                    rel="noreferrer" 
                                    target="_blank" 
                                    className='linked-in-link' 
                                    href="https://www.linkedin.com/in/nicholas-gentry-2721451b2/">
                                        <img 
                                            className="linked-in" 
                                            src={require("../../images/linkedin_1384088.png")} 
                                            alt="LinkedIn"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>     
    );
};
export default Footer;