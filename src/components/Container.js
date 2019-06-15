import React from 'react'
import Menu from "./Menu";
import Routes from "../Router/Routes";
import Footer from "./commons/Footer";

const Container = () => {
  return <React.Fragment>
    <Menu/>
    <Routes/>
    <Footer/>
  </React.Fragment>
};

export default Container;
