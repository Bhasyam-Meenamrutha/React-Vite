import React from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'


export default function Navigtiion() {
  return (
    <div className='Navbar'>
      <Link to='/'>Home</Link>
      <Link to='/login'>Login</Link>
      <Link to='/signup'>Signup</Link>
    </div>
  )
}

