import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import AcademicForm from './AcademicForm';
import AcademicClassTaken from './AcademicClassTaken'
import AcademicFutureClasses from './AcademicFutureClasses';
import AcademicNavBar from './AcademicNavBar'

const AcademicDetails = () => {
    const initial_state = [
        {id: 1, 
        tcreditHours: '', 
        tcourseNum: '',
        tcourseName: '',
        tyearTaken: '',
        tsemTaken: '',
        tcreditsEarned: '',
        tcourseReq: 'yes',
        tmajorReq: 'yes',
        tgrade: ''}
    ]

    const [datas, setDatas] = useState(initial_state);
    const [hours, setTotalHours] = useState('');
    const [credHours, setCredHours] = useState('');
    const [ugpa, setUgpa] = useState('');
    const [pgpa, setPgpa] = useState('');
    const [mgpa, setMgpa] = useState('');

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
            tcourseReq: 'yes',
            tmajorReq: 'yes',
            tgrade: ''
        }]);
    };

    const handleDelRow = (data) => {
        let tempData = datas.filter(item => item.id !== data.id);
        setDatas(tempData);
    };

    //calculates tota credits, credits earned, ugpa, pgpa, mgpa
    const planResult = () => {
        
        //calculates total hours
        const totalhours = datas.reduce((total, item) => {              // reducer method, acc = total, curr = item
            return total + Number(item.tcreditHours);
        }, 0);

        setTotalHours(totalhours);
        
        //calculates credit hours
        const credithours = datas.reduce((total, item) => {              // reducer method, acc = total, curr = item
            return total + Number(item.tcreditsEarned);
        }, 0);

        setCredHours(credithours);

        
        var ugpa = 0
        var pgpa = 0;
        var mgpa = 0;
        //calculates ugpa
        const ugpaRow = datas.map(
            row => (Number(row.tgrade)/datas.length)
        );

        if(ugpaRow.length > 0 && datas.tgrade !== 'T') {
            ugpa = ugpaRow.reduce((acc,val) => acc + val);
        }

        //calculates pgpa
        const pgpaRow = datas.map(
            row => (Number(row.tgrade)/datas.length)
        );

        if(pgpaRow.length > 0 && datas.tcourseReq === 'yes') {
            pgpa = ugpaRow.reduce((acc,val) => acc + val);
        }

        //calculates mgpa
        const mgpaRow = datas.map(
            row => (Number(row.tgrade)/datas.length)
        );

        if(mgpaRow.length > 0 &&datas.tmajorReq === 'yes') {
            mgpa = ugpaRow.reduce((acc,val) => acc + val);
        }


        setUgpa(ugpa);
        setPgpa(pgpa);
        setMgpa(mgpa);
    }
    
        return (
            <div>
                <AcademicNavBar />
                <h1>Acadmic Plan</h1>
                <div className = "academic_details">
                    <div className="info_label">
                        <label>Name: </label>
                        <label>Degree:</label>
                        <label>Minor:</label>
                        <label>PGPA:</label>
                        <label>Credits Required:</label>
                    </div>
                    <div className="info_label">
                        <label>School and Community Organizations/Clubs/Event participating in:</label>
                        <label>Supports being used: </label>
                    </div>
                </div>

                <h4>Planning Result:</h4>
                <div className="academic_plan">
                    <div className = "planning-result">
                    <label>Total Hours: {hours}</label>
                        <label>Total credit hours eared: {credHours} </label>
                    </div>
                    <div className="planning-result">
                        <label>PGPA: {pgpa}</label>
                        <label>MGPA: {mgpa}</label>
                        <label>UGPA: {ugpa}</label>
                    </div>
                    <div className="planning-result">
                        <label>Expected Graduation: </label>
                    </div>
                </div>

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
                    <td><button onClick={planResult}><i class="fa fa-check"></i></button></td>
                    <td><button onClick={() => handleDelRow(item)}>X</button></td>
                </tr>
            ))}
        </table>
        <button onClick={addClass}>+ Add Classes Taken</button>
        </div>
    
                <br /> <br />
                <AcademicFutureClasses />
            </div>
        )
    }


export default AcademicDetails
