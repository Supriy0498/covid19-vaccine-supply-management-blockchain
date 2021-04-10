import React, { useState } from "react";
import { ReactComponent as CloseMenu } from "../assets/x.svg";
import { ReactComponent as MenuIcon } from "../assets/menu.svg";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { Link } from "react-router-dom";
import "./header.css";
import Popup from "./Popup";
import Home from "../Home";
import { Button } from "@material-ui/core";
import Vprovider from '../Vprovider';
import BForm from '../BForm';
import Medicalcenter from "../medicalcenter";
import FormTabs from "../FormTabs";
import Login from "../Login"


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
    <div className="header">
      <div className="logo-nav">
        <div className="logo-container">
          <a href="#">
            <Logo className="logo" />
          </a>
        </div>
        <ul className={click ? "nav-options active" : "nav-options"}>
          <li className="option" onClick={closeMobileMenu}>
          <Link onClick={() => {setItem('Beneficiary'); setOpenPopup(true)}}>Beneficiary</Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
          <Link onClick={() => {setItem('Vaccine Provider'); setOpenPopup(true)}}>Vaccine Provider</Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
          <Link onClick={() => {setItem('Medicial Center'); setOpenPopup(true)}}>Medicial Center</Link>
          </li>
        </ul>
      </div>  
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>

      <Popup 
        title = {currentItem}
        openPopup = {openPopup}
        setOpenPopup = {setOpenPopup}>
          {(function() {
            switch(currentItem) {
                case 'Medicial Center':
                return <FormTabs 
                  reg={<Medicalcenter/>}
                  log={<Login/>}
                />;
                case 'Vaccine Provider':
                return <FormTabs 
                reg={<Vprovider/>}
                log={<Login/>}
                />;
                case 'Beneficiary':
                return <FormTabs 
                reg={compo}
                log={<Login/>}
                />;
              }
            }
        )()
      }
        </Popup>
        
    </div>
  );
};

export default Header;