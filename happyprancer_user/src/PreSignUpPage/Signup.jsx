import React, { useState } from 'react'
import "./Signup.css"
import Nav from "./Nav"

import { Auth } from "aws-amplify";
import { API } from "aws-amplify";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../libs/contextLib";

const Signup = () => {
  // const [userName, setuserName] = useState("");
  // const [emailId, setemailId] = useState("");
  const [password, setpassword] = useState("");
  // const [address, setaddress] = useState("");
  // const [phoneNumber, setphoneNumber] = useState("");

  const [userData,setUserData] = useState({userName:"",emailId:"",address:"",phoneNumber:""}); 

  const [confirmationCode, setconfirmationCode] = useState(0);

  const [newUser, setNewUser] = useState(null);
  const { userHasAuthenticated, setIsLoading } = useAppContext();
  const nav = useNavigate();

  function validateForm() {
    return (
      password.length > 0 &&
      userData.userName.length > 0 &&
      userData.emailId.length > 0 &&
      userData.address.length > 0 &&
      userData.phoneNumber.length > 0
    );
  }

  function validateConfirmationForm() {
    return confirmationCode.length > 0;
  }
  function createUser(el) {
    console.log(el);
    return API.post("HappyPrancer", "/happyprancer", {
      body: el,
    });
  }

  async function handleSubmit() {
    try {
      const newUser = await Auth.signUp({
        username: userData.emailId,
        password: password,
      });
      setNewUser(newUser);
    } catch (e) {
      alert(e);
    }
  }
  async function handleConfirmationSubmit(e) {
    e.preventDefault();
    try {
      setIsLoading(true);
      await Auth.confirmSignUp(userData.emailId, confirmationCode);
      await Auth.signIn(userData.emailId, password);
      try {
        await createUser(userData);
      } catch (e) {
        console.log(e);
        alert(e);
      }
      userHasAuthenticated(true);
      nav("/dashboard");
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  }
  const handleChange = (event) => {
    setUserData((prev)=>({...prev,[event.target.id]: event.target.value}))
  }

  function renderForm() {
    return (
      <div className="Signup">
        <Nav />
        <div className="Signup_Container">
          <div className="Signup_heading"><span>Hello Master !</span><br /> Create a New Account. . .</div>
          <div className="Signup_inputs">
            <input type="text" className="Signup_input" placeholder="Name" value={userData.userName} id="userName" onChange={handleChange} />
            <input type="email" className="Signup_input" placeholder="Email" value={userData.emailId} id="emailId" onChange={handleChange} />
            <input type="password" className="Signup_input" placeholder="Password" value={password} id="password" onChange={(e)=>{setpassword(e.target.value)}} />
            <input type="address" className="Signup_input" placeholder="Address" value={userData.address} id="address" onChange={handleChange} />
            <input type="tel" className="Signup_input" placeholder="Phone" value={userData.phoneNumber} id="phoneNumber" onChange={handleChange} />
          </div>
          <div className="signup_text">---- Lets Create A Happy World ----</div>
          <button className="Signup_Submit_btn" disabled={!validateForm()} onClick={handleSubmit}>SignUp</button>
          <div className="signup_forgot ">Want To  <a href="/signin">Sign In ?</a></div>
        </div>
      </div>
    )
  }
  function renderConfirm() {
    return (
      <form className="Signup" onSubmit={console.log("signup confirmationCode")}>
        <Nav />
        <div className="Signup_Container">
          <div className="Signup_heading"><span>Sign Up</span></div>
          <div className="Signup_inputs">
            <input type="tel" className="Signup_input" placeholder="Confirmation Code" value={confirmationCode} onChange={(e) => setconfirmationCode(e.target.value)} />
          </div>
          <button className="Signup_Submit_btn" disabled={!validateConfirmationForm()} onClick={(e)=>{handleConfirmationSubmit(e)}} >Confirm</button>
          <div className="signup_forgot ">Want To  <a href="/signin">Sign In ?</a></div>
        </div>
      </form>
    );
  }
  return <>
    {newUser === null ? renderForm() : renderConfirm()}
  </>
}

export default Signup