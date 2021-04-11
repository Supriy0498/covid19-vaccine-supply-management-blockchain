import React, { useState }  from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Web3 from 'web3'
import { Vaccine_Provider_ABI, Vaccine_Provider_Address } from '../contractConfig'

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

export default function Vprovider() {
  const classes = useStyles();

  const [providerInfo,setProviderInfo] = useState({
    name:"",location:"",vaccineLots:0,fTemp:0,rTemp:0,maxDays:0,pwd:""
  })

  async function loadData(e)
  {
    var web3 = new Web3("http://localhost:7545");
    const accounts = await web3.eth.getAccounts()
    console.log("---"+accounts);

    var vaccineProvider = new web3.eth.Contract(Vaccine_Provider_ABI,Vaccine_Provider_Address)
    console.log(vaccineProvider);

    const benefCnt = await vaccineProvider.methods.getProviderCnt().call()
    console.log(benefCnt);

    vaccineProvider.methods.addProvider(providerInfo.name,providerInfo.location,parseInt(providerInfo.vaccineLots),parseInt(providerInfo.fTemp),parseInt(providerInfo.rTemp),parseInt(providerInfo.maxDays),providerInfo.pwd).send({from: accounts[0],gas:3000000}, function(error, result){
      if(error)
      console.log("err "+error);
      else{
        console.log("res");
        console.log(result);
      }
    })
  }

  function handleChange(event) {
    providerInfo[event.target.name] = event.target.value
    setProviderInfo(providerInfo)
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Name"
                autoFocus
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Manufacture Location"
                name="location"
                autoComplete="lname"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                  autoComplete="fname"
                  name="vaccineLots"
                  variant="outlined"
                  required
                  fullWidth
                  id="vaccineLots"
                  label="Vaccine Lots"
                  autoFocus
                  onChange={handleChange}
                />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Freezer Temp"
                name="fTemp"
                autoComplete="lname"
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Refrigerator Temp"
                name="rTemp"
                autoComplete="lname"
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Max Storage Days"
                name="maxDays"
                autoComplete="lname"
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Password"
                type="password"
                name="pwd"
                autoComplete="lname"
                onChange={handleChange}
              />
            </Grid>
            
          </Grid>
          <Button
            type="button"
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
      <Box mt={5}>
      </Box>
    </Container>
  );
}