import React from "react";
import './ShowIndex.css';
import ShowIndexItem from "../ShowIndexItem/ShowIndexItem";

function ShowIndex(): JSX.Element {
    const dates: Record<string, Record<string, string>> = { 
        "PSB": {
            "month": "May",
            "check": "25",
            "day": "25th",
            "time": "9:00PM - 1:00AM",
            "year": "2024",
            "maps": "https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUqFQgCEC4YJxivARjHARiABBiKBRiOBTIGCAAQRRg5MgYIARBFGEAyFQgCEC4YJxivARjHARiABBiKBRiOBTIHCAMQABiABDINCAQQABiDARixAxiABDIKCAUQABixAxiABDIQCAYQLhivARjHARiABBiOBTINCAcQLhixAxiABBiKBdIBCDI0MThqMGo3qAIAsAIA&um=1&ie=UTF-8&fb=1&gl=us&sa=X&geocode=KVUqXV-354-AMSZenMcXDet2&daddr=875+Rincon+Ave,+Livermore,+CA+94551",
            "name": "Pine Street Bar"
        },
        "CJ2": {
            "month": "June",
            "check": "9",
            "day": "9th",
            "time": "4:00PM - 8:00PM",
            "year": "2024",
            "maps": "https://www.google.com/maps/dir//548+Contra+Costa+Blvd+G,+Pleasant+Hill,+CA+94523/@37.9795468,-122.1499568,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x80856696a922960f:0xf10181bbf83d8329!2m2!1d-122.0675467!2d37.97953?entry=ttu", 
            "name": "CJ's Saloon"
        },
        "MHBC": {
            "month": "June",
            "check": "23",
            "day": "23rd",
            "time": "5:00PM - 7:30PM",
            "year": "2024",
            "maps": "https://www.google.com/maps/dir//2313+Oak+Grove+Rd,+Walnut+Creek,+CA+94598/@37.9286953,-122.0990693,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x8085605e0bf70651:0xcd2f8752e9eb7b38!2m2!1d-122.0166783!2d37.9287131?entry=ttu",
            "name": "Mike Hess Brewing"
        },
        "WI": {
            "month": "July",
            "check": "19",
            "day": "19th",
            "time": "7:00PM - 10:00PM", 
            "year": "2024",
            "maps": "https://www.google.com/maps/dir//1932+Oak+Park+Blvd,+Pleasant+Hill,+CA+94523/@37.93408,-122.1577401,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x8085616778c4755b:0x69d0da664a3e9e21!2m2!1d-122.07534!2d37.9340441?entry=ttu",
            "name": "WiseGirl"
        },
        "RP": {
            "month": "July",
            "check": "21",
            "day": "21st",
            "time": "2:00PM - 6:00PM", 
            "year": "2024",
            "maps": "https://www.google.com/maps/dir//3893+N+Willow+Rd,+Bethel+Island,+CA+94511/@38.0345895,-121.7055546,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x809aab6cde10d63d:0xe9872c3b66ca1568!2m2!1d-121.623174!2d38.0346367?entry=ttu",
            "name": "The Rusty Porthole"
        },
        "PISS": {
            "month": "August",
            "check": "10",
            "day": "10th",
            "time": "8:30PM - 12:00AM",
            "year": "2024",
            "maps": "https://www.google.com/maps/dir//Pioneer+Saloon,+2925+Woodside+Rd,+Woodside,+CA+94062/@37.4289167,-122.2529443,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x808fa4111018f733:0x76787400b7827090!2m2!1d-122.2503694!2d37.4289167!3e0?entry=ttu",
            "name": "Pioneer Saloon"
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