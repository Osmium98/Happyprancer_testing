import React from 'react'
import "./Main.css"

import Nav from "./Nav"
import Button from "../SmComponents/Button"
import LgCard from '../SmComponents/LgCard'

const Main = () => {
  return (
    <>
        {/* <Nav/> */}
        <div className="Main container-fluid ">
            <div className="Main_Left">
                <div className="Main_Left_heading">Fitness At <br /> Your <br /> Fingertips</div>
                <div className="Main_Left_des">Free Online Live Zumba Classes By <br /> Cirtified Trainers</div>
                <Button text="Join Us" color="Blue"/>
            </div>
            <div className="Main_Right">
                <LgCard/>
            </div>
        </div>
    </>
  )
}

export default Main