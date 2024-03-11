import React from "react";
import "./ShowIndexItem.css";

interface ShowIndexItemProps {
    location: string;
    month: string;
    day: string;
    time: string;
    year: string;
    maps: string;
}

function ShowIndexItem(props: ShowIndexItemProps) {
    const {location, month, day, time, year, maps} = props;
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
                <a className="maps-link" href={maps} target="_blank" rel="noreferrer">
                    <span className="location">
                        {location}
                    </span>
                </a>
            </div>
        </div>
    );
};
export default ShowIndexItem;