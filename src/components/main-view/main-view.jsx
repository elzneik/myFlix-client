import React from "react"; // requirement for creating a component, like a blueprint
import axios from 'axios'; // fetch movie list from myFlix database
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

  //when movie selected, function is invoked, and state is updated
  setSelectedMovie(movie) {
    this.setState({
      selectedMovie: movie
    });
  }

  /*
  setSelectedMovie(newSelectedMovie) {
    this.setState({
      selectedMovie: newSelectedMovie
    });
  }
*/

  //when user logs-in, function is invoked, state of user is updated
  onLoggedIn(user) {
    this.setState({
      user
    });
  }

  render() {
    const { movies, selectedMovie, user } = this.state;
    if (!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)} />;
    if (movies.length === 0) return <div className="main-view" />; //The list is empty!</div>; 
    
    return (
      <div className="main-view">
        {selectedMovie
          ? <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }}/>
          : movies.map(movie => (
            <MovieCard key={movie._id} movie={movie} onMovieClick={(newSelectedMovie) => { this.setSelectedMovie(newSelectedMovie) }}/>
          ))
        }
      </div>
    );
  }
}
