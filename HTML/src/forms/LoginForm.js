import React from "react";
import ReactDOM from "react-dom";
import { Link, withRouter, useHistory} from 'react-router-dom';
import {useFormik, yupToFormErrors} from "formik";
import * as Yup from "yup";
import "../styles.css";

const LoginForm = () => {

    const history = useHistory();

    const datas = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .required('Enter your U of R username'),
            password: Yup.string()
                .required('Enter a password'),
        }),
        onSubmit: values => {
            console.log(JSON.stringify(values, null,2));
            history.push('/home');
        },
    });

    return (
        <div className="formCentre">
            <h3>Login</h3>
            <form onSubmit={datas.handleSubmit} className="form_Fields">
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
                <div></div>
                   <div className = "form_Div">
                       <button type = "submit" className = "form_button">Login</button>
                   </div>
                   <div className = "form_Div">
                       <Link exact to='/' className = "form_Link" >
                           Create an account
                       </Link>
                    </div>
            </form>
        </div>
    )
   
}

export default withRouter(LoginForm);