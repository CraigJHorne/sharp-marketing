import React from 'react';
import smlogo from './smlogo.svg';
import './index.css';
import * as ReactBootStrap from 'react-bootstrap';

const NavWebsite = () => {
	return (
		<ReactBootStrap.Navbar collapseOnSelect className="fixed-top navbar-light" style={{backgroundImage: "linear-gradient(to right, #163651, #163651, #35a8e0, white, white)"}} expand="md">
		  <ReactBootStrap.Navbar.Brand href="#home"><img src={smlogo} className="SM-logo" height="50px" alt="logo"/></ReactBootStrap.Navbar.Brand>
		  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
		  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
		    <ReactBootStrap.Nav className="ml-auto" >
		      <ReactBootStrap.Nav.Link href="#about" >ABOUT</ReactBootStrap.Nav.Link>
		      <ReactBootStrap.Nav.Link href="#services">SERVICES</ReactBootStrap.Nav.Link>
		      <ReactBootStrap.Nav.Link href="#reviews">REVIEWS</ReactBootStrap.Nav.Link>
		      <ReactBootStrap.Nav.Link href="#contact">CONTACT</ReactBootStrap.Nav.Link>
		    </ReactBootStrap.Nav>
		  </ReactBootStrap.Navbar.Collapse>
		</ReactBootStrap.Navbar>
	);
}

export default NavWebsite;