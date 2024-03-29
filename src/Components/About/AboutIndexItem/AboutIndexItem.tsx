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
            "instrument": "Bass Master",
            "image": rickPic
        },
        "Angel": {
            "description": "Meet Angel, the dynamic force behind Luvsikangel, whose journey into the spotlight began at a tender age, ignited by a fiery passion for performance. 🎤 With a background steeped in acting and theater, Angel's stage presence is nothing short of captivating, weaving a spellbinding narrative with each note and movement. Born into a family of musical luminaries, Angel's roots run deep in the vibrant tapestry of live entertainment. Surrounded by relatives who graced stages across the nation, from the bustling streets of New York to the eclectic vibes of San Francisco, Angel's upbringing was a symphony of inspiration and artistic expression. But it was more than just destiny—it was a calling. From a young age, Angel exuded a natural talent and an insatiable hunger to command the stage and enrapture audiences. It's not just about singing; it's about creating an experience that transcends the ordinary—a theatrical spectacle that leaves an indelible mark on the soul. Now, as the lead singer of Luvsikangel, Angel's electrifying performances are a testament to her unwavering dedication and boundless creativity. With every song, she channels her theatrical prowess, infusing each lyric with emotion and intensity, leaving audiences spellbound and yearning for more. Step into Angel's world, where every melody is a story waiting to be told, and every performance is an invitation to lose yourself in the magic of live music. Join her on a journey where passion meets talent, and the stage becomes a playground of endless possibilities. 🎶✨",
            "instrument": "Lead Vocalist",
            "image": angelPic
        },
        "Bill": {
            "description": "Born in Connecticut in 1966, Bill started playing drums at age 11. Played in orchestra in junior high school. Played in garage bands in high school. As an adult has played in numerous classic rock cover bands. He joined his first tribute band in 1994-POWERAGE tribute to AC/DC. Since then, he has been in and out of 10 other tribute bands.As of March 2024 he is in Luvsik Angel, Guilty as Sin, Heart and Soul- tribute to Huey Lewis, Fleet Street and Sonic Temple-tribute to The Cult.",
            "instrument": "Drums",
            "image": drumsPic
        },
        "Brett": {
            "description": "Meet Brett Hertzberg, the man with searing guitar leads to tickle your tinnitus.  A recent transplant into the East Bay, Brett originally hails from the east coast, where his musical journey began from the second grade. After becoming an accomplished classical trumpet player for over 10 years, he delved into all things guitar and has never looked back.  From east coast to west cost, Brett has cut his teeth on numerous genres of music including hard rock, metal, grunge, southern rock, pop and even Jazz. With an attention to detail, Brett often combines elements of multiple instruments and theory into his playing, arranging the notes in his head to fill the stage with his own brand and style of music.  His musical influences are eclectic, including Wes Montgomery, Led Zeppelin, Lynyrd Skynyrd, Iron Maiden, Ozzy Osbourne, the Red Hot Chili Peppers, Van Halen, Stone Temple Pilots, and Alice in Chains, to name a few.  His most recent stint was throwing down leads for the New Norm in Seattle.  Now putting his meticulous melodies to work in the East Bay, come check him out!",
            "instrument": "Lead Guitar",
            "image": guitarPic
        }
    }
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
}
export default AboutIndexItem;