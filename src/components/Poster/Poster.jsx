import React, { Component } from 'react'
import advertisement from '../../Images/advertisement.jpg'
import './poster.css'

const Poster = () => {
    return (
      <div>
        <img className='poster-img' src={advertisement} />
      </div>
    )
}

export default Poster
