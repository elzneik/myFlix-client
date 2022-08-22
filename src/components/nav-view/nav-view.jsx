import React from 'react';
import { Navbar, Container, Nav, Button } from "react-bootstrap"; 

export function navBar() {
// method to sign user out
const onLoggedOut = () => {
  localStorage.clear();
  window.open("/", "_self");
}

// method to return a token from local storage
const isAuth = () => {
  if (typeof window == "undefined") {
    return false;
  }
  if (localStorage.getItem ("token")) {
    return localStorage.getItem ("token");
  } else {
    return false;
  }
};

// NavBar
return (
  <Navbar className='main-nav' bg="light" expand="lg" variant="light" sticky="top">
    <Container>
      <Navbar.Brand className="navbar-logo" href="#home">MyFlixMovies</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          {isAuth() && ( 
            <Nav.Link href={`/user/${user}`}>{User}</Nav.Link>
          )}
          {isAuth() && ( 
            <button variant="link" onClick={() => {this.onLoggedOut()}}>LogOut</button> 
          )}
          {!isAuth() && ( 
            <Nav.Link href="/">Sign-in</Nav.Link>
          )}
          {!isAuth() && ( 
            <Nav.Link href="/register">Sign-up</Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}