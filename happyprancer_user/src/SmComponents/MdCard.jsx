import React from 'react'
import "./MdCard.css"

const MdCard = () => {
  return (
    <div className="MdCard">
        <div className="MdCard_menu">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
        <div className="MdCard_heading">Classes</div>
        <div className="MdCard_des">We Provide Very <br />  Interactive Classes</div>
        <div className="MdCard_icons">
            <ion-icon name="arrow-back-outline"></ion-icon>
            <ion-icon name="arrow-forward-outline"></ion-icon>
        </div>
    </div>
  )
}

export default MdCard