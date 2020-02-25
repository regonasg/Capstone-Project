import React, { Component } from 'react'
import { HashRouter as Router, Route, NavLink, Switch} from 'react-router-dom';
import SignupForm from '../forms/SignUpForm';
import LoginForm from '../forms/LoginForm';
import NavBar from '../Navbar';

//import '../index.css';


export class SignUpLogin extends Component {
    render() {
        return (
            <Router>
                <NavBar />
                <div className = "SignupLoginContainer">
                    <div className = "SignupLogin_Form">
                        <div className = "SignUpLogin_Title">
                            <NavLink 
                                to = '/login'
                                activeClassName = "Link_Active"
                                className = "Title_Link"
                            >Login</NavLink> 
                            or
                            <NavLink 
                                exact to = '/signup'
                                activeClassName = "Link_Active"
                                className = "Title_Link"
                            >Sign Up</NavLink>   
                            
                            <Switch>
                                <Route exact path = '/signup' component={SignupForm}></Route>
                                <Route path = '/login' component={LoginForm}></Route>
                            </Switch>
                            

                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}

export default SignUpLogin
