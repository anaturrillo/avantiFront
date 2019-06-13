import React from 'react'
import Button from "@material-ui/core/Button";
import { HOME} from "../../utils/constants.routes";
import {logout} from "../../actions/login";
import connect from "react-redux/es/connect/connect";
import {withRouter} from "react-router";
import MaterialIcon from 'material-icons-react';
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
  icon: {
    color: theme.palette.primary.contrastText,
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
    }
  }
}));

const LogoutButton = ({onLogout}) => {
  const classes = useStyles();

  return <Button onClick={onLogout} color="inherit" className={classes.icon}>
    Logout <MaterialIcon icon="power_settings_new" className={classes.icon + ' material-icons'}/>
  </Button>;
};

class Logout extends React.Component {
  onLogout = () => {
      this.props.logout();
      this.props.history.push(HOME)
  };

  render = () => <LogoutButton onLogout={this.onLogout} />
}



const mapDispatchToProps = (dispatch) => {
  return {logout: () => dispatch(logout())}
};

export default connect(null, mapDispatchToProps)(withRouter(Logout))
