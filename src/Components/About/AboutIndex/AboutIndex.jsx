import React from "react";
import "./AboutIndex.css";
import AboutIndexItem from "../AboutIndexItem/AboutIndexItem";

function AboutIndex() {
    const names = ["Rick", "Angel"];
    return (
        <div className="about-index-wrapper">
            <div className="about-index-container">
                {names.map((name, index) => (
                    <AboutIndexItem key={index} name={name} />
                ))}
            </div>
        </div>
    );
};
export default AboutIndex;