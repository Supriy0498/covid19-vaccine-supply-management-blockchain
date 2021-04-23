import { List } from '@material-ui/core'
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Avatar from '@material-ui/core/Avatar';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import Button from '@material-ui/core/Button';
import { Dialog, DialogContent, DialogTitle, Typography } from "@material-ui/core";
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth:'450px',
        backgroundColor: theme.palette.background.paper,
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:'200px'
    },
  }));

  function listAvatar() {
      return(
        <ListItemAvatar>
        <Avatar>
        <LocalHospitalIcon />
        </Avatar>
        </ListItemAvatar>
      )
  }

export default function RequestVaccineLot() {

    const [openPop,setOpenPop] = useState(false)
    const [openSnack,setOpenSnack] = useState(false)
    const [provider,setProvider] = useState('')

    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
      }

    function vaccineReq(){
        return(
            <div>
              <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="lots"
              label="No.of Vaccine Lots"
              type="text"
              id="lots"
              style={{marginBottom:'20px'}}
              //onChange={handleChange}
            />
              <Button
                  type="button"
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={()=>{setOpenSnack(true);setOpenPop(true);}}
                  >
                  Request
              </Button>
            </div>
        )
    }

    function Popup() {
        return (
            <div>
                <Dialog onClose={()=>setOpenPop(false)} open={openPop} maxWidth="md">
                    <DialogTitle>
                        <div style={{display:'flex'}}>
                            <Typography variant="h6" component="div" style={{flexGrow:1}}>
                                {provider}
                            </Typography>
                            
                        </div>
                    </DialogTitle>
                    
                    <DialogContent dividers>
                        {vaccineReq()}
                    </DialogContent>
                </Dialog>
            </div>
        );
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpenSnack(false);
      };

    function createSnackbar(){
        return(
            <Snackbar open={openSnack} autoHideDuration={6000} 
            onClose={handleClose}
            >
                <Alert 
                onClose={handleClose}
                 severity="success">
                    Vaccine request sent successfully 
                </Alert>
            </Snackbar>
        )
    }

    const classes = useStyles();

    return (
        <>
        <List className={classes.root} subheader={<ListSubheader>Vaccine Providers</ListSubheader>}>
            <ListItem>
            {listAvatar()}
            <ListItemText primary="Mumbai Medical Institute" secondary="10000 Vaccine Lots" />
            <ListItemSecondaryAction style={{marginLeft:'20px'}}>
                <Button
                    type="button"
                    variant="contained"
                    color="primary"
                    onClick={()=>{setProvider("Mumbai Medical Institute");setOpenPop(true);}}
                >
                    Request
                </Button>
                </ListItemSecondaryAction>
            </ListItem>
            <Divider variant="fullwidth" component="li" />
            <ListItem>
            {listAvatar()}
          <ListItemText primary="Pune Medical Institute" secondary="20000 Vaccine Lots" />
          <ListItemSecondaryAction style={{marginLeft:'20px'}}>
                <Button
                    type="button"
                    variant="contained"
                    color="primary"
                    onClick={()=>{setProvider("Pune Medical Institute");setOpenPop(true);}}
                >
                    Request
                </Button>
            </ListItemSecondaryAction>
        </ListItem>
        <Divider variant="fullwidth" component="li" />
            <ListItem>
            {listAvatar()}
          <ListItemText primary="Delhi Medical Institute" secondary="15000 Vaccine Lots" />
          <ListItemSecondaryAction style={{marginLeft:'20px'}}>
                <Button
                    type="button"
                    variant="contained"
                    color="primary"
                    onClick={()=>{setProvider("Delhi Medical Institute");setOpenPop(true);}}
                >
                    Request
                </Button>
            </ListItemSecondaryAction>
        </ListItem>
        </List>
        {Popup()}
        {createSnackbar()}
        </>
    )
}
