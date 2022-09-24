import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import "./Nav.css"

import Button from "../PreSignUpPage/Button"
import logo from "../res/logo.png"

import { useAppContext } from "../libs/contextLib";
import { Auth } from "aws-amplify";
import { useNavigate } from "react-router-dom";

const Nav = () => {
    const { userHasAuthenticated, isAuthenticated, setIsLoading } = useAppContext();
    const nav = useNavigate();

    async function handleLogout() {
        setIsLoading(true);
        console.log("logout")
        await Auth.signOut();
        userHasAuthenticated(false);
        console.log('User has logged out');
        nav("/");
        setIsLoading(false)
    }

    return (
        <div className="Nav">
            <div className="Nav_logo">
                <img src={logo} alt="LOGO" />
            </div>
            <div className="Nav_btns">
                {isAuthenticated ? (<>
                    {/* <span onClick={handleLogout}><Button text="Log Out" color="Red" /></span> */}
                </>
                ) : (<>
                    <a className="Nav_menu_items" href="/signin"><Button text="Log In" color="Blue" /></a>
                </>)}
            </div>
        </div>
    )
}

export default Nav