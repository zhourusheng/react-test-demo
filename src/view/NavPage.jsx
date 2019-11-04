import React from 'react'
import { Link } from 'react-router-dom'

class NavPage extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/HocStateLess">HocStateLess</Link>
          </li>
          <li>
            <Link to="/NewClass">NewClass</Link>
          </li>
          <li>
            <Link to="/mixin">mixin</Link>
          </li>
          <li>
            <Link to="/game">game</Link>
          </li>
          <li>
            <Link to="/form">form</Link>
          </li>
          <li>
            <Link to="/page">TodoPage</Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default NavPage