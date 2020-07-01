import React from 'react'
import './Cards.css'

const Cards = (props) => {
    return (
        <div className="containers">
        <div className="cards">
        <img src={props.image} alt="pict" className="imgs"/>
        <div className='span1'>
        <span className="spans">{props.span}</span>
        <br></br>
        <span className="spans">{props.span1}</span>
        </div>
    </div>
    </div>
    )
}

export default Cards
