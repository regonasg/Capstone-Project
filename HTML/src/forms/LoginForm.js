import React, { Component } from 'react';
import { Link, withRouter} from 'react-router-dom';

const initialState = {
    username: '',
    password: '',
    unameError: '',
    passError: '',
}
class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = initialState;

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let target = event.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
            [name]: value
        });
    }

    validate = () => {
        let unameError = '';
        let passError = '';
        
        //username validation
        if(this.state.username.length <= 0) {
            unameError = "Please enter your username";
        }
        if(unameError) {
            this.setState({unameError});
            return false;
        }

        //password validation
        if(this.state.password.length <= 0) {
            passError = "Please enter your password";
        }
        if(passError) {
            this.setState({passError});
            return false;
        }

        return true;
    };

    handleSubmit(event) {
        event.preventDefault();
        const isValid = this.validate();
        if(isValid){
            console.log('The form was submitted with the following data: ');
            console.log(this.state);
            this.setState(initialState);
            this.props.history.push("/home");

        }
    }

    render() {
        return (
            <div className = "formCentre">
               <form onSubmit={this.handleSubmit} className = "form_Fields" noValidate>
                   <div className = "form_Div">
                       <label >Username: </label>
                       <input
                        type = "text"
                        id = "username"
                        placeholder = "qwe12r"
                        name = "username"
                        value = {this.state.username}
                        onChange = {this.handleChange}
                        required/>
                        <div className = "errorMsg">{this.state.unameError}</div>
                   </div>


                   <div className = "form_Div">
                       <label >PIN: </label>
                       <input
                        type = "password"
                        id = "password"
                        name = "password"
                        value = {this.state.password}
                        onChange = {this.handleChange}
                        required/>
                        <div className = "errorMsg">{this.state.passError}</div>
                   </div>
                   <div></div>
                   <div className = "form_Div">
                       <button type = "submit" className = "form_button">Login</button>
                       <Link exact to='/signup' className = "form_Link" >
                           Create an account
                       </Link>
                   </div>

                </form> 
            </div>
        )
    }
}

export default withRouter(LoginForm);