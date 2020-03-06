import React, { useState } from 'react';
import Navbar from '../Navbar';


const Course1 = () => {
    const initial_state = {
        desiredGrades1: '',
        currGrade1: '',
        avrGrade1: '',
        grades1: [{
            id: 1,
            courseItem1: '',
            dueDate1: '',
            weight1: '',
            actualGrade1: ''
        }]
    };

    const [values, setValues] = useState(initial_state);
    const[datas, setDatas] = useState(initial_state.grades1);

    const handleOnChange = event => {
        const tempValues = [values];
        tempValues[event.name] = event.target.value;

        const tempData = [datas];
        tempData[event.target.dataset.id][event.target.name] = event.target.value;

        setDatas(tempData);
        setValues(tempValues);

        console.log("onChange is called");
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
        event.preventDefault();
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
                    onChange={handleOnChange}/>

                <label>Desired Grade: </label>
                <input 
                    type = "number"
                    name ="desiredGrade1"
                    value={values.desiredGrades1}
                    placeholder="Enter your desired grade"
                    onChange={handleOnChange}/>

                <button type="submit">Submit</button>
            </form>

            <label>Average Grade Needed on Remaining Items:  </label>
            <p>Here is where the remainig grades calculated will go</p>

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
                            onChange={handleOnChange}/>
                        </td>
                        <td><input 
                            name="dueDate1"
                            data-id={index}
                            type="date"
                            value={item.dueDate1}
                            onChange={handleOnChange}/>
                        </td>
                        <td><p>here is where the countdown till the due date will go</p></td>
                        <td><input 
                            name="weight1"
                            data-id={index}
                            type="number"
                            value={item.weight1}
                            onChange={handleOnChange}/>
                        </td>
                        <td><input 
                            name="actualGrade1"
                            data-id={index}
                            type="number"
                            value={item.actualGrade1}
                            onChange={handleOnChange}/>
                        </td>
                        <td><button onClick={addGrades}>+</button></td>
                        <td><button onClick={() => handleDelRow(item)}>-</button></td>
                    </tr>
                ))}
            </table>
        </div>
    )

}

export default Course1
