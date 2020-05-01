import React, { useState } from 'react';
import Navbar from '../Navbar';
import moment from 'moment';
import {Link, Route} from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import Lab3 from '../Labs/Lab3';



const Course3 = () => {
    const initial_state = [{
            id: 1,
            courseItem3: '',
            weight3: '',
            actualGrade3: '',
            dueDate3: '',
    }];

    const[dgrade3,setDgrade1] = useState(0);
    const[datas, setDatas] = useState(initial_state);
    const[form, setForm] = useState(false);
    const[checked, setChecked] = useState(false);
    const[grade3, setGrade3] = useState(0);

    const handleOnChangeGrades = event => {
       
        const tempData = [...datas];
        tempData[event.target.dataset.id][event.target.name] = event.target.value;

        setDatas(tempData);
 

        console.log("onChange is called");
       
    };

    const handleDGrade = event => {
        const tempDgrade = event.target.value;

        setDgrade1(tempDgrade);
    }


    const handleChecked = () => {
        setChecked(!checked);
        console.log(checked);
    };

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

    const showForm = () => {
        setForm(!form);
    };

    //calculates grades 
    const current_grade = () => {
        let grades = 0;
        const rowTotal = datas.map(
            row => (row.actualGrade3 * (row.weight3/100)) || 0  
        );

        if(rowTotal.length > 0) {
            grades = rowTotal.reduce((acc,val) => acc + val);
        }

        setGrade3(grades);
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
                            value={dgrade3}
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
                <label>Desired Grade:  {dgrade3}</label>
                <label>Current Grade: {grade3} </label>
                <label>Average Grade Needed on Remaining Items: {dgrade3 == 0? '': dgrade3 - grade3} </label>
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
                            name="courseItem3"
                            data-id={index}
                            type="text"
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
                        <td>
                            {moment(item.dueDate3).diff(moment().format('YYYY MMMM DD'), 'days' ) || 0} days
                        </td>
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
                        <td><button onClick={current_grade}><i class="fa fa-check"></i></button></td>
                        <td><button onClick={() => handleDelRow(item)}>X</button></td>
                    </tr>
                ))}
                <button onClick={addGrades}>+ Add New Course Item</button>
            </table>

            <Route path="/lab3" component={Lab3}></Route>
        </div>
        
    )

}

export default Course3;
