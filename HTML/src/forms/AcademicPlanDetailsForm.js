import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

const initialState = {
    name: '',
    degree: '',
    minor: '',
    pgpa: '',
    credits: '',
    clubs: '',
    supports: '',
    errors:{}
}
export class AcademicPlanDetailsForm extends Component {
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

    handleSubmit(event) {
        event.preventDefault();
        const isValid = this.validateForm();
        if(isValid){
            console.log('The form was submitted with the following data: ');
            console.log(this.state);
            this.props.history.push('/Home');
        }
    }

    //function that will validate the input fields 
    validateForm() {
        let errors = {};
        let isFormValid = true;

        //valiate name
        if(!this.state.name) {
            isFormValid = false;
            errors["name"] = "Please enter your name"
        } 
        else if (typeof(this.state.name) !== undefined) {
            if (!this.state.name.match(/^[a-zA-Z ]*$/)) {
                isFormValid = false;
                errors["name"] = "Please enter alphabet characters only.";
              }
        }

        //validate degree
        if(!this.state.degree) {
            isFormValid = false;
            errors["degree"] = "Please enter your degree"
        }

        //validate pgpa
        if(!this.state.pgpa) {
            isFormValid = false;
            errors["pgpa"] = "Please enter PGPA required for your degree"
        }

        //validate total credits
        if(!this.state.credits) {
            isFormValid = false;
            errors["credits"] = "Please enter total credits needed for your degree"
        }

        this.setState({
            errors: errors
          });
          return isFormValid;
    
    }

    render() {
        return (
            <div className = "formCentre">
               <form onSubmit={this.handleSubmit} className = "form_Fields" noValidate>
                   <div className = "form_Div">
                       <label >Name: </label>
                       <input
                        type = "text"
                        id = "name"
                        placeholder = "Enter your full name"
                        name = "name"
                        value = {this.state.name}
                        onChange = {this.handleChange}
                        required/>
                        <div className = "errorMsg">{this.state.errors.name}</div>
                   </div>

                   <div className = "form_Div">
                       <label >Degree: </label>
                       <input
                        type = "text"
                        id = "degree"
                        placeholder = "Enter your degree (ex. Software Systems Engineering)"
                        name = "degree"
                        value = {this.state.degree}
                        onChange = {this.handleChange}
                        required/>
                        <div className = "errorMsg">{this.state.errors.degree}</div>
                   </div>

                   <div className = "form_Div">
                       <label >Minor </label>
                       <input
                        type = "text"
                        id = "minor"
                        placeholder = "Enter your minor if you have one"
                        name = "minor"
                        value = {this.state.minor}
                        onChange = {this.handleChange}
                        required/>
                        <div className = "errorMsg">{this.state.errors.minor}</div>
                   </div>

                   <div className = "form_Div">
                       <label >PGPA Required: </label>
                       <input
                        type = "text"
                        id = "pgpa"
                        placeholder = "Enter the PGPA required for your degree"
                        name = "pgpa"
                        value = {this.state.pgpa}
                        onChange = {this.handleChange}
                        required/>
                        <div className = "errorMsg">{this.state.errors.pgpa}</div>
                   </div>

                   <div className = "form_Div">
                       <label >Total Credits:  </label>
                       <input
                        type = "text"
                        id = "credits"
                        placeholder = "Enter total credits needed"
                        name = "credits"
                        value = {this.state.credits}
                        onChange = {this.handleChange}
                        required/>
                        <div className = "errorMsg">{this.state.errors.credits}</div>
                   </div>

                   <div className = "form_Div">
                       <label >School or Community Organizations/Clubs/Events I will participate in: </label>
                       <textarea
                        type = "text"
                        id = "clubs"
                        placeholder = "Type here the organizations, groups, clubs, and events that you will be involved in and/or volunteer for (your faculty website is a great place to look for options)"
                        name = "clubs"
                        value = {this.state.clubs}
                        onChange = {this.handleChange}
                        required/>
                        <div className = "errorMsg">{this.state.errors.clubs}</div>
                   </div>

                   <div className = "form_Div">
                       <label >Supports I will Use: </label>
                       <textarea
                        type = "text"
                        id = "support"
                        placeholder = "Type here the supports you might need - e.g., tutoring, meet with professors, Global Learning Centre, Aboriginal Student Centre, Counselling, etc."
                        name = "supports"
                        value = {this.state.supports}
                        onChange = {this.handleChange}
                        required/>
                        <div className = "errorMsg">{this.state.errors.supports}</div>
                   </div>
                            
                    <input type = "submit" value = "Submit" />

                </form> 
            </div>
        )
    }
}

export default withRouter (AcademicPlanDetailsForm)
