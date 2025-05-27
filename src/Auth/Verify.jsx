import React from 'react'
import { useParams } from 'react-router-dom'

const Verify = () => {
    const {token} = useParams()
    const baseUrl = "http://localhost:5005/auth/verify"
  return (
    <div>Verify</div>
  )
}

export default Verify