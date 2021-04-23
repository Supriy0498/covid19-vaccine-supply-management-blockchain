import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Grid } from "@material-ui/core";
import {useHistory} from 'react-router-dom';

const useStyles = makeStyles({
    root: {
      maxWidth: '250px',
      margin:'20px',
      '&:hover':{
          transform:'scale(1.05)',
          cursor:'pointer'
      }
    },
    gridContainer: {
        marginTop:'100px',
        marginLeft:'100px',
        marginRight:'auto',
        verticalAlign:'middle',
    },
    gridComp:{
        padding:'0px'
    }
  });

export default function MedicalCenterHome() {

    const classes = useStyles();
    const history = useHistory();

    return (
        <Grid
      container
      spacing={4}
        className={classes.gridContainer}
       justify="center"
       alignItems="center"
       alignContent="center"
      >
            <Grid className={classes.gridComp} item xs={12} lg={6} sm={6} md={4}>
                <Card className={classes.root}
                    onClick={()=>history.push('/requestVaccine')}
                >
                    <CardContent style={{textAlign:"center"}}>
                        <i class="fas fa-clipboard-list fa-2x" style={{marginBottom:'10px'}}></i>
                        <Typography gutterBottom variant="h5" component="h2">
                            Request Vaccine Lots
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary" component="p">
                            List of providers with available vaccine lots,request for vaccine lots
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid className={classes.gridComp} item xs={12} lg={6} sm={6} md={4}>
                <Card 
                    className={classes.root}
                    onClick={()=>history.push('/vaccineDose')}
                >
                    <CardContent style={{textAlign:"center"}}>
                    <i class="fas fa-syringe fa-2x" style={{marginBottom:'10px'}}></i>
                        <Typography gutterBottom variant="h5" component="h2">
                            Vaccine Dose
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary" component="p">
                            Give Beneficiary Vaccine Dose1 & Dose2, Check Beneficiary registration
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
    </Grid>
    )
}
