import React from "react";
import './ShowIndex.css';
import ShowIndexItem from "../ShowIndexItem/ShowIndexItem";

function ShowIndex() {
    const locations = {  // Location Abbreviations
        "CJ": "CJ's Saloon",
        "FA": "Farington's",
        "PSB": "Pine Street Bar",
        "PISS": "Pioneer Saloon",
        "MHBC": "Mike Hess Brewing"
    };
    const dates = {
        "FA": {
            "month": "April",
            "day": "12th",
            "time": "8:00PM - 12:00AM",
            "year": "2024"
        },
        "PSB": {
            "month": "May",
            "day": "25th",
            "time": "9:00PM - 1:00AM",
            "year": "2024"
        },
        "MHBC": {
            "month": "June",
            "day": "9th",
            "time": "4:00pm - 8:00pm",
            "year": "2024"
        },
        "MHBC2": {
            "month": "June",
            "day": "23rd",
            "time": "5:00PM - 7:30PM",
            "year": "2024"
        },
        "PISS": {
            "month": "August",
            "day": "10th",
            "time": "8:30PM - 12:00AM",
            "year": "2024"
        }
    };
    return (
        <div id="show-section">
            <div className="show-container" >
                <h1 className="show-title">
                    LuvSikAngel Live!
                </h1>
                <ShowIndexItem year ={dates["FA"].year} location={locations["FA"]} month={dates["FA"].month} day={dates["FA"].day} time={dates["FA"].time} />
                <ShowIndexItem year ={dates["PSB"].year} location={locations["PSB"]} month={dates["PSB"].month} day={dates["PSB"].day} time={dates["PSB"].time} />
                <ShowIndexItem year ={dates["MHBC"].year} location={locations["MHBC"]} month={dates["MHBC"].month} day={dates["MHBC"].day} time={dates["MHBC"].time} />
                <ShowIndexItem year ={dates["MHBC2"].year} location={locations["MHBC"]} month={dates["MHBC2"].month} day={dates["MHBC2"].day} time={dates["MHBC2"].time} />
                <ShowIndexItem year ={dates["PISS"].year} location={locations["PISS"]} month={dates["PISS"].month} day={dates["PISS"].day} time={dates["PISS"].time} />
            </div>
        </div>
    );
};
export default ShowIndex;