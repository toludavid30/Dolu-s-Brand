import React, { useEffect, useState } from 'react'
import './Styling/Auth.css'
import Login from './components/Login'
import Signup from './components/Signup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Navigate, Outlet } from 'react-router-dom'


const signupSchema = yup.object({
    Email: yup.string().email("enter a valid email").required("email is required"),
    name: yup.string().required("name is required").min(3, "name must be at least 3 characters"),
    Password: yup.string().required("password is required").min(6, "password must be atleast 6 characters")
})

const signinSchema = yup.object({
    Email: yup.string().email("enter a valid email").required("email is required"),
    Password: yup.string().required("password is required").min(6, "password must be atleast 6 characters")
})


const Auth = () => {
  const BaseUrl = "https://noderender-i690.onrender.com/auth"
  const [isLoading, setIsLoading] = useState(false)
  const [AuthState, setAuthState] = useState("Signup")
  const [showPassword, setShowPassword] = useState(false)
  const [redirect, setRedirect] = useState(false)
  const {register, handleSubmit, formState:{errors}} = useForm(
    {
        resolver : yupResolver(AuthState === "Signup" ? signupSchema : signinSchema)
    }
  )
  
  const [passwordConfirmed, setpasswordConfirmed] = useState(false)
  const [currentUser, setCurrentUser] = useState({})
  const switchAuth = ( ) => {
    setAuthState(prev => prev === "Signup" ? "Login" : "Signup")
  }

  const confirmPassword = (e) => {
    const password = document.getElementById("password").value
    const confirmPassword = e.target.value
    if (password !== confirmPassword) {
      e.target.setCustomValidity("Passwords do not match")
      setpasswordConfirmed(false)
    } else {
      e.target.setCustomValidity("")
      setpasswordConfirmed(true)
    }
  }

const handleSignUp = async (userData) => {
 
    if (!passwordConfirmed) {
      alert("Passwords do not match")
      setIsLoading(false)
      return
    }
    else{
      setIsLoading(true)
      try{
      const res = await fetch(`${BaseUrl}/signup`, {
            method: "POST",
            body: JSON.stringify(userData),
            headers: {
                "Content-Type": "application/json"
            } 
     })
     const data = await res.json()
      console.log(data);
      if (data.status === 200) {
        setCurrentUser(data.user)
        Swal.fire({
                        title: 'Success',
                        text: 'Registration successful',
                        icon: 'success',
                        confirmButtonText: 'OK',
                        themeColor: '#000000',
                        btnColor: '#7CFC00',
                        btnColor: true
                    });
        // alert("Registration successful")
        setAuthState("Login")
      } else {
        // alert(data.message || "An error occurred during registration")
        console.log("ERROR BLOCK", data);
        Swal.fire({
            title: 'Error',
            text: data.message || "An error occurred during registration",
            icon: 'error',
            confirmButtonText: 'OK'
        });
    }
  }
    catch(error){
      // console.log(error);
        console.log("CATCH BLOCK", error);
              Swal.fire({
                  title: 'Error',
                  text: error.message || "An error occurred during registration",
                  icon: 'error',
                  confirmButtonText: 'OK'
              }); 
    }
    finally{
      setIsLoading(false)
    }
    }
    }

  const handleSignin = async (userData) => {
      setIsLoading(true)
      try{
      const res = await fetch(`${BaseUrl}/signin`, {
            method: "POST",
            body: JSON.stringify(userData),
            headers: {
                "Content-Type": "application/json"
            } 
     })
     const data = await res.json()
      console.log(data);
      if (data.status === 200) {
        setCurrentUser(data.user)
        // alert("Sign In successful")
        Swal.fire({
                        title: 'Success',
                        text: 'Sign In successful',
                        icon: 'success',
                        confirmButtonText: 'OK',
                        themeColor: '#000000',
                        btnColor: '#7CFC00',
                        btnColor: true
          });
        localStorage.setItem("token", JSON.stringify(data.token))
        localStorage.setItem("user", JSON.stringify(data.user))
        // setRedirect(true)
        window.location.href = "/"
      } else {
        // alert(data.message || "An error occurred during registration")
                Swal.fire({
                    title: 'Error',
                    text: data.message || "An error occurred during registration",
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
      }
    }
    catch(error){
      // console.log(error);
              Swal.fire({
                  title: 'Error',
                  text: error.message || "An error occurred during registration",
                  icon: 'error',
                  confirmButtonText: 'OK'
              });      
    }
    finally{
      setIsLoading(false)
    }
    }

     const handlePassword = ()  => {
        setShowPassword(prev => !prev)
    }

  //  useEffect(() => {
  //   console.log(currentUser);
  // }, [currentUser])  
  return (
    <div id='AuthWrapper' className='pt-5'>
      <div className="container w-50 mx-auto card-wrapper">

        <div className="headWrap p-3 text-center">
            <h4 className="display-3 text-dark">Welcome</h4>
            <p className="lead text-dark">
                { AuthState === "Signup" ? <span> already have an account?</span> : <span>Don't have an account yet?</span> }
                <span>
                  {
                    AuthState === "Signup" ? <a href="#" onClick={switchAuth} className="text-decoration-none"> Log in</a>
                    : <a href="#" onClick={switchAuth} className="text-decoration-none"> Sign Up</a>
                  }
                </span>
            </p>
        </div>
      { AuthState === "Signup" ?
        <form className="container w-75 py-4 mx-auto d-flex flex-column gap-3" onSubmit={handleSubmit(handleSignUp)} action="">
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" {...register("name")} className="form-control form-control-md" id="name" placeholder="Enter your name"/>
                {errors.name && 
                <p className='text-danger'>{errors.name.message}</p>
                }
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" {...register("Email")} className="form-control form-control-md" id="email" placeholder="Enter your email"/>
                {errors.Email && 
                <p className='text-danger'>{errors.Email.message}</p>
                }
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <div className="passwordContainer d-flex input-group">
                <input type={showPassword ? "text" : "password"} {...register("Password")} className="form-control form-control-md" id="password" placeholder="Enter your password"/>
                <span className='input-group-text' onClick={handlePassword}>
                    {showPassword ? (
                    <i class="fa-regular fa-eye-slash"></i> )
                    : (<i class="fa-regular fa-eye"></i>) 
                    }  
                </span>
                </div>
                {errors.Password && 
                <p className='text-danger'>{errors.Password.message}</p>
                }
            </div>
            <div className="form-group">
                <label htmlFor="password">Confirm Password</label>
                <div className="passwordContainer d-flex input-group">
                <input type={showPassword ? "text" : "password"} className="form-control form-control-md" id="conPassword" onChange={confirmPassword} placeholder="Confirm your password"/>
                <span className='input-group-text' onClick={handlePassword}>
                    {showPassword ? <i class="fa-regular fa-eye-slash"></i> 
                    : <i class="fa-regular fa-eye"></i> 
                    }  
                </span>
                </div>
            </div>
            <button type="submit" className="btn btn-primary btn-lg w-100"disabled = {isLoading}>Register</button>
        </form>

        :

        <form className="container w-75 py-4 mx-auto d-flex flex-column gap-3" onSubmit={handleSubmit(handleSignin)} action="">
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" {...register("Email")} className="form-control form-control-md" id="email" placeholder="Enter your email"/>
                {errors.Email && 
                <p className='text-danger'>{errors.Email.message}</p>
                }
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <div className="passwordContainer d-flex input-group">
                <input type={showPassword ? "text" : "password"} {...register("Password")} className="form-control form-control-md" id="password" placeholder="Enter your password"/>
                <span className='input-group-text' onClick={handlePassword}>
                    {showPassword ? <i class="fa-regular fa-eye-slash"></i> 
                    : <i class="fa-regular fa-eye"></i> 
                    }  
                </span>
                </div>
            </div>
            <button type="submit" className="btn btn-primary btn-lg w-100" disabled = {isLoading}>Sign In</button>
        </form>
      } 
      </div>
      {redirect && <Navigate to="/" replace />}
    </div>
  )
}

export default Auth