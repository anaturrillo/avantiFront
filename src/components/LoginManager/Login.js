import React from 'react'
import LoginForm from "./LogInForm";
import {connect} from "react-redux";
import {login} from "../../actions/login";
import {HOME} from "../../utils/constants.routes";

class Login extends React.Component{
  state = {credentials:{}};

  onChangeValue = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(state => {
      return {credentials:{...state.credentials, [name]:value}}
    })
  };

  onSubmit = (e) => {
    e.preventDefault();
    const credentials = this.state.credentials;
    if (credentials.email && credentials.password){

      this.props.login(credentials);
      this.props.history.push(HOME);
    }
  };

  render = () => {
    return <LoginForm user={this.state} onChangeValue={this.onChangeValue} onSubmit={this.onSubmit}/>
  }
}

const mapDispatchToProps = (dispatch) => {
  return {login: user => dispatch(login(user))}
};
export default connect(null, mapDispatchToProps)(Login)
