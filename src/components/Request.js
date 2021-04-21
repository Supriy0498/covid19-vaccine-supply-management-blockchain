import React, {Component} from 'react';
function Request(){

    
          return (
            <div>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
            <div className="w3-container">
              <div className="w3-card-4 w3-dark-grey" style={{width: '50%'}}>
                <div className="w3-container w3-center">
                  <h3>Request</h3>
                  <h5>Diksha Rajguru</h5>
                 
                  <div className="w3-section">
                    <button className="w3-button w3-green" id="accept" onclick="accepted('accept','reject')">Accept</button>
                    <button className="w3-button w3-red" id="reject" onclick="rejected('reject','accept')">Decline</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w3-container">
              <div className="w3-card-4 w3-dark-grey" style={{width: '50%'}}>
                <div className="w3-container w3-center">
                  <h3>Request</h3>
                  <h5>Atharva Kale</h5>
                 
                  <div className="w3-section">
                    <button className="w3-button w3-green" id="accept1" onclick="accepted('accept1','reject1')">Accept</button>
                    <button className="w3-button w3-red" id="reject1" onclick="rejected('reject1','accept1')">Decline</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w3-container">
              <div className="w3-card-4 w3-dark-grey" style={{width: '50%'}}>
                <div className="w3-container w3-center">
                  <h3>Request</h3>
                  <h5>Muskan Agarwal</h5>
                  
                  <div className="w3-section">
                    <button className="w3-button w3-green" id="accept3" omclick="accepted('accept3','reject3')">Accept</button>
                    <button className="w3-button w3-red" id="reject3" onclick="rejected('reject3','accept3')">Decline</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w3-container">
              <div className="w3-card-4 w3-dark-grey" style={{width: '50%'}}>
                <div className="w3-container w3-center">
                  <h3>Request</h3>
                  <h5>Supriy Jinturkar</h5>
                 
                  <div className="w3-section">
                    <button className="w3-button w3-green" id="accept2" onclick="accepted('accept2','reject2')">Accept</button>
                    <button className="w3-button w3-red" id="reject2" onclick="rejected('reject2','accept2')">Decline</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          );
        }
    


export default Request;