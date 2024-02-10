import axios from 'axios'
import React, { useState } from 'react'

const Register = () => {

    const [input,setInput]=new useState([
        {
            name:"",
            email:"",
            age:"",
            phone:"",
            pass:""
        }
    ])

    const handler=(event)=>{
        setInput({...input,[event.target.name]: event.target.value})
    }

    const read=()=>{
        axios.post("http://localhost:3001/user/signup",input).then((responce)=>{
            if(responce.data.status == "success"){
                alert("Successfully registered")
                setInput(
                    {
                        name:"",
                        email:"",
                        age:"",
                        phone:"",
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
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <h3>User Registration</h3>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Name</label>
                                <input type="text" className="form-control" name='name' onChange={handler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Email address</label>
                                <input type="email" className="form-control" name='email' onChange={handler}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Age</label>
                                <input type="number" name="age"  className="form-control" onChange={handler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Phone Number</label>
                                <input type="number" name="phone" className="form-control" onChange={handler}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Password</label>
                                <input type="password" name="pass" onChange={handler} className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-info">Register</button>  &nbsp;&nbsp;
                                <a href="/" className="card-link">Back to Login</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register