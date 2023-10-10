import React from 'react'

//Internal import 
import Style from "./button.module.css"

const Button = ({buttonTitle}, ...props) => {
  console.log(props);
  return<>
    <button className={Style.button}>{buttonTitle}</button>
  </> 
}

export default Button
