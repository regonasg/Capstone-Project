// JavaScript source code
// JavaScript source code
import React, { useState } from "react";
import SSWTable from "./SSWTable";
import SSWForm from "./SSWForm";
import BookClub from "./BookClub";
import Navbar from "../Navbar";

const SSW = props => {
   
    const [form, setForm] = useState(false);

 

    
   



    return (

        <div>
            <Navbar />
            <h1>SSW ACT</h1>
     
            
        
            <div className = "ssw-row">
                <SSWTable />
            </div>

            <BookClub />
        
        
        </div>






    );






};


export default SSW;