import React from "react";
import "./AboutIndexItem.css";
import rickPic from "../../../images/galleryPhotos/IMG_5416.jpg";
import angelPic from "../../../images/galleryPhotos/IMG_5429.jpg";
import drumsPic from "../../../images/galleryPhotos/IMG_5442.jpg";
import guitarPic from "../../../images/galleryPhotos/guitar.jpg";

interface AboutIndexItemProps {
    name: string;
}

function AboutIndexItem(props: AboutIndexItemProps): JSX.Element {
    const { name } = props;
    const rockers: Record<string, Record<string, string>> = {
        "Rick": {
            "description": "Meet Rick Gentry, the ultimate groove maestro with a heart pulsating to the rhythm of bass! 🎸 From trumpet tunes in the fourth grade to shredding on guitar in high school, Rick's musical journey has been a wild ride fueled by passion and a killer ear for melodies. Picture this: a high school kid jamming on guitar, but fate had other plans. When the call for a bassist arose to form a band, Rick answered without hesitation, and the rest is history! For a solid decade, he laid down the foundation, slapping those bass strings like a seasoned pro. But life had its twists and turns. Rick put his bass aside to focus on raising his kids. Fast forward 25 years, and a revelation struck: music isn't just notes; it's a safeguard against forgetting who we are. Rick dusted off his guitar, rekindling his love affair with music. Yet, something was missing. Four years later, a thunderous epiphany hit him: he wasn't just any musician; he was a BASS PLAYER. Influenced by legends like Flea, Luis Johnson, John Entwistle, and Duff McKagan, Rick's bass lines groove like thunderstorms, electrifying every stage he graces. But here's the kicker: Rick's not just about playing. He's about living, breathing, and exuding music! Witness the magic unfold as he takes center stage, electrifying crowds with his infectious energy and killer bass licks. Because for Rick, the thrill of live performance isn't just a moment—it's a way of life. Catch Rick Gentry in action, and prepare to be swept away on a sonic adventure you won't soon forget! 🎶✨",
            "instrument": "On the Bass",
            "image": rickPic
        },
        "Angel": {
            "description": "The lead singer of Luvsikangel has been performing on stage since she was young, her acting performance and theatrical background, makes her special and unique. Angel grew up with family members, who performed in many different bands, and have  played in many different cities and states, like New York and San Francisco. Angel grew up with the passion and talent to perform on stage and entertain.",
            "instrument": "Lead Vocalist",
            "image": angelPic
        },
        "Drums": {
            "image": drumsPic
        },
        "Guitar": {
            "image": guitarPic
        }
    }
    return (
        <div className="about-index-item-wrapper">
            <div className="rocker-tag">
                <img className="rocker-image" src={rockers[name].image} alt={name} />
            </div>
            <div className="rocker-desc">
                <div className="rocker-name">
                    {name}
                    <p className="instrument">
                        {rockers[name].instrument}
                    </p>
                </div>
                {rockers[name].description}
            </div>
        </div>
    )
}
export default AboutIndexItem;