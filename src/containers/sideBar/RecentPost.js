import React from 'react'
import './recentPostCSS.css'
import WithHOC from '../withHOC'

function RecentPost(props) {
    return (
        <div className='recentMainDiv'>
            <p className='recentTextDiv'>RECENT POST</p>
            <a href={'http://localhost:3000/postpage/' + props.arr[1].id}>{props.arr[1].title}</a>
            <a href={'http://localhost:3000/postpage/' + props.arr[6].id}>{props.arr[6].title}</a>
            <a href={'http://localhost:3000/postpage/' + props.arr[9].id}>{props.arr[9].title}</a>
            <a href={'http://localhost:3000/postpage/' + props.arr[11].id}>{props.arr[11].title}</a>
            <a href={'http://localhost:3000/postpage/' + props.arr[3].id}>{props.arr[3].title}</a>
        </div>
    )
}

export default WithHOC(RecentPost)
