import React from 'react'
import "./SmCard.css"

// Images from res folder
import secure from "../res/secure.png"

const SmCard = () => {
  return (
    <div className="SmCard">
        <div className="SmCard_img">
            <img src={secure} alt="" />
        </div>
        <div className="SmCard_heading">Intractive</div>
        <div className="SmCard_des">and verified</div>
    </div>
  )
}

export default SmCard