import React from 'react'
import './sideBarCSS.css'
import AboutUs from './AboutUs'
import SocialNetwork from './socialNetwork'
import RecentPost from './RecentPost'

function sideBar() {
    return (
        <div className='sideContainer'>
            <AboutUs />
            <SocialNetwork />
            <RecentPost />
        </div>
    )
}

export default sideBar
