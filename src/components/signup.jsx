import React from "react";
import { Link, useNavigate } from 'react-router-dom';

import './signup.css';

function Signup(){
    const navigate = useNavigate();
    return(

        <div class="cont">

        <div class="card">
            <a class="singup">Sign Up</a>
             <div class="inputBox1">
                <input type="text" required="required" />
                <span class="user">Email</span> 
             </div>

            <div class="inputBox">
                <input type="text" required="required" />
                <span>Username</span> 
            </div>

            <div class="inputBox">
                <input type="password" required="required" />
                <span>Password</span>
            </div>

            <button className="enter"  onClick={() => navigate('/main')}>Enter</button>

        </div>
        <Link to="/login">
        <button class="button type2">
        <span class="btn-txt">Log In</span>
        </button>
       </Link>
    </div>
    );
}
export default Signup;
