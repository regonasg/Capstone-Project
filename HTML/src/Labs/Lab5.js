import React, {useState} from 'react';
import {Link, Route} from 'react-router-dom';
import Course5 from '../Courses/Course5';
import Navbar from '../Navbar';

const Lab5 = () => {
    const initial_state = [{
        id: 1,
        labAssign5: '',
        labWeight5: '',
        labGrade5: ''
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
            labAssign5: '',
            labWeight5: '',
            labGrade5: ''
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
                            name="labAssign5"
                            data-id={index}
                            type="text"
                            value={item.labAssign5}
                            onChange={handleChange}/></td>

                        <td><input 
                            name="labWeight5"
                            data-id={index}
                            type="text"
                            value={item.labWeight5}
                            onChange={handleChange}/></td>
                        <td><input 
                            name="labGrade5"
                            data-id={index}
                            type="text"
                            value={item.labGrade5}
                            onChange={handleChange}/></td>
                        
                        <td><button onClick={addGrades}>+</button></td>
                        <td><button onClick={() => handleDelRow(item)}>-</button></td>
                    </tr>

                    

                ))}
            </table>

            <Route path="/course5" component={Course5}></Route>
        </div>
    )
}

export default Lab5;