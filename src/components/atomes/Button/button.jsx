import React, { useState } from 'react'

//Internal import 
import Style from "./button.module.css"

const Button = ({buttonTitle, action}, ...props) => {

  const [label, setLabel] = useState(buttonTitle);

  const actionV = () => {
    setLabel("Valou");
  }

  console.log(props);
  return<>
    <button onClick={actionV} className={Style.button}>{label}</button>
  </> 
}

export default Button
