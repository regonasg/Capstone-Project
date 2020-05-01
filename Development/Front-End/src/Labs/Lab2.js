import React, {useState} from 'react';
import {Link, Route} from 'react-router-dom';
import Course2 from '../Courses/Course2';
import Navbar from '../Navbar';

const Lab2 = () => {
    const initial_state = [{
        id: 1,
        labAssign2: '',
        labWeight2: '',
        labGrade2: ''
    }];

    const [datas, setDatas] = useState(initial_state);
    const[labGrade2, setlabGrade2] = useState(0);

    //Makes sure that data being inputed is actually showing up
    const handleChange = (event) => {
        const tempData = [...datas];
        tempData[event.target.dataset.id][event.target.name] = event.target.value;

        setDatas(tempData);

        console.log('handle change called')
    };

    const addGrades = () => {
        var id = (+ new Date() + Math.floor(Math.random() * 999999)).toString(36);
        setDatas(prevCost => [...prevCost, {
            id: id,
            labAssign2: '',
            labWeight2: '',
            labGrade2: ''
        }]);
    };

    const handleDelRow = (data) => {
        let tempData = datas.filter(item => item.id !== data.id);
        setDatas(tempData);
    };

    const current_lab = () => {
        let labGrades = 0;
        const rowTotal = datas.map(
            row => (row.labGrade2 * (row.labWeight2/100)) || 0  
        );

        if(rowTotal.length > 0) {
            labGrades = rowTotal.reduce((acc,val) => acc + val);
        }

        setlabGrade2(labGrades);
        console.log(labGrades);
    }

  

    return (
        <div>
            <Navbar />
            <h1>Lab</h1>
            <Link to="/course2"><button>Back to Course</button></Link>
            <div className="currentGrade">
                <label>Current Lab Grades: {labGrade2}</label>
            </div>
            <table className='course-table'>
                <tr>
                    <th>Lab Assignment</th>
                    <th>Weight (%)</th>
                    <th>Grade (%)</th>
                </tr>
                {datas.map((item, index) => (
                    <tr key={index}>
                        <td><input 
                            name="labAssign2"
                            data-id={index}
                            type="text"
                            value={item.labAssign2}
                            onChange={handleChange}/></td>

                        <td><input 
                            name="labWeight2"
                            data-id={index}
                            type="text"
                            value={item.labWeight2}
                            onChange={handleChange}/></td>
                        <td><input 
                            name="labGrade2"
                            data-id={index}
                            type="text"
                            value={item.labGrade2}
                            onChange={handleChange}/></td>
                        
                        <td><button onClick={current_lab}><i class="fa fa-check"></i></button></td>
                        <td><button onClick={() => handleDelRow(item)}>X</button></td>
                    </tr>

                    

                ))}
            </table>
            <button onClick={addGrades}>+ Add New Course Item</button>

            <Route path="/course2" component={Course2}></Route>
        </div>
    )
}

export default Lab2;