import React from 'react'
import ReactDom from 'react-dom'
class Prototype extends React.Component {
   

    constructor(props) {
        super(props);

        this.state = {};
        this.state.filterText = "";
        this.state.semesters = [
            {
                id: 1,
                name: 'SSW',
                grade: 18
               
            }
        ];

    }
    handleUserInput(filterText) {
        this.setState({ filterText: filterText });
    };
    handleRowDel(semester) {
        var index = this.state.semesters.indexOf(semester);
        this.state.semesters.splice(index, 1);
        this.setState(this.state.semesters);
    };

    handleAddEvent(evt) {
        var id = (+ new Date() + Math.floor(Math.random() * 999999)).toString(36);
        var semester = {
            id: id,
            name: "",
           
            grade: 0
        }
        this.state.semesters.push(semester);
        this.setState(this.state.semesters);

    }

    handleSemesterTable(evt) {
        var item = {
            id: evt.target.id,
            name: evt.target.name,
            value: evt.target.value
        };
        var semesters = this.state.semesters.slice();
        var newSemesters = semesters.map(function (semester) {

            for (var key in semester) {
                if (key == item.name && semester.id == item.id) {
                    semester[key] = item.value;

                }
            }
            return semester;
        });
        this.setState({ semesters: newSemesters });
       
    };
    render() {

        return (
            <div>
               
                <SemesterTable onSemesterTableUpdate={this.handleSemesterTable.bind(this)} onRowAdd={this.handleAddEvent.bind(this)} onRowDel={this.handleRowDel.bind(this)} semesters={this.state.semesters} filterText={this.state.filterText} />
            </div>
        );

    }

}


class SemesterTable extends React.Component {

    render() {
        var onSemesterTableUpdate = this.props.onSemesterTableUpdate;
        var rowDel = this.props.onRowDel;
        var filterText = this.props.filterText;
        var semester = this.props.semesters.map(function (semester) {
            if (semester.name.indexOf(filterText) === -1) {
                return;
            }
            return (<SemesterRow onSemesterTableUpdate={onSemesterTableUpdate} semester={semester} onDelEvent={rowDel.bind(this)} key={semester.id} />)
        });
        return (
            <div>


                <button type="button" onClick={this.props.onRowAdd} className="btn btn-success pull-right">Add</button>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Grade</th>
                        
                        </tr>
                    </thead>

                    <tbody>
                        {semester}

                    </tbody>

                </table>
            </div>
        );

    }

}

class SemesterRow extends React.Component {
    onDelEvent() {
        this.props.onDelEvent(this.props.semester);

    }
    render() {

        return (
            <tr className="eachRow">
                <EditableCell onSemesterTableUpdate={this.props.onSemesterTableUpdate} cellData={{
                    type: "name",
                    value: this.props.semester.name,
                    id: this.props.semester.id
                }} />
                <EditableCell onSemesterTableUpdate={this.props.onSemesterTableUpdate} cellData={{
                    type: "grade",
                    value: this.props.semester.grade,
                    id: this.props.semester.id
                }} />
                
                <td className="del-cell">
                    <input type="button" onClick={this.onDelEvent.bind(this)} value="X" className="del-btn" />
                </td>
            </tr>
        );

    }

}
class EditableCell extends React.Component {

    render() {
        return (
            <td>
                <input type='text' name={this.props.cellData.type}
                    id={this.props.cellData.id}
                    value={this.props.cellData.value}
                    onChange={this.props.onSemesterTableUpdate} />
            </td>
        );

    }

}






export default Prototype;