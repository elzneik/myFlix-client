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
    


    
}

/*
    Navigation <Links>need a relative path
<div>
  <a href="#">Home</a>
  <a href="#">About</a>
  <a href="#">Contact</a>
</div>
    </Links>

    <ul> tag for unordered lists (like bullet points) and the <ol> tag for ordered lists

  It’s become more and more of a trend in web design 
  nowadays for sites to consist of a single page with links 
  that take the user up and down within that page.

  Add an ID to a tag via the notation id="name"

  you can then reference it via hyperlinks just as if it were an 
  external link—simply using the pound sign followed by the ID name:
  <h1 id="about">About</h1>
<ul>
  <li>
    <a href="index.html">Home</a>
  </li>
  <li>
    <a href="#about">About</a>
  </li>
  <li>
    <a href="contact.html">Contact</a>
  </li>
</ul>
This technique can also be used for long-form blog posts. 
By adding a link at the bottom of a post that returns users to the top
<a href="about.html#myskills">My Skills</a>
The above link would first take the user to the about page, 
then immediately scroll down to the “My Skills” section of the page.

It’s important to follow Bootstrap’s instructions on how to set up 
your HTML because often the classes 
only work in combination with a certain setup of HTML elements.
<button type="button" class="btn btn-primary">Primary</button>
btn-lg and btn-sm to make buttons either large or small
*/