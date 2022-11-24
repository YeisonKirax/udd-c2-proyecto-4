import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import NavbarBT from 'react-bootstrap/Navbar';

import './navbar.css';

export default function Navbar() {

  return (
    <NavbarBT bg='dark' variant='dark' expand="md">
      <Container>
        <NavbarBT.Brand href='/about-us'>
          <img src='https://react-bootstrap.github.io/logo.svg' width="30" height="30" className="d-inline-block align-top"
            alt="React Bootstrap logo"></img>
          Restaurant
        </NavbarBT.Brand>
        <NavbarBT.Toggle aria-controls="basic-navbar-nav"></NavbarBT.Toggle>
        <NavbarBT.Collapse id='basic-navbar-nav'>
          <Nav>
            <Nav.Link href='/about-us'>Nosotros</Nav.Link>
            <Nav.Link href='/menu'>Menú</Nav.Link>
            <Nav.Link href='/reservations'>Reservaciones</Nav.Link>
          </Nav>
        </NavbarBT.Collapse>
      </Container>
    </NavbarBT>
  );
}