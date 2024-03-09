import React from "react";
import './ShowIndex.css';
import ShowIndexItem from "../ShowIndexItem/ShowIndexItem";

function ShowIndex() {
    const locations = {  // Location Abbreviations
        "CJ": "CJ's Saloon",
        "FA": "Farrington's",
        "PSB": "Pine Street Bar",
        "PISS": "Pioneer Saloon",
        "MHBC": "Mike Hess Brewing",
        "WI": "WiseGirl"
    };
    const dates = {
        "FA": {
            "month": "April",
            "day": "12th",
            "time": "8:00PM - 12:00AM",
            "year": "2024"
        },
        "CJ": {
            "month": "April",
            "day": "21st",
            "time": "12:00PM",
            "year": "2024"
        },
        "PSB": {
            "month": "May",
            "day": "25th",
            "time": "9:00PM - 1:00AM",
            "year": "2024"
        },
        "CJ2": {
            "month": "June",
            "day": "9th",
            "time": "4:00PM - 8:00PM",
            "year": "2024"
        },
        "MHBC": {
            "month": "June",
            "day": "9th",
            "time": "4:00pm - 8:00pm",
            "year": "2024"
        },
        "WI": {
            "month": "July",
            "day": "19th",
            "time": "7:00pm - 10:00pm",
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
                <ShowIndexItem year ={dates["CJ"].year} location={locations["CJ"]} month={dates["CJ"].month} day={dates["CJ"].day} time={dates["CJ"].time} />
                <ShowIndexItem year ={dates["PSB"].year} location={locations["PSB"]} month={dates["PSB"].month} day={dates["PSB"].day} time={dates["PSB"].time} />
                <ShowIndexItem year ={dates["CJ2"].year} location={locations["CJ"]} month={dates["CJ2"].month} day={dates["CJ2"].day} time={dates["CJ2"].time} />
                <ShowIndexItem year ={dates["MHBC"].year} location={locations["MHBC"]} month={dates["MHBC"].month} day={dates["MHBC"].day} time={dates["MHBC"].time} />
                <ShowIndexItem year ={dates["WI"].year} location={locations["WI"]} month={dates["WI"].month} day={dates["WI"].day} time={dates["WI"].time} />
                <ShowIndexItem year ={dates["PISS"].year} location={locations["PISS"]} month={dates["PISS"].month} day={dates["PISS"].day} time={dates["PISS"].time} />
            </div>
        </div>
    );
};
export default ShowIndex;