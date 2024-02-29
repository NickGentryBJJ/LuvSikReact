import React from "react";
import './Shows.css';

function Shows() {
    return (
        <div id="show-section">
            <div className="upcoming-shows-wrapper">
                <h1 className="title">
                    UPCOMING SHOWS
                </h1>
                <div className="upcoming-shows">
                    <div className="show-card">
                        <div className="text">
                            <a href="https://www.google.com/maps/dir//875+Rincon+Ave,+Livermore,+CA+94551/@37.6880971,-121.8664695,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x808fe7b75f5d2a55:0x76eb0d17c79c5e26!2m2!1d-121.7839617!2d37.6881258?entry=ttu">
                                <p className="venue-name">
                                    PINE STREET BAR
                                </p>
                            </a> <br/>
                            <p className="date">
                                May 25th, 2024
                            </p>
                        </div>
                    </div>
                    <div className="show-card">
                        <div className="text">
                            <a href="https://www.google.com/maps/dir//548+Contra+Costa+Blvd+G,+Pleasant+Hill,+CA+94523/@37.9795447,-122.1498296,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x80856696a922960f:0xf10181bbf83d8329!2m2!1d-122.0675467!2d37.97953?entry=ttu">
                                <p className="venue-name">
                                    CJ'S SALOON
                                </p>
                            </a> <br/>
                            <p className="date">
                                June 9th, 2024
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="upcoming-shows-wrapper">
                <h1 className="title">
                    PAST SHOWS
                </h1>
                <div className="upcoming-shows">
                    <div className="show-card">
                        <div className="text">
                            <a href="https://www.google.com/maps/dir//Retro+Junkie,+2112+N+Main+St,+Walnut+Creek,+CA+94596/@37.9020719,-122.1317482,11.44z/data=!4m9!4m8!1m0!1m5!1m1!1s0x808561977b5834a7:0x1d4b3deaeaf94f61!2m2!1d-122.0645267!2d37.9088934!3e0?entry=ttu">
                                <p className="venue-name">
                                    RETRO JUNKIE
                                </p>
                            </a> <br/>
                            <p className="date">
                                January 18th, 2024
                            </p>
                        </div>
                    </div>         
                    <div className="show-card">
                        <div className="text">
                            <a href="https://www.google.com/maps/dir//548+Contra+Costa+Blvd+G,+Pleasant+Hill,+CA+94523/@37.9795447,-122.1498296,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x80856696a922960f:0xf10181bbf83d8329!2m2!1d-122.0675467!2d37.97953?entry=ttu">
                                <p className="venue-name">
                                    CJ'S SALOON
                                </p>    
                            </a> <br/>
                            <p className="date">
                                December 16th, 2023
                            </p>
                        </div>
                    </div>
                    <div className="show-card">
                        <div className="text">
                            <a href="https://www.google.com/maps/dir//2284+San+Pablo+Ave,+Pinole,+CA+94564/@38.0055802,-122.3736021,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x808576e1210dcdff:0x8b6432f9edb36ae3!2m2!1d-122.2911595!2d38.0055526?entry=ttu">
                                <p className="venue-name">
                                    ANTLERS TAVERN
                                </p>
                            </a> <br/>
                            <p className="date">
                                October 28th, 2023
                            </p>
                        </div>
                    </div>             
                </div>
            </div>
        </div>
    );
};
export default Shows;