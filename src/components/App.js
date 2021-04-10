import React, { Component } from 'react';
import './App.css';
import Header from "./header/Header";
import Medicalcenter from './medicalcenter.js';
import Vprovider from './Vprovider';
import BForm from './BForm';
import Web3 from 'web3';

import { Vaccine_Benef_ABI, Vaccine_Benef_Address } from '../contractConfig'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

class App extends Component {
  render() {
    
  async function loadData()
  {
    console.log("here");
    var web3 = new Web3("http://localhost:7545");//new Web3.providers.("https://kovan.infura.io/v3/fc5a399d527c424cab75e7e66314c9dc"))
    const accounts = await web3.eth.getAccounts()

    console.log("---"+accounts);

    var vaccineBenef = new web3.eth.Contract(Vaccine_Benef_ABI,Vaccine_Benef_Address)
    console.log(vaccineBenef);
    const benefCnt = await vaccineBenef.methods.getBenefCnt().call()
    console.log(benefCnt);
    vaccineBenef.methods.addBenef("sj","9917","1564",55).send({from: accounts[0],gas:3000000}, function(error, result){
      if(error)
      console.log("err "+error);
      else{
        console.log("res");
        console.log(result);
      }
    })
  }

  //loadData();

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Header} />
        <Route exact path="/beneForm" component={BForm} />
        <Route exact path="/vaccPro" component={Vprovider} />
        <Route exact path="/MedCen" component={Medicalcenter} />
      </Switch>
    </Router>
  );
}
}
export default App;
