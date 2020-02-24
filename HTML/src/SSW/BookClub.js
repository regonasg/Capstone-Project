// JavaScript source code
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const BookClub = () => {
  /* 
    const Progress = ({percentage}) => {

        const [style, setStyle] = useState({});
        setTimeout(() => {
            const newStyle = {
                opacity: 1,
                width: `${percentage}%`
            }

            setStyle(newStyle);
        },200);
        return (
            <div class="progress">
                <div class="progress-done" style={style}>
                    {percentage}%
            </div>

            </div>
        );
    };
    
    const Checkbox = ({type = "checkbox", name, checked = false, onChange }) => {

        return (
            <input type={type} name={name} checked={checked} onChange={onChange} />
            );

    };
   
        const [checkedItems, setCheckedItems] = useState({});
        const handleChange = event => {
            setCheckedItems({ ...checkedItems, [event.target.name]: event.target.checked });
       

};

        const checkboxes = [
            {
                name: "check-box-1",
                key: "checkBox1",
                label: "Check Box 1"
            },
            {
                name: "check-box-2",
                key: "checkBox2",
                label: "Check Box 2"
            }
        ];
    

    return (
        <div>
            <Progress />

            <label>Checked item name : {checkedItems["check-box-1"]} </label> <br />
            {checkboxes.map(item => (
                <label key={item.key}>
                    {item.name}
                    <Checkbox
                        name={item.name}
                        checked={checkedItems[item.name]}
                        onChange={handleChange}
                    />
                </label>
            ))}


            </div>
        );




};*/




    const initial_state = [
        { id: 1, name: "book", checked: false }

    ];
    const [datas, setDatas] = useState(initial_state);
   

    

    const handleDatasChange = event => {
        const tempDatas = [...datas];

        tempDatas[event.target.dataset.id][event.target.name] = event.target.value;

        setDatas(tempDatas);
        console.log("checkedItems: ", datas);
        
    };
    const toggleChange = event => {
        const tempDatas = [...datas];

        tempDatas[event.target.dataset.id][event.target.name] = event.target.checked;

        setDatas(tempDatas);
        console.log("checkedItems: ", datas);

    };

    const addNewData = () => {
        var id = (+ new Date() + Math.floor(Math.random() * 999999)).toString(36);
        setDatas(prevDatas => [...prevDatas, { id: id, name: "", checked: false }]);
    };
    const handleRowDel = (data) => {
        // var index = datas.indexOf(data);
        //const newDatas = datas.splice(index, 1);
        //setDatas(newDatas);

        let tempData = datas.filter(item => item.id !== data.id);
        setDatas(tempData);
    };
   /* const getTotalDatas = () => {
        return datas.reduce((total, item) => {              // reducer method, acc = total, curr = item
            return total + Number(item.label);
        }, 0);
    };*/
   
   
    return (
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
                                    onChange={handleDatasChange}
                                />
                            </div>
                            <div className="table-data">
                                <input
                                    name="checked"
                                    data-id={index}
                                    type="Checkbox"
                                    
                                    onChange={toggleChange}
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




export default BookClub;
