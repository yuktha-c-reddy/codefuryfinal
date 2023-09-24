import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import './login.css';


function Login(){
    const navigate = useNavigate();
    return(
        <div class="container">
        
       <div class="cont">
        <div class="card">
            <a class="login">Log in</a>
            <div class="inputBox">
                <input type="text" required="required" />
                <span class="user">Username</span>
            </div>

            <div class="inputBox">
                <input type="password" required="required" />
                <span>Password</span>
            </div>

            <button className="enter" onClick={() => navigate('/main')}>Enter</button>
        </div>
        <Link to="/loading">
        <button class="button type1">
        <span class="btn-txt">Back</span>
        </button>
       </Link>
       </div>
       </div>
    );
}

export default Login;
