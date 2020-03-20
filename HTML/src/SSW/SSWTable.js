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
        <div className="ssw-table">
            <h4>Current Grade: </h4>

            <button className="ssw-button" onClick={addNewData}>Add Item</button>
            
            <table className="ssw-table">
                <tr>
                    <th>Course Item</th>
                    <th>Due Date</th>
                    <th>Due In</th>
                    <th>Total Grade</th>
                    <th>Received Grade</th>
                    <th>Notes</th>
                </tr>

                {datas.map((item, index) => (
                    <tr key={index}>
                        <td> <input
                                name="courseItem"
                                data-id={index}
                                type="text"
                                value={item.courseItem}
                                onChange={(event) => handleDatasChange(event, item)}/>
                        </td>
                        <td><input
                            name="dueDate"
                            data-id={index}
                            type="text"
                            value={item.dueDate}
                            onChange={(event) => handleDatasChange(event, item)}/>
                        </td>
                        <td> <input
                            name="dueIn"
                            data-id={index}
                            type="text"
                            value={item.dueIn}
                            onChange={(event) => handleDatasChange(event, item)}/>
                        </td>
                        <td><input
                            name="totalGrade"
                            data-id={index}
                            type="number"
                            value={item.totalGrade}
                            onChange={(event) => handleDatasChange(event, item)}/>
                        </td>
                        <td><input
                            name="receivedGrade"
                            data-id={index}
                            type="number"
                            value={item.receivedGrade}
                            onChange={(event) => handleDatasChange(event, item)}/>
                        </td>
                        <td><input
                            name="notes"
                            data-id={index}
                            type="text"
                            value={item.notes}
                            onChange={(event) => handleDatasChange(event, item)}/>
                        </td>
                        <td> <input type="button" onClick={() => handleRowDel(item)} value="X" className="del-btn" /></td>
                    </tr>
    
                    ))}
            </table>
        </div>
    );
};

export default SSWTable;