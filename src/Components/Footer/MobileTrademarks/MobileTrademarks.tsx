import React from "react";
import "./MobileTrademarks.css"
import githubPic from "../../../images/github_2111425.png";
import linkedInPic from "../../../images/linkedin_1384088.png";


function MobileTrademarks(): JSX.Element {
    return (
        <div className="bottom-footer-wrapper-mobile">
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
                        TypeScript
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
                                    src={githubPic}
                                    alt="Github"/>
                        </a>
                        <a 
                            target="_blank" 
                            rel="noreferrer" 
                            className='linked-in-link' 
                            href="https://www.linkedin.com/in/nicholas-gentry-2721451b2/">
                                <img 
                                    className="linked-in" 
                                    src={linkedInPic}
                                    alt="LinkedIn"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default MobileTrademarks;