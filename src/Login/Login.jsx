import React from 'react'
import './Login.css'
import { useState } from 'react'


export default function Login() {
    const [email,setEmail]= useState('');
    const [password, setPassword]=useState('');
    function handleRegister(){
        console.log("hello")

    }

  return (
    <div className='loginForm'>
        <div className='form'>
            <label htmlFor=''> Enter Your Email:</label>
            <input
            name='email' 
            type='email'
            onChange={(e)=>setEmail(e.target.value)}/>

        </div>
        <div className='form'>
            <label htmlFor=''> Enter Your Password:</label>
            <input
            name='password' 
            type='Password'
            onChange={(e)=>setPassword(e.target.value)}/>
            
        </div>
        <button type='submit' onClick={handleRegister}>Login</button>
      
    </div>
  )
}
