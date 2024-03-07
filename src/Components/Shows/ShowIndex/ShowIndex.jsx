import React from "react";
import './ShowIndex.css';
import ShowIndexItem from "../ShowIndexItem/ShowIndexItem";

function ShowIndex() {
    const locations = {  // Location Abbreviations
        "CJ": "CJ's Saloon",
        "FA": "Farington's",
        "PSB": "Pine Street Bar",
        "PISS": "Pioneer Saloon",
        "MHBC": "Mike Hess Brew Club"
    };
    const dates = {
        "FA": {
            "month": "April",
            "day": "12th",
            "time": "8:00PM - 12AM"
        },
        "PSB": {
            "month": "May",
            "day": "25th",
            "time": "9:00PM - 1:00AM"
        },
        "MHBC": {
            "month": "June",
            "day": "9th",
            "time": "4:00pm - 8:00pm"
        },
        "MHBC2": {
            "month": "June",
            "day": "23rd",
            "time": "5:00PM - 7:30PM"
        },
        "PISS": {
            "month": "August",
            "day": "10th",
            "time": "8:30PM - 12AM"
        }
    };
        return (
        <div id="show-section">
            <div className="show-container" >
                <h1 className="show-title">
                    LuvSikAngel Live!
                </h1>
                <ShowIndexItem location={locations["FA"]} month={dates["FA"].month} day={dates["FA"].day} time={dates["FA"].time} />
                <ShowIndexItem location={locations["PSB"]} month={dates["PSB"].month} day={dates["PSB"].day} time={dates["PSB"].time} />
                <ShowIndexItem location={locations["MHBC"]} month={dates["MHBC"].month} day={dates["MHBC"].day} time={dates["MHBC"].time} />
                <ShowIndexItem location={locations["MHBC"]} month={dates["MHBC2"].month} day={dates["MHBC2"].day} time={dates["MHBC2"].time} />
                <ShowIndexItem location={locations["PISS"]} month={dates["PISS"].month} day={dates["PISS"].day} time={dates["PISS"].time} />
            </div>
        </div>
    );
};
export default ShowIndex;