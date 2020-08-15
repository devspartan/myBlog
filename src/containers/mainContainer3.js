import React from 'react'
import TextBelowPost from './TextBelowPost'
import Hero1 from './hero1'
import WithHOC from './withHOC'
import SideBar from './sideBar/sideBar'
import './mainContainer1CSS.css'
import './postButtonCSS.css'

function mainContainer3(props) {
    return (
        <div className='parentDiv'>
            <div className='leftMainDiv'>

                <Hero1 image={props.arr[8].img}>
                    <TextBelowPost features={props.arr[8].feature} title={props.arr[8].title} id={props.arr[8].id} />
                </Hero1>
                <Hero1 image={props.arr[9].img}>
                    <TextBelowPost features={props.arr[9].feature} title={props.arr[9].title} id={props.arr[9].id} />
                </Hero1>
                <Hero1 image={props.arr[10].img}>
                    <TextBelowPost features={props.arr[10].feature} title={props.arr[10].title} id={props.arr[10].id} />
                </Hero1>
                <Hero1 image={props.arr[11].img}>
                    <TextBelowPost features={props.arr[11].feature} title={props.arr[11].title} id={props.arr[11].id} />
                </Hero1>
                <a href='http://localhost:3000/page2' >
                    {
                        <button id='btnPage3' className='buttonStyle'>NEWER POSTS</button>
                    }
                </a>
            </div>
            <div className='rightMainDiv'>
                <SideBar />
            </div>
        </div>
    )
}

export default WithHOC(mainContainer3)
