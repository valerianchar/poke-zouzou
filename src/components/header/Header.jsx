import React from 'react'
import Style from './Header.module.css'
import Button from '../atomes/Button/button'

const Header = () => {

    const composants = [
    <Button buttonTitle={"Button 1"}/>,
    <Button buttonTitle={"Button 2"}/>,
    <Button buttonTitle={"Button 3"}/>
]

  return <>
   <header className={Style.header}>
        <p className={Style.name}>Application name</p>
        {
            composants.map((element, index) => (
                <React.Fragment key={index}>{element}</React.Fragment>
            ))
        }
    </header>
  </>
}

export default Header
