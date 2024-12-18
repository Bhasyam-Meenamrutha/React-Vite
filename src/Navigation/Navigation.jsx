import React from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'

export default function Navigation() {
  return (
    <div className='navbar'>
      <Link to='/'>Home</Link>
      <Link to='/login'>Login</Link>
      <Link to='/signup'>Signup</Link>
    </div>
  )
}

