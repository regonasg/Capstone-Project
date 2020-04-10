import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { useFormik, yupToFormErrors } from 'formik';
import * as Yup from "yup";

export class AddCourses extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            className1: '',
            className2: '',
            className3: '',
            className4: '',
            className5: '',
            className6: '',
            showForm: false,
            showButton: false
        };

       this.buttonClicked = this.buttonClicked.bind(this)
       this.handleChange = this.handleChange.bind(this)
       this.onSubmit = this.onSubmit.bind(this)
       this.addClassForm = null;
       this.button = null;
    }

    buttonClicked(event) {
       if(this.state.id === 6){
           alert("Cannot add anymore classes");
       }
       else {
        this.setState({clickNum: this.state.clickNum + 1});
        //this.addClassForm = <AddClassForm  value = {this.state.className} />
        this.setState({showForm: true});    

       }
        console.log(this.state.showForm);
    }

    handleChange(event) {
        let target = event.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
            [name]: value
        });
    }

    onSubmit(event) {
        event.preventDefault();
        this.setState({showButton: true});
        this.setState({showForm: false});
        this.setState({id: this.state.id + 1});
    }
    render() {
        return (
            <div>
                
                {(this.state.showButton && this.state.id >= 1) ? 
                    <Link to='/course1'><button className="home_button"><span>{this.state.className1}</span></button></Link>
                :null}

                 {(this.state.showButton && this.state.id >= 2) ? 
                   <Link to='/course2'><button className="home_button"><span>{this.state.className2}</span></button></Link>
                :null}

                 {(this.state.showButton && this.state.id >= 3) ? 
                    <Link to='/course3'><button className="home_button"><span>{this.state.className3}</span></button></Link>
                :null}

                 {(this.state.showButton && this.state.id >= 4) ? 
                   <Link to='/course4'><button className="home_button"><span>{this.state.className4}</span></button></Link>
                :null}

                 {(this.state.showButton && this.state.id >= 5) ? 
                    <Link to='/course5'><button className="home_button"><span>{this.state.className5}</span></button></Link>
                :null}

                 {(this.state.showButton && this.state.id >= 6) ? 
                    <Link to='/course6'><button className="home_button"><span>{this.state.className6}</span></button></Link>
                :null}
               
                {(this.state.showForm && this.state.id === 0) ?
                    <form onSubmit={this.onSubmit}>
                        <label>Add course name: </label>
                        <input type="text" name="className1" value={this.state.className1} onChange={this.handleChange}/>
                        <button type="submit">Add Course</button>
                    </form>: null}

                {(this.state.showForm && this.state.id === 1) ?
                    <form onSubmit={this.onSubmit}>
                        <label>Add course name: </label>
                        <input type="text" name="className2" value={this.state.className2} onChange={this.handleChange}/>
                        <button type="submit">Add Course</button>
                    </form>: null}

                {(this.state.showForm && this.state.id === 2) ?
                    <form onSubmit={this.onSubmit}>
                        <label>Add course name: </label>
                        <input type="text" name="className3" value={this.state.className3} onChange={this.handleChange}/>
                        <button type="submit">Add Course</button>
                    </form>: null}

                {(this.state.showForm && this.state.id === 3) ?
                    <form onSubmit={this.onSubmit}>
                        <label>Add course name: </label>
                        <input type="text" name="className4" value={this.state.className4} onChange={this.handleChange}/>
                        <button type="submit">Add Course</button>
                    </form>: null}

                {(this.state.showForm && this.state.id === 4) ?
                    <form onSubmit={this.onSubmit}>
                        <label>Add course name: </label>
                        <input type="text" name="className5" value={this.state.className5} onChange={this.handleChange}/>
                        <button type="submit">Add Course</button>
                    </form>: null}

                {(this.state.showForm && this.state.id === 5) ?
                    <form onSubmit={this.onSubmit}>
                        <label>Add course name: </label>
                        <input type="text" name="className6" value={this.state.className6} onChange={this.handleChange}/>
                        <button type="submit">Add Course</button>
                    </form>: null}

                <button className="home_button" onClick={this.buttonClicked}><span>Add Course</span></button>
            </div>
        )
    }
}


export default AddCourses
