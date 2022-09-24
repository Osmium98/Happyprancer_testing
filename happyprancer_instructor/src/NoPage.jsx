import React from 'react'
import "./NoPage.css"

import Nav from "./PreSignUpPage/Nav"
import Footer from "./PreSignUpPage/Footer"

const NoPage = () => {
  return (
    <div className="NoPage">
        <Nav/>
        <div className="Nopage_text">
            Page Not Found
        </div>
        <Footer/>
    </div>
  )
}

export default NoPage