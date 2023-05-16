import React, { useState } from "react";
import "../Styles/Signin.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signin = (e) => {
    let [email,setEmail]= useState('')
    let [password,setPassword]= useState('')
    const navigate = useNavigate()

    const signIn = (e) => {
      e.preventDefault();
      let data={email,password}
      if (email && password) {
        axios.post('http://localhost:4000/signin', data)
        .then((res)=>{
          if (res.data.status === 200) {
            navigate('/Portal')
          }else{
            alert(res.data.message)
          }
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
            New User? <a href="/signup">Sign Up</a>
          </h5>
        </div>
      </div>
      <div className="container">
        
        <div className="imgsec">
          <img
            style={{ display: "flex", width: "600px", height: "600px" }}
            src="attachment.png"
            className="imgwh"
            alt="err"
          />
        </div>

        <div className="contents"  style={{ display: "flex", width: "600px", height: "600px",marginLeft:"40px" }}>
          <div className="rowcontent">
            <div className="coloumndata">
              <div className="mb-4">
                <h3>Welcome Back!</h3>
                <p className="mb-4">Login to continue</p>
              </div>
              <form onSubmit={signIn}>
                <div className="ipbox">
                <input style={{width:"250px",height:"35px",border:"1px solid blue"}} onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="Username@gmail.com" />
                </div>
                <div className="ipbox">
                <input style={{width:"250px",height:"35px",border:"1px solid blue"}} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Enter Password" />
                </div>
                <div className="subbtn">
                <button style={{color:"white",background:"blue",border:"none",cursor:"pointer",borderRadius:"10px", width:"90px",height:"40px"}} className="loginbtn">Sign In</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
