import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Web3 from 'web3'
import { Vaccine_Benef_ABI, Vaccine_Benef_Address } from '../contractConfig'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function BForm(props) {
  const classes = useStyles();
  const [benefInfo,setBenefInfo] = useState({
    name:"",aadhaarNo:"",phoneNo:props.phoneNo,age:0
  })

  async function loadData(e)
  {
    //e.preventDefault()
    var web3 = new Web3("http://localhost:7545");
    const accounts = await web3.eth.getAccounts()
    console.log("---"+accounts);

    var vaccineBenef = new web3.eth.Contract(Vaccine_Benef_ABI,Vaccine_Benef_Address)
    console.log(vaccineBenef);

    vaccineBenef.methods.addBenef(benefInfo.name,benefInfo.aadhaarNo,benefInfo.phoneNo,benefInfo.age).send({from: accounts[0],gas:3000000}, function(error, result){
      if(error)
      console.log("err "+error);
      else{
        console.log("res");
        console.log(result);
      }
    })
  }

  function handleChange(event) {
    benefInfo[event.target.name] = event.target.value
    setBenefInfo(benefInfo)
    //console.log(benefInfo);
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                autoComplete="fname"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Enter your Name"
                autoFocus
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Enter your Aadhar Number"
                name="lastName"
                autoComplete="lname"
                onChange={handleChange}
              />
            </Grid>
            
          </Grid>
          <Button
            // type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => loadData()}
          >
            Submit
          </Button>
        </form>
      </div>
    </Container>
  );
}