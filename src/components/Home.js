import React, { useState } from 'react';
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
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Home(props) {
  const classes = useStyles();
  const [phno, setPhoneno] = useState("");
  const [OTP, setOTP] = useState("");
  const [value, setValue] = useState("");
  const [btnName, setbtname] = useState("Genrate OTP");
  const [label, setLabel] = useState("Enter phone no.");

    function handleSubmit(e) {
        e.preventDefault();
        if(btnName == "Genrate OTP"){
            setValue("")
            setbtname("Verify OTP"); 
            setLabel("Enter the OTP")
        }else{
          if(OTP == otpnum){
            alert("Succesful "+phno);
            props.change(phno)
        }
        else{
            alert("Not Succesful");
        }    
        }
         
    }

    function handleOnChange(e){
        e.preventDefault();
        if(btnName == "Genrate OTP"){
            setPhoneno(e.target.value)
        }
        else{
            setOTP(e.target.value)
        }
        setValue(e.target.value)
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
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label={label}
                onChange={handleOnChange}
                value={value}
                autoFocus
              />
            </Grid>
            
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            {btnName}
          </Button>
        </form>
      </div>
    </Container>
  );
}