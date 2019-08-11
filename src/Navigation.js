import React, {Component} from 'react';

//import './App.css';

import './Navigation.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import AnchorLink from 'react-anchor-link-smooth-scroll';

class Navigation extends Component{

  render(){

    return(
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" fixed="top">
        <Navbar.Brand href="#home">DFL위클래스</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
          <AnchorLink href='#top'>
              <Nav.Link href="#">예약하기</Nav.Link>
          </AnchorLink>
          <AnchorLink href='#start'>
            <Nav.Link> 시작하기 </Nav.Link>
          </AnchorLink>
          <AnchorLink href='#start'>
            <Nav.Link href="#">선생님소개</Nav.Link>
          </AnchorLink>
          </Nav>
        </Navbar.Collapse>

      </Navbar>

    );
  }
}

export default Navigation;
// App
