import React, { useState } from 'react'
import Nav from "./Nav"
import "./Signin.css"
// import { Link } from "react-router-dom"
import { Auth } from "aws-amplify";
import { useAppContext } from "../libs/contextLib";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
    const [userData, setUserData] = useState({ email: "", password: "" });

    const [adminswitch, setadminswitch] = useState(false);
    const { userHasAuthenticated, setIsLoading } = useAppContext();

    const nav = useNavigate();

    const handleChange = (event) => {
        setUserData((prev) => ({ ...prev, [event.target.id]: event.target.value }))
    }
    function validateForm() {
        return (
            userData.email.length > 0 &&
            userData.password.length > 0
        );
    }

    async function handleSubmit() {
        setIsLoading(true);
        try {
            await Auth.signIn(userData.email, userData.password);
            userHasAuthenticated(true);
            nav("/dashboard");
            alert("Logged in");
        } catch (e) {
            alert(e.message);
        }
        setIsLoading(false);
    }

    return (
        <div className="SignIn Section">
            <Nav />
            <div className="Signin_container">
                <div className="Signin_toggle_container" onClick={() => { setadminswitch(!adminswitch) }}>
                    <div className={adminswitch ? "Signin_toggle_container_highliter" : "Signin_toggle_container_highliter             Signin_toggle_container_highliter_active"}></div>
                    <div className="Signin_toggle_container_text">User</div>
                    <div className="Signin_toggle_container_text">Admin</div>
                </div>
                <div className="Signin_heading">
                    <span>Hello Admin!</span> <br />
                    Welcome back<br /> Get in And View The details
                </div>
                <div className="Signin_inputs_container">
                    <input type="email" className="Signin_input" placeholder="Email" value={userData.email} id="email" onChange={handleChange} />
                    <input type="password" className="Signin_input" placeholder="Password" value={userData.password} id="password" onChange={handleChange} />
                </div>
                <button className="Signin_Submit_btn" disabled={!validateForm()} onClick={() =>handleSubmit()}>Sign In</button>
                <div className="continue_text">Not a Admin ! Please Contact Developer</div>
            </div>
        </div>
    )
}

export default SignIn