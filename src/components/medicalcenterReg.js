import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Web3 from 'web3'
import { Medical_Center_ABI, Medical_Center_Address } from '../contractConfig'

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

export default function MedicalCenterReg() {
  const classes = useStyles();

  const [centerInfo,setCenterInfo] = useState({
    name:"",location:"",vaccineLots:0,pwd:""
  })

  async function loadData(e)
  {
    var web3 = new Web3("http://localhost:7545");
    const accounts = await web3.eth.getAccounts()

    var medicalCenter = new web3.eth.Contract(Medical_Center_ABI,Medical_Center_Address)
    console.log(medicalCenter);

    medicalCenter.methods.addCenter(centerInfo.name,centerInfo.location,centerInfo.pwd,parseInt(centerInfo.vaccineLots)).send({from: accounts[0],gas:3000000}, function(error, result){
      if(error)
      console.log("err "+error);
      else{
        console.log("res");
        console.log(result);
      }
    })
  }

  function handleChange(event) {
    centerInfo[event.target.name] = event.target.value
    setCenterInfo(centerInfo)
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
                id="name"
                label="Medical Center Name"
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
                label="Location"
                name="location"
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