import React, {useState} from 'react';
import {Link, Route} from 'react-router-dom';
import Course6 from '../Courses/Course6';
import Navbar from '../Navbar';

const Lab6 = () => {
    const initial_state = [{
        id: 1,
        labAssign6: '',
        labWeight6: '',
        labGrade6: ''
    }];

    const [datas, setDatas] = useState(initial_state);

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
            labAssign6: '',
            labWeight6: '',
            labGrade6: ''
        }]);
    };

    const handleDelRow = (data) => {
        let tempData = datas.filter(item => item.id !== data.id);
        setDatas(tempData);
    };

  

    return (
        <div>
            <Navbar />
            <h4>Lab</h4>
            <Link to="/course5"><button>Back to Course</button></Link>
            <div className="currentGrade">
                <label>Current Lab Grades: </label>
                <p>This is where the current lab grade will go</p>
            </div>
            <table>
                <tr>
                    <th>Lab Assignment</th>
                    <th>Weight (%)</th>
                    <th>Grade (%)</th>
                </tr>
                {datas.map((item, index) => (
                    <tr key={index}>
                        <td><input 
                            name="labAssign6"
                            data-id={index}
                            type="text"
                            value={item.labAssign6}
                            onChange={handleChange}/></td>

                        <td><input 
                            name="labWeight6"
                            data-id={index}
                            type="text"
                            value={item.labWeight6}
                            onChange={handleChange}/></td>
                        <td><input 
                            name="labGrade6"
                            data-id={index}
                            type="text"
                            value={item.labGrade6}
                            onChange={handleChange}/></td>
                        
                        <td><button onClick={addGrades}>+</button></td>
                        <td><button onClick={() => handleDelRow(item)}>-</button></td>
                    </tr>

                    

                ))}
            </table>

            <Route path="/course6" component={Course6}></Route>
        </div>
    )
}

export default Lab6;