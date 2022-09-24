import React from 'react'
import "./AboutMax.css"

import Nav from "./Nav"
import Footer from "./Footer"

const AboutMax = () => {
    return (
        <div className="AboutMax">
            <Nav />
            <div className="AboutMax_container">
                <div className="AboutMax_container_heading">Why Happyprancer?</div>
                <div className="AboutMax_container_text">
                    Amid Covid-19 pandemic, many people became lazy and unhealthy sitting all day before their screens frowning disapprovingly to their body needs. A similar story was lived by the founder of Happy Prancer, PK. Years back he couldn’t include exercise into his daily routine even after joining best fitness clubs in the town as they only offered monotonous and boring exercises. Then he tried joining Zumba classes and this was when the transformation showed up. He found Zumba dance quite fun, involving, and better as compared to other fitness routines. Zumba not only makes you move your body and stay fit but it also brings an opportunity for making friends and enjoying the whole time with dance and music. It feels like a complete fitness package wrapped into one. This Zumba idea was stuck in his mind as a medium of inspiration and guide to include other people who are similarly jammed in their work and don’t get time for fitness. When Covid was raging and all fitness clubs were closed, PK had brought this online dance fitness to everybody he knew at US via Zoom. Back in undergrad days in IIT Kanpur to stay fit he had formed Happy Prancer dance club, a first in IITs. Now he wants to make HappyPrancer a go to site for dance fitness.
                </div>
                <div className="AboutMax_container_heading">Why Happyprancer?</div>
                <div className="AboutMax_container_text">
                    "HappyPrancer's mission is to bring dance as fitness activity and performance to people; and through dance, to create healthier people and more integrated communities."
                </div>
            </div>
            <Footer getstarted="false"/>
        </div>
    )
}

export default AboutMax