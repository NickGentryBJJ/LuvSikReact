import React from "react";
import "./AboutIndex.css";
import AboutIndexItem from "../AboutIndexItem/AboutIndexItem";

function AboutIndex() {
    const names = ["Angel", "Rick", "Dave", "Joe"];
    return (
        <div className="about-index-wrapper">
            <div className="about-index-container">
                <h1 className="about-title">
                    Meet The Band!
                </h1>
                {names.map((name, index) => (
                    <AboutIndexItem key={index} name={name} />
                ))}
            </div>
        </div>
    );
};
export default AboutIndex;