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
    const[form, setForm] = useState(false);
    const[checked, setChecked] = useState(false);


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

    const handleChecked = () => {
        setChecked(!checked);
        console.log(checked);
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
        event.preventDefault();
        setForm(!form);
        
        console.log(values);
       
    };

    const showForm = () => {
        setForm(!form);
    };

    const submitSave = event =>{
        event.preventDefault();
    }
  

    return (
        <div>
            <Navbar />

            <h1>Course</h1>

            <button onClick={showForm}>Click here to enter grade information</button>

            {(form) ? 
                <div className="course-form">
                    <form onSubmit={handleOnSubmit}>
                        <label>Desired Grade: </label>
                        <input 
                            type = "number"
                            name ="desiredGrade6"
                            value={values.desiredGrades6}
                            placeholder="Enter your desired grade"
                            onChange={handleOnChangeForm}/>
                        
                        <label>Is there is Lab?</label>
                        <input className="checkbox1" type="checkbox" onChange={handleChecked} />
                        <br />
                        <button type="submit">Submit</button>
                    </form>
            </div>
            :null}
            <br />
            <br />

            {(checked) ? <Link to="/lab6"><button>Lab</button></Link>:null}

            <form onSubmit = {submitSave}>
            <div className="grade-remaining">
                <label>Current Grades:  </label>
                <p>Here is where the current grades calculated will go</p>
            </div>

            <table>
                <tr>
                    <th>Course Item</th>
                    <th>Due Date</th>
                    <th>Due in</th>
                    <th>Weight (%)</th>
                    <th>Grade (%)</th>
                </tr>
                {datas.map((item, index) => (
                    <tr key={index}>
                        <td><input 
                            name="courseItem6"
                            data-id={index}
                            type="text"
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
                        <td><p></p></td>
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
                        <td><button onClick={() => handleDelRow(item)}>X</button></td>
                    </tr>
                ))}
            </table>
            <button onClick={addGrades}>+ Add New Course Item</button>
            <button type = 'submit' className = 'savebtn'>Save</button>
            </form>
        </div>
    )

}

export default Course6
