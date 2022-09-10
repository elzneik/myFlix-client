import React from 'react';
import { Navbar, Container, Nav, Button } from "react-bootstrap"; 
import { Link } from "react-router-dom";

import "./nav-view.scss";

export function NavBar() {
  let user = localStorage.getItem("user");
// method to sign user out

const handleLogOut = (e) => {
  e.preventDefault();
  localStorage.clear();
  window.open("/", "_self");
  props.onLoggedOut(user);
};

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
      <Navbar.Brand className="navbar-logo" href="/">MyFlixMovies</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          {isAuth() && ( 
            <Nav.Link as={Link} to={`/user/${user}`}>
              {user}
            </Nav.Link>
          )}
          {isAuth() && ( 
            <button variant="link" onClick={handleLogOut}>
              Logout
            </button> 
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