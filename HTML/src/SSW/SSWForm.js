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
            cgrade: "", 
            dgrade: 80.0, 
            agrade: 0, 
            pgrade:0,
        },
        validationSchema: Yup.object({
            cgrade: Yup.number().required('Enter your current grade'),
            dgrade:Yup.number().required('Enter your desired grade'),
            agrade: Yup.number().required('Enter your average grade'),
            pgrade:Yup.number().required('Enter your percentage'),
        }),
        onSubmit: values => {
            console.log(JSON.stringify(values, null, 2));
          },
    });

    return (
        <div className="sswForm-container">
            <form onSubmit={datas.handleSubmit}>
                <label>Current Grade</label>
                <input
                    id="cgrade"
                    name="cgrade"
                    type="number"
                    onChange={datas.handleChange}
                    onBlur={datas.handleBlur}
                    value={datas.values.cgrade}
                    autoComplete="off"
                />
                {datas.touched.cgrade && datas.errors.cgrade ? (
                        <div className="errMsg">{datas.errors.cgrade}</div>
                    ) : null}
                
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

                <label>Average Grade</label>
                <input
                    id="agrade"
                    name="agrade"
                    type="number"
                    onChange={datas.handleChange}
                    onBlur={datas.handleBlur}
                    value={datas.values.agrade}
                    autoComplete="off"
                />
                {datas.touched.agrade && datas.errors.agrade ? (
                        <div className="errMsg">{datas.errors.agrade}</div>
                    ) : null}

                <label>Percentage Grade</label>
                <input
                    id="pgrade"
                    name="pgrade"
                    type="number"
                    onChange={datas.handleChange}
                    onBlur={datas.handleBlur}
                    value={datas.values.pgrade}
                    autoComplete="off"
                />
                {datas.touched.pgrade && datas.errors.pgrade ? (
                        <div className="errMsg">{datas.errors.pgrade}</div>
                    ) : null}
            </form>
        </div>
    )
}
export default SSWForm;