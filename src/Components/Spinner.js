import React, { Component } from 'react'
import loading from '../Spinner-1s-200px.gif'

const Spinner =()=> {
    return (
      <div className="Container text-center">
        <img className='my-3' src={loading} alt="Loading"/>
      </div>
    )
}

export default Spinner
