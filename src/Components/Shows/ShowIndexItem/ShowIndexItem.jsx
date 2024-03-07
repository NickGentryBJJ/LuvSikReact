import React from "react";
import "./ShowIndexItem.css";

function ShowIndexItem(props) {
    const {location, month, day, time, year} = props;
    const locations = { // Google maps loc linkup
        "CJ's Saloon": "https://www.google.com/maps/dir//548+Contra+Costa+Blvd+G,+Pleasant+Hill,+CA+94523/@37.9795468,-122.1499568,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x80856696a922960f:0xf10181bbf83d8329!2m2!1d-122.0675467!2d37.97953?entry=ttu", 
        "Retro Junkie": "https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUqEwgBEC4YrwEYxwEYsQMYgAQYjgUyDQgAEAAY4wIYsQMYgAQyEwgBEC4YrwEYxwEYsQMYgAQYjgUyBwgCEAAYgAQyBwgDEAAYgAQyBwgEEAAYgAQyBwgFEAAYgAQyBwgGEAAYgAQyBggHEEUYOTITCAgQLhiDARivARjHARixAxiABDIHCAkQABiABNIBCDI5OTBqMGo3qAIAsAIA&um=1&ie=UTF-8&fb=1&gl=us&sa=X&geocode=Kac0WHuXYYWAMWFP-erqPUsd&daddr=2112+N+Main+St,+Walnut+Creek,+CA+94596",
        "Farrington's": "https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUqEggBEC4YChivARjHARiABBiOBTIGCAAQRRg5MhIIARAuGAoYrwEYxwEYgAQYjgUyDwgCEC4YChivARjHARiABDISCAMQLhgKGK8BGMcBGIAEGJgFMgkIBBAAGAoYgAQyCQgFEAAYChiABDIJCAYQABgKGIAEMg8IBxAuGAoYrwEYxwEYgAQyCQgIEAAYChiABNIBCDQxMjBqMGo0qAIAsAIA&um=1&ie=UTF-8&fb=1&gl=us&sa=X&geocode=KYdtcRw4YYWAMREdcjGHr53U&daddr=1938+Contra+Costa+Blvd,+Pleasant+Hill,+CA+94523",
        "Pine Street Bar": "https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUqFQgCEC4YJxivARjHARiABBiKBRiOBTIGCAAQRRg5MgYIARBFGEAyFQgCEC4YJxivARjHARiABBiKBRiOBTIHCAMQABiABDINCAQQABiDARixAxiABDIKCAUQABixAxiABDIQCAYQLhivARjHARiABBiOBTINCAcQLhixAxiABBiKBdIBCDI0MThqMGo3qAIAsAIA&um=1&ie=UTF-8&fb=1&gl=us&sa=X&geocode=KVUqXV-354-AMSZenMcXDet2&daddr=875+Rincon+Ave,+Livermore,+CA+94551",
        "Pioneer Saloon": "https://www.google.com/maps/dir//Pioneer+Saloon,+2925+Woodside+Rd,+Woodside,+CA+94062/@37.4289167,-122.2529443,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x808fa4111018f733:0x76787400b7827090!2m2!1d-122.2503694!2d37.4289167!3e0?entry=ttu",
        "Mike Hess Brewing": "https://www.google.com/maps/dir//2313+Oak+Grove+Rd,+Walnut+Creek,+CA+94598/@37.9286953,-122.0990693,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x8085605e0bf70651:0xcd2f8752e9eb7b38!2m2!1d-122.0166783!2d37.9287131?entry=ttu"
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
                <a className="maps-link" href={locations[location]} target="_blank">
                    <span className="location">
                        {location}
                    </span>
                </a>
            </div>
        </div>
    );
};
export default ShowIndexItem;