import React from "react";
import "./AboutIndexItem.css";

function AboutIndexItem(props) {
    const {name} = props;
    // const descriptions = {
    //     "Rick": "Rick Gentry started playing trumpet in the 4th grade and developed a great ear for music. He started playing guitar as a freshman in high school then switched to bass after 4 years when the need came up to make a band with a close friend in high school. After 10 years of playing bass he stopped playing to focus on raising his kids. 25 years later he found out that playing music helps prevent people from getting dementia so he started to relearn guitar. Again after 4 years he switched back to bass and realized he is a bass player. His main influences are Flea, Luis Johnson, John Entwistle, and Duff McKagan which he regularly incorporates into the cover tunes we play. One thing for certain is Rick enjoys playing live which can be seen and felt during his performance.",
    //     "Angel": "The lead singer of Luvsikangel has been performing on stage since she was young, her acting performance and theatrical background, makes her special and unique. Angel grew up with family members, who performed in many different bands, and have  played in many different cities and states, like New York and San Francisco. Angel grew up with the passion and talent to perform on stage and entertain."
    // }

    return (
        <div className="about-index-item-wrapper">
            <div className="about-index-item-container">
                <div className="rocker-name">
                    {/* {name} */}
                </div>
                <div className="rocker-desc">
                </div>
            </div>
        </div>
    )
}
export default AboutIndexItem;