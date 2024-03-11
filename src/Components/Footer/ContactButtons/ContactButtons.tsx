import React from "react";
import "./ContactButtons.css";
import emailPic from "../../../images/Email.png";

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
                            src={emailPic}
                            alt="Email"/>
                    </button>
                </a>
            </div>
        </div> 
    );
};
export default ContactButtons;