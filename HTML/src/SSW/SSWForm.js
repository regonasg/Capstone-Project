import React, {useEffect} from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { Link, withRouter, useHistory} from 'react-router-dom';
import {useFormik, yupToFormErrors} from "formik";
import * as Yup from "yup";
import "../styles.css";

const SSWForm = () => {

    /*useEffect(() => {
        console.log('Component did mount');
        axios.get('http://localhost:8000/react/phps/list.php')
            .then(response => {
                setValues(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, []) */

    const datas = useFormik({
        initialValues: {
            dgrade: '', 
        },
        validationSchema: Yup.object({
            dgrade:Yup.number().required('Enter your desired grade'),
        }),
        onSubmit: values => {
            console.log(JSON.stringify(values, null, 2));
          },
    });

    return (
        <div className="sswForm-container">
            <form onSubmit={datas.handleSubmit}>
                <label>Desired Grade</label>
                <input
                    id="dgrade"
                    name="dgrade"
                    type="number"
                    onChange={datas.handleChange}
                    onBlur={datas.handleBlur}
                    value={datas.values.dgrade}
                    autoComplete="off"
                />
                {datas.touched.dgrade && datas.errors.dgrade ? (
                        <div className="errMsg">{datas.errors.dgrade}</div>
                    ) : null}
                <button type = 'submit'>Submit</button>
            </form>
        </div>
    )
}
export default SSWForm;