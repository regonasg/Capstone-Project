import React, { useState } from "react";

const AcademicClassTaken = () => {
    const initial_state = [
        {id: 1, 
        tcreditHours: '', 
        tcourseNum: '',
        tcourseName: '',
        tyearTaken: '',
        tsemTaken: '',
        tcreditsEarned: '',
        tcourseReq: '',
        tmajorReq: '',
        tgrade: ''}
    ]

    const [datas, setDatas] = useState(initial_state);

    //Makes sure that data being inputed is actually showing up
    const handleChange = (event) => {
        const tempData = [...datas];
        tempData[event.target.dataset.id][event.target.name] = event.target.value;

        setDatas(tempData);

        console.log('handle change called')
    };

    const addClass = () => {
        var id = (+ new Date() + Math.floor(Math.random() * 999999)).toString(36);
        setDatas(prevCost => [...prevCost, {
            id: id,
            tcreditHours: '', 
            tcourseNum: '',
            tcourseName: '',
            tyearTaken: '',
            tsemTaken: '',
            tcreditsEarned: '',
            tcourseReq: '',
            tmajorReq: '',
            tgrade: ''
        }]);
    };

    const handleDelRow = (data) => {
        let tempData = datas.filter(item => item.id !== data.id);
        setDatas(tempData);
    };

    return (
        <div>
            <h4>Classes Taken: </h4>
        <table className = "academic-plan">
            <tr>
                <th>Credit Hours</th>
                <th>Course Number</th>
                <th>Course Name</th>
                <th>Year</th>
                <th>Semester Code</th>
                <th>Credit Earned</th>
                <th>Can you use this course for your program?</th>
                <th>Is this course a MAJOR requirement</th>
                <th>Grade or T (transfer credit)</th>
                <th></th>
            </tr>
            {datas.map((item,index) => (
                    <tr key={index} >
                    <td><input 
                        name="tcreditHours"
                        data-id={index}
                        type="number"
                        value={item.tcreditHours}
                        onChange={handleChange}/>
                    </td>
                    <td><input 
                        name="tcourseNum"
                        data-id={index}
                        type="number"
                        value={item.tcourseNum}
                        onChange={handleChange}/>
                    </td>
                    <td><input 
                        name="tcourseName"
                        data-id={index}
                        type="text"
                        value={item.tcourseName}
                        onChange={handleChange}/>
                    </td>
                    <td><input 
                        name="tyearTaken"
                        data-id={index}
                        type="text"
                        value={item.tyearTaken}
                        onChange={handleChange}/>
                    </td>
                    <td><input 
                        name="tsemTaken"
                        data-id={index}
                        type="text"
                        value={item.tsemTaken}
                        onChange={handleChange}/>
                    </td>
                    <td><input 
                        name="tcreditsEarned"
                        data-id={index}
                        type="number"
                        value={item.tcreditsEarned}
                        onChange={handleChange}/>
                    </td>
                    <td><select
                        name="tcourseReq"
                        
                        data-id={index}
                        value={item.tcourseReq}
                        onChange={handleChange}>
                        <option value="yes">Yes</option>
                        <option value="no">No</option></select>
                    </td>
                    <td><select
                        name="tmajorReq"
                        data-id={index}
                        value={item.tmajorReq}
                        onChange={handleChange}>
                        <option value="yes">Yes</option>
                        <option value="no">No</option></select>
                    </td>
                    <td><input 
                        name="tgrade"
                        data-id={index}
                        type="text"
                        value={item.tgrade}
                        onChange={handleChange}/>
                    </td>
                    <td><button onClick={() => handleDelRow(item)}>-</button></td>
                </tr>
            ))}
        </table>
        <button onClick={addClass}>+ Add Classes Taken</button>
        </div>
    )
};

export default AcademicClassTaken;

