import React from "react";
import './ShowIndex.css';
import ShowIndexItem from "../ShowIndexItem/ShowIndexItem";

function ShowIndex() {
    const locations = {  // Location Legend
        "CJ": "CJ's Saloon",
        "RJ": "Retro Junkie",
        "FA": "Farington's",
        "PSB": "Pine Street Bar",
        "PISS": "Pioneer Saloon"
    };
    const dates = {
        "FA": {
            "month": "April",
            "day": "12th",
            "time": "8:00PM - Midnight"
        },
        "PSB": {
            "month": "May",
            "day": "25th",
            "time": "9:00PM - 1:00AM"
        },
        "PISS": {
            "month": "August",
            "day": "10th",
            "time": "8:30PM - 12AM"
        }
    }
    return (
        <div id="show-section">
            <div className="show-container" >
                <ShowIndexItem location={locations["FA"]} month={dates["FA"].month} day={dates["FA"].day} time={dates["FA"].time} />
            </div>
        </div>
    );
};
export default ShowIndex;