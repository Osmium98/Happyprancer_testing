import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import "./Nav.css"

import Button from "../PreSignUpPage/Button"
import logo from "../res/logo.png"

// import { useAppContext } from "../libs/contextLib";
// import { Auth } from "aws-amplify";
// import { useNavigate } from "react-router-dom";

const Nav = () => {
    const [isAuth, setIsAuth] = useState(false);
    // const { userHasAuthenticated, isAuthenticated, setIsLoading } = useAppContext();
    // const nav = useNavigate();

    // useEffect(() => {
    //     setIsAuth(isAuthenticated || false);
    // }, [isAuthenticated]);

    // async function handleLogout() {
    //     setIsLoading(true);
    //     console.log("logout")
    //     await Auth.signOut();
    //     userHasAuthenticated(false);
    //     console.log('User has logged out');
    //     nav("/");
    //     setIsLoading(false)
    // }

    return (
        <div className="Nav">
            <div className="Nav_logo">
                <img src={logo} alt="LOGO" />
            </div>
            <div className="Nav_menu">
                <a className="Nav_menu_items" href="/">Home</a>
                <a className="Nav_menu_items" href="/#about">About</a>
                <a className="Nav_menu_items" href="/#trainer">Trainer</a>
                {/* {isAuth ? <Link className="Nav_menu_items" to="/dashboard">Dashboard</Link> : <></>} */}
            </div>
            <div className="Nav_btns">
                {isAuth ? (<>
                    <span onClick={console.log("log out")}><Button text="Log Out" color="Red" /></span>
                </>
                ) : (<>
                    <a className="Nav_menu_items" href="/signin"><Button text="Log In" color="Blue" /></a>
                </>)}
            </div>
        </div>
    )
}

export default Nav