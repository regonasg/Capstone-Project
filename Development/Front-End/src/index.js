import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import SignUpForm from'./forms/SignUpForm';
import LoginForm from './forms/LoginForm';
import Home from './components/Home';
import SSW from './SSW/SSW';
import Ugpa from './UGPA/Ugpa';
import SemSum from './SemesterSummary/SemSum';
import AcademicForm from './AcademicPlan/AcademicForm';
import AcademicDetails from './AcademicPlan/AcademicDetails';
import Course1 from './Courses/Course1';
import Course2 from './Courses/Course2';
import Course3 from './Courses/Course3';
import Course4 from './Courses/Course4';
import Course5 from './Courses/Course5';
import Course6 from './Courses/Course6';
import Lab1 from './Labs/Lab1';
import Lab2 from './Labs/Lab2';
import Lab3 from './Labs/Lab3';
import Lab4 from './Labs/Lab4';
import Lab5 from './Labs/Lab5';
import Lab6 from './Labs/Lab6';

import './index.css';
import './styles.css';
import './header.css';



const App = () => (
        <Router>
            <div>

                <Switch>
                <Route path='/' exact component={SignUp}></Route>
                <Route path='/login' exact component={LoginForm}></Route>
                <Route path='/home' exact component={Home}></Route>
                <Route path='/academic-plan/details' exact component={AcademicForm}></Route>
                <Route path='/academic-plan'component={AcademicDetails}></Route>
                <Route path='/ugpa' component={Ugpa}></Route>
                <Route path='/ssw-act' component={SSW}></Route>
                <Route path='/sem-sum' component={SemSum}></Route>
                <Route path='/course1' exact component={Course1}></Route>
                <Route path='/course2' exact component={Course2}></Route>
                <Route path='/course3' exact component={Course3}></Route>
                <Route path='/course4' exact component={Course4}></Route>
                <Route path='/course5' exact component={Course5}></Route>
                <Route path='/course6' exact component={Course6}></Route>
                <Route path='/lab1' exact component={Lab1}></Route>
                <Route path='/lab2' exact component={Lab2}></Route>
                <Route path='/lab3' exact component={Lab3}></Route>
                <Route path='/lab4' exact component={Lab4}></Route>
                <Route path='/lab5' exact component={Lab5}></Route>
                <Route path='/lab6' exact component={Lab6}></Route>
    
                
                
                </Switch>
            </div>
        </Router>
    
);

const SignUp = () => (
    <div>
        <SignUpForm />
    </div>
);
   


ReactDOM.render(<App />, document.getElementById('root'));

