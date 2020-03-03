import React, { Component } from 'react';
import { Link, withRouter} from 'react-router-dom';

const initialState = {
    name: '',
    degree: '',
    minor: '',
    pgpa: '',
    credits: '',
    clubs: '',
    supports: '',
    error:{}
}
class AcademicForm extends Component {
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
        let errors = this.state.error;
        
        //username validation

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
                <h3>Academic Details</h3>
               <form onSubmit={this.handleSubmit} className = "form_Fields" noValidate>
                   <div className = "form_Div">
                       <label >Name: </label>
                       <input
                        type = "text"
                        id = "name"
                        placeholder = "John Smith"
                        name = "name"
                        value = {this.state.name}
                        onChange = {this.handleChange}
                        required/>
                        <div className = "errorMsg">{this.state.error.name}</div>
                   </div>

                   <div className = "form_Div">
                       <label >Degree: </label>
                       <input
                        type = "text"
                        id = "degree"
                        name = "degree"
                        placeholder = "SSE"
                        value = {this.state.degree}
                        onChange = {this.handleChange}
                        required/>
                        <div className = "errorMsg">{this.state.error.degree}</div>
                   </div>

                   <div className = "form_Div">
                       <label >Minor (if applicable): </label>
                       <input
                        type = "text"
                        id = "minor"
                        name = "minor"
                        placeholder = "History"
                        value = {this.state.minor}
                        onChange = {this.handleChange}
                        required/>
                        <div className = "errorMsg">{this.state.error.minor}</div>
                   </div>

                   <div className = "form_Div">
                       <label >PGPA Required: </label>
                       <input
                        type = "number"
                        id = "pgpa"
                        name = "pgpa"
                        placeholder = "60"
                        value = {this.state.pgpa}
                        onChange = {this.handleChange}
                        required/>
                        <div className = "errorMsg">{this.state.error.pgpa}</div>
                   </div>

                   <div className = "form_Div">
                       <label >Total Credits Needed: </label>
                       <input
                        type = "number"
                        id = "credits"
                        name = "credits"
                        placeholder = "136"
                        value = {this.state.degree}
                        onChange = {this.handleChange}
                        required/>
                        <div className = "errorMsg">{this.state.error.credits}</div>
                   </div>

                   <div className = "form_Div">
                       <label>School and Community Organizations/Clubs/Event I will partigicpate in:
                                (your program webiste is a good place to look)  </label>
                        <textarea
                        type = "type"
                        id = "clubs"
                        name = "clubs"
                        placeholder = "Type here the organizations, groups, clubs, and events that you will be involved in and/or volunteer for (your faculty website is a great place to look for options)"
                        value = {this.state.clubs}
                        onChange = {this.handleChange}
                        required />
                        <div className = "errorMsg">{this.state.error.clubs}</div>
                   </div>

                   <div className = "form_Div">
                       <label>Supports I will use: <br/>
                                (E.g., Tutoring, Global Learning Centre) </label>
                        <textarea
                        type = "type"
                        id = "supports"
                        name = "supports"
                        placeholder = "Type here the supports you might need - e.g., tutoring, meet with professors, Global Learning Centre, Aboriginal Student Centre, Counselling, etc."
                        value = {this.state.supports}
                        onChange = {this.handleChange}
                        required />
                        <div className = "errorMsg">{this.state.error.supports}</div>
                   </div>

                   <div className = "form_Div">
                       <button type = "submit" className = "form_button">Continue</button>
                   </div>

                </form> 
            </div>
        )
    }
}

export default withRouter(AcademicForm);