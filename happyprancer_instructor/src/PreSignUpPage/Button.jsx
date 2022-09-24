import React from 'react'
import "./Button.css"

// This is for the every button in the website,
// And we have to provide the text in between the button and color of the button

const Button = (props) => {
  return (
    <div className={`Button Btn_${props.color + " " + props.className}`}>
        {props.text}
    </div>
  )
}

export default Button