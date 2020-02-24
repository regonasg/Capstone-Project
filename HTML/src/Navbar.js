// JavaScript source code
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-primary">
            <div className="container"> <button className="navbar-toggler navbar-toggler-right border-0" type="button" data-toggle="collapse" data-target="#navbar18">
                <span className="navbar-toggler-icon"></span>
            </button>
                
                    <ul className="navbar-nav mx-auto"></ul>
                    <ul className="navbar-nav">
                      
                    <li> <Link to={"/SemSum"} className="nav-item"> Semester Summary </Link>  </li>
                    < li><Link to={'/Ugpa'} className="nav-item">Ugpa</Link></li>
                    < li><Link to={'/SSW'} className="nav-item">SSW</Link></li>
                    < li><Link to={'/Hook_prototype'} className="nav-item">Hook</Link></li> 
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