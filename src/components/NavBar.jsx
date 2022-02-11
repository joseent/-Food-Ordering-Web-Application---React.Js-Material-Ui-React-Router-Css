import React, { useReducer } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg'
import '../styles/NavBar.css'
import ReorderIcon from '@mui/icons-material/Reorder';


export default function NavBar() {
    const [showLinks, toggleShowLinks] = useReducer(showLinks => !showLinks,false);
    return (
       <div className="navbar">
           <div className="leftSide">
               <img src={logo} alt="logo" />
               {
                   showLinks? 
                    <div className="hiddenLinks">
                            <Link to="/">Home</Link>
                            <Link to="/menu">Menu</Link>
                            <Link to="/about">About</Link>
                            <Link to="/contact">Contact</Link>
                    </div>
                    :
                    <></>

               }
           </div>
           <div className="rightSide">
               <Link to="/">Home</Link>
               <Link to="/menu">Menu</Link>
               <Link to="/about">About</Link>
               <Link to="/contact">Contact</Link>
               <button onClick={toggleShowLinks}>
                   <ReorderIcon/>
               </button>
           </div>
       </div>
    );
}
