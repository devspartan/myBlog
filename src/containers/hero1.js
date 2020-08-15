import React from 'react'
import './hero1CSS.css'


function hero1(props) {

    return (
        <div className='container'>
            <div className='img1Div2'>
                <img src={props.image}></img>
                <h1>Text</h1>
            </div>
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default hero1
