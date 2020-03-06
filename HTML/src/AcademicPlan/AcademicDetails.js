import React, { Component } from 'react';
import { render } from 'react-dom';
import AcademicForm from './AcademicForm';
import AcademicClassTaken from './AcademicClassTaken'
import AcademicFutureClasses from './AcademicFutureClasses';

export class AcademicDetails extends Component {
    

    render() {
        return (
            <div>
                <div className = "academic_details">
                    <label>Name: </label>
                    <label>Degree:</label>
                    <label>Minor:</label>
                    <label>PGPA:</label>
                    <label>Credits Required:</label>
                    <label>School and Community Organizations/Clubs/Event participating in:</label>
                    <label>Supports being used: </label>
                </div>
                <div className="academic_plan">
                    <h4>Planning Result:</h4>
                    <label>Total Hours:</label>
                    <label>Total credit hours eared: </label>
                    <label>PGPA: </label>
                    <label>MGPA: </label>
                    <label>UGPA: </label>
                    <label>Expected Graduation: </label>
                </div>

                <AcademicClassTaken />
                <AcademicFutureClasses />
            </div>
        )
    }
}

export default AcademicDetails
