import React from "react";
import ReactDOM from "react-dom";
import { Link, withRouter, useHistory} from 'react-router-dom';
import {useFormik, yupToFormErrors} from "formik";
import * as Yup from "yup";
import "../styles.css";

const SignUpForm = () => {
    const history = useHistory();

    //validation function for custom validation (mostly for email)
    const validate = values => {
        const errors = {};

        if(!values.username){
            errors.username = 'Enter your U of R username';
        }

        if(!values.email){
            errors.email ='Enter your U of R email address';
        }
        else if(!/^[A-Z0-9._%+-]+@uregina.ca$/i.test(values.email)) {
            errors.email = 'Invalid email address (it has to be your U of R email)';
        }

        if(!values.student_id){
            errors.student_id ='Enter your U of R student ID';
        }
        else if(!/^\d*$/.test(values.student_id)) {
            errors.student_id = 'Invalid student ID';
        }
        else if(values.student_id.length < 9 || values.student_id.length > 9) {
            errors.student_id = 'Your student ID consists of 9 numbers';
        }

        if(!values.password) {
            errors.password = 'Enter a password';
        }

        if(values.confirmPswd !== values.password) {
            errors.confirmPswd = 'Password does not match'
        }

        return errors;
    }
    const datas = useFormik({
        initialValues : {
            email: '',
            student_id: '',
            username: '',
            password: '',
            confirmPswd: '',
        },
        validate,
        onSubmit: values => {
            console.log(JSON.stringify(values, null,2));
            history.push('/login');
        },
    });

    return (
        <div className="formCentre">
            <h3>Sign Up</h3>
            <form onSubmit={datas.handleSubmit}>
            <div className="form_Div">
                    <label>Username: </label>
                    <input
                         id="username"
                         name="username"
                         type="text"
                         onChange={datas.handleChange}
                         onBlur={datas.handleBlur}
                         value={datas.values.username}
                    />
                    {datas.touched.username && datas.errors.username ? (
                        <div className="errMsg">{datas.errors.username}</div>
                    ) : null}
                </div>

                <div className="form_Div">
                    <label>Email: </label>
                    <input
                         id="email"
                         name="email"
                         type="text"
                         onChange={datas.handleChange}
                         onBlur={datas.handleBlur}
                         value={datas.values.email}
                    />
                    {datas.touched.email && datas.errors.email ? (
                        <div className="errMsg">{datas.errors.email}</div>
                    ) : null}
                </div>

                <div className="form_Div">
                    <label>Student ID: </label>
                    <input
                         id="student_id"
                         name="student_id"
                         type="text"
                         onChange={datas.handleChange}
                         onBlur={datas.handleBlur}
                         value={datas.values.student_id}
                    />
                    {datas.touched.student_id && datas.errors.student_id ? (
                        <div className="errMsg">{datas.errors.student_id}</div>
                    ) : null}
                </div>

                <div className="form_Div">
                    <label>Password: </label>
                    <input
                         id="password"
                         name="password"
                         type="password"
                         onChange={datas.handleChange}
                         onBlur={datas.handleBlur}
                         value={datas.values.password}
                    />
                    {datas.touched.password && datas.errors.password ? (
                        <div className="errMsg">{datas.errors.password}</div>
                    ) : null}
                </div>

                <div className="form_Div">
                    <label>Confirm Password: </label>
                    <input
                         id="confirmPswd"
                         name="confirmPswd"
                         type="password"
                         onChange={datas.handleChange}
                         onBlur={datas.handleBlur}
                         value={datas.values.confirmPswd}
                    />
                    {datas.touched.confirmPswd && datas.errors.confirmPswd ? (
                        <div className="errMsg">{datas.errors.confirmPswd}</div>
                    ) : null}
                </div>

                <div className = "form_Div">
                       <button type = "submit" className = "form_button">Sign Up</button>
                   </div>
                   <div className = "form_Div">
                        <Link  to={"/login"}>Already have an account? </Link>
                   </div>

            </form>
        </div>
    )
}

export default withRouter(SignUpForm);