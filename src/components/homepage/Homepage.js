import React, { useState } from "react";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import BForm from "../BForm";
import Popup from "../header/Popup";
import { Link } from "react-router-dom";
import FormTabs from "../FormTabs";
import Home from "../Home";
import VLogin from "../VLogin"
import MLogin from "../MLogin"
import LoginBenef from "../LoginBenef"
import MedicalCenterReg from "../medicalcenterReg";
import Vprovider from '../Vprovider';
import Line from '../Line'

const useStyles = makeStyles({
    root: {
      minWidth: 275
    }
  });
  
function Homepage(){

    function changeBenefCompo(phoneNo) {
        setCompo(<BForm phoneNo={phoneNo} />)
      }

    const classes = useStyles();
    const [currentItem, setItem] = useState('');
    const [openPopup, setOpenPopup] = useState(false);
    const [compo, setCompo] = useState(<Home change={changeBenefCompo}/>);

    return(
        <div className="header-div">
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
            <h1>Covid19 Vaccine Supply Management</h1> 
            </Grid>
            <Grid item xs={12} sm={6}>
            <img className="header-img" src="images/vaccine.jpg" alt=""/>
            </Grid>
            </Grid>
            <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
                <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    image="https://image.cnbcfm.com/api/v1/image/106781785-1604593439524-gettyimages-1282000675-mrt_4107.jpeg?v=1604593482"
                    title="Beneficiary"
                    height="250"
                    width="30"
                    />
                    
                </CardActionArea>
                <CardActions>
                <Button onClick={() => {setItem('Beneficiary'); setOpenPopup(true)}} size="small">Beneficiary</Button>
                </CardActions>
                </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="VAccine"
                    image="data:image/jpeg;base64,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"
                    title="Vaccine Provider"
                    height="250"
                    width="30"
                    />
                </CardActionArea>
                <CardActions>
                    <Button onClick={() => {setItem('Vaccine Provider'); setOpenPopup(true)}} size="small">Vaccine Provider</Button>                  
                </CardActions>
                </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="100"
                    image="data:image/jpeg;base64,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"
                    title="Medical Center"
                    height="250"
                    width="30"
                    />
                    
                </CardActionArea>
                <CardActions>
                    <Button onClick={() => {setItem('Medicial Center'); setOpenPopup(true)}} size="small">Medical Center</Button>
                </CardActions>
                </Card>
            </Grid>
            </Grid>

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
        <Line />
        
        </div>
    );
}

export default Homepage;

{/* <img className="header-img" src="https://cdn.dribbble.com/users/702789/screenshots/14253234/media/51d990a95e72cbce5128f2b4bc683e01.png" alt=""/>
            <h1>Supply Vaccine Management</h1> */}