import React from "react"; // requirement for creating a component, like a blueprint
import axios from 'axios'; // fetch movie list from myFlix database
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from '../movie-view/movie-view';

export class MainView extends React.Component{ //creates MainView Component 
      
  constructor(){
        super();
        this.state = {
          movies: [],
        }
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

  setSelectedMovie(newSelectedMovie) {
    this.setState({
      selectedMovie: newSelectedMovie
    });
  }

  render() {
    const { movies, selectedMovie } = this.state;
    if (movies.length === 0) return <div className="main-view">The list is empty!</div>; 
    return (
      <div className="main-view">
        {selectedMovie
          ? <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }}/>
          : movies.map(movie => (
            <MovieCard key={movie._id} movie={movie} onMovieClick={(movie) => { this.setSelectedMovie(movie) }}/>
          ))
        }
      </div>
    );
  }
}
