import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import SignUpForm from'./forms/SignUpForm';
import LoginForm from './forms/LoginForm';
import Home from './components/Home';
import SSW from './SSW/SSW';
import Ugpa from './UGPA/Ugpa';
import './index.css';
import './styles.css';
import './header.css';



const App = () => (
        <Router>
            <div>
                <Link to='/home'>Home</Link>

                <Switch>
                <Route path='/' exact component={SignUp}></Route>
                <Route path='/login' exact component={LoginForm}></Route>
                <Route path='/home' exact component={Home}></Route>
                
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

