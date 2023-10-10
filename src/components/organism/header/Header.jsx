import React from 'react'
import Style from './Header.module.css'
import { Button, Title } from '../../atomes'

const Header = ({comp, headerTitle}) => {

    

  return <>
   <header className={Style.header}>
        <Title className={Style.name}>{headerTitle}</Title>
        {
            comp.map((element, index) =>{
                return <Button key={index} buttonTitle={element.label}></Button>
            })
        }
    </header>
  </>
}

export default Header
