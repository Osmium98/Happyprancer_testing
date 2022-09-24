import React,{useState} from 'react'
import "./GymApplay.css"

import Nav from "./Nav"
import Footer from "./Footer"

import { API } from "aws-amplify";
import { useAppContext } from "../libs/contextLib";

const GymApplay = () => {
  const [GymData,setGymData] = useState({name:"",fname:"",email:"",phone:"",streetaddress:"",city:"",state:"",pincode:"",numregmember:"",numfemmember:"",targetmember:"",adbudget:"",addinfo:""});
  const { setIsLoading } = useAppContext();

  const handleChange = (event) => {
    setGymData((prev)=>({...prev,[event.target.id]: event.target.value}))
  }

  const handleSubmit = async () => {
    setIsLoading(true)
    console.log(GymData);
    try {
      createGymTable(GymData);
    }
    catch (e) {
      alert(e);
    }
    setIsLoading(false)
  }

  function createGymTable(el) {
    return API.post("HappyPrancer", "/happyprancer/affiliation", {
      body: el,
    });
  }
  return (
    <div className="GymApplay">
        <Nav/>
        <div className="GymApplay_container">
            <div className="GymApplay_container_heading">SUBMIT YOUR APPLICATION</div>
            <input type="text" className="Signin_input Applay_input" placeholder="GYM name " value={GymData.name} id="name" onChange={handleChange}/>
            <input type="name" className="Signin_input Applay_input" placeholder="Contact Full name" value={GymData.fname} id="fname" onChange={handleChange}/>
            <input type="email" className="Signin_input Applay_input" placeholder="Email address" value={GymData.email} id="email" onChange={handleChange}/>
            <input type="phone" className="Signin_input Applay_input" placeholder="Phone number" value={GymData.phone} id="phone" onChange={handleChange}/>
            <div className="GymApplay_container_heading">GYM ADDRESS INFORMATION</div>
            <input type="address" className="Signin_input Applay_input" placeholder="Street address" value={GymData.streetaddress} id="streetaddress" onChange={handleChange}/>
            <input type="address" className="Signin_input Applay_input" placeholder="City" value={GymData.city} id="city" onChange={handleChange}/>
            <input type="address" className="Signin_input Applay_input" placeholder="State" value={GymData.state} id="state" onChange={handleChange}/>
            <input type="pincode" className="Signin_input Applay_input" placeholder="Pincode " value={GymData.pincode} id="pincode" onChange={handleChange}/>
            <div className="GymApplay_container_heading">GYMNASIUM INFORMATION</div>
            <input type="text" className="Signin_input Applay_input" placeholder="Number of regular members(approx.) " value={GymData.numregmember} id="numregmember" onChange={handleChange}/>
            <input type="text" className="Signin_input Applay_input" placeholder="Number of female members(approx.) " value={GymData.numfemmember} id="numfemmember" onChange={handleChange}/>
            <input type="text" className="Signin_input Applay_input" placeholder="Target Membership for 2025 " value={GymData.targetmember} id="targetmember" onChange={handleChange}/>
            <input type="text" className="Signin_input Applay_input" placeholder="Advertisement budget per year" value={GymData.adbudget} id="adbudget" onChange={handleChange}/>
            <div className="GymApplay_container_heading">ADITIONAL INFORMATION</div>
            <textarea type="text" className="Signin_input Applay_input Applay_input_textarea" placeholder="Describe Your Gym facilities" value={GymData.addinfo} id="addinfo" onChange={handleChange}/>
            <div className="Signin_Submit_btn GymApplay_container_submit" onClick={handleSubmit}>Submit Applications</div>
        </div>
            <Footer getstarted="false"/>
    </div>
  )
}

export default GymApplay