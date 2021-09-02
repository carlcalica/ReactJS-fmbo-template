import React from 'react';
import Listings from './Listings';
import Dropdowns from './Dropdowns';
import SideMenu from './components/SideMenu';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './assets/css/style.css';
import './assets/css/App.css';

const Dashboard = () => {
  return <h1></h1>
}

const Content = () => {
  return <h1>Dashboard</h1>
}

function App() {
  return (
    <div className="App">

      {/* <Router>
        <SideMenu onCollapse={(inactive) => {
          console.log(inactive);
        }} 
        
        />

        <div className="page-container">
          <Switch>
            <Route path={'/'}>
              <Dashboard />
            </Route>
            <Route path={'/content'}>
              <Content />
            </Route>
          </Switch>
        </div>
      </Router> */}


      <div className="table-container p-shadow-4" >
      <Dropdowns />
      </div>
      <div className="table-container p-shadow-4" >
        <Listings />
      </div>
    </div>
  );
}

export default App;
