import React from "react";
import './ShowIndex.css';
import ShowIndexItem from "../ShowIndexItem/ShowIndexItem";

function ShowIndex(): JSX.Element {
    const dates: Record<string, Record<string, string>> = { 
        
        "CLAYTON": {
            "month": "September",
            "check": "6",
            "day": "6th",
            "time": "9:00PM - 1:00AM",
            "year": "2024",
            "maps": "https://www.google.com/maps/dir//clayton+club/@37.8695785,-122.4311709,10z/data=!4m8!4m7!1m0!1m5!1m1!1s0x80855f128f35a14d:0x4205df8cfb67d883!2m2!1d-121.9350468!2d37.9410858?entry=ttu",
            "name": "Clayton Club Saloon"
        },
        "CLAYTON2": {
            "month": "October",
            "check": "4",
            "day": "4th",
            "time": "9:00PM - 1:00AM",
            "year": "2024",
            "maps": "https://www.google.com/maps/dir//clayton+club/@37.8695785,-122.4311709,10z/data=!4m8!4m7!1m0!1m5!1m1!1s0x80855f128f35a14d:0x4205df8cfb67d883!2m2!1d-121.9350468!2d37.9410858?entry=ttu",
            "name": "Clayton Club Saloon"
        },
        "antlers": {
            "month": "October",
            "check": "26",
            "day": "26th",
            "time": "",
            "year": "2024",
            "maps": "https://www.google.com/maps/dir//2284+San+Pablo+Ave,+Pinole,+CA+94564/@38.0055802,-122.3736021,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x808576e1210dcdff:0x8b6432f9edb36ae3!2m2!1d-122.2911595!2d38.0055526?entry=ttu",
            "name": "Antlers Tavern"
        }
    };
    return (
        <div id="show-section">
            <div className="show-section-wrapper">
                <h1 className="show-title">
                    LuvSikAngel Live!
                </h1>                
                {Object.entries(dates).map(([key, value]: [string, Record<string, string>]): JSX.Element | null => { 
                        return (
                            <ShowIndexItem // initialize showIndexItem component for each valid date object
                                key={key} 
                                location={value.name}
                                maps={value.maps}
                                year={value.year}
                                month={value.month}
                                day={value.day}
                                time={value.time}
                            />
                        );
                })}
            </div>
        </div>
    );
};
export default ShowIndex;
