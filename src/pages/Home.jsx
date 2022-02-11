import React from 'react';
import { Link } from 'react-router-dom';
import background from '../assets/background.jpg'
import '../styles/Home.css'

export default function Home() {
    return (
        <div className="home" style={{backgroundImage: `url(${background})`}}>
            <div className="headerContainer">
                <h1>Welcome</h1>
                <p>FOOD AT CLICK</p>
                <Link to="/menu">
                    <button>Order Now</button>
                </Link>
            </div>
        </div>
    );
}
