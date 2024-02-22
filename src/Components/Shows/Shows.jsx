import React from "react";
import './Shows.css';

function Shows() {
    return (
        <div id="show-section">
            <div className="upcoming-shows-wrapper">
                <h1 className="title title2">
                    UPCOMING SHOWS
                </h1>
            <div className="upcoming-shows">
                <div className="show-card">
                    <div className="text">
                        <a href="https://www.google.com/maps/dir//548+Contra+Costa+Blvd+G,+Pleasant+Hill,+CA+94523/@37.9795447,-122.1498296,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x80856696a922960f:0xf10181bbf83d8329!2m2!1d-122.0675467!2d37.97953?entry=ttu">
                            <p className="venue-name">
                                CJ'S
                            </p>
                        </a> <br/>
                        <p className="date">
                            June 9th
                        </p>
                    </div>
                </div>
                <div className="show-card">
                    <div className="text">
                        <a href="https://www.google.com/maps/dir//Retro+Junkie,+2112+N+Main+St,+Walnut+Creek,+CA+94596/@37.9020719,-122.1317482,11.44z/data=!4m9!4m8!1m0!1m5!1m1!1s0x808561977b5834a7:0x1d4b3deaeaf94f61!2m2!1d-122.0645267!2d37.9088934!3e0?entry=ttu">
                            <p className="venue-name">
                                RETRO JUNKIE
                            </p>
                        </a> <br/>
                        <p className="date">
                            November 9th, 7:00pm-8:30pm
                        </p>
                    </div>
                </div>
                <div className="show-card">
                    <div className="text">
                        <a href="https://www.google.com/maps/dir//the+bistro+hayward/@37.6945316,-122.17381,11z/data=!3m1!5s0x808f93d85d0d4d8d:0x7cb6fcdb2a3015f1!4m8!4m7!1m0!1m5!1m1!1s0x808f93d867ff16f9:0x968874972c3cc23d!2m2!1d-122.082441!2d37.6728557?entry=ttu">
                            <p className="venue-name">
                                BISTRO
                            </p>
                        </a> <br/>
                        <p className="date">
                            December 6th, 7:00pm-9:30pm
                        </p>
                    </div>
                </div>             
                <div className="show-card">
                        <div className="text">
                            <a href="https://www.google.com/maps/dir//548+Contra+Costa+Blvd+G,+Pleasant+Hill,+CA+94523/@37.9795447,-122.1498296,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x80856696a922960f:0xf10181bbf83d8329!2m2!1d-122.0675467!2d37.97953?entry=ttu">
                                <p className="venue-name">
                                    CJ'S
                                </p>
                            </a> <br/>
                            <p className="date">
                                January 21st, 4:00pm-8:00pm
                            </p>
                        </div>
                    </div>             
                </div>
            </div>
        </div>
    );
};
export default Shows;