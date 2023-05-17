import React, { useState } from "react";
import "../Styles/Signin.css";
import axios from "axios";
import { useNavigate,Link } from "react-router-dom"

const Signup = () => {
  let [name,setName]=useState('')
  let [email, setEmail]=useState('')
  let [password, setPassword]=useState('')
  let [confirmPassword, setConfirmPassword]=useState('')
  const navigate = useNavigate()
  
  const signUp = (e) => {
    e.preventDefault();
    let data={name,email,password,confirmPassword}
    if (name && email && password &&(password === confirmPassword)) {
      axios.post('http://localhost:4000/signup', data)
      .then((res)=>{
        // alert("Sucessfully signed up")
        alert(res.data.message)
        navigate('/')
      })
    }else{
      alert("Please fill all fields")
    }
  }
  return (
    <div className="content">
      <div
        className="header"
        style={{ justifyContent: "space-between", display: "flex" }}
      >
        <h1 style={{ color: "blue", fontFamily: "serif" }}>Foodie</h1>
        <div>
          <h5
            style={{
              justifyContent: "space-between",
              display: "flex",
              marginRight: "20px",
              marginTop: "20px",
            }}
          >
            Already User? <Link to="/">Sign In</Link>
          </h5>
        </div>
      </div>
      <div className="container">
        <div className="rowcontent">
          <div className="coloumndata">
            <div className="col-md-8" >
              <div className="mb-4">
                <h3>Welcome Back!</h3>
                <p className="mb-4">First Sign Up then Login</p>
              </div>
              <form onSubmit={signUp}> 
                <div className="ipbox">
                  <input
                    style={{
                      width: "250px",
                      height: "35px",
                      border: "1px solid blue",
                    }}
                    type="text"
                    onChange={(e)=>setName(e.target.value)}
                    placeholder="Name"
                  />
                </div>
                <div className="ipbox">
                  <input
                    style={{
                      width: "250px",
                      height: "35px",
                      border: "1px solid blue",
                    }}
                    type="text"
                    placeholder="Username@gmail.com"
                    onChange={(e)=>setEmail(e.target.value)}

                  />
                </div>
                <div className="ipbox">
                  <input
                    style={{
                      width: "250px",
                      height: "35px",
                      border: "1px solid blue",
                    }}
                    type="password"
                    placeholder="Enter Password"
                    onChange={(e)=>setPassword(e.target.value)}

                  />
                </div>
                <div className="ipbox">
                  <input
                    style={{
                      width: "250px",
                      height: "35px",
                      border: "1px solid blue",
                    }}
                    type="password"
                    placeholder="Confirm Password"
                    onChange={(e)=>setConfirmPassword(e.target.value)}
                  />
                </div>
                <div className="subbtn">
                  <button
                    style={{
                      color: "white",
                      background: "blue",
                      border: "none",
                      cursor: "pointer",
                      borderRadius: "10px",
                      width: "90px",
                      height: "40px",
                    }}
                    className="loginbtn"
                  >
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="imgsec">
          <img
            style={{ display: "flex", width: "600px", height: "500px" }}
            src="signup.png"
            alt="err"
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
