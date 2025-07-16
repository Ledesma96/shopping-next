import React from 'react'
import './shipments.scss'

const Shipments = ({icon, text}) => {
    return (
        <div className='container'>
            {icon}
            <span>{text}</span>
        </div>
    )
}

export default Shipments