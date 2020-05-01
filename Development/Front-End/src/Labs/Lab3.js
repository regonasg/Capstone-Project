import React, {useState} from 'react';
import {Link, Route} from 'react-router-dom';
import Course3 from '../Courses/Course3';
import Navbar from '../Navbar';

const Lab3 = () => {
    const initial_state = [{
        id: 1,
        labAssign3: '',
        labWeight3: '',
        labGrade3: ''
    }];

    const [datas, setDatas] = useState(initial_state);
    const[labGrade3, setlabGrade3] = useState(0);

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
            labAssign3: '',
            labWeight3: '',
            labGrade3: ''
        }]);
    };

    const handleDelRow = (data) => {
        let tempData = datas.filter(item => item.id !== data.id);
        setDatas(tempData);
    };

    const current_lab = () => {
        let labGrades = 0;
        const rowTotal = datas.map(
            row => (row.labGrade3 * (row.labWeight3/100)) || 0  
        );

        if(rowTotal.length > 0) {
            labGrades = rowTotal.reduce((acc,val) => acc + val);
        }

        setlabGrade3(labGrades);
        console.log(labGrades);
    }

  

    return (
        <div>
            <Navbar />
            <h1>Lab</h1>
            <Link to="/course3"><button>Back to Course</button></Link>
            <div className="currentGrade">
            <br /> <br />
            <div className="grade-remaining">
                <label>Current Lab Grades: {labGrade3}</label>
            </div>
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
                            name="labAssign3"
                            data-id={index}
                            type="text"
                            value={item.labAssign3}
                            onChange={handleChange}/></td>

                        <td><input 
                            name="labWeight3"
                            data-id={index}
                            type="text"
                            value={item.labWeight3}
                            onChange={handleChange}/></td>
                        <td><input 
                            name="labGrade3"
                            data-id={index}
                            type="text"
                            value={item.labGrade3}
                            onChange={handleChange}/></td>
                        
                        <td><button onClick={current_lab}><i class="fa fa-check"></i></button></td>
                        <td><button onClick={() => handleDelRow(item)}>X</button></td>
                    </tr>

                    

                ))}
            </table>
            <button onClick={addGrades}>+ Add New Course Item</button>

            <Route path="/course3" component={Course3}></Route>
        </div>
    )
}

export default Lab3;