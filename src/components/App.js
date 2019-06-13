import React from 'react';
import './App.css';
import Container from "./Container";
import {createTheme, theme} from "../utils/theme";
import { ThemeProvider } from '@material-ui/styles';
import LoggedOutRoutes from "../Router/LoggedOutRoutes";
import {connect} from "react-redux";

const LoggedInUser = ({user}) => {
  return <ThemeProvider theme={createTheme(user.theme)}>
    <Container/>
  </ThemeProvider>;
};

const LoggedOutUser = ({theme}) => <ThemeProvider theme={theme}>
  <LoggedOutRoutes />
</ThemeProvider>;

class App extends React.Component{

  render = () => {
    const user = this.props.user;
    return user ? <LoggedInUser user={user} /> : <LoggedOutUser theme={theme} />
  }
}

const mapStateToProps = (state) => {
  return {user: state.user}
};

export default connect(mapStateToProps, null)(App);
