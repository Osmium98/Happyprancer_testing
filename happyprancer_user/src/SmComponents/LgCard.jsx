import React from 'react'
import "./LgCard.css"

// Images from res folder
import thumb from "../res/Thumb.png"

import SmCard from "./SmCard"
import MdCard from "./MdCard"

const LgCard = () => {
  return (
    <div className="LgCard">
        <div className="sm-card"><SmCard/></div>
        <div className="md-card"><MdCard/></div>

        <div className="LgCard_menu_icon">
            <ion-icon name="menu"></ion-icon>
        </div>
        <div className="LgCard_content">
            <div className="LgCard_Thumb_img">
                <img src={thumb} alt="" />
            </div>
            <div className="LgCard_text">
                Affordable <br /> Price
            </div>
        </div>
        <div className="LgCard_footer">
            <div className="LgCard_footer_content">See pricing</div>
            <div className="LgCard_footer_icon">
                <ion-icon name="chevron-forward-outline"></ion-icon>
            </div>
        </div>
    </div>
  )
}

export default LgCard