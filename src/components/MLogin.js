import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Web3 from 'web3'
import {useHistory} from 'react-router-dom';
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function MLogin() {
  const classes = useStyles();

  const [centerCreds,setCenterCreds] = useState({
    name:"",pwd:""
  })
  const history = useHistory();

  async function loadData(e)
  {
    history.push("/medicalCenter")
    // var web3 = new Web3("http://localhost:7545");
    // const accounts = await web3.eth.getAccounts()

    // var medicalCenter = new web3.eth.Contract(Medical_Center_ABI,Medical_Center_Address)
    // console.log(medicalCenter);

    // medicalCenter.methods.checkCenterPwd(centerCreds.name,centerCreds.pwd).send({from: accounts[0],gas:3000000}, function(error, result){
    //   if(error)
    //   console.log("err "+error);
    //   else{
    //     console.log("res");
    //     console.log(result);
    //   }
    // })
  }

  function handleChange(event) {
    centerCreds[event.target.name] = event.target.value
    setCenterCreds(centerCreds)
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h5" variant="h5">
          Medical Center
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Medical Center Name"
            name="name"
            autoComplete="email"
            autoFocus
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="pwd"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleChange}
          />
          
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => loadData()}
          >
            Log In
          </Button>
          
        </form>
      </div>
      
    </Container>
  );
}