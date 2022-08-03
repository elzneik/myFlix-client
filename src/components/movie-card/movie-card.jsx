// create a movie-card component
import React from "react";

export class MovieCard extends React.Component {
    render() {
        const { movieData } = this.props;
        return <div className="movie-card">{movie.Title}</div>;
    }
}