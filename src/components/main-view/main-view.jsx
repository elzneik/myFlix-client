import React from "react"; // requirement for creating a component, like a blueprint
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from '../movie-view/movie-view';

export class MainView extends React.Component{ //creates MainView Component 
      
  constructor(){
        super();
        this.state = {
          movies: [
            { _id: 1, Title: 'Inception', Description: 'desc1...', ImagePath: '...'},
            { _id: 2, Title: 'The Shawshank Redemption', Description: 'desc2...', ImagePath: '...'},
            { _id: 3, Title: 'Gladiator', Description: 'desc3...', ImagePath: '...'}
          ]
        }
      }

export class MainView extends React.Component{
        constructor() {
          super();
          this.state = {
            movies: [...],
            selectedMovie: null
          };
        }
      }

      
    render() {
      const { movies, selectedMovie } = this.state;
      if (selectedMovie) return <MovieView movie={selectedMovie} />;
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
