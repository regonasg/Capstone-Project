// JavaScript source code
import React, { useState } from "react";
const Ugpa2 = () => {
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
   
        <div className="ugpa">
            <div  className="table">
                <h4>Current Courses</h4>
                <button  className = "ugpa-button" onClick={addNewData}>Add Subject</button>
            <table className="ugpa-table">
                <tr>
                    <th>Subject</th>
                    <th>Grade</th>
                </tr>
                {datas.map((item, index) => (
                    <tr key={index}>
                        <td> <input
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
                        <td> <input type="button" onClick={() => handleRowDel(item)} value="X" className="del-btn" /></td>
                    </tr>
                    ))}
                    <tr className="ugpa-grade">
                        <td >Possible UGPA</td>
                        <td>{getTotalDatas() / datas.length}</td>
                    </tr>
                </table>
            </div>
        </div>
          
    );
};


export default Ugpa2;
