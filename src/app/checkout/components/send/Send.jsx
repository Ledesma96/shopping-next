import React from 'react'
import './send.scss'
const Send = () => {
    return (
        <div className='container-send'>
            <div className='container-input'>
                <input type='radio' value='send' />
                <p>Envio a domicilio</p>
            </div>
            <div className='container-input'>
                <input type='radio' value='send' />
                <p>Retiro en el local</p>
            </div>
        </div>
    )
}

export default Send