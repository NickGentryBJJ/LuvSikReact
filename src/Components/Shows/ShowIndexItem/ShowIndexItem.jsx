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
                {location}, {month}, {day}, {time}
            </div>
        </div>
    )
};
export default ShowIndexItem;