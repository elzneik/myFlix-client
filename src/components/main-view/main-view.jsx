import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Router, Route, Redirect, Link } from "react-router-dom";

// import { connect } from 'react-redux';
// import { MovieList } from "../movies-list/movies-list";
// delete movieCard, will be used later in movieList
import { MovieCard } from "../movie-card/movie-card";

import { NavBar } from "../nav-view/nav-view";
import { LoginView } from "../login-view/login-view";
import { MovieView } from "../movie-view/movie-view";
import { DirectorView } from '../director-view/director-view';
import { GenreView } from '../genre-view/genre-view';
import { RegistrationView } from '../registration-view/registration-view';
import { ProfileView } from "../profile-view/profile-view";

import {Row, Col, Container, NavBar} from "react-bootstrap";

import "./main-view.scss";

// REMOVE export KEYWORD for REACT REDUX
export class MainView extends React.Component{ //creates MainView Component 

// REMOVE movies KEYWORD for REACT REDUX
constructor(){
      super();
      this.state = {
        movies: [],
        user: null,
      };
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

getMovies(token) {
  axios.get('https://protected-river-88909.herokuapp.com/movies', {
    headers: { Authorization: `Bearer ${token}`}
  })
  .then(response => {
    // Assign the result to the state
    // ADD for REACT redx
    // this.props.setMovies(response.data);
    // DELETE next two lines and parantheses as necessary
    this.setState({
      movies: response.data
    });
  })
  .catch(function (error) {
    console.log(error);
  });
}

/* When a user successfully logs in, this function updates the `user` property in state to that *particular user*/

onLoggedIn(authData) {
  console.log(authData);
  this.setState({
    user: authData.user.Username
  });

  localStorage.setItem("token", authData.token);
  localStorage.setItem("user", authData.user.Username);
  this.getMovies(authData.token);
}

onLoggedOut() {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  this.setState({
    user: null
  });
  window.open("/", "_self");
}

render() {
  // CHANGE code for REACT REDUX
  // let { movies } = this.props;
  // let { user } this.state;
  const { movies, user } = this.state;
            
      // LOOK up code for return: path / is shown to LOGIN VIEW
      // COPY that code for ROUTE 
      // Why is it changed back ??? especiall the path / ???
    return (
      <Router>
        <NavBar user={user} />
          <Row className="main-view justify-content-md-center">
            
          
            <Route exact path="/" render={() => {
              if (!user)
                  return (
                    <Col>
                      <LoginView
                        movies={movies}
                        onLoggedIn={(user) => this.onLoggedIn(user)}
                      />
                    </Col>
                  );
                if (movies.length === 0) return <div className="main-view" />;
                  return movies.map((m) => (
                    <Col md={3} key={m._id}>
                      <MovieCard movie={m} />
                    </Col>
                ));
              }}
            />

            <Route path="/register" render={() => {
                if (user) return <Redirect to="/" />;
                return ( <Col lg={8} md={8}>
                    <RegistrationView /> 
                  </Col>
                );
              }} 
            />

          <Route path={`/user/${user}`} render={({ history }) => {
            if (!user) return <Redirect to="/" />;
            return (
                <Col>
                  <ProfileView 
                    movie={movies} 
                    user={user} 
                    onBackClick={() => history.goBack()} />
                </Col>
              );
            }} 
          />

          <Route path={`/user-update/${user}`} render={({ match, history }) => {
            if (!user) return <Redirect to="/" />;
              return ( 
                  <Col>
                    <UserUpdate 
                      user={user} 
                      onBackClick={() => history.goBack()} />
                  </Col>
                );
            }}
          />

          <Route path="/movies/:movieId" render={({ match, history }) => {
            if (!user) return (
              <Col>
                <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />
              </Col>
            );
            if (movies.length === 0) return <div className="main-view" />;
              return ( <Col md={8}>
                        <MovieView
                          movie={movies.find(m => m._id === match.params.movieId)}
                          onBackClick={() => history.goBack()}
                          />
                      </Col>
                  );
            }}
          />

          <Route path="/directors/:name" render={({ match, history }) => {
            if (!user) return (
              <Col>
                <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
              </Col>
            );
            if (movies.length === 0) return <div className="main-view" />;
              return ( <Col md={8}>
                        <DirectorView
                          director={movies.find(m => m.Director.Name === match.params.name)
                            .Director
                          } 
                          onBackClick={() => history.goBack()}
                        />
                      </Col>
                );
            }} 
          />

          <Route path="/genre/:name" render={({ match, history }) => {
            if (!user) return ( 
              <Col>
                <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
              </Col>
            );
            if (movies.length === 0) return <div className="main-view" />;
              return ( <Col md={8}>
                        <GenreView
                          genre={movies.find(m => m.Genre.Name === match.params.name)
                            .Genre
                          }
                          onBackClick={() => history.goBack()}
                        />
                      </Col>
              );
            }}
          />
        </Row>
      </Router>
    );
  }
}

// ADD the FOLLOWING CODE for react REDUX

// let mapStateToProps = state => {
//  return { movies: state.movies }
// }

// export default connect (mapStateToProps, {setMovies}) (MainVies);