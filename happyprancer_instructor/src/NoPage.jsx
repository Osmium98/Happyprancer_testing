import React from 'react'
import "./NoPage.css"

import Nav from "./PreSignUpPage/Nav"

const NoPage = () => {
  return (
    <div className="NoPage">
        <Nav/>
        <div className="Nopage_text">
            Page Not Found
        </div>
    </div>
  )
}

export default NoPage