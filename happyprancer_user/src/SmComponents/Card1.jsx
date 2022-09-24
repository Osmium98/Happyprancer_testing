import React from 'react'
import "./Card1.css"

import Card1img from "../res/Card1.png"
import Card3img from "../res/Card3.png"
import Card4img from "../res/Card4.png"
import crown from "../res/crown.svg"

const Card1 = () => {
  return (
    <div className="Card1 aboutCard">
        <div className="Card1img">
            <img src={Card1img} alt="" />
            <div className="Savebtn Card1Savebtn"><ion-icon name="bookmark"></ion-icon></div>
        </div>
        <div className="Card1_content">
            <div className="Card1_heading">Zumba Classes</div>
            <div className="Card1_des">
                <div className="Card1_pricing">From $99/month</div>
                <div className="Card1_members">514 members</div>
            </div>
        </div>
    </div>
  )
}
const Card2 = () => {
    return (
      <div className="Card2 aboutCard">
            <div className="Card2img"><img src={crown} alt="" /></div>
            
            <div className="Card2_heading">Classes</div>
            <div className="Card2_des">34 classes</div>
      </div>
    )
}

const Card3 = () => {
    return (
      <div className="Card3 aboutCard">
          <div className="Card3img">
              <img src={Card3img} alt="" />
          </div>
          <div className="Card3_content">
              <div className="Card3_des">You were Invited to</div>
              <div className="Card3_heading">Free Fitness Training </div>
              <div className="Card3_btns">
                <div className="Card3btn">Join</div>
                <div className="Card3btnr">Remove</div>
              </div>
          </div>
      </div>
    )
  }
  const Card4 = () => {
    return (
      <div className="Card4 aboutCard">
          <div className="Card4img">
              <img src={Card4img} alt="" />
              <div className="Savebtn Card4Savebtn"><ion-icon name="bookmark"></ion-icon></div>
          </div>
          <div className="Card4_content">
              <div className="Card4_heading">Trainers</div>
              <div className="Card4_des">12 cirtified trainers</div>
          </div>
      </div>
    )
  }

export {Card1,Card2,Card3,Card4}