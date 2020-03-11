// JavaScript source code
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Progress from "./Progress";
import axios from "axios";

 const BookClub = () => {

    
    const initial_state = [
        { id: 1, name: "book", checked: false }

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

 

    const handleDatasChange = (event,item) => {
        const tempDatas = [...datas];

        tempDatas[event.target.dataset.id][event.target.name] = event.target.value;

        setDatas(tempDatas);
        let updateData = item.id;
        const obj = {
            id: updateData,
            name: item.name
            

        };
        axios.put('http://localhost:8000/react/phps/update.php?id=' + updateData, obj)
            .then(response => {
                console.log(response.data)
            })
            .catch(error => {
                console.log("ERRRR:: ", error.response.data)
            });
        console.log("checkedItems: ", datas);
        
    };
    const toggleChange = (event,item) => {
        const tempDatas = [...datas];

        tempDatas[event.target.dataset.id][event.target.name] = event.target.checked;

        setDatas(tempDatas);
        let updateData = item.id;
        const obj = {
            id: updateData,
            checked: item.checked

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
        setDatas(prevDatas => [...prevDatas, { id: id, name: "", checked: false }]);
        const obj = {
            id: id,
            name: "new",
            checked: false
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
   /* const getTotalDatas = () => {
        return datas.reduce((total, item) => {              // reducer method, acc = total, curr = item
            return total + Number(item.label);
        }, 0);
    };*/
     const getTotalChecked = () =>{
         let tempData = datas.filter(item => item.checked).length;
         let tempD = tempData / datas.length;
         let tempDa = tempD * 100;
         return tempDa;
       
     }
  
  
     
     return (
           <div>
             <Progress percentage={getTotalChecked()}/>
        <div className="table">
            <div className="table-title">Book Club</div>
            <div className="table-content">
                <div className="table-header">
                    <div className="table-row">
                        <div className="table-data">
                            <div>Book Section</div>
                        </div>
                        <div className="table-data">
                            <div>Read ?</div>
                        </div>
                    </div>
                </div>
                <div className="table-body">
                    {datas.map((item, index) => (
                        <div className="table-row" key={index}>
                            <div className="table-data">
                                <input
                                    name="name"
                                    data-id={index}
                                    type="text"
                                    value={item.name}
                                    onChange={(event) => handleDatasChange(event, item)}
                                />
                            </div>
                            <div className="table-data">
                                <input
                                    name="checked"
                                    data-id={index}
                                    type="Checkbox"
                                    
                                    // onChange={toggleChange}
                                    onChange={(event) => toggleChange(event, item)}
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
             </div>
    );
};




export default BookClub;
