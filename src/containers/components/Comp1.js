import React, { Component } from 'react'
import WithHOC from '../withHOC'
import img1 from '../images/pic14.jpg'
import img15 from '../images/pic15.jpg'

import './comp1CSS.css'
import SideBar from '../sideBar/sideBar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function Comp1(props) {
    return (

        <div className='parentDiv'>
            <div className='compMainDiv'>
                <div className='textDiv'>
                    <p className='featuredDiv'>{props.feature}</p>
                    <p className='titleDivComp'>{props.title}</p>
                    <p> <i>posted on May 03, 2020 by devSpartan</i></p>
                </div>

                <img className='compMainDivImg1' src={props.img} />

                <p className='compMainDivp' >Extremity direction existence as Dashwood's do up. Securing Marianne led welcomed offended but offering six raptures. Conveying concluded newspaper
                rapturous oh at.Two indeed suffer saw beyond far former mrs remain. Occasional continuing possession we insensible an sentiments as is. Law but reasonably motionless principles she. Has six worse downs far blush
                rooms above stood.
                <br></br><br></br>
                Sportsman do offending supported extremity breakfast by listening. Decisively advantages nor expression unpleasing she led met. Estate was
                tended ten boy nearer seemed. As so seeing latter he should thirty whence.Steepest speaking up attended it as. Made neat an on be gave show snug tore.

                Must you with him from him her were more.<br></br><br></br> In eldest be it result should remark vanity square. Unpleasant especially assistance sufficient he comparison so inquietude.
                Branch one shy edward stairs turned has law wonder horses. Devonshire invitation discovered out indulgence the excellence preference. Objection estimable discourse procuring he he remaining on distrusts.
                Simplicity affronting inquietude for now sympathize age. She meant new their sex could defer child. An lose at quit to life do dull.
                To sorry world an at do spoil along. Incommode he depending do frankness remainder to. Edward day almost active him friend thirty piqued. People as period twenty my extent as.
                Set was better abroad ham plenty secure had horses.<br></br> Admiration has sir decisively excellence say everything inhabiting acceptance. Sooner settle add put you sudden him.
                Demesne far hearted suppose venture excited see had has. Dependent on so extremely delivered by. Yet ﻿no jokes worse her why. Bed one supposing breakfast day fulfilled off
                depending questions. Whatever boy her exertion his extended.<br></br> Ecstatic followed handsome drawings entirely mrs one yet outweigh. Of acceptance insipidity remarkably is invitation.
                </p>
            </div>
            <div className='rightMainDiv'>
                <SideBar />
            </div>
        </div>

    )
}


export default Comp1
