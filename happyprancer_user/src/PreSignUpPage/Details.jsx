import React from 'react'
import "./Details.css"

import why1 from "../res/why1.png"
import why2 from "../res/why2.png"
import why3 from "../res/why3.png"

const Details = () => {
  return (
    <div className="Details">
        <div className="Details_sm_heading">A Fitness Movement</div>
        <div className="Details_heading">Why HAPPYPRANCER ?</div>
        <div className="Details_container">
            <div className="Details_partition">
                <img className="Details_partition_img" src={why1} alt="" />
                <div className="Details_partition_content_heading">Stay Home Stay Fit</div>
                <div className="Details_partition_content_des">Free online classes via Google meet/ Zoom for continous workout.</div>
            </div>
            <div className="Details_Bar"></div>
            <div className="Details_partition">
                <img className="Details_partition_img" src={why2} alt="" />
                <div className="Details_partition_content_heading">Instructor Led Classes</div>
                <div className="Details_partition_content_des">Online classes are conducted by Zumba Internationally Certified instructors.</div>
            </div>
            <div className="Details_Bar"></div>
            <div className="Details_partition">
                <img className="Details_partition_img" src={why3} alt="" />
                <div className="Details_partition_content_heading">Personal & Group Exercise</div>
                <div className="Details_partition_content_des">Personal (person-to-person trainer based) and Group exercies with friends</div>
            </div>
        </div>
    </div>
  )
}

export default Details