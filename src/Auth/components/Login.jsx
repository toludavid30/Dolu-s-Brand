import React from 'react'
import { useForm } from 'react-hook-form';


const Login = () => {
  return (
    <div>
        {/* <div className="container mt-5 w-50 mx-auto card-wrapper">

            <div className="headWrap p-3 text-center">
                <h4 className="display-3 text-dark">Welcome</h4>
                <p className="lead text-dark">already have an account 
                    <a href="" className="text-decoration-none" onClick={setAuthState()}>Login</a>
                </p>
            </div>
          <form className="container w-75 py-4 mx-auto d-flex flex-column gap-3" onSubmit={handleSubmit(handleSignin)} action="">
            <div className="form-group">
                <label for="email">Email</label>
                <input type="email" {...register("Email")} className="form-control form-control-md" id="email" placeholder="Enter your email"/>
            </div>
            <div className="form-group">
                <label for="password">Password</label>
                <input type="password" {...register("Password")} className="form-control form-control-md" id="password" placeholder="Enter your password"/>
            </div>
            <button type="submit" className="btn btn-primary btn-lg w-100">Register</button>
        </form>
      </div> */}
    </div>
  )
}

export default Login