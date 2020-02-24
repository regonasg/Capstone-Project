// JavaScript source code
// JavaScript source code
import React, { useState, useEffect } from "react";

const SSWForm = () => {

    const initial_state = [
        { cgrade: "", dgrade: 80.0, agrade: 0, pgrade:0 }
       
    ];
    const [values, setValues] = useState(initial_state);
    function handleChange(event) {
      //  const { name, value } = event.target;
       // setValues({[name]:  value  });

        const tempValues = [values];
        tempValues[event.target.name] = event.target.value;

        setValues(tempValues);
    }

    return (
        <div className="container">
            <h1>SSW Form</h1>
            <form >
                <label>Current Grade</label>
                <input
                    onChange={handleChange}
                    type="number"
                    name="cgrade"
                    value={values.cgrade}
                    autoComplete="off"
                    placeholder="Enter Your Current Grade"
                />
                <label>Desired Grade</label>
                <input
                    onChange={handleChange}
                    type="number"
                    value={values.dgrade}
                  
                    name="dgrade"
                    
                    placeholder="Enter Your Desired Grade"
                />
                <label>Achieved Grade</label>
                <input
                    onChange={handleChange}
                    // onBlur={handleBlur}
                    value={values.agrade}
                    type="number"
                    name="agrade"

                    placeholder="Enter Your Average Grade"
                />
                <label>Percentage Grade</label>
                <input
                    onChange={handleChange}
                    type="number"
                    value={values.pgrade}

                    name="pgrade"

                    placeholder="Enter Your Percentage"
                />
              
                
            </form>
        </div>
        
        
        
        );
};

export default SSWForm;
