import React from "react";
import './ShowIndex.css';
import ShowIndexItem from "../ShowIndexItem/ShowIndexItem";

function ShowIndex(): JSX.Element {
    const locations: Record<string, string> = {  // Display names object
        "CJ": "CJ's Saloon",
        "CJ2": "CJ's Saloon",
        "FA": "Farrington's",
        "PSB": "Pine Street Bar",
        "PSB2": "Pine Street Bar",
        "PISS": "Pioneer Saloon",
        "MHBC": "Mike Hess Brewing",
        "WI": "WiseGirl"
    };
    const maps: Record<string, string> = { // Google maps loc linkup
        "CJ": "https://www.google.com/maps/dir//548+Contra+Costa+Blvd+G,+Pleasant+Hill,+CA+94523/@37.9795468,-122.1499568,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x80856696a922960f:0xf10181bbf83d8329!2m2!1d-122.0675467!2d37.97953?entry=ttu", 
        "CJ2": "https://www.google.com/maps/dir//548+Contra+Costa+Blvd+G,+Pleasant+Hill,+CA+94523/@37.9795468,-122.1499568,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x80856696a922960f:0xf10181bbf83d8329!2m2!1d-122.0675467!2d37.97953?entry=ttu", 
        "RJ": "https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUqEwgBEC4YrwEYxwEYsQMYgAQYjgUyDQgAEAAY4wIYsQMYgAQyEwgBEC4YrwEYxwEYsQMYgAQYjgUyBwgCEAAYgAQyBwgDEAAYgAQyBwgEEAAYgAQyBwgFEAAYgAQyBwgGEAAYgAQyBggHEEUYOTITCAgQLhiDARivARjHARixAxiABDIHCAkQABiABNIBCDI5OTBqMGo3qAIAsAIA&um=1&ie=UTF-8&fb=1&gl=us&sa=X&geocode=Kac0WHuXYYWAMWFP-erqPUsd&daddr=2112+N+Main+St,+Walnut+Creek,+CA+94596",
        "FA": "https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUqEggBEC4YChivARjHARiABBiOBTIGCAAQRRg5MhIIARAuGAoYrwEYxwEYgAQYjgUyDwgCEC4YChivARjHARiABDISCAMQLhgKGK8BGMcBGIAEGJgFMgkIBBAAGAoYgAQyCQgFEAAYChiABDIJCAYQABgKGIAEMg8IBxAuGAoYrwEYxwEYgAQyCQgIEAAYChiABNIBCDQxMjBqMGo0qAIAsAIA&um=1&ie=UTF-8&fb=1&gl=us&sa=X&geocode=KYdtcRw4YYWAMREdcjGHr53U&daddr=1938+Contra+Costa+Blvd,+Pleasant+Hill,+CA+94523",
        "PSB": "https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUqFQgCEC4YJxivARjHARiABBiKBRiOBTIGCAAQRRg5MgYIARBFGEAyFQgCEC4YJxivARjHARiABBiKBRiOBTIHCAMQABiABDINCAQQABiDARixAxiABDIKCAUQABixAxiABDIQCAYQLhivARjHARiABBiOBTINCAcQLhixAxiABBiKBdIBCDI0MThqMGo3qAIAsAIA&um=1&ie=UTF-8&fb=1&gl=us&sa=X&geocode=KVUqXV-354-AMSZenMcXDet2&daddr=875+Rincon+Ave,+Livermore,+CA+94551",
        "PSB2": "https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUqFQgCEC4YJxivARjHARiABBiKBRiOBTIGCAAQRRg5MgYIARBFGEAyFQgCEC4YJxivARjHARiABBiKBRiOBTIHCAMQABiABDINCAQQABiDARixAxiABDIKCAUQABixAxiABDIQCAYQLhivARjHARiABBiOBTINCAcQLhixAxiABBiKBdIBCDI0MThqMGo3qAIAsAIA&um=1&ie=UTF-8&fb=1&gl=us&sa=X&geocode=KVUqXV-354-AMSZenMcXDet2&daddr=875+Rincon+Ave,+Livermore,+CA+94551",
        "PISS": "https://www.google.com/maps/dir//Pioneer+Saloon,+2925+Woodside+Rd,+Woodside,+CA+94062/@37.4289167,-122.2529443,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x808fa4111018f733:0x76787400b7827090!2m2!1d-122.2503694!2d37.4289167!3e0?entry=ttu",
        "MHBC": "https://www.google.com/maps/dir//2313+Oak+Grove+Rd,+Walnut+Creek,+CA+94598/@37.9286953,-122.0990693,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x8085605e0bf70651:0xcd2f8752e9eb7b38!2m2!1d-122.0166783!2d37.9287131?entry=ttu",
        "WI": "https://www.google.com/maps/dir//1932+Oak+Park+Blvd,+Pleasant+Hill,+CA+94523/@37.93408,-122.1577401,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x8085616778c4755b:0x69d0da664a3e9e21!2m2!1d-122.07534!2d37.9340441?entry=ttu"
    };
    const dates: Record<string, Record<string, string>> = { // dates object, all coming dates WILL be displayed
        "FA": {                                             // ADD DATES SOONEST-LATEST
            "month": "April",                               // REMOVE OLD DATES WHEN POSSIBLE
            "day": "12th",
            "time": "8:00PM - 12:00AM",
            "year": "2024",
            "check": "12"
        },
        "PSB2": {
            "month": "April",
            "day": "20th",
            "time": "9:00PM - 10:30AM",
            "year": "2024",
            "check": "20"
        },
        "CJ": {
            "month": "April",
            "day": "21st",
            "time": "12:00PM",
            "year": "2024",
            "check": "21"
        },
        "PSB": {
            "month": "May",
            "day": "25th",
            "time": "9:00PM - 1:00AM",
            "year": "2024",
            "check": "25"
        },
        "CJ2": {
            "month": "June",
            "day": "9th",
            "time": "4:00PM - 8:00PM",
            "year": "2024",
            "check": "9"
        },
        "MHBC": {
            "month": "June",
            "day": "23rd",
            "time": "5:00PM - 7:30PM",
            "year": "2024",
            "check": "23"
        },
        "WI": {
            "month": "July",
            "day": "19th",
            "time": "7:00PM - 10:00PM",
            "year": "2024",
            "check": "19"
        },
        "PISS": {
            "month": "August",
            "day": "10th",
            "time": "8:30PM - 12:00AM",
            "year": "2024",
            "check": "10"
        }
    };
    return (
        <div id="show-section">
            <div className="show-section-wrapper">
                <h1 className="show-title">
                    LuvSikAngel Live!
                </h1>                
                {/* ITERATE THROUGH DATES OBJECT */}
                {Object.entries(dates).map(([key, value]: [string, Record<string, string>]): JSX.Element | null => { 
                    const showDate = new Date(`${value.year}-${value.month}-${value.check}`); // create valid json date
                    const currentDate: Date = new Date();  // get current date                                     
                    if (showDate.getTime() >  currentDate.getTime()) { // ensure no old shows get displayed
                        return (
                            <ShowIndexItem // initialize showIndexItem component for each valid date object
                                key={key} 
                                location={locations[key]}
                                maps={maps[key]}
                                year={value.year}
                                month={value.month}
                                day={value.day}
                                time={value.time}
                                />
                        );
                    } else {
                        return null;
                    }
                })}
            </div>
        </div>
    );
};
export default ShowIndex;