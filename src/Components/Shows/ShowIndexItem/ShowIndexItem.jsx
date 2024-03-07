import React from "react";
import "./ShowIndexItem.css";

function ShowIndexItem(props) {
    const {location, month, day, time} = props;
    // const locations = {
    //     "CJ's Saloon":, // Google maps loc linkup
    //     "Retro Junkie":,
    //     "Farington's":,
    //     "Pine Street Bar:",
    //     "Pioneer Saloon":,
    //      "Mike Hess Brew Club"
    // }

    return (
        <div className="show-item-wrapper">
            <div className="show-item">
                <div className="date-section">
                    <div className="month">
                        {month}
                    </div>
                    <div className="day">
                        {day}
                    </div>
                    <div className="time">
                        {time}
                    </div>
                </div>
                <div className="venue">
                    <a href={locations[location]}>
                        {location}
                    </a>
                </div>
            </div>
        </div>
    )
};
export default ShowIndexItem;