// create a movie-card component
import React from 'react';
import PropTypes from 'prop-types';
export class MovieCard extends React.Component {

render() {
    const { movie, onMovieClick } = this.props;

    return (
    <div onClick={() => onMovieClick(movie)} className="movie-card">{movie.Title}</div>
    );
  }
}

// set up for propType to validate data
MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    Genre: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired
    }),
    Director: PropTypes.shape({
     Name: PropTypes.string.isRequired,
     Bio: PropTypes.string.isRequired,
     Birthyear: PropTypes.string.isRequired,
     Deathyear: PropTypes.string.isRequired
    }),
    ImagePath: PropTypes.string.isRequired,
    Featured: PropTypes.string.isRequired,
    Actors: PropTypes.string.isRequired
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired
};
