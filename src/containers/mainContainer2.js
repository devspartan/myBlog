import React from 'react'
import TextBelowPost from './TextBelowPost';
import Hero1 from './hero1'
import WithHOC from './withHOC'
import SideBar from './sideBar/sideBar'
import './mainContainer1CSS.css'
import './postButtonCSS.css'


function mainContainer2(props) {
    return (
        <div className='parentDiv'>
            <div className='leftMainDiv'>
                <Hero1 image={props.arr[4].img}>
                    <TextBelowPost features={props.arr[4].feature} title={props.arr[4].title} id={props.arr[4].id} />
                </Hero1>
                <Hero1 image={props.arr[5].img}>
                    <TextBelowPost features={props.arr[5].feature} title={props.arr[5].title} id={props.arr[5].id} />
                </Hero1>
                <Hero1 image={props.arr[6].img}>
                    <TextBelowPost features={props.arr[6].feature} title={props.arr[6].title} id={props.arr[6].id} />
                </Hero1>
                <Hero1 image={props.arr[7].img}>
                    <TextBelowPost features={props.arr[7].feature} title={props.arr[7].title} id={props.arr[7].id} />
                </Hero1>

                <a href='http://localhost:3000/'   >
                    {
                        <button id='btnPage2' className='buttonStyle'>NEWER POSTS</button>
                    }
                </a>
                <a href='http://localhost:3000/page3' >
                    {
                        <button className='buttonStyle'>OLDER POSTS</button>
                    }
                </a>

            </div>
            <div className='rightMainDiv'>
                <SideBar />
            </div>
        </div>
    )
}

export default WithHOC(mainContainer2)
