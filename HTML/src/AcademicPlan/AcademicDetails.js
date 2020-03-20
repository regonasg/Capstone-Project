import React, { Component } from 'react';
import { render } from 'react-dom';
import AcademicForm from './AcademicForm1';
import AcademicClassTaken from './AcademicClassTaken'
import AcademicFutureClasses from './AcademicFutureClasses';
import Navbar from '../Navbar';

const AcademicDetails = () => {
    
        return (
            <div>
                <Navbar />
                <h1>Acadmic Plan</h1>
                <div className = "academic_details">
                    <div className="info_label">
                        <label>Name: </label>
                        <label>Degree:</label>
                        <label>Minor:</label>
                        <label>PGPA:</label>
                        <label>Credits Required:</label>
                    </div>
                    <div className="info_label">
                        <label>School and Community Organizations/Clubs/Event participating in:</label>
                        <label>Supports being used: </label>
                    </div>
                </div>

                <h4>Planning Result:</h4>
                <div className="academic_plan">
                    <div className = "planning-result">
                        <label>Total Hours:</label>
                        <label>Total credit hours eared: </label>
                    </div>
                    <div className="planning-result">
                        <label>PGPA: </label>
                        <label>MGPA: </label>
                        <label>UGPA: </label>
                    </div>
                    <div className="planning-result">
                        <label>Expected Graduation: </label>
                    </div>
                </div>

                <AcademicClassTaken />
                <br /> <br />
                <AcademicFutureClasses />
            </div>
        )
    }


export default AcademicDetails
