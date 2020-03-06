import React, { useState } from 'react';
import Navbar from '../Navbar';
import {Link} from 'react-router-dom';


const Course5 = () => {
    const initial_state = {
        form5: [{
            currGrade5: '',
            desiredGrades5: '',
            avrGrade5: '',
            lab5: ''
        }],
        grades5: [{
            id: 1,
            courseItem5: '',
            dueDate5: '',
            weight5: '',
            actualGrade5: ''
        }]
    };

    const [values, setValues] = useState(initial_state.form5);
    const[datas, setDatas] = useState(initial_state.grades5);

    const handleOnChangeGrades = event => {
       
        const tempData = [datas];
        tempData[event.target.dataset.id][event.target.name] = event.target.value;

        setDatas(tempData);
 

        console.log("onChange is called");
       
    }

    const handleOnChangeForm = event => {
        const tempValues = [values];
        tempValues[event.target.name] = event.target.value;

        setValues(tempValues);
    }

    const addGrades = () =>  {
        var id = (+ new Date() + Math.floor(Math.random() * 999999)).toString(36);
        setDatas(prevCosts => [...prevCosts, {
                id: id,
                courseItem5: '',
                dueDate5: '',
                weight5: '',
                actualGrade5: ''
        
        }])


    };

    const handleDelRow = (data) => {
        let tempData = datas.filter(item => item.id !== data.id);
        setDatas(tempData);

        console.log(tempData);
    };

    const handleOnSubmit = (event) => {
        event.preventDefualt();
       
    };

  

    return (
        <div>
            <Navbar />

            <h1>Course</h1>
            <form onSubmit={handleOnSubmit}>
                <label>Current Grade: </label>
                <input 
                    type = "number"
                    name ="currGrade5"
                    value={values.currGrade5}
                    placeholder="Enter your current grade"
                    onChange={handleOnChangeForm}/>

                <label>Desired Grade: </label>
                <input 
                    type = "number"
                    name ="desiredGrade5"
                    value={values.desiredGrades5}
                    placeholder="Enter your desired grade"
                    onChange={handleOnChangeForm}/>
                
                <label>Is there a lab?</label>
                <select value={values.lab5} onChange={handleOnChangeForm}  >
                    <option value="yes">Yes</option>
                    <option  value="no">No</option>
                </select>

                <button type="submit">Submit</button>
            </form>

            

            <label>Average Grade Needed on Remaining Items:  </label>
            <p>Here is where the remainig grades calculated will go</p>

            <Link to='/lab5'><button>Lab</button></Link>

            <table>
                <tr>
                    <th>Course Item</th>
                    <th>Due Date</th>
                    <th>Due in</th>
                    <th>Weight (%)</th>
                    <th>Grade (%)</th>
                    <td><button onClick={addGrades}>+</button></td>
                </tr>
                {datas.map((item, index) => (
                    <tr key={index}>
                        <td><input 
                            name="courseItem5"
                            data-id={index}
                            type="number"
                            value={item.courseItem5}
                            onChange={handleOnChangeGrades}/>
                        </td>
                        <td><input 
                            name="dueDate5"
                            data-id={index}
                            type="date"
                            value={item.dueDate5}
                            onChange={handleOnChangeGrades}/>
                        </td>
                        <td><p>here is where the countdown till the due date will go</p></td>
                        <td><input 
                            name="weight5"
                            data-id={index}
                            type="number"
                            value={item.weight5}
                            onChange={handleOnChangeGrades}/>
                        </td>
                        <td><input 
                            name="actualGrade5"
                            data-id={index}
                            type="number"
                            value={item.actualGrade5}
                            onChange={handleOnChangeGrades}/>
                        </td>
                        <td><button onClick={addGrades}>+</button></td>
                        <td><button onClick={() => handleDelRow(item)}>-</button></td>
                    </tr>
                ))}
            </table>
        </div>
    )

}

export default Course5
