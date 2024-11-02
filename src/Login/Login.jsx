import React from 'react'
import './Login.css'
import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function Login() {
    const navigate = useNavigate()
    const [email,setEmail]= useState('');
    const [password, setPassword]=useState('');
    function handleRegister(){
        const newUser={email,password}
        axios.post(`https://mern-ecommerece.onrender.com/api/auth/login`, newUser)
            .then((res)=>{
                console.log(res)
                if(res.status===200){
                    localStorage.setItem('userId', res.data.userId)
                    localStorage.setItem('role',res.data.role)
                    navigate("/")
                }
            })
            .catch((err)=>{
                alert("Invalid Credentials")
            })

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
