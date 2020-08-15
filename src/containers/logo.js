import React from 'react'
import './logoCSS.css'
import img from './images/akLogo1.png'

function logo() {
    return (
        <div className='logoClass'>
            <img src={img} />
        </div>
    )
}

export default logo
