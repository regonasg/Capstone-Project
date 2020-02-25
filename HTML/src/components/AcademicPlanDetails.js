import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch} from 'react-router-dom';
import AcademicPlanDetailsForm from '../forms/AcademicPlanDetailsForm';
import Home from '../components/Home';


export class AcademicPlanDetails extends Component {
    render() {
        return (
            <Router>
                <div className = "SignupLoginContainer">
                    <div className = "SignupLogin_Form">
                        <div className = "SignUpLogin_Title">
                            <h3 className = "Title_Link Link_Active">Academic Details</h3> 
                            <AcademicPlanDetailsForm />
                            
                            <Switch>
                             <Route exact strict path = '/Home' component={Home}></Route>
                            </Switch>
                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}

export default AcademicPlanDetails
