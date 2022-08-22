// create a movie-card component
import React from 'react';
import PropTypes from 'prop-types';
import {Button, Card, CardGroup, Container, Row, Col} from 'react-bootstrap';

export class MovieCard extends React.Component {
render() {
    const { movie, onMovieClick } = this.props;

    return (
      <Container fluid className="movieCardContainer">
        <Row>
          <Col>
            <CardGroup>
              <Card>
                <Card.Img 
                  variant="top" 
                  src={movie.ImagePath} />
                <Card.Body>
                  <Card.Title>{movie.Title}</Card.Title>
                  <Card.Text>{movie.Description}</Card.Text>
                  <Link to={`/movies/${movie._id}`}>
                    <Button 
                      variant="link">
                          Open
                    </Button>
                  </Link>
                </Card.Body>
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
