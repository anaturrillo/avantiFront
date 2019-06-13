import React from 'react'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import makeStyles from "@material-ui/core/styles/makeStyles";
import MaterialIcon from 'material-icons-react';
import {HOME, ROUTINES, EXERCISES} from "../../utils/constants.routes";
import Logout from "../LoginManager/Logout";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
    },
  },
  title: {
    flexGrow: 1,
    color: theme.palette.primary.light
  },
  button: {
    color: theme.palette.primary.contrastText,
    textDecoration: 'none'
  },
  iconButton:{
    marginRight: 0
  },

}));
const Menu = () => {
  const classes = useStyles();

  return <nav className={classes.root}>
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="Menu" className={classes.iconButton}>
          <MaterialIcon icon="sentiment_satisfied_alt" size='large' color="#FFF8E1"/>
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Avanti
        </Typography>
        <Button className={classes.menuButton}><Link to={HOME} className={classes.button}>Inicio</Link></Button>
        <Button className={classes.menuButton}><Link to={ROUTINES} className={classes.button}>Rutinas</Link></Button>
        <Button className={classes.menuButton}><Link to={EXERCISES} className={classes.button}>Ejercicios</Link></Button>
        <Button className={classes.menuButton}><Link to={EXERCISES} className={classes.button}>Mi cuenta</Link></Button>
        <Logout/>
      </Toolbar>
    </AppBar>
  </nav>
};

export default Menu;
