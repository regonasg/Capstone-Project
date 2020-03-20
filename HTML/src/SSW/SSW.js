// JavaScript source code
// JavaScript source code
import React, { useState } from "react";
import SSWTable from "./SSWTable";
import SSWForm from "./SSWForm";
import BookClub from "./BookClub";
import Navbar from "../Navbar";

const SSW = props => {
   
    const [form, setForm] = useState(false);

    const showForm = () => {
        setForm(!form);
    }

    
   



    return (

        <div>
            <Navbar />
            <h1>SSW ACT</h1>
            <button onClick={showForm}>Click here to enter grade information</button>
            {(form) ? 
                <div>
                <SSWForm />
                <button onClick={showForm}>Close</button>
                </div>
            :null}
            <div className = "ssw-row">
                <SSWTable />
            </div>

            <BookClub />
        </div>






    );






};


export default SSW;