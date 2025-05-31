import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Verify = () => {
    const {token} = useParams()
    const baseUrl = "https://noderender-dm5d.onrender.com/auth/verify"

    const handleVerify =async () =>{
        const res = await fetch(baseUrl, {
            method: "POST",
            body: JSON.stringify({token}),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await res.json()
        console.log(data);
        
    }
    useEffect(()=>{
        handleVerify()
    },[])

  return (
    <div>Verify Email</div>
  )
}

export default Verify