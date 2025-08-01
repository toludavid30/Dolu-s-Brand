import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./Styling/verify.css"

const Verify = () => {
    const [redirect, setRedirect] = useState(false)
    const {token} = useParams()
    const baseUrl = "https://noderender-i690.onrender.com/auth/verify"

    const handleVerify =async () =>{
        
        const res = await fetch(baseUrl, {
            method: "POST",
            body: JSON.stringify({token}),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await res.json()
        // console.log(data);
        if (data.status === 200){
            alert(data.message)
            setRedirect(true)
        }else{
            alert(data.message)
        }
        // console.log({token});
    }
    useEffect(()=>{
        handleVerify()
    },[])

  return (
    <div className='verifyWrapper container'>
<div class="fingerprint-container">
  <svg
    viewBox="0 0 256 256"
    height="256"
    width="256"
    xmlns="http://www.w3.org/2000/svg"
    class="fingerprint-svg"
  >
    <path
      d="M126.42 24C70.73 24.85 25.21 70.09 24 125.81a103.53 103.53 0 0 0 13.52 53.54a4 4 0 0 0 7.1-.3a119.35 119.35 0 0 0 11.37-51A71.77 71.77 0 0 1 83 71.83a8 8 0 1 1 9.86 12.61A55.82 55.82 0 0 0 72 128.07a135.3 135.3 0 0 1-18.45 68.35a4 4 0 0 0 .61 4.85c2 2 4.09 4 6.25 5.82a4 4 0 0 0 6-1A151.2 151.2 0 0 0 85 158.49a8 8 0 1 1 15.68 3.19a167.3 167.3 0 0 1-21.07 53.64a4 4 0 0 0 1.6 5.63c2.47 1.25 5 2.41 7.57 3.47a4 4 0 0 0 5-1.61A183 183 0 0 0 120 128.28a8.16 8.16 0 0 1 7.44-8.21a8 8 0 0 1 8.56 8a198.94 198.94 0 0 1-25.21 97.16a4 4 0 0 0 2.95 5.92q4.55.63 9.21.86a4 4 0 0 0 3.67-2.1A214.9 214.9 0 0 0 152 128.8c.05-13.25-10.3-24.49-23.54-24.74A24 24 0 0 0 104 128a8.1 8.1 0 0 1-7.29 8a8 8 0 0 1-8.71-8a40 40 0 0 1 40.42-40c22 .23 39.68 19.17 39.57 41.16a231.4 231.4 0 0 1-20.52 94.57a4 4 0 0 0 4.62 5.51a104 104 0 0 0 10.26-3a4 4 0 0 0 2.35-2.22a244 244 0 0 0 11.48-34a8 8 0 1 1 15.5 4q-1.12 4.37-2.4 8.7a4 4 0 0 0 6.46 4.17A104 104 0 0 0 126.42 24M198 161.08a8 8 0 0 1-7.92 7a8 8 0 0 1-1-.06a8 8 0 0 1-6.95-8.93a253 253 0 0 0 1.92-31a56.08 56.08 0 0 0-56-56a57 57 0 0 0-7 .43a8 8 0 0 1-2-15.89a72.1 72.1 0 0 1 81 71.49a267 267 0 0 1-2.05 32.96"
      stroke-width="1"
      stroke="currentColor"
      fill="currentColor"
      class="fingerprint-path"
    ></path>
  </svg>

  <div class="scan-line"></div>
  <div class="matrix-rain"></div>
  <div class="ripple1"></div>
  <div class="ripple2"></div>
  <div class="ripple3"></div>
  <div class="glow"></div>
  <div class="status">Verifying...</div>
</div>

    {redirect && <Navigate to="/" replace />}
    </div>
  )
}

export default Verify