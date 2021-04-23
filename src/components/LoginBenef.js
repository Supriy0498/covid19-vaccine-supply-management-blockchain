import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
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

const otpnum= 1234;


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
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login() {
  const classes = useStyles();
  const [phno, setphno] = useState("");
  const [otpVal, setotpVal] = useState("");
  const [otp, setOtp] = useState(false);
  const [adh, setadh] = useState(true);
  const [signIcon, setsignIcon] = useState(true);
  const [sign, setSeign] = useState(true);
  const [otpsent, setOtpsent] = useState(false);
  const [adhnext, setadhnext] = useState(true);
  const [otpnext, setOtpnext] = useState(false);

  const [benefCreds,setBenefCreds] = useState({
    name:"",aadhaarNo:"",phoneNo:0,age:0
  })
  const history = useHistory();

  async function login(e)
  {
    history.push("/benef")
    // var web3 = new Web3("http://localhost:7545");
    // const accounts = await web3.eth.getAccounts()
    // console.log("---"+accounts);

    // var vaccineBenef = new web3.eth.Contract(Vaccine_Benef_ABI,Vaccine_Benef_Address)
    // console.log(vaccineBenef);

    // vaccineBenef.methods.addBenef(benefInfo.name,benefInfo.aadhaarNo,benefInfo.phoneNo,benefInfo.age).send({from: accounts[0],gas:3000000}, function(error, result){
    //   if(error)
    //   console.log("err "+error);
    //   else{
    //     console.log("res");
    //     console.log(result);
    //   }
    // })
  }

  function handleOTP(e){

    e.preventDefault();
    if(phno != ""){
      setOtp(true);
      setadh(false);
      setsignIcon(false);
      setSeign(false);
      setOtpsent(true);
      setadhnext(false);
      setOtpnext(true);
    }
      
  }

  function handleVerify(e){

    e.preventDefault();
    if(otpVal == otpnum){
        alert("Good " + phno);
        login();
    }else{
        alert("Bad");
    }
      
  }

  function handleChange(e){
    e.preventDefault();
    setphno(e.target.value);
}

function handleOTPChange(e){
    e.preventDefault();
    setotpVal(e.target.value);
}

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
       {signIcon && <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>}
        {sign && <Typography component="h5" variant="h5">
          Sign in
        </Typography>}
        {otpsent && <Typography component="h5" variant="h5">
          OTP has been sent on your registered Phone number
        </Typography>}
        <form className={classes.form} noValidate>
          {adh && <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email your Adhar Number"
            name="email"
            autoComplete="email"
            value={phno}
            onChange={handleChange}
            autoFocus
          />}
          {otp && <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Enter OTP"
            type="number"
            id="password"
            autoComplete="current-password"
            value={otpVal}
            onChange={handleOTPChange}
          />}
          
          {adhnext && <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleOTP}
          >
            Next
          </Button>}
          {otpnext && <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick = {handleVerify}
          >
            Verify OTP
          </Button>}
          
        </form>
      </div>
    </Container>
  );
}