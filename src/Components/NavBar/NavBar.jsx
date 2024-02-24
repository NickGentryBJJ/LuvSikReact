import React from "react";
import './NavBar.css';

function NavBar() {
    function scrollTo(element, duration) {
        const targetPosition = element.offsetTop;
        const startPosition = window.scrollY;
        const distance = targetPosition - startPosition;
        const startTime = performance.now();
    
        function scrollAnimation(currentTime) {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            const ease = easeOut(progress);
            window.scrollTo(0, startPosition + distance * ease);

            if (elapsedTime < duration) {
                requestAnimationFrame(scrollAnimation);
            }
        }
        requestAnimationFrame(scrollAnimation);
    }
    function easeOut(t) {
        return 1 - (--t) * t * t * t;
    }
    // Risin' to the top!
    function keniBurke() {    
        const body = document.body;
        const duration = 5000; 
        scrollTo(body, duration);
    }
    function scrollToShows() {
        var aboutSection = document.getElementById('about-section');
        scrollTo(aboutSection, 3000); 
    }
    function scrollToContact() {
        var contactSection = document.getElementById('contact-section');
        scrollTo(contactSection, 3000); 
    }

    return (
        <div id="stickyHeader" className="header-links-wrapper">
                <div>
                    <img 
                        onClick={keniBurke} 
                        className="nav-logo" 
                        src="images/band_icon.png" 
                        alt="LuvSikAngel"/>
                </div>
                <div className="links">
                    <p onClick={scrollToShows} className="header-links">UPCOMING SHOWS</p>
                    <p onClick={scrollToContact} className="header-links">CONTACT</p>
                </div> 
        </div>
    )
}
export default NavBar;