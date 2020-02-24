// JavaScript source code
import React, { useState } from "react";






const SSWTable = () => {
    const initial_state = [
        {
            id: 1, courseItem: "", dueDate: "", dueIn: "", totalGrade: 0,
        receivedGrade: 0, notes: ""}

    ];
    const [datas, setDatas] = useState(initial_state);




    const handleDatasChange = event => {
        const tempDatas = [...datas];
        tempDatas[event.target.dataset.id][event.target.name] = event.target.value;

        setDatas(tempDatas);
    };

    const addNewData = () => {
        var id = (+ new Date() + Math.floor(Math.random() * 999999)).toString(36);
        setDatas(prevCosts => [...prevCosts, {
            id: id, courseItem: "", dueDate: "", dueIn: "", totalGrade: 0,
            receivedGrade: 0, notes: "" }]);
    };
    const handleRowDel = (data) => {
        // var index = datas.indexOf(data);
        //const newDatas = datas.splice(index, 1);
        //setDatas(newDatas);

        let tempData = datas.filter(item => item.id !== data.id);
        setDatas(tempData);
    };
    

    return (
        <div className="table">
            <div className="table-title">SSW ACT</div>
            <div className="table-content">
                <div className="table-header">
                    <div className="table-row">
                        <div className="table-data">
                            <div>Current Grade</div>
                        </div>
                       
                    </div>
                </div>
                <div className="table-body">
                    {datas.map((item, index) => (
                        <div className="table-row" key={index}>
                            <div className="table-data">
                                <th>Course Item</th>
                                <input
                                    name="courseItem"
                                    data-id={index}
                                    type="text"
                                    value={item.courseItem}
                                    onChange={handleDatasChange}
                                />
                            </div>
                            <div className="table-data">
                                <th>Due Date</th>
                                <input
                                    name="dueDate"
                                    data-id={index}
                                    type="text"
                                    value={item.dueDate}
                                    onChange={handleDatasChange}
                                />
                            </div>
                            <div className="table-data">
                                <th>Due In</th>
                                <input
                                    name="dueIn"
                                    data-id={index}
                                    type="text"
                                    value={item.dueIn}
                                    onChange={handleDatasChange}
                                />
                            </div>
                            <div className="table-data">
                                <th>Total Grade</th>
                                <input
                                    name="totalGrade"
                                    data-id={index}
                                    type="number"
                                    value={item.totalGrade}
                                    onChange={handleDatasChange}
                                />
                            </div>
                            <div className="table-data">
                                <th>Received Grade</th>
                                <input
                                    name="receivedGrade"
                                    data-id={index}
                                    type="number"
                                    value={item.receivedGrade}
                                    onChange={handleDatasChange}
                                />
                            </div>
                            <div className="table-data">
                                <th>Notes</th>
                                <input
                                    name="notes"
                                    data-id={index}
                                    type="text"
                                    value={item.notes}
                                    onChange={handleDatasChange}
                                />
                            </div>
                            <td className="del-cell">
                                <input type="button" onClick={() => handleRowDel(item)} value="X" className="del-btn" />
                            </td>
                        </div>
                    ))}
                    <div className="table-row">
                        <div className="table-data">
                            <button onClick={addNewData}>+</button>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    );
};

export default SSWTable;