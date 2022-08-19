import React from "react"; // requirement for creating a component, like a blueprint
import axios from 'axios'; // fetch movie list from myFlix database
import {Row, Col, Container, Nav, Navbar, NavDropDown} from 'react-bootstrap/Row';

import { BrowserRouter as Router, Route } from "react-router-dom";

import { LoginView } from '../login-view/login-view';
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from '../movie-view/movie-view';
import { RegistrationView } from '../registration-view/registration-view';


export class MainView extends React.Component{ //creates MainView Component 
      
  constructor(){
        super();
        this.state = {
          movies: [],
          // selectedMovie: null,
          user: null
        };
  } 

  getMovies(token) {
    axios.get('https://protected-river-88909.herokuapp.com/movies', {
      headers: { Authorization: `Bearer ${token}`}
    })
    .then(response => {
      // Assign the result to the state
      this.setState({
        movies: response.data
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  componentDidMount() {
    let accessToken = localStorage.getItem('token');
    if (accessToken !== null) {
      this.setState({
        user: localStorage.getItem('user')
      });
      this.getMovies(accessToken);
    }
  }

  //when movie selected, function is invoked, and state is updated
  /* setSelectedMovie(movie) {
    this.setState({
      selectedMovie: movie
    });
  }
*/

  onLoggedIn(authData) {
    console.log(authData);
    this.setState({
      user: authData.user.Username
    });
  
    localStorage.setItem('token', authData.token);
    localStorage.setItem('user', authData.user.Username);
    this.getMovies(authData.token);
  }

  onLoggedOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.setState({
      user: null
    });
  }

  render() {
    const { movies, user } = this.state; // selectedMovie, 
    if (!user) return 
      <Row>
        <Col>
          <LoginView onLoggedIn={user => this.onLoggedIn(user)} />;
        </Col>
      </Row>
    if (movies.length === 0) return <div className="main-view" />; //The list is empty!</div>; 
   
    return (
      <Router>
        <Row className="main-view justify-content-md-center">
          <Route exact path="/" render={() => {
            return movies.map(m => (
              <Col md={3} key={m._id}>
                <MovieCard movie={m} />
              </Col>
            ))
          }} />
          <Route path="/movies/:movieId" render={({ match }) => {
            return <Col md={8}>
              <MovieView movie={movies.find(m => m._id === match.params.movieId)} />
            </Col>
          }} />

        </Row>
      </Router>
    );
  }
}

/*
      <div className="main-view">
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#home">myFlix Movie App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#profile">Profile</Nav.Link>
                <Nav.Link href="#logout">Logout</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Row className="main-View justify-content-md-center">
          {selectedMovie ? (
              <Col md={8}> 
                <MovieView
                  movie={selectedMovie} 
                  onBackClick={newSelectedMovie => { 
                  this.setSelectedMovie(newSelectedMovie); }}/>
              </Col>
              ) :  
              movies.map(movie => (
                <Col md={3}>
                <MovieCard
                  key={movie._id}
                  movie={movie}
                  onMovieClick={(newSelectedMovie) => { 
                  this.setSelectedMovie(newSelectedMovie); }}/>
                </Col>
              ))
            }
        </Row>
        <button 
          onClick={() => { 
          this.onLoggedOut() }}>
            Logout
          </button>
        );
      </div>
    );
  }
}
*/
