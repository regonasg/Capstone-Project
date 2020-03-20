// JavaScript source code
import React, { useState } from "react";
import Navbar from "../Navbar"





const SemSum = () => {
    const initial_state = [
        { id: 1, name: "SSW ACT", grade: 0 }

    ];
    const [datas, setDatas] = useState(initial_state);




    const handleDatasChange = event => {
        const tempDatas = [...datas];
        tempDatas[event.target.dataset.id][event.target.name] = event.target.value;

        setDatas(tempDatas);
    };

    const addNewData = () => {
        var id = (+ new Date() + Math.floor(Math.random() * 999999)).toString(36);
        setDatas(prevCosts => [...prevCosts, { id: id, name: "", grade: 0 }]);
    };
    const handleRowDel = (data) => {
        // var index = datas.indexOf(data);
        //const newDatas = datas.splice(index, 1);
        //setDatas(newDatas);

        let tempData = datas.filter(item => item.id !== data.id);
        setDatas(tempData);
    };
    const getTotalDatas = () => {
        return datas.reduce((total, item) => {              // reducer method, acc = total, curr = item
            return total + Number(item.grade);
        }, 0);
    };

    return (
        <div>
            <Navbar />
            <h1>Semester Summary</h1>

            <button className="addCourse-button" onClick={addNewData}>Add Course</button>

                <table className="table">
                    <tr>
                        <th>Course</th>
                        <th>Course Average</th>
                    </tr>
                    {datas.map((item, index) => (
                        <tr key={index}>
                            <td><input
                                    name="name"
                                    data-id={index}
                                    type="text"
                                    value={item.name}
                                    onChange={handleDatasChange}/>
                            </td>
                            <td><input
                                    name="grade"
                                    data-id={index}
                                    type="number"
                                    value={item.grade}
                                    onChange={handleDatasChange}/>
                            </td>
                            <input type="button" onClick={() => handleRowDel(item)} value="X" className="del-btn" />
                        </tr>
                    ))}
                </table>
              
            </div>
        
    );
};

export default SemSum;