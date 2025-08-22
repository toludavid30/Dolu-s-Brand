import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import "./styling.css"
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const Contact = () => {
  const contactSchema = yup.object({
      email: yup.string().email("enter a valid email").required("email is required"),
      name: yup.string().required("name is required").min(3, "name must be at least 3 characters"),
      message: yup.string().required("message is required").min(5, "name must be at least 5 characters")
    })
  const {register, handleSubmit, formState:{errors}} =useForm(
    {
      resolver : yupResolver(contactSchema)
    }
  )
  const [isLoading, setIsloading] = useState(false)
  const baseUrl = "https://noderender-i690.onrender.com/auth/sendMessage"
  const sendMessage = async(message) => {
    setIsloading(true)
    try {
      const res = await fetch(baseUrl, {
        method: "POST",
        body: JSON.stringify(message),
        headers : {
          "Content-Type":"application/json"
        } 
      })
      const data = await res.json()
      console.log(data);
      alert(data.message)
    } catch (error) {
      console.log(error);
    }finally{
      setIsloading(false)
    }
  }
  return (
    <div id='contactPage' className='mt-4 py-5'>
      <div className="socialsWrap w-50 mx-auto text-center">
        <h5>Our Socials</h5>
        <p>Instagram @ <a href="https://www.instagram.com/dolu.co/">dolu.co</a></p>
        <p>X @ <a href="https://x.com/dolu_co">dolu_co</a>
        </p>
        <p>
          Email @ modolu77@gmail.com
        </p>
      </div>
      <div className='container cardWrapper w-md-50 py-4'>
        <div className="headWrap text-center p-3">
          <h5>Send us a message</h5>
        </div>
        <form className="container w-75 py-4 mx-auto d-flex flex-column gap-3" onSubmit={handleSubmit(sendMessage)} action="">
            <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" {...register("name")} className="form-control form-control-md" id="name" placeholder="Enter your name"/>
                {errors.name && 
                <p className='text-danger'>{errors.name.message}</p>
                }
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" {...register("email")} className="form-control form-control-md" id="email" placeholder="Enter your email"/>
                {errors.email && 
                <p className='text-danger'>{errors.email.message}</p>
                }
            </div>
            <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" {...register("phone")} className="form-control form-control-md" id="email" placeholder="Enter your phone number"/>
            </div>
            <div className="form-group d-flex flex-column">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" rows={8} cols={30}{...register("message")}></textarea>
                {errors.message && 
                <p className='text-danger'>{errors.message.message}</p>
                }
            </div>
            <button type="submit" className="btn btn-dark btn-lg w-100"disabled = {isLoading}>Send</button>
        </form>
      </div>
      
    </div>
  )
}

export default Contact