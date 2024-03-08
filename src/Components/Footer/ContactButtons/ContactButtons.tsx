import React from "react";
import "./ContactButtons.css";

function ContactButtons(): JSX.Element {
    return (
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
                            src={require("../../../images/Email.png")}
                            alt="Email"/>
                    </button>
                </a>
            </div>
        </div> 
    );
};
export default ContactButtons;