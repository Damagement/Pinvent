import React from 'react'
import "./Card.modules.scss"

const Card = ({children}) => {
  return <div className={`card`}>
        {children}
        </div>
}
export default Card