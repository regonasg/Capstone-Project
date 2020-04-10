import React from "react";
import ReactDOM from "react-dom";
import {useHistory, withRouter} from "react-router-dom";
import {useFormik} from "formik";
import * as Yup from "yup";
import "../styles.css";


const AcademicForm = () => {

   const history = useHistory();
   
   const datas = useFormik({
       initialValues : {
            name: '',
            degree: '',
            minor: '',
            pgpa: '',
            credits: '',
            clubs: '',
            supports: '',
        },
        validationSchema: Yup.object({
            name:Yup.string()
                .required('Enter your name'),
            degree: Yup.string()
                .required('Enter your degree'),
            pgpa: Yup.number()
                .min(60, 'Your required PGPA cannot be less than 60%')
                .required('Enter the PGPA required for your degree'),
            credits: Yup.number()
                .required('Enter the total number of credits needed for your degree'),
            clubs:Yup.string()
                .required('Enter the school or community organizations/clubs that you will be participating in'),
            supports: Yup.string()
                .required('Enter the list of supports that you will use'),
        }),
        onSubmit: values => {
            console.log(JSON.stringify(values, null,2));
            history.push('/academic-plan');
        },
    });

    return (
        <div className="formCentre">
            <h1>Academic</h1>
            <form className="form_Fields" onSubmit={datas.handleSubmit}>
                <div className="form_Div">
                    <label htmlFor="name">Name: </label>
                    <input 
                        id="name"
                        name="name"
                        type="text"
                        onChange={datas.handleChange}
                        onBlur={datas.handleBlur}
                        value={datas.values.name}
                    />
                    {datas.touched.name && datas.errors.name ? (
                        <div className="errMsg">{datas.errors.name}</div>
                    ) : null}
                </div>

                <div className="form_Div">
                    <label htmlFor="degree">Degree: </label>
                    <input 
                        id="degree"
                        name="degree"
                        type="text"
                        onChange={datas.handleChange}
                        onBlur={datas.handleBlur}
                        value={datas.values.degree}
                    />
                    {datas.touched.degree && datas.errors.degree ? (
                        <div className="errMsg">{datas.errors.degree}</div>
                    ) : null}
                </div>

                <div className="form_Div">
                    <label htmlFor="pgpa">RequiredPGPA : </label>
                    <input 
                        id="pgpa"
                        name="pgpa"
                        type="text"
                        onChange={datas.handleChange}
                        onBlur={datas.handleBlur}
                        value={datas.values.pgpa}
                    />
                    {datas.touched.pgpa && datas.errors.pgpa ? (
                        <div className="errMsg">{datas.errors.pgpa}</div>
                    ) : null}
                </div>

                <div className="form_Div">
                    <label htmlFor="minor">Minor: (if applicable) </label>
                    <input 
                        id="minor"
                        name="minor"
                        type="text"
                        onChange={datas.handleChange}
                        onBlur={datas.handleBlur}
                        value={datas.values.minor}
                    />
                </div>

                <div className="form_Div">
                    <label htmlFor="credits">Total Credit Hours: </label>
                    <input 
                        id="credits"
                        name="credits"
                        type="text"
                        onChange={datas.handleChange}
                        onBlur={datas.handleBlur}
                        value={datas.values.credits}
                    />
                    {datas.touched.credits && datas.errors.credits ? (
                        <div className="errMsg">{datas.errors.credits}</div>
                    ) : null}
                </div>

                <div className="form_Div">
                    <label htmlFor="clubs">School and Community Organizations/Clubs/Event I will partigicpate in:
                                (your program website is a good place to look): </label>
                    <textarea 
                        id="clubs"
                        name="clubs"
                        type="text"
                        onChange={datas.handleChange}
                        onBlur={datas.handleBlur}
                        value={datas.values.clubs}
                        placeholder = "Type here the organizations, groups, clubs, and events that you will be involved in and/or volunteer for (your faculty website is a great place to look for options)"
                    />
                    {datas.touched.clubs && datas.errors.clubs ? (
                        <div className="errMsg">{datas.errors.clubs}</div>
                    ) : null}
                </div>

                <div className="form_Div">
                    <label htmlFor="supports">Supports I will use: <br/>
                                (E.g., Tutoring, Global Learning Centre): </label>
                    <textarea 
                        id="supports"
                        name="supports"
                        type="text"
                        onChange={datas.handleChange}
                        onBlur={datas.handleBlur}
                        value={datas.values.supports}
                        placeholder = "Type here the supports you might need - e.g., tutoring, meet with professors, Global Learning Centre, Aboriginal Student Centre, Counselling, etc."
                    />
                    {datas.touched.supports && datas.errors.supports ? (
                        <div className="errMsg">{datas.errors.supports}</div>
                    ) : null}
                </div>

                <div className = "form_Div">
                       <button type = "submit" className = "form_button">Continue</button>
                </div>

            </form>
        </div>
    );
}

export default withRouter(AcademicForm);