import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import SignUp from "./Component/SignUp/signUp.js";
import Gallery from "./Component/Gallery/gallery.js";
import Home from "./Component/Home/home.js";
import Menu from "./Component/Header/header.js";
import "./App.css";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import Logo from "./Assets/images/logo.png";

class App extends React.Component {
  render() {
    return (
      <div>
      
        <div>
        <Navbar bg="light" expand="lg" style={{borderBottom:"2px solid #3c5aa6"}}>
        <Navbar.Brand href="/"><img src={Logo} alt="logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link  href="/"></Nav.Link>
            <Nav.Link  href="/Home">Home</Nav.Link>
            <Nav.Link  href="/SignUp">Sign Up</Nav.Link>
            <Nav.Link  href="/Gallery">Gallery</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
         
        </div>
        <div>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/Home" component={Home}/>
          <Route exact path="/SignUp" component={SignUp}/>
          <Route exact path="/Gallery" component={Gallery}/>
        </Switch>
        </div>
      </div>
    );
  }
}

export default App;
