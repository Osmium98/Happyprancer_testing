import React from 'react'
import "./GetStarted.css"

import screen from "../res/Screen.png"

const GetStarted = () => {
  return (
    <div className="GetStarted">
        <div className="GetStarted_heading">How to get started ?</div>
        <div className="GetStarted_container">
            <div className="GetStarted_Left">
                <div className="GetStarted_flow">
                    <div className="dot_line"></div>
                    <div className="step">01</div>
                    <div className="step">02</div>
                    <div className="step">03</div>
                </div>
                <div className="GetStarted_details">
                    <div className="step_details">
                        <div className="step_heading">Add your details</div>
                        <div className="step_des">Add your name, email and number in sign up page and create an account with us.</div>
                    </div>
                    <div className="step_details">
                        <div className="step_heading">Add your details</div>
                        <div className="step_des">Add your name, email and number in sign up page and create an account with us.</div>
                    </div>
                    <div className="step_details">
                        <div className="step_heading">Add your details</div>
                        <div className="step_des">Add your name, email and number in sign up page and create an account with us.</div>
                    </div>
                </div>
            </div>
            <div className="GetStarted_Right">
                <img src={screen} alt="" />
            </div>  
        </div>
    </div>
  )
}

export default GetStarted