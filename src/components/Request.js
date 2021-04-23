import React, {Component} from 'react';

function Request(){
  function accepted(id1,id2){
    document.getElementById(id1).innerHTML="Successfully Accepted!" 
        var x = document.getElementById(id2);
     
        x.style.display = "none";
      
    
    }
    
    function rejected(id1,id2){
    document.getElementById(id2).innerHTML="Successfully Rejected!" 
        var x = document.getElementById(id1);    
        x.style.display = "none";
      
    
    }
    
          return (
            <div style={{textAlign:'center'}} >
              <h1 style={{marginLeft:'0px'}}>Request from Medical Center</h1>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
            <div className="w3-container" style={{marginLeft:'500px',marginTop:'50px'}}>
              <div className="w3-card-4 w3-dark-grey" style={{width: '50%',alignContent:'center'}}>
                <div className="w3-container w3-center">
                  <h3>Request</h3>
                  <h5>Atharva Kale</h5>
                  <img src="images/doctor.jpg" alt="Avatar" style={{width: '20%'}} />
                  <div className="w3-section">
                    <button className="w3-button w3-green" id="accept" onClick={() => {accepted('accept','reject')}}>Accept</button>
                    <button className="w3-button w3-red" id="reject" onClick={() => {rejected('accept','reject')}}>Decline</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w3-container" style={{marginLeft:'500px'}}>
              <div className="w3-card-4 w3-dark-grey" style={{width: '50%'}}>
                <div className="w3-container w3-center">
                  <h3>Request</h3>
                  <h5>Diksha Rajguru</h5>
                  <img src="images/doctorf.jpg" alt="Avatar" style={{width: '20%'}} />
                  <div className="w3-section">
                    <button className="w3-button w3-green" id="accept1" onClick={() => {accepted('accept1','reject1')}}>Accept</button>
                    <button className="w3-button w3-red" id="reject1" onClick={() => {rejected('accept1','reject1')}}>Decline</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w3-container"style={{marginLeft:'500px'}}>
              <div className="w3-card-4 w3-dark-grey" style={{width: '50%'}}>
                <div className="w3-container w3-center">
                  <h3>Request</h3>
                  <h5>Muskan Agarwal</h5>
                  <img src="images/doctorf.jpg" alt="Avatar" style={{width: '20%'}} />
                  <div className="w3-section">
                    <button className="w3-button w3-green" id="accept2"onClick={() => {accepted('accept2','reject2')}}>Accept</button>
                    <button className="w3-button w3-red" id="reject2" onClick={() => {rejected('accept2','reject2')}}>Decline</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w3-container" style={{marginLeft:'500px'}}>
              <div className="w3-card-4 w3-dark-grey" style={{width: '50%'}}>
                <div className="w3-container w3-center">
                  <h3>Request</h3>
                  <h5>Supriy Jinturkar</h5>
                  <img src="images/doctor.jpg" alt="Avatar" style={{width: '20%'}} />
                  <div className="w3-section">
                    <button className="w3-button w3-green" id="accept3"onClick={() => {accepted('accept3','reject3')}}>Accept</button>
                    <button className="w3-button w3-red" id="reject3" onClick={() => {rejected('accept3','reject3')}}>Decline</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          );
        }
export default Request;