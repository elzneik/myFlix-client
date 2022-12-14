import React from 'react';
import PropTypes from 'prop-types';
import {Button, Card, CardGroup, Container, Row, Col} from 'react-bootstrap';
import { Link } from "react-router-dom";

import "./movie-card.scss";

export class MovieCard extends React.Component {
render() {
    const { movie } = this.props;

    return (
      <Container fluid className="movie-card">
        <Row>
          <Col>
            <CardGroup>
              <Card>
                <Card.Img 
                  variant="top" 
                  src={movie.ImagePath} />
                <Card.Body>
                  <Card.Title>{movie.Title}</Card.Title>
                  <Card.Text className="description">{movie.Description}</Card.Text>
                </Card.Body>
                <Card.Footer> 
                  <Link to={`/movies/${movie._id}`}>
                    <Button className="open" variant="button">
                      Open
                    </Button>
                  </Link>
                </Card.Footer>
              </Card>
            </CardGroup>        
          </Col>
        </Row>
      </Container>
    );
  }
}

// set up for propType to validate data
MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired,
  }).isRequired,
  onMovieClick: PropTypes.func,
};
/*
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
*/
