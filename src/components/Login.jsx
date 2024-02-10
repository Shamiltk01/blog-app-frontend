import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate=useNavigate()

    const [input,setInput]=new useState([
        {
            email:"",
            password:""
        }
    ])

    const handler=(event)=>{
        setInput({...input,[event.target.name]: event.target.value})
    }

    const read=()=>{
        axios.post("http://localhost:3001/api/user/login",input).then((responce)=>{
            if(responce.data.status == "success"){
                alert("Login Success")
                navigate("/addcomment")
                setInput(
                    {
                        email:"",
                        password:""
                    }
                )
            }
            else{
                alert("Wrong credentials..!")
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
                                            <input type="email" className="form-control" name='email' value={input.email} onChange={handler} />
                                        </div>

                                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                            <label htmlFor="" className="form-label">Password</label>
                                            <input type="password" name="password" value={input.password} className="form-control" onChange={handler}/>
                                        </div>
                                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                            <button className="btn btn-info" onClick={read}>Login</button>  &nbsp;&nbsp;
                                            <a href="/register" className="card-link" >SignUp</a>
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