import React from "react";
import { MovieCard } from "./movie-card/movie-card";

export class MainView extends React.Component{
    render(){
        return(
                <div className="MainView">
                    <div>Inception</div>
                    <div>The Shawshank Redemption</div>
                    <div>Gladiator</div>
                </div>
        );
    }
/*
    render() {
        const { movies } = this.state;
      
        if (movies.length === 0) return <div className="main-view">The list is empty!</div>;
      
        return (
          <div className="main-view">
            {movies.map(movie => <MovieCard key={movie._id} movieData={movie}/>)}
          </div>
        );
      }
*/
}