import React, { useState } from 'react'
import "./Footer.css"
import { Link } from "react-router-dom";

import Button from "../SmComponents/Button"
import logo from "../res/logo.png"

const Footer = (props) => {
    const [getstarted] = useState(props.getstarted ? props.getstarted : true);
    return (
        <div className="Footer">
            <div className="FooterContent">
                {getstarted===true ? (
                    <div className="Footer_getstarted">
                        <div className="Footer_getstarted_heading">Having Some Doubt ? <br />Get Touch With Us</div>
                        <div className="Footer_getstarted_btn">
                        <Link className="Nav_menu_items" to="/message"><Button text="Messege" color="Green" /></Link>
                        </div>
                    </div>
                ) : (<></>)}
                <div className="Footer_logo">
                    <img src={logo} alt="" />
                    <div className="Social_icons">
                        <ion-icon name="logo-facebook"></ion-icon>
                        <ion-icon name="logo-twitter"></ion-icon>
                        <ion-icon name="logo-whatsapp"></ion-icon>
                    </div>
                </div>
                <div className="Footer_Pages">
                    <div className="Footer_Pages_Heading">Pages</div>
                    <Link className="Nav_menu_items" to="/"><div className="Footer_Pages_Items">About Us</div></Link>
                    <Link className="Nav_menu_items" to="/careers"><div className="Footer_Pages_Items">Careers</div></Link>
                    <Link className="Nav_menu_items" to="/gymapplay"><div className="Footer_Pages_Items">Gym Afflications</div></Link>
                    <Link className="Nav_menu_items" to="/privacy"><div className="Footer_Pages_Items">Privacy Policy</div></Link>
                </div>
                <div className="Footer_Pages Footer_Pages_display">
                    <div className="Footer_Pages_Heading">Indexes</div>
                    <div className="Footer_Pages_Items">Trainers</div>
                    <div className="Footer_Pages_Items">Contact us</div>
                    <div className="Footer_Pages_Items">Dashboard</div>
                    <div className="Footer_Pages_Items">Get Started</div>
                    <div className="Footer_Pages_Items">Faq</div>
                </div>
                <div className="Footer_email_suscribe">
                    <div className="Footer_Pages_semi_Heading">Get Sucribed To Our Services</div>
                    <div className="Footer_Email_inputs">
                        <input type="email" name="Email" />
                        <Button text="Subscribe" color="Green" />
                    </div>
                </div>
            </div>
            <div className="Footer_Copyright">All copyrights reserved © 2022, happyprancer.com</div>
        </div>
    )
}

export default Footer