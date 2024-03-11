import React from "react";
import "./Social.css";

function Social(): JSX.Element {
    const names: string[] = ["youtube", "facebook", "gig-salad"]
    const links: Record<string, string> = {
        "youtube": "https://www.youtube.com/watch?v=1sivrmZTbXk",
        "facebook": "https://facebook.com/luvsikangel/",
        "gig-salad": "https://www.gigsalad.com/luvsikangel_concord1"
    };
    const images: Record<string, string> = {
        "youtube": require("../../../images/youtube-link.png"),
        "facebook": require("../../../images/facebook-icon.png"),
        "gig-salad": require("../../../images/band_icon.png")
    };
    return (
        <div className="social-container">
            {names.map((name: string, index: number) => (
                <div key={index}>
                    <a href={links[name]} target="_blank" rel="noreferrer" className="social-link" >
                        <img src={images[name]} alt="name" className="social-image" />
                    </a>
                </div>
            ))};
        </div>
    );
};
export default Social;