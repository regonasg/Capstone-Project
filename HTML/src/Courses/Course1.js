import React, { useState } from 'react';
import Navbar from '../Navbar';
import {Link, Route} from 'react-router-dom';
import Lab1 from '../Labs/Lab1';


const Course1 = (props) => {
    const initial_state = {
        form1: [{
            currGrade1: '',
            desiredGrades1: '',
            avrGrade1: ''
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
        setForm(!form);
        
        console.log(values);
       
    };

    const calculateTimeLeft = () => {
        const difference = +new Date(values.dueDate1) - new Date();
        let timeLeft = {};

        if(difference > 0) {
            timeLeft = {
                days: Math.floor(difference/ (1000 * 60 * 60 * 24))
            };
        }

        return timeLeft;
    }

    const showForm = () => {
        setForm(!form);
    };
  
    const submitSave = event => {
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
                    name ="desiredGrade1"
                    value={values.desiredGrades1}
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

            {(checked) ? <Link to="/lab1"><button>Lab</button></Link>:null}

            <form onSubmit = {submitSave}>
            <div className="grade-remaining">
                <label>Average Grade Needed on Remaining Items:  </label>
                <p>Here is where the remainig grades calculated will go</p>
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
                            name="courseItem1"
                            data-id={index}
                            type="text"
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
                        <td><p>{calculateTimeLeft}</p></td>
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
                        <td><button onClick={() => handleDelRow(item)}>X</button></td>
                    </tr>
                ))}
                <button onClick={addGrades}>+ Add New Course Item</button>
            </table>

            <Route path="/lab1" component={Lab1}></Route>
            <button type = 'submit' className = 'savebtn'>Save</button>
            </form>
        </div>
        
    )

}

export default Course1;
