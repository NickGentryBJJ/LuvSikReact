import React from "react";
import './Top.css';

function Top(): JSX.Element {
    return (
        <div className="top">
            <img className="logo" src={require("../../images/band_icon.png")} alt=""/>       
            <iframe 
            id="performance"
            className="perf-vid"
            src="https://www.youtube.com/embed/uwVuXDFLWao?si=z1D1wBjWTSTsnITq"
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"/>
        </div>
    )
}
export default Top;