import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './index.css';
import './styles.css';
import './header.css';
import SignUpLogin from './components/SignUpLogin';
import Navbar from "./Navbar";
import Ugpa from "./UGPA/Ugpa";
import SemSum from "./SemesterSummary/SemSum";
import SSW from "./SSW/SSW";
import Hook_prototype from "./Hook_prototype";
import AcademicPlanDetails from './components/AcademicPlanDetails';
import Home from './components/Home'


const App = () => (
        <Router>
              <div>
                  <Navbar/>
          <Switch>
                      <Route exact path='/App' component={App} />
                  
                      <Route path='/Ugpa' component={Ugpa} />
                      <Route path='/SemSum' component={SemSum} />
                      <Route path='/SSW' component={SSW} />
                      <Route path='/Hook_prototype' component={Hook_prototype} />
                      <Route exact path='/SignUpLogin' component={SignUpLogin} />
                      <Route path='/academic-details' component={AcademicPlanDetails} />
                      <Route path='/Home' component={Home} />
  
                          </Switch>
  
              </div>
              </Router>
    
);
   


ReactDOM.render(<App />, document.getElementById('root'));

