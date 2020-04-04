import React, { useState } from "react";

const AcademicFutureClasses = () => {
    const initial_state = [
        {id: 1, 
        fcreditHours: '', 
        fcourseNum: '',
        fcourseName: '',
        fyearTaken: '',
        fsemTaken: '',
        fcreditsEarned: '',
        fcourseReq: '',
        fmajorReq: '',
        fgrade: ''}
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
            fcreditHours: '', 
            fcourseNum: '',
            fcourseName: '',
            fyearTaken: '',
            fsemTaken: '',
            fcreditsEarned: '',
            fcourseReq: '',
            fmajorReq: '',
            fgrade: ''
        }]);
    };

    const handleDelRow = (data) => {
        let tempData = datas.filter(item => item.id !== data.id);
        setDatas(tempData);

        console.log(tempData);
    };

    return (
        <div>
            <h4>Future Classes: </h4>
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
                <th>Desired Grade</th>
                <th></th>
            </tr>
            {datas.map((item,index) => (
                    <tr key={index} >
                    <td><input 
                        name="fcreditHours"
                        data-id={index}
                        type="number"
                        value={item.fcreditHours}
                        onChange={handleChange}/>
                    </td>
                    <td><input 
                        name="tfourseNum"
                        data-id={index}
                        type="number"
                        value={item.fcourseNum}
                        onChange={handleChange}/>
                    </td>
                    <td><input 
                        name="fcourseName"
                        data-id={index}
                        type="text"
                        value={item.fcourseName}
                        onChange={handleChange}/>
                    </td>
                    <td><input 
                        name="fyearTaken"
                        data-id={index}
                        type="text"
                        value={item.fyearTaken}
                        onChange={handleChange}/>
                    </td>
                    <td><input 
                        name="fsemTaken"
                        data-id={index}
                        type="text"
                        value={item.fsemTaken}
                        onChange={handleChange}/>
                    </td>
                    <td><input 
                        name="fcreditsEarned"
                        data-id={index}
                        type="number"
                        value={item.fcreditsEarned}
                        onChange={handleChange}/>
                    </td>
                    <td><select
                        name="fcourseReq"
                        data-id={index}
                        value={item.fcourseReq}
                        onChange={handleChange}>
                        <option value="yes">Yes</option>
                        <option value="no">No</option></select>
                    </td>
                    <td><select
                        name="fmajorReq"
                        data-id={index}
                        value={item.fmajorReq}
                        onChange={handleChange}>
                        <option value="yes">Yes</option>
                        <option value="no">No</option></select>
                    </td>
                    <td><input 
                        name="fgrade"
                        data-id={index}
                        type="text"
                        value={item.tgrade}
                        onChange={handleChange}/>
                    </td>
                    <td><button onClick={() => handleDelRow(item)}>-</button></td>
                </tr>
            ))}
        </table>
        <button onClick={addClass}>+ Add Future Classes</button>
        </div>
    )
};

export default AcademicFutureClasses;

