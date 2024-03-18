import React from "react";
import "./Social.css";
import youtubePic from "../../../images/youtube-link.png";    /* <a href="https://www.freepik.com/search">Icon by Enamo Studios</a> */
import facebookPic from "../../../images/facebook-icon.png";  /* <a href="https://www.freepik.com/search">Icon by Ruslan Babkin</a> */
import gigSaladPic from "../../../images/band_icon.png";


function Social(): JSX.Element {
    const links: Record<string, Record<string, string>> = {
        "youtube": {
            "image": youtubePic,
            "link": "https://www.youtube.com/watch?v=1sivrmZTbXk"
        },
        "facebook": {
            "image": facebookPic,
            "link": "https://facebook.com/luvsikangel/"
        },
        "gig-salad": {
            "image": gigSaladPic,
            "link": "https://www.gigsalad.com/luvsikangel_concord1"
        }
    }
    return (
        <div className="social-container">
            {Object.entries(links).map(([key, value]: [string, Record<string, string>]): JSX.Element => ( 
                    <a target="_blank" rel="noreferrer" className="social-link" href={value.link}>
                        <img 
                            className="social-image"
                            src={value.image} 
                            alt={key} 
                            key={key}
                        />
                    </a>
            ))}
        </div>
    );
};
export default Social;