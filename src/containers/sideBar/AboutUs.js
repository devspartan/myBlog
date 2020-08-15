import React from 'react'
import './aboutUsCSS.css'
import img1 from '../images/pic9.jpg'

function AboutUs() {
    return (
        <div className='aboutMainDiv'>
            <p className='aboutTitle'>ABOUT-US</p>
            <img src={img1}></img>
            <p>Meh synth Schlitz, tempor duis single-origin coffee ea
            next level ethnic fingerstache fanny pack nostrud.
             Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica.</p>
        </div>
    )
}

export default AboutUs
