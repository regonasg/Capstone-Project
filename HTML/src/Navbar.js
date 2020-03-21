// JavaScript source code
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import UofR from './uofrlogo.png';

const handleClick = () => {
  document.getElementById("sidebar").classList.toggle('active');
}
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
        <div className="burger" onClick = {handleClick}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        </ul>
        <div id="sidebar">
          <ul className = "menu">
            <Link to='/ssw-act'><li>SSW ACT</li></Link>
            <Link to='/sem-sum'><li>Semester Summary</li></Link>
            <Link to='/ugpa'><li>UGPA</li></Link>
            <Link to='/course1'><li>Course1</li></Link>
            <Link to='/course2'><li>Course2</li></Link>
            <Link to='/course3'><li>Course3</li></Link>
            <Link to='/course4'><li>Course4</li></Link>
            <Link to='/course5'><li>Course5</li></Link>
            <Link to='/course6'><li>Course6</li></Link>
       
            </ul>
        </div>
    </nav>
    
    )
}



class Navbar extends Component {
    render() {
        return (
            <Navigation />


        )
    }
}
export default Navbar