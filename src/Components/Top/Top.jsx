import React from "react";
import './Top.css';

function Top() {
    return (
        <div className="top">
            <img className="logo" src={require("../../images/band_icon.png")} alt=""/>       
            <iframe 
            id="performance"
            className="perf-vid"
            src="https://www.youtube.com/embed/uwVuXDFLWao?si=z1D1wBjWTSTsnITq"
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen/>
        </div>
    )
}
export default Top;