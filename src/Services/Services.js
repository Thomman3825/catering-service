import React from 'react'
import s from './style.module.css'
import { useState, useEffect  } from 'react'

const Services = () => {
    const [user, setUser]=useState([])

    async function getUser(){
        const res = await fetch("http://localhost:3333/users")
        const userData = await res.json()
        setUser(userData)
    }

    useEffect(()=>{
        getUser()
    },[])
  return (
    <div className={s.container}>
        <h1>Services</h1>
        <div>
        {
            user.map((use)=>{
             if (use.role === "vendor"){
                return <h2 key={use.id}>{use.service}</h2>
        }
    })}
        </div>

    </div>
  )
}

export default Services