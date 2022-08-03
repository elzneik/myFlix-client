import React from 'react';
import ReactDOM from 'react-dom';
import { MainView } from "./components/main-view/main-view";


// bundle `./index.scss`
import './index.scss';

// Main component (will eventually use all the others)
class MyFlixApplication extends React.Component {
/*
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
*/
  render() {
    return (
      <MainView />
    );
  }
}
/*
render() {
  const movies = this.state.movies;
  if (movies.length === 0){
    return <div className="main-view">The list is empty!</div>;
  } else {
    return (
      <div className="main-view">
        {movies.map((movie) => {
          return <div>{movie.Title}</div>;
        })}
      </div>
    );
  }
}
*/
/*
// short form for object destructuring
render() {
  const { movies } = this.state;

  if (movies.length === 0) return <div className="main-view">The list is empty!</div>;

  return (
    <div className="main-view">
      {movies.map(movie => <div key={movie._id}>{movie.Title}</div>)}
    </div>
  );
}
*/

// Finds the root of your app
const container = document.getElementsByClassName('app-container')[0];

// Tells React to render your app in the root DOM element
ReactDOM.render(React.createElement(MyFlixApplication), container);