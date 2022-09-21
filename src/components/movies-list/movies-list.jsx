import React from 'react';
import Col from 'react-bootstrap/Col';
import { connect } from 'react-redux';

import VisibilityFilterInput from '../visibility-filter-input/visibility-filter-input';
import { MovieCard } from '../movie-card/movie-card';

// MoviesList only receives this first argument
// This function maps State to Props, coz the store contains the application state
const mapStateToProps = state => {
  const { visibilityFilter } = state;
  return { visibilityFilter };
};

// Second argument is the list of actions to bind, is implicitly null
function MoviesList(props) {
  const { movies, visibilityFilter } = props;
  let filteredMovies = movies;

  if (visibilityFilter !== '') {
    filteredMovies = movies.filter(m => m.Title.toLowerCase().includes(visibilityFilter.toLowerCase()));
  }

  if (!movies) return <div className="main-view"/>;

  return <>
  <Col md={12} style={{ margin: '1em' }}>
    <VisibilityFilterInput visibilityFilter={visibilityFilter} />
  </Col>
  {filteredMovies.map(m => (
    <Col md={3} key={m._id}>
      <MovieCard movie={m} />
    </Col>
  ))}
</>;
}

export default connect(mapStateToProps)(MoviesList);