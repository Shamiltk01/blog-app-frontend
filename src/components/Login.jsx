import axios from 'axios'
import React, { useState } from 'react'

const Login = () => {

    const [input,setInput]=new useState([
        {
            email:"",
            pass:""
        }
    ])

    const handler=(event)=>{
        setInput({...input,[event.target.name]: event.target.value})
    }

    const read=()=>{
        axios.post("http://localhost:3001/user/signup",input).then((responce)=>{
            if(responce.data.status == "success"){
                alert("Login Success")
                setInput(
                    {
                        email:"",
                        pass:""
                    }
                )
            }
            else{
                alert("somthing went wrong..!")
            }
            
        })
    }


    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="container">
                            <br /><br />
                            <div class="card"  >
                                <div class="card-body">
                                    <h5 class="card-title">User Login</h5><br />
                                    <div className="row g-3">
                                        

                                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                            <label htmlFor="" className="form-label">Email address</label>
                                            <input type="email" className="form-control" name='email'  />
                                        </div>

                                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                            <label htmlFor="" className="form-label">Password</label>
                                            <input type="password" name="pass"  className="form-control" />
                                        </div>
                                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                            <button className="btn btn-info">Login</button>  &nbsp;&nbsp;
                                            <a href="/register" className="card-link">SignUp</a>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login