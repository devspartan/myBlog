import React from 'react'
import Hero1 from './hero1'
import Hero2 from './hero2'
import WithHOC from './withHOC'
import TextBelowPost from './TextBelowPost';
import SideBar from './sideBar/sideBar'
import './mainContainer1CSS.css'

function mainContainer1(props) {
    return (
        <div className='parentDiv'>
        <div className='leftMainDiv'>
            
                <Hero1 image={props.arr[0].img}>
                    <TextBelowPost features={props.arr[0].feature} title={props.arr[0].title} id={props.arr[0].id} />
                </Hero1>
                <Hero1 image={props.arr[1].img}>
                    <TextBelowPost features={props.arr[1].feature} title={props.arr[1].title} id={props.arr[1].id} />
                </Hero1>
                <Hero1 image={props.arr[2].img}>
                    <TextBelowPost features={props.arr[2].feature} title={props.arr[2].title} id={props.arr[2].id} />
                </Hero1>
                <Hero1 image={props.arr[3].img}>
                    <TextBelowPost features={props.arr[3].feature} title={props.arr[3].title} id={props.arr[3].id} />
                </Hero1>

                <a href='http://localhost:3000/page2'>
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

export default WithHOC(mainContainer1)
