import React from "react";
import './ShowIndex.css';
import ShowIndexItem from "../ShowIndexItem/ShowIndexItem";

function ShowIndex(): JSX.Element {
    const dates: Record<string, Record<string, string>> = { 
        "PISS": {
            "month": "August",
            "check": "24",
            "day": "24th",
            "time": "9:00PM - 1:00AM",
            "year": "2024",
            "maps": "https://www.google.com/maps/place/R+PLACE+MUSIC+CLUB/@37.6845737,-121.7688239,17z/data=!3m1!4b1!4m6!3m5!1s0x808fe7a0037bdd5f:0xe3dc06fc8ac34ad9!8m2!3d37.6845695!4d-121.766249!16s%2Fg%2F1t_tkjmx?entry=ttu",
            "name": "R Place Music Club"
        },
             "iclub": {
            "month": "August",
            "check": "29",
            "day": "29th",
            "time": "8:30PM - 11:00PM",
            "year": "2024",
            "maps": "https://www.google.com/maps/place/Number+1+Broadway/@37.221714,-121.9871003,17z/data=!3m1!4b1!4m6!3m5!1s0x808e35fbab00ff3d:0x462cee0ede21d857!8m2!3d37.2217098!4d-121.9845254!16s%2Fg%2F1tnqh6ry?entry=ttu",
            "name": "Number 1 Broadway"
        },
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
