import React, { useState } from 'react';
import Navbar from '../Navbar';
import moment from 'moment';
import {Link, Route} from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import Lab2 from '../Labs/Lab2';



const Course2 = () => {
    const initial_state = [{
            id: 1,
            courseItem2: '',
            weight2: '',
            actualGrade2: '',
            dueDate2: '',
    }];

    const[dgrade2,setDgrade2] = useState(0);
    const[datas, setDatas] = useState(initial_state);
    const[form, setForm] = useState(false);
    const[checked, setChecked] = useState(false);
    const[grade2, setGrade2] = useState(0);

    const handleOnChangeGrades = event => {
       
        const tempData = [...datas];
        tempData[event.target.dataset.id][event.target.name] = event.target.value;

        setDatas(tempData);
 

        console.log("onChange is called");
       
    };

    const handleDGrade = event => {
        const tempDgrade = event.target.value;

        setDgrade2(tempDgrade);
    }


    const handleChecked = () => {
        setChecked(!checked);
        console.log(checked);
    };

    const addGrades = () =>  {
        var id = (+ new Date() + Math.floor(Math.random() * 999999)).toString(36);
        setDatas(prevCosts => [...prevCosts, {
                id: id,
                courseItem2: '',
                dueDate2: '',
                weight2: '',
                actualGrade2: ''
        
        }])
    };

    const handleDelRow = (data) => {
        let tempData = datas.filter(item => item.id !== data.id);
        setDatas(tempData);

        console.log(tempData);
    };

    const showForm = () => {
        setForm(!form);
    };

    //calculates grades 
    const current_grade = () => {
        let grades = 0;
        const rowTotal = datas.map(
            row => (row.actualGrade2 * (row.weight2/100)) || 0  
        );

        if(rowTotal.length > 0) {
            grades = rowTotal.reduce((acc,val) => acc + val);
        }

        setGrade2(grades);
        console.log(grades);
    };
    return (
        <div>
            <Navbar />

            <h1>Course</h1>


            <button onClick={showForm}>Click here to enter desired grades</button>

            <div>
                {(form) ? 
                    <div>
                        <label>Desired Grades: </label>
                        <input 
                            type="number"
                            value={dgrade2}
                            onChange={handleDGrade}
                        />
                    </div>
                :null}
            </div>

            <div>
                <label>Is there a lab?</label>
                <input className="checkbox1" type="checkbox" onChange={handleChecked} />
            </div>

            {(checked) ? <Link to="/lab1"><button>Lab</button></Link>:null}
            <div className="grade-remaining">
                <label>Desired Grade:  {dgrade2}</label>
                <label>Current Grade: {grade2} </label>
                <label>Average Grade Needed on Remaining Items: {dgrade2 == 0? '': dgrade2 - grade2} </label>
                <p></p>
            </div>
            

            

            <table className='course-table'>
                <tr>
                    <th>Course Item</th>
                    <th>Due Date</th>
                    <th>Due in </th>
                    <th>Weight (%)</th>
                    <th>Grade (%)</th>
                </tr>
                {datas.map((item, index) => (
                    <tr key={index}>
                        <td><input 
                            name="courseItem2"
                            data-id={index}
                            type="text"
                            value={item.courseItem2}
                            onChange={handleOnChangeGrades}/>
                        </td>
                        <td><input 
                            name="dueDate2"
                            data-id={index}
                            type="date"
                            value={item.dueDate2}
                            onChange={handleOnChangeGrades}/>
                        </td>
                        <td>
                            {moment(item.dueDate2).diff(moment().format('YYYY MMMM DD'), 'days' ) || 0} days
                        </td>
                        <td><input 
                            name="weight2"
                            data-id={index}
                            type="number"
                            value={item.weight2}
                            onChange={handleOnChangeGrades}/>
                        </td>
                        <td><input 
                            name="actualGrade2"
                            data-id={index}
                            type="number"
                            value={item.actualGrade2}
                            onChange={handleOnChangeGrades}/>
                        </td>
                        <td><button onClick={current_grade}><i class="fa fa-check"></i></button></td>
                        <td><button onClick={() => handleDelRow(item)}>X</button></td>
                    </tr>
                ))}
                <button onClick={addGrades}>+ Add New Course Item</button>
            </table>

            <Route path="/lab2" component={Lab2}></Route>
        </div>
        
    )

}

export default Course2;
