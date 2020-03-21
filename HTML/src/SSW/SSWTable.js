// JavaScript source code
import React, { useState, useEffect } from "react";
import axios from "axios";





const SSWTable = () => {
    const initial_state = [
        {
            id: 1, courseItem: "", dueDate: "", dueIn: "", totalGrade: 0,
        receivedGrade: 0, notes: ""}

    ];
    const [datas, setDatas] = useState(initial_state);
    useEffect(() => {
        console.log('Component did mount');
        axios.get('http://localhost:8000/react/phps/list.php')
            .then(response => {
                setDatas(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])



    const handleDatasChange = (event, item) => {
        const tempDatas = [...datas];
        tempDatas[event.target.dataset.id][event.target.name] = event.target.value;

        setDatas(tempDatas);
        let updateData = item.id;
        const obj = {
            id: updateData,
            courseItem: item.courseItem,
            dueDate: item.dueDate,
             dueIn: item.dueIn,
            totalGrade: item.totalGrade,
            receivedGrade: item.receivedGrade,
            notes: item.notes


        };
        axios.put('http://localhost:8000/react/phps/update.php?id=' + updateData, obj)
            .then(response => {
                console.log(response.data)
            })
            .catch(error => {
                console.log("ERRRR:: ", error.response.data)
            });
    };

    const addNewData = () => {
        var id = (+ new Date() + Math.floor(Math.random() * 999999)).toString(36);
        setDatas(prevCosts => [...prevCosts, {
            id: id, courseItem: "", dueDate: "", dueIn: "", totalGrade: 0,
            receivedGrade: 0, notes: ""
        }]);
        const obj = {
            id: id,
            courseItem: "new",
            dueDate: "",
            dueIn: "",
            totalGrade: 0,
            receivedGrade: 0,
            notes: ""

        };
        axios.post('http://localhost:8000/react/phps/insert.php', obj)
            .then(res => { console.log(res.data) })
            .catch(error => {
                console.log("ERRRR:: ", error.response.data);
            });
    };
    const handleRowDel = (data) => {
        // var index = datas.indexOf(data);
        //const newDatas = datas.splice(index, 1);
        //setDatas(newDatas);
        axios.get('http://localhost:8000/react/phps/delete.php?id=' + data.id)
            .then(


            )
            .catch(err => console.log(err))
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
                                    onChange={(event) => handleDatasChange(event, item)}
                                />
                            </div>
                            <div className="table-data">
                                <th>Due Date</th>
                                <input
                                    name="dueDate"
                                    data-id={index}
                                    type="text"
                                    value={item.dueDate}
                                    onChange={(event) => handleDatasChange(event, item)}
                                />
                            </div>
                            <div className="table-data">
                                <th>Due In</th>
                                <input
                                    name="dueIn"
                                    data-id={index}
                                    type="text"
                                    value={item.dueIn}
                                    onChange={(event) => handleDatasChange(event, item)}
                                />
                            </div>
                            <div className="table-data">
                                <th>Total Grade</th>
                                <input
                                    name="totalGrade"
                                    data-id={index}
                                    type="number"
                                    value={item.totalGrade}
                                    onChange={(event) => handleDatasChange(event, item)}
                                />
                            </div>
                            <div className="table-data">
                                <th>Received Grade</th>
                                <input
                                    name="receivedGrade"
                                    data-id={index}
                                    type="number"
                                    value={item.receivedGrade}
                                    onChange={(event) => handleDatasChange(event, item)}
                                />
                            </div>
                            <div className="table-data">
                                <th>Notes</th>
                                <input
                                    name="notes"
                                    data-id={index}
                                    type="text"
                                    value={item.notes}
                                    onChange={(event) => handleDatasChange(event, item)}
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