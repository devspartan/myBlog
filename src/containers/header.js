import React from 'react'
import './headerCSS.css'

function header() {
    return (
        <head className='header'>
            <nav className='headerMenu'>
                <a href='https://devspartan.github.io/myBlog/' >Home</a>
                <a href='https://devspartan.github.io/myBlog/' >Contact Us</a>
                <a href='#' >About Us</a> 
            </nav>
            <div>
                SOCIAL
            </div>
        </head>
    )
}

export default header
