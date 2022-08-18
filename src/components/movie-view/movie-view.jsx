import React from "react";

export class MovieView extends React.Component {

    /*Practise purpose
    keypressCallback(event) {
        console.log(event.key);
      }
      // component method replaces callback function
      componentDidMount() {
        document.addEventListener('keypress', this.keypressCallback); 
      }

      componentWillUnmount() {
        document.removeEventListener('keypress', this.keypressCallback);
      }
      */

    render() {
        const { movie, onBackClick } = this.props;

        return (
            <div className="movie-view">
                <div className="movie-poster">
                    <img src={movie.ImagePath} />
                </div>
                <div className="movie-title">
                    <span className="label">Title: </span>
                    <span className="value">{movie.Title}</span>
                </div>
                <div className="movie-description">
                    <span className="label">Description: </span>
                    <span className="value">{movie.Description}</span>
                </div>
                <div className="movie-genre">
                    <span className="label">Genre: </span>
                    <span className="value">{movie.Genre}</span>
                </div>
                <div className="movie-director">
                    <span className="label">Director: </span>
                    <span className="value">{movie.Director}</span>
                </div>
                <div className="movie-featured">
                    <span className="label">Featured: </span>
                    <span className="value">{movie.Featured}</span>
                </div>
                <div className="movie-actors">
                    <span className="label">Actors: </span>
                    <span className="value">{movie.Actors}</span>
                </div>
                    <button onClick={() => { onBackClick(null); }}>Back</button>
            </div>
        );
    }
}

MovieCard.propTypes = {
    movie: PropTypes.shape({
      Title: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired,
      ImagePath: PropTypes.string.isRequired
    }).isRequired,
    onMovieClick: PropTypes.func.isRequired
  };