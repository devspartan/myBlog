import React from 'react'
import './footer1CSS.css'
import FooterContent from './footerContent'
import WithHOC from '../withHOC'


function footer1(props) {
    return (
        <div className='footerMainDiv'>
            <div className='footerMainDiv2'>
                <div className='footerDiv1'>
                    <FooterContent data={props} headTitle='RECENT-POSTS' />
                </div>
                <div className='footerDiv1'>
                    <FooterContent data={props} headTitle='POPULAR-POSTS' />
                </div>
                <div className='footerDiv1'>
                    <FooterContent data={props} headTitle='RANDOM-POSTS' />
                </div>
            </div>
        </div>
    )
}

export default WithHOC(footer1)
