import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'
import './adSlider.css'

const AdSlider = ({imgUrl}) => {
    return (
      <div className='carousel-container'>
        <Carousel>
            <Carousel.Item interval={2000}>
                <img className='carousel-img' src={imgUrl} alt="#"/>
            </Carousel.Item>
        </Carousel>
      </div>
    )
}

export default AdSlider
