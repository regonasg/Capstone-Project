import React, { useState } from 'react';
import Navbar from '../Navbar';
import Lab3 from '../Courses/Course3';
import {Link, Route} from 'react-router-dom';


const Course3 = () => {
    const initial_state = {
        form3: [{
            currGrade3: '',
            desiredGrades3: '',
            avrGrade3: '',
            lab3: ''
        }],
        grades3: [{
            id: 1,
            courseItem3: '',
            dueDate3: '',
            weight3: '',
            actualGrade3: ''
        }]
    };

    const [values, setValues] = useState(initial_state.form3);
    const[datas, setDatas] = useState(initial_state.grades3);

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
                courseItem3: '',
                dueDate3: '',
                weight3: '',
                actualGrade3: ''
        
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
                    name ="currGrade3"
                    value={values.currGrade3}
                    placeholder="Enter your current grade"
                    onChange={handleOnChangeForm}/>

                <label>Desired Grade: </label>
                <input 
                    type = "number"
                    name ="desiredGrade3"
                    value={values.desiredGrades3}
                    placeholder="Enter your desired grade"
                    onChange={handleOnChangeForm}/>
                
                <label>Is there a lab?</label>
                <select value={values.lab3} onChange={handleOnChangeForm}  >
                    <option value="yes">Yes</option>
                    <option  value="no">No</option>
                </select>

                <button type="submit">Submit</button>
            </form>

            

            <label>Average Grade Needed on Remaining Items:  </label>
            <p>Here is where the remainig grades calculated will go</p>

            <Link to='/lab3'><button>Lab</button></Link>

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
                            name="courseItem3"
                            data-id={index}
                            type="number"
                            value={item.courseItem3}
                            onChange={handleOnChangeGrades}/>
                        </td>
                        <td><input 
                            name="dueDate3"
                            data-id={index}
                            type="date"
                            value={item.dueDate3}
                            onChange={handleOnChangeGrades}/>
                        </td>
                        <td><p>here is where the countdown till the due date will go</p></td>
                        <td><input 
                            name="weight3"
                            data-id={index}
                            type="number"
                            value={item.weight3}
                            onChange={handleOnChangeGrades}/>
                        </td>
                        <td><input 
                            name="actualGrade3"
                            data-id={index}
                            type="number"
                            value={item.actualGrade3}
                            onChange={handleOnChangeGrades}/>
                        </td>
                        <td><button onClick={addGrades}>+</button></td>
                        <td><button onClick={() => handleDelRow(item)}>-</button></td>
                    </tr>
                ))}
            </table>

            <Route path='/lab3' component={Lab3}></Route>
        </div>
    )

}

export default Course3
