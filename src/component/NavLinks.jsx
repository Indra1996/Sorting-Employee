import React, { Component } from 'react'
import {Link ,NavLink } from 'react-router-dom'

export default class NavLinks extends Component {
  render() {
    return (
      <div>
        <ul className="links">
            <li><NavLink to="/employee">Employee</NavLink></li>
            <li><NavLink to="/task">Task</NavLink></li>
        </ul>
      </div>
    )
  }
}
