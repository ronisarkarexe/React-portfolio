import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import roni from '../../Image/ronisarkar.png'

const Header = () => {
   return (
      <div className="fixed-top">
         <Navbar className="header-bg-color" expand="lg">
            <Navbar.Brand className="header-name" href="#home"><img className="img-fluid-header" src={roni} alt="roni"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="ms-auto">
                  <Nav.Link className="me-4 header-text-color" href="#home">HOME</Nav.Link>
                  <Nav.Link className="me-4 header-text-size header-color" href="#skill">SKILLS</Nav.Link>
                  <Nav.Link className="me-4 header-text-size header-color" href="#project">PROJECT</Nav.Link>
                  <Nav.Link className="me-4 header-text-size header-color" href="#blog">BLOG</Nav.Link>
                  <Nav.Link className="header-text-size header-color"href="#contact">CONTACT</Nav.Link>
               </Nav>
            </Navbar.Collapse>
         </Navbar>
      </div>
   );
};

export default Header;