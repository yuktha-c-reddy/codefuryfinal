import React from "react";
import './home.css';
import { Link } from 'react-router-dom';

function Home(){
    return(
        <div class="container">
        <h1> Mindfull Space</h1>
        <div class="image"></div>
        <Link to="/loading">
        <button class="btn-class-name"> 
            <span class="back"></span>
            <span class="front">Press</span>
        </button>
        </Link>
        </div>
    );
}

export default Home ;