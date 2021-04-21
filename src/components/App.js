import React, { Component } from 'react';
import './App.css';
import Header from "./header/Header";
import Medicalcenter from './medicalcenter.js';
import Vprovider from './Vprovider';
import BForm from './BForm';
import Appoint from './Appoint';
import Request from './Request';
import Web3 from 'web3';

import { Vaccine_Benef_ABI, Vaccine_Benef_Address } from '../contractConfig'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";
import NearMedCentres from './NearMedCentres';

class App extends Component {
  render() {

  return (
   //  <Request/>
    <Router>
      <Switch>
        <Route exact path="/" component={Header} />
        <Route exact path="/medCen" component={NearMedCentres} />
        <Route exact path="/benef" component={Appoint} />
        <Route exact path="/vaccPro" component={Vprovider} />
      </Switch>
    </Router>
  );
}
}
export default App;
