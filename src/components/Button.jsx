import React from 'react'

const Button = (props) => {
    console.log("My button :", props)
  return (
    <button onClick={props.action}>{props.text}</button>
  )
}

export default Button