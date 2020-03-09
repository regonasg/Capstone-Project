import React, { useState } from 'react';
import Navbar from '../Navbar';
import {Link, Route} from 'react-router-dom';
import Lab1 from '../Labs/Lab1';


const Course1 = (props) => {
    const initial_state = {
        form1: [{
            currGrade1: '',
            desiredGrades1: '',
            avrGrade1: '',
            lab1: ''
        }],
        grades1: [{
            id: 1,
            courseItem1: '',
            dueDate1: '',
            weight1: '',
            actualGrade1: ''
        }]
    };

    const [values, setValues] = useState(initial_state.form1);
    const[datas, setDatas] = useState(initial_state.grades1);

    const handleOnChangeGrades = event => {
       
        const tempData = [...datas];
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
                courseItem1: '',
                dueDate1: '',
                weight1: '',
                actualGrade1: ''
        
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
                    name ="currGrade1"
                    value={values.currGrade1}
                    placeholder="Enter your current grade"
                    onChange={handleOnChangeForm}/>

                <label>Desired Grade: </label>
                <input 
                    type = "number"
                    name ="desiredGrade1"
                    value={values.desiredGrades1}
                    placeholder="Enter your desired grade"
                    onChange={handleOnChangeForm}/>
                
                <label>Is there a lab?</label>
                <select value={values.lab1} onChange={handleOnChangeForm}  >
                    <option value="yes">Yes</option>
                    <option  value="no">No</option>
                </select>

                <button type="submit">Submit</button>
            </form>

            <label>Average Grade Needed on Remaining Items:  </label>
            <p>Here is where the remainig grades calculated will go</p>

            <Link to="/lab1"><button>Lab</button></Link>

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
                            name="courseItem1"
                            data-id={index}
                            type="number"
                            value={item.courseItem1}
                            onChange={handleOnChangeGrades}/>
                        </td>
                        <td><input 
                            name="dueDate1"
                            data-id={index}
                            type="date"
                            value={item.dueDate1}
                            onChange={handleOnChangeGrades}/>
                        </td>
                        <td><p>here is where the countdown till the due date will go</p></td>
                        <td><input 
                            name="weight1"
                            data-id={index}
                            type="number"
                            value={item.weight1}
                            onChange={handleOnChangeGrades}/>
                        </td>
                        <td><input 
                            name="actualGrade1"
                            data-id={index}
                            type="number"
                            value={item.actualGrade1}
                            onChange={handleOnChangeGrades}/>
                        </td>
                        <td><button onClick={addGrades}>+</button></td>
                        <td><button onClick={() => handleDelRow(item)}>-</button></td>
                    </tr>
                ))}
            </table>

            <Route path="/lab1" component={Lab1}></Route>
        </div>
    )

}

export default Course1;
