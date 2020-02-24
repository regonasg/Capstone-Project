import React, { useState } from "react";
import Navbar from "./Navbar";
import Prototype from "./Prototype";
import Ugpa from "./UGPA/Ugpa";
import SemSum from "./SemesterSummary/SemSum";
import SSW from "./SSW/SSW";
import Hook_prototype from "./Hook_prototype";
/*
 Access rights
    - users
    - routing url -> users
 Validations
 Semester Summary
 - initial usestates (name,average)
 - add, delete, update functionality
 - edit functionality + onChange
 - submit + onSubmit

UGPA
- initial usestates
-  crud
- calculate ugpa

SSW
    Table Section
        - convert to hook
    Form Section
        - onChange missing
        - calculate percentage -> pass to progress bar
    Progress bar section
        - test
    Book Section
        - test
        - cross out word(optional)
*/
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom';
const App = () => {
  

    return (
      <Router>
            <div>
                <Navbar/>
        <Switch>
                    <Route exact path='/App' component={App} />
                
                    <Route path='/Ugpa' component={Ugpa} />
                    <Route path='/SemSum' component={SemSum} />
                    <Route path='/SSW' component={SSW} />
                    <Route path='/Hook_prototype' component={Hook_prototype} />

                        </Switch>

            </div>
            </Router>
  );
};

export default App;
