import React, { Component } from 'react'
import loading from '../Spinner-1s-200px.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div className="Container text-center">
        <img src={loading} alt="Loading"/>
      </div>
    )
  }
}
