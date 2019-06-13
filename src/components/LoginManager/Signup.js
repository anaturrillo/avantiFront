import React from 'react'
import SignupForm from "./SignupForm";
import {connect} from "react-redux";
import {signUp} from "../../actions/login";

class Signup extends React.Component{
  state = {};
  onChangeValue = (e) => {
    this.setState({[e.target.name]:e.target.value})
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state)
  };

  render = () => {
    const password_1 = this.state.password;
    const password_2 = this.state.password2;

    const isValid = password_2 && password_1 && password_1 === password_2;
    return <SignupForm onChangeValue={this.onChangeValue} onSubmit={this.onSubmit} isValid={isValid} />
  }
}

const mapDispatchToProps = (dispatch) => {
  return {signUp: (user) => dispatch(signUp(user))}
};

export default connect(null, mapDispatchToProps)(Signup)
