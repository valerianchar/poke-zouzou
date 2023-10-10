import React from 'react'
import Style from './Title.module.css'

const Title = (props) => {
  return (
    <p className={Style.name}>
        {props.children}
    </p>
  )
}

export default Title
