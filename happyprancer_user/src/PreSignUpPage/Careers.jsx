import React,{ useState} from 'react'
import "./Careers.css"

import Nav from "./Nav"
import Footer from "./Footer"

import { API } from "aws-amplify";
import { useAppContext } from "../libs/contextLib";

const Careers = () => {
    const [CareerData,setCareerData] = useState({name:"",email:"",phone:"",currentProfession:"",streetaddress:"",city:"",state:"",pincode:"",maxeducation:"",fitnesscare:"",isteach:"",addinfo:""});
    const { setIsLoading } = useAppContext();
  
    const handleChange = (event) => {
        setCareerData((prev)=>({...prev,[event.target.id]: event.target.value}))
    }
  
    const handleSubmit = async () => {
        setIsLoading(true)
      console.log(CareerData);
      try {
        createCareerTable(CareerData);
      }
      catch (e) {
        alert(e);
      }
      setIsLoading(false)
    }
  
    function createCareerTable(el) {
      return API.post("HappyPrancer", "/happyprancer/careers", {
        body: el,
      });
    }
    const [radio,setradio] = useState("");
    return (
        <div className="Careers">
            <Nav />
            <div className="GymApplay_container">
                <div className="GymApplay_container_heading">SUBMIT YOUR APPLICATION</div>
                <input type="name" className="Signin_input Applay_input" placeholder="Full name" value={CareerData.name} id="name" onChange={handleChange} />
                <input type="email" className="Signin_input Applay_input" placeholder="Email address" value={CareerData.email} id="email" onChange={handleChange} />
                <input type="phone" className="Signin_input Applay_input" placeholder="Phone number" value={CareerData.phone} id="phone" onChange={handleChange} />
                <input type="text" className="Signin_input Applay_input" placeholder="Current profession" value={CareerData.currentProfession} id="currentProfession" onChange={handleChange} />
                <div className="GymApplay_container_heading">GYM ADDRESS INFORMATION</div>
                <input type="address" className="Signin_input Applay_input" placeholder="Street address" value={CareerData.streetaddress} id="streetaddress" onChange={handleChange} />
                <input type="address" className="Signin_input Applay_input" placeholder="City" value={CareerData.city} id="city" onChange={handleChange} />
                <input type="address" className="Signin_input Applay_input" placeholder="State" value={CareerData.state} id="state" onChange={handleChange} />
                <input type="pincode" className="Signin_input Applay_input" placeholder="Pincode " value={CareerData.pincode} id="pincode" onChange={handleChange} />
                <div className="GymApplay_container_heading">CAREERS INFORMATION</div>
                <div className="Careers_radio">
                    <div className="Careers_radio_div">
                        <div className="Careers_radio_div_heading">Max Education Certificate</div>
                        <div className="Careers_radio_div_container" onClick={(event)=>{setCareerData((prev)=>({...prev,maxeducation:event.target.getAttribute("data")}))}}>
                            <label for="age1"><input type="radio" id="Education1" name="Education" className="radio_btns" data="12th Equivalent"/>12th Equivalent</label>
                            <label for="age1"><input type="radio" id="Education1" name="Education" className="radio_btns" data="Undergraduate"/>Undergraduate</label>
                            <label for="age1"><input type="radio" id="Education1" name="Education" className="radio_btns" data="Graduate"/>Graduate</label>
                            <label for="age1"><input type="radio" id="Education1" name="Education" className="radio_btns" data="Post-graduate"/>Post-graduate</label>
                            <label for="age1"><input type="radio" id="Education1" name="Education" className="radio_btns" data="Doctorate"/>Doctorate</label>
                        </div>
                    </div>
                    <div className="Careers_radio_div">
                        <div className="Careers_radio_div_heading">Fitness Career Goal </div>
                        <div className="Careers_radio_div_container" onClick={(event)=>{setCareerData((prev)=>({...prev,fitnesscare:event.target.getAttribute("data")}))}}>
                            <label for="age1"><input type="radio" id="Education1" name="Type" className="radio_btns" data="Classical Dancer/Dance Teacher"/>Classical Dancer/Dance Teacher</label>
                            <label for="age1"><input type="radio" id="Education1" name="Type" className="radio_btns" data="Personal Fitness Trainer"/>Personal Fitness Trainer</label>
                            <label for="age1"><input type="radio" id="Education1" name="Type" className="radio_btns" data="Zumba Instructor"/>Zumba Instructor</label>
                            <label for="age1"><input type="radio" id="Education1" name="Type" className="radio_btns" data="Zumba Master Instructor"/>Zumba Master Instructor</label>
                        </div>
                    </div>
                    <div className="Careers_radio_div">
                        <div className="Careers_radio_div_heading">Are you willing to participate & teach online Dance fitness classes?</div>
                        <div className="Careers_radio_div_container"onClick={(event)=>{setCareerData((prev)=>({...prev,isteach:event.target.getAttribute("data")}))}}>
                            <label for="age1"><input type="radio" id="Education1" name="isintrested" className="radio_btns" data="Yes"/>Yes</label>
                            <label for="age1"><input type="radio" id="Education1" name="isintrested" className="radio_btns" data="No"/>No</label>
                            <label for="age1"><input type="radio" id="Education1" name="isintrested" className="radio_btns" data="May be"/>May be</label>
                        </div>
                    </div>
                </div>
                <div className="GymApplay_container_heading">ADITIONAL INFORMATION</div>
                <textarea type="text" className="Signin_input Applay_input Applay_input_textarea" placeholder="Describe Your Gym facilities" value={CareerData.addinfo} id="addinfo" onChange={handleChange} />
                <div className="Signin_Submit_btn GymApplay_container_submit" onClick={handleSubmit}>Submit Applications</div>
            </div>
            <Footer getstarted="false"/>
        </div>
    )
}

export default Careers

// 452788  817795  100977