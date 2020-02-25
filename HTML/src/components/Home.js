import React, { Component } from 'react';
import { Link,HashRouter as Router } from 'react-router-dom';
//import '../index.css';

export class Home extends Component {
    render() {
        return (
            <Router>
                <div className="home">
                <button className="Home_Button"><Link to={"/instruction"}>Instruction</Link></button> 
                <button className="Home_Button"><Link to={"/UGPA"}>UGPA</Link></button>  
                <button className="Home_Button"><Link to={"/SemSum"}>Semester Summary</Link></button>  
                <button className="Home_Button"><Link to={"/SSW"}>SSW ACT</Link></button>  
                <button className="Home_Button"><Link to={"/Course"}>Course</Link></button>  
                <button className="Home_Button"><Link to={"/Learning"}>Learning</Link></button>  
                <button className="Home_Button"><Link to={"/AcademicPlanDetails"}>Academic Plan</Link></button>  
               </div> 
            </Router>
             
        )
    
        }
}
export default Home