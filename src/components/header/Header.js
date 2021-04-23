import React, { useState } from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { Link } from "react-router-dom";
import "./header.css";
import Popup from "./Popup";
import Home from "../Home";
import Vprovider from '../Vprovider';
import BForm from '../BForm';
import MedicalCenterReg from "../medicalcenterReg";
import FormTabs from "../FormTabs";
import VLogin from "../VLogin"
import MLogin from "../MLogin"
import LoginBenef from "../LoginBenef"
import '../style.css'
import '../normalize.css'
import Homepage from "../homepage/Homepage";

const Header = () => {

  function changeBenefCompo(phoneNo) {
    setCompo(<BForm phoneNo={phoneNo} />)
  }

  const [click, setClick] = useState(false);
  const [compo, setCompo] = useState(<Home change={changeBenefCompo}/>);
  const [currentItem, setItem] = useState('');
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [openPopup, setOpenPopup] = useState(false);
  return (
    <div>
    <div className="header">
      
     
      <div className="logo-nav">
        <div className="logo-container">
          <a href="#">
            <Logo className="logo" />
          </a>
        </div>
        <ul>
          <li className="button" onClick={closeMobileMenu}>
          <Link style={{ textDecoration: 'none' }} onClick={() => {setItem('Beneficiary'); setOpenPopup(true)}}>Beneficiary</Link>
          </li>
          <li className="button" onClick={closeMobileMenu}>
          <Link style={{ textDecoration: 'none' }} onClick={() => {setItem('Vaccine Provider'); setOpenPopup(true)}}>Vaccine Provider</Link>
          </li>
          <li className="button" onClick={closeMobileMenu}>
          <Link style={{ textDecoration: 'none' }} onClick={() => {setItem('Medicial Center'); setOpenPopup(true)}}>Medicial Center</Link>
          </li>
        </ul>
      </div>  
      {/* <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div> */}

      <Popup 
        title = {currentItem}
        openPopup = {openPopup}
        setOpenPopup = {setOpenPopup}>
          {(function() {
            switch(currentItem) {
                case 'Medicial Center':
                return <FormTabs 
                  reg={<MedicalCenterReg/>}
                  log={<MLogin/>}
                />;
                case 'Vaccine Provider':
                return <FormTabs 
                reg={<Vprovider/>}
                log={<VLogin/>}
                />;
                case 'Beneficiary':
                return <FormTabs 
                reg={compo}
                log={<LoginBenef/>}
                />;
              }
            }
        )()
      }
        </Popup>
        
    </div>
    {/* <div> 
      <img style={{height:'500px',width:'500px'}} href="https://images.transparencycdn.org/images/COVID-19-vaccine-transparency-feature.jpg"></img>
      
     </div> */}
     <Homepage />
    </div>

  );
};

export default Header;