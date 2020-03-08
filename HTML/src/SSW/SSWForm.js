// JavaScript source code
// JavaScript source code
import React, { useState, useEffect } from "react";
import axios from "axios";
const SSWForm = () => {

    const initial_state = [
        { cgrade: "", dgrade: 80.0, agrade: 0, pgrade:0 }
       
    ];
    const [values, setValues] = useState(initial_state);
    useEffect(() => {
        console.log('Component did mount');
        axios.get('http://localhost:8000/react/phps/list.php')
            .then(response => {
                setValues(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])
    const handleDatasChange = event => {
      //  const { name, value } = event.target;
       // setValues({[name]:  value  });

        const tempValues = [values];
        tempValues[event.target.name] = event.target.value;

        setValues(tempValues);
        //let updateData = item.id;
        
        /*axios.put('http://localhost:8000/react/phps/update.php?id=' + updateData, obj)
            .then(response => {
                console.log(response.data)
            })
            .catch(error => {
                console.log("ERRRR:: ", error.response.data)
            });*/
    }

    return (
        <div className="container">
            <h1>SSW Form</h1>
            <form >
                <label>Current Grade</label>
                <input
                    onChange={(event) => handleDatasChange(event)}
                    type="number"
                    name="cgrade"
                    value={values.cgrade}
                    autoComplete="off"
                    placeholder="Enter Your Current Grade"
                />
                <label>Desired Grade</label>
                <input
                    onChange={(event) => handleDatasChange(event)}
                    type="number"
                    value={values.dgrade}
                  
                    name="dgrade"
                    
                    placeholder="Enter Your Desired Grade"
                />
                <label>Achieved Grade</label>
                <input
                    onChange={(event) => handleDatasChange(event)}
                    // onBlur={handleBlur}
                    value={values.agrade}
                    type="number"
                    name="agrade"

                    placeholder="Enter Your Average Grade"
                />
                <label>Percentage Grade</label>
                <input
                    onChange={(event) => handleDatasChange(event)}
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
