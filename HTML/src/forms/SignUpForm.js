import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignUpForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            student_id: '',
            username: '',
            password: ''
        };

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

    handleSubmit(event) {
        event.preventDefault();

        console.log('The form was submitted with the following data: ');
        console.log(this.state);
    }

    render() {
        return (
            <div className = "formCentre">
               <form onSubmit={this.handleSubmit} className = "form_Fields">
                   <div className = "form_Div">
                       <label >Username: </label>
                       <input
                        type = "text"
                        id = "username"
                        placeholder = "qwe12r"
                        name = "username"
                        value = {this.state.username}
                        onChange = {this.handleChange}/>
                   </div>

                   <div className = "form_Div">
                       <label >Email: </label>
                       <input
                        type = "text"
                        id = "username"
                        placeholder = "qwe12r@uregina.ca"
                        name = "email"
                        value = {this.state.email}
                        onChange = {this.handleChange}/>
                   </div>

                   <div className = "form_Div">
                       <label >Student Id: </label>
                       <input
                        type = "text"
                        id = "student_id"
                        placeholder = "200312345"
                        name = "student_id"
                        value = {this.state.student_id}
                        onChange = {this.handleChange}/>
                   </div>

                   <div className = "form_Div">
                       <label >PIN: </label>
                       <input
                        type = "password"
                        id = "password"
                        name = "password"
                        value = {this.state.password}
                        onChange = {this.handleChange}/>
                   </div>

                   <div className = "form_Div">
                       <button className = "form_button">Sign Up</button>
                       <Link  to='/login' className = "form_Link" >
                           Already have an account?
                       </Link>
                   </div>

                </form> 
            </div>
        )
    }
}

export default SignUpForm;