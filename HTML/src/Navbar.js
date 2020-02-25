// JavaScript source code
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
      <div className="logo">
        Caltor
      </div>
      <ul className = "nav-links">
        <li>
        <Link to={"/Home"} > Home </Link></li>
        <li><Link to={"/SignUpLogin"} > Logout </Link></li>
        <li></li>
        <div className="burger">
          <a><div></div>
          <div></div>
          <div></div></a>
        </div>
        </ul>
        <div id="sidebar">
          <ul className = "menu">
            <li> <Link to={"/SemSum"} > Semester Summary </Link>  </li>
            < li><Link to={'/Ugpa'} >Ugpa</Link></li>
            < li><Link to={'/SSW'} >SSW</Link></li>
            < li><Link to={'/Hook_prototype'} >Hook</Link></li> 
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