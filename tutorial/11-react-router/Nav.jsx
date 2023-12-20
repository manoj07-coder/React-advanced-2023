import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <>
    <Link to='/'>Home</Link> 
    <Link to='about'>About</Link>
    <Link to='people'>People</Link>
    </>
  )
}

export default Nav