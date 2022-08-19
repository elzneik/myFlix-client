import React from "react"; // requirement for creating a component, like a blueprint
import axios from 'axios'; // fetch movie list from myFlix database
import {Row, Col, Container, Nav, Navbar, NavDropDown} from 'react-bootstrap/Row'; // use react bootstrap UI
import { RegistrationView } from '../registration-view/registration-view';
import { LoginView } from '../login-view/login-view';
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from '../movie-view/movie-view';


export class MainView extends React.Component{ //creates MainView Component 
      
  constructor(){
        super();
        this.state = {
          movies: [],
          selectedMovie: null,
          user: null
        };
  } 
  /*
  componentDidMount(){ 
    axios.get('https://protected-river-88909.herokuapp.com/movies')
      .then(response => {
        this.setState({
          movies: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
*/
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
  setSelectedMovie(movie) {
    this.setState({
      selectedMovie: movie
    });
  }
  /*
  //when user logs-in, function is invoked, state of user is updated
  onLoggedIn(user) {
    this.setState({
      user
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

  render() {
    const { movies, selectedMovie, user } = this.state;
    if (!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)} />;
    if (movies.length === 0) return <div className="main-view" />; //The list is empty!</div>; 
   
    return (
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
        );
      </div>
    );
  }
}
