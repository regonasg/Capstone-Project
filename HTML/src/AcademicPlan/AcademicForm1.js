import React, { useState, useEffect } from 'react';
import { Link, withRouter, Route, useHistory} from 'react-router-dom';
import SimpleReactValidator from 'simple-react-validator';

const AcademicForm1 = (props) => {
    const initialState = [{
        name: '',
        degree: '',
        minor: '',
        pgpa: '',
        credits: '',
        clubs: '',
        supports: ''
    }];

    const [values, setValues] = useState(initialState);
    const history = useHistory();

   

   const handleChange = (event) => {
        const tempValues = [values];
        tempValues[event.target.name] = event.target.value;


        setValues(tempValues);
    }


    const handleSubmit = (event) => {
        event.preventDefault();

        history.push("/academic-plan");
           
        

        
    }

        return (
            <div className = "formCentre">
                <h3>Academic Details</h3>
               <form onSubmit={handleSubmit} className = "form_Fields" noValidate>
                   <div className = "form_Div">
                       <label >Name: </label>
                       <input
                        type = "text"
                        id = "name"
                        placeholder = "John Smith"
                        name = "name"
                        value = {values.name}
                        onChange = {(event) => handleChange(event)}
                        required/>
                        <div className = "errorMsg"></div>
                   </div>

                   <div className = "form_Div">
                       <label >Degree: </label>
                       <input
                        type = "text"
                        id = "degree"
                        name = "degree"
                        placeholder = "SSE"
                        value = {values.degree}
                        onChange = {(event) => handleChange(event)}
                        required/>
                        <div className = "errorMsg">{values.error}</div>
                   </div>

                   <div className = "form_Div">
                       <label >Minor (if applicable): </label>
                       <input
                        type = "text"
                        id = "minor"
                        name = "minor"
                        placeholder = "History"
                        value = {values.minor}
                        onChange = {(event) => handleChange(event)}
                        required/>
                        <div className = "errorMsg">{values.error}</div>
                   </div>

                   <div className = "form_Div">
                       <label >PGPA Required: </label>
                       <input
                        type = "number"
                        id = "pgpa"
                        name = "pgpa"
                        placeholder = "60"
                        value = {values.pgpa}
                        onChange = {(event) => handleChange(event)}
                        required/>
                        <div className = "errorMsg">{values.error}</div>
                   </div>

                   <div className = "form_Div">
                       <label >Total Credits Needed: </label>
                       <input
                        type = "number"
                        id = "credits"
                        name = "credits"
                        placeholder = "136"
                        value = {values.degree}
                        onChange = {(event) => handleChange(event)}
                        required/>
                        <div className = "errorMsg">{values.error}</div>
                   </div>

                   <div className = "form_Div">
                       <label>School and Community Organizations/Clubs/Event I will partigicpate in:
                                (your program webiste is a good place to look)  </label>
                        <textarea
                        type = "type"
                        id = "clubs"
                        name = "clubs"
                        placeholder = "Type here the organizations, groups, clubs, and events that you will be involved in and/or volunteer for (your faculty website is a great place to look for options)"
                        value = {values.clubs}
                        onChange = {(event) => handleChange(event)}
                        required />
                        <div className = "errorMsg">{values.error}</div>
                   </div>

                   <div className = "form_Div">
                       <label>Supports I will use: <br/>
                                (E.g., Tutoring, Global Learning Centre) </label>
                        <textarea
                        type = "type"
                        id = "supports"
                        name = "supports"
                        placeholder = "Type here the supports you might need - e.g., tutoring, meet with professors, Global Learning Centre, Aboriginal Student Centre, Counselling, etc."
                        value = {values.supports}
                        onChange = {(event) => handleChange(event)}
                        required />
                        <div className = "errorMsg">{values.error}</div>
                   </div>

                   <div className = "form_Div">
                       <button type = "submit" className = "form_button">Continue</button>
                   </div>
                </form> 

            </div>
        )
    }


export default withRouter(AcademicForm1);