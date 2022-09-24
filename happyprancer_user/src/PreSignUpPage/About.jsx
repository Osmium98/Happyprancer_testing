import React from 'react'
import "./About.css"
import {Link} from "react-router-dom"

import {Card1,Card2,Card3,Card4} from "../SmComponents/Card1"

const About = () => {
  return (
    <div className="About" id="about">
        <div className="About_heading">What’s Happyprancer!</div>
        <div className="AboutContainer">
            <div className="AboutLeft">
                <div className="leftcard">
                    <Card1/>
                    <Card3/>
                </div>
                <div className="rightcard">
                    <Card2/>
                    <Card4/>
                </div>
            </div>
            <div className="AboutRight">
                <div className="About_des">A similar story was lived by the founder of Happy Prancer, PK. Years back he couldn’t include exercise into his daily routine even after joining best fitness clubs in the town as they only offered monotonous and boring exercises. Then he tried joining Zumba classes and this was when the transformation showed up. He found Zumba dance quite fun, involving, and better as compared to other fitness routines. Zumba not only makes you move your body and stay fit but it also brings an opportunity for making friends and enjoying the whole time with dance and music.&nbsp;&nbsp;<Link to="/about">read more...</Link></div>
            </div>
        </div>
    </div>
  )
}

export default About