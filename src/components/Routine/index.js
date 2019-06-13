import React from 'react'
import {Grid} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const RoutineDashboardComponent = () => {
  const classes = useStyles();

  return <div className={classes.root}>
    <Grid container spacing={3}>
      <Grid item xs={6}>

      </Grid>
      <Grid item xs={6}>lalo</Grid>
    </Grid>
  </div>

};

class RoutineDashboard extends React.Component{
  state = {selectedRoutine:''};

  render = () => {
    return <RoutineDashboardComponent/>
  }
}

export default RoutineDashboard
