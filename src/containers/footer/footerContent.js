import React from 'react'
import './footerContentCss.css'


function footerContent(props) {

    const num1 = Math.floor(Math.random() * (13 - 0))
    const num2 = Math.floor(Math.random() * (13))
    const num3 = Math.floor(Math.random() * 13)

    console.log(num1)
    return (
        <div className='imgTextDivMain'>
            <label className='recentTextDiv Extra'>{props.headTitle}</label>
            <div className='imgTextDiv'>
                <img src={props.data.arr[num1].img}></img>
                <div>
                    <a href={'http://localhost:3000/postpage/' + props.data.arr[num1].id}>{props.data.arr[num1].title}</a>
                    <p className='para'>{props.data.arr[num1].feature}</p>
                </div>
            </div>
            <div className='imgTextDiv'>
                <img src={props.data.arr[num2].img}></img>
                <div>
                    <a href={'http://localhost:3000/postpage/' + props.data.arr[num2].id}>{props.data.arr[num2].title}</a>
                    <p className='para'>{props.data.arr[num2].feature}</p>
                </div>
            </div>
            <div className='imgTextDiv'>
                <img src={props.data.arr[num3].img}></img>
                <div>
                    <a href={'http://localhost:3000/postpage/' + props.data.arr[num3].id}>{props.data.arr[num3].title}</a>
                    <p className='para'>{props.data.arr[num3].feature}</p>
                </div>
            </div>

        </div>
    )
}

export default footerContent
