import React, { Component } from 'react'
import large from './large.jpg'
import min from './min.jpg'

export default class ExampleComponent extends Component {
  render () {
    return (<ul>
      <li>large: <img src={large} /></li>
      <li>min: <img src={min} /></li>
    </ul>)
  }
}
