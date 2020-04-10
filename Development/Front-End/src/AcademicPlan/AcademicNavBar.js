// JavaScript source code
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import UofR from '../uofrlogo.png';

const Navigation = () => {
    return (
        <nav>
      <div className="logo">
        <img src={UofR} alt="UofR" />
      </div>
      <ul className = "nav-links">
        <li>
        <Link style={{fontSize: 21}} to={"/Home"} ><i class = "fa fa-home" /></Link>
        </li>
        <li>
        <Link style={{fontSize: 21}} to={"/Instructions"} ><i class="fa fa-question-circle"></i></Link>
        </li>
        <li><Link style={{fontSize: 21}}  to={"/login"} ><i class="fa fa-sign-out" aria-hidden="true">Logout</i></Link></li>
        <li></li>
    </ul>
    </nav>
    
    )
}



class AcademicNavBar extends Component {
    render() {
        return (
            <Navigation />


        )
    }
}
export default AcademicNavBar