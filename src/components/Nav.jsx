import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <nav style={{backgroundColor: 'red', height: '200px'}}>
        <Link to="/">Go HOme</Link>
        <Link to="/projects">Go Projects</Link>

    </nav>
  )
}

export default Nav