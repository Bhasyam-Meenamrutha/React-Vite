import React from 'react'
import './Signup.css'
import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function Signup() {
    const navigate= useNavigate()
    const [name, setName]= useState("");
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    const [mobile, setMobile]=useState("");
    function handleRegister(){
        const newUser={name, email, password, mobile}
        axios.post(`https://mern-ecommerece.onrender.com/api/auth/register`, newUser)
            .then((res)=>{
                console.log(res)
                if (res.status===201)
                    navigate('/login')
            })
        

    }
  return (
    <div className='signupForm'>
        <div className='form'>
            <label htmlFor='' >Enter Your Name</label>
            <input 
                name='name'
                type='text'
                onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div className='form'>
            <label htmlFor='' >Enter Your Email</label>
            <input 
                name='email'
                type='text'
                onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className='form'>
            <label htmlFor='' >Enter Your Password</label>
            <input 
                name='password'
                type='text'
                onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <div className='form'>
            <label htmlFor='' >Enter Your Mobile Number</label>
            <input 
                name='mobile'
                type='text'
                onChange={(e)=>setMobile(e.target.value)}/>
        </div>
        <button type='submit' onClick={handleRegister()} >Register </button>
    </div>
  )
}
