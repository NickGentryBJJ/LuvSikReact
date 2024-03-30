import React from "react";
import "./AboutIndexItem.css";
import rickPic from "../../../images/galleryPhotos/IMG_5416.jpg";
import angelPic from "../../../images/galleryPhotos/IMG_5429.jpg";
import drumsPic from "../../../images/galleryPhotos/IMG_5442.jpg";
import guitarPic from "../../../images/galleryPhotos/guitar.jpg";

interface AboutIndexItemProps {
    name: string;
};

function AboutIndexItem(props: AboutIndexItemProps): JSX.Element {
    const { name } = props;
    const rockers: Record<string, Record<string, string>> = {
        "Rick": {
            "description": "Meet Rick Gentry, the ultimate groove maestro with a heart pulsating to the rhythm of bass! 🎸 From fourth-grade trumpet tunes to high school guitar shredding, Rick's musical journey is fueled by passion. When fate called for a bassist, Rick answered, laying down a decade of seasoned bass lines. Life's twists led him to put the bass aside to focus on raising his kids, but a revelation reignited his love for music. Influenced by legends like Flea and Duff McKagan, Rick's thunderous bass grooves electrify stages. But he's not just about playing; he's about living, breathing, and exuding music! Witness Rick's infectious energy and killer bass licks as he takes center stage, making every performance a sonic adventure!",
            "instrument": "Bass Master",
            "image": rickPic
        },
        "Angel": {
            "description": "Meet Angel, the force behind Luvsikangel, ignited by a passion for performance. 🎤 With a background in acting, Angel's stage presence captivates, weaving a spellbinding narrative with each note. Born into a family of musical luminaries, Angel's roots run deep. Surrounded by relatives who graced stages across the nation, Angel's upbringing was a symphony of inspiration. From a young age, Angel exuded natural talent and an insatiable hunger to command the stage. Now, as the lead singer of Luvsikangel, her electrifying performances channel theatrical prowess, leaving audiences spellbound. Step into Angel's world, where every melody tells a story, and every performance invites you to lose yourself in the magic of live music.",
            "instrument": "Lead Vocalist",
            "image": angelPic
        },
        "Bill": {
            "description": "Born in Connecticut in '66, Bill began drumming at 11, playing in orchestras and garage bands during school years. As an adult, he rocked in classic rock cover bands before joining his first tribute band, POWERAGE (AC/DC) in '94. Since then, he's been in 10+ tribute bands. As of March '24, he's part of Luvsik Angel, Guilty as Sin, Heart and Soul (Huey Lewis), Fleet Street, and Sonic Temple (The Cult).",
            "instrument": "Drums",
            "image": drumsPic
        },
        "Brett": {
            "description": "Meet Brett Hertzberg, the East Bay's newest guitar sensation! Originally from the East Coast, Brett's musical journey began in second grade with classical trumpet. Now, he's a master of searing guitar leads, exploring genres from hard rock to jazz. Influenced by legends like Led Zeppelin and Alice in Chains, Brett combines elements of multiple instruments into his unique style. After dazzling in Seattle with the New Norm, he's now making waves in the East Bay. Don't miss out on his meticulous melodies and electrifying performances!",
            "instrument": "Lead Guitar",
            "image": guitarPic
        }
    };
    return (
        <div className="about-index-item-wrapper">
            <div className="rocker-tag">
                <img className="rocker-image" src={rockers[name].image} alt={name} />
            </div>
            <div className="rocker-info">
                <div className="rocker-name">
                    {name} <span className="hide-mobile instrument">-</span> <span className="instrument">{rockers[name].instrument}</span>
                </div>
                <p className="rocker-desc">
                    {rockers[name].description}
                </p>
            </div>
        </div>
    )
};
export default AboutIndexItem;