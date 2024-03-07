import React from "react";
import "./ShowIndexItem.css";

function ShowIndexItem(props) {
    const {location, month, day, time, year} = props;
    const locations = { // Google maps loc linkup
        "CJ's Saloon": "", 
        "Retro Junkie": "",
        "Farington's": "",
        "Pine Street Bar": "",
        "Pioneer Saloon": "",
        "Mike Hess Brew Club": ""
    };

    return (
        <div className="show-item-wrapper">
            <div className="date-section">
                <div className="month-day">
                    <span className="month-day-text">
                        {month} {day}, {year}
                    </span>
                </div>
                <div className="time">
                    <span className="time-text">
                        {time}
                    </span>
                </div>
            </div>
            <div className="venue">
                <a className="maps-link" href={locations[location]}>
                    <span className="location">
                        {location}
                    </span>
                </a>
            </div>
        </div>
    );
};
export default ShowIndexItem;