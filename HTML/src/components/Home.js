import React, { Component } from 'react';
import { Link,BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SSW from '../SSW/SSW';
import Ugpa from '../UGPA/Ugpa';
import LoginForm from '../forms/LoginForm';
import SignUpForm from '../forms/SignUpForm';
import SemSum from '../SemesterSummary/SemSum';
import AcademicForm from '../AcademicPlan/AcademicForm';
import AcademicDetails from '../AcademicPlan/AcademicDetails';
import Course1 from '../Courses/Course1';
import Course2 from '../Courses/Course2';
import Course3 from '../Courses/Course3';
import Lab1 from '../Labs/Lab1';
import Lab2 from '../Labs/Lab2';




//import '../index.css';

export class Home extends Component {
    render() {
        return (
            <Router>
               <div>
                   <Switch>
                    <Route path='/home' exact component={HomeContent}></Route>
                    <Route path='/ssw-act' exact component={SSW}></Route>
                    <Route path='/ugpa' exact component={Ugpa}></Route>
                    <Route path='/login' exact component={LoginForm}></Route>
                    <Route path='/signup' exact component={SignUpForm}></Route>
                    <Route path='/sem-sum' exact component={SemSum}></Route>
                    <Route path='/academic-plan/details' exact component={AcademicForm}></Route>
                    <Route path='/academic-plan'component={AcademicDetails}></Route>
                    <Route path='/course1' component={Course1}></Route>
                    <Route path='/course2' component={Course2}></Route>
                    <Route path='/course3' component={Course3}></Route>
                    <Route path='/lab1' component={Lab1}></Route>
                    <Route path='/lab2' component={Lab2}></Route>
                    
                   </Switch>
               </div>
            </Router>
             
        )
    
    }
}

const HomeContent = () => (
    <div>
        <Link to='/instruction' ><button className="home_button">Instruction</button></Link>
        <Link to='/ugpa' ><button className="home_button">UGPA</button></Link>  
        <Link to='/sem-sum' ><button className="home_button">Semester Summary</button></Link> 
        <Link to='/ssw-act' ><button className="home_button">SSW ACT</button></Link>
        <Link to='/course1' ><button className="home_button">Course</button></Link>
        <Link to='/learning' ><button className="home_button">Learning</button></Link>  
        <Link to='/academic-plan/details'><button className="home_button">Academic Plan</button></Link> 

    </div>
);


export default Home