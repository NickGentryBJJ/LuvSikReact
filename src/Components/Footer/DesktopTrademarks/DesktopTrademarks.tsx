import React from "react";
import "./DesktopTrademarks.css";
import githubPic from "../../../images/github_2111425.png";
import linkedInPic from "../../../images/linkedin_1384088.png";

function DesktopTrademarks(): JSX.Element {
    return (
        <div className="bottom-footer-wrapper">
            <div className="bottom-footer-container-d">
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
                        TypeScript
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
                                    src={githubPic}
                                    alt="Github"/>
                        </a>
                        <a 
                            rel="noreferrer" 
                            target="_blank" 
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
export default DesktopTrademarks;