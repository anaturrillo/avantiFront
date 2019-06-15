import React from 'react'
import {Grid} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ExerciseList from "./ExerciseList";
import connect from "react-redux/es/connect/connect";

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

class ExerciseDashboard extends React.Component{
  state = {selectedRoutine:''};

  render = () => {
    return <ExerciseList exercises={this.props.exercises} />
  }
}

const mapStateToProps = (state) => {
  return {
    exercises: state.exercises
  }
};

export default connect(mapStateToProps)(ExerciseDashboard)
