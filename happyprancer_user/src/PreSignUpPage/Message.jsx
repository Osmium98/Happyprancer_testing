import React from 'react'
import "./Message.css"

import Nav from "./Nav"
import Footer from "./Footer"

const Message = () => {
    return (
        <div className="Message">
            <Nav />
            <div className="Message_container">
                <div className="Message_container_heading">Message us</div>
                <input type="name" className="Signin_input Applay_input" placeholder="Contact Full name" value="" onChange="" />
                <input type="email" className="Signin_input Applay_input" placeholder="Email address" value="" onChange="" />
                <textarea type="text" className="Signin_input Applay_input Applay_input_textarea" placeholder="Describe Your Gym facilities" value="" onChange="" />
                <div className="Signin_Submit_btn Message_container_submit">Send</div>
            </div>
            <Footer getstarted="false"/>
        </div>
    )
}

export default Message