import React, { useState } from 'react';
import Navbar from '../Navbar';
import {Link} from 'react-router-dom';


const Course6 = () => {
    const initial_state = {
        form6: [{
            currGrade6: '',
            desiredGrades6: '',
            avrGrade6: '',
            lab6: ''
        }],
        grades6: [{
            id: 1,
            courseItem6: '',
            dueDate6: '',
            weight6: '',
            actualGrade6: ''
        }]
    };

    const [values, setValues] = useState(initial_state.form6);
    const[datas, setDatas] = useState(initial_state.grades6);

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
                courseItem6: '',
                dueDate6: '',
                weight6: '',
                actualGrade6: ''
        
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
                    name ="currGrade6"
                    value={values.currGrade6}
                    placeholder="Enter your current grade"
                    onChange={handleOnChangeForm}/>

                <label>Desired Grade: </label>
                <input 
                    type = "number"
                    name ="desiredGrade6"
                    value={values.desiredGrades6}
                    placeholder="Enter your desired grade"
                    onChange={handleOnChangeForm}/>
                
                <label>Is there a lab?</label>
                <select value={values.lab6} onChange={handleOnChangeForm}  >
                    <option value="yes">Yes</option>
                    <option  value="no">No</option>
                </select>

                <button type="submit">Submit</button>
            </form>

            

            <label>Average Grade Needed on Remaining Items:  </label>
            <p>Here is where the remainig grades calculated will go</p>

            <Link to='/lab6'><button>Lab</button></Link>

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
                            name="courseItem6"
                            data-id={index}
                            type="number"
                            value={item.courseItem6}
                            onChange={handleOnChangeGrades}/>
                        </td>
                        <td><input 
                            name="dueDate6"
                            data-id={index}
                            type="date"
                            value={item.dueDate6}
                            onChange={handleOnChangeGrades}/>
                        </td>
                        <td><p>here is where the countdown till the due date will go</p></td>
                        <td><input 
                            name="weight6"
                            data-id={index}
                            type="number"
                            value={item.weight6}
                            onChange={handleOnChangeGrades}/>
                        </td>
                        <td><input 
                            name="actualGrade6"
                            data-id={index}
                            type="number"
                            value={item.actualGrade6}
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

export default Course6
