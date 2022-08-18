import React from "react";
import PropTypes from 'prop-types';
import {Button, Container, Row, Col} from "react-bootstrap";

export class MovieView extends React.Component {

    render() {
        const { movie, onBackClick } = this.props;

        return (
            <Container fluid className="movieViewContainer">
                <Row>
                    <Col>
                        <div className="movie-poster">
                            <img src={movie.ImagePath} />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="movie-title">
                            <span className="label">Title: </span>
                            <span className="value">{movie.Title}</span>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="movie-description">
                            <span className="label">Description: </span>
                            <span className="value">{movie.Description}</span>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="movie-genre">
                            <span className="label">Genre: </span>
                            <span className="value">{movie.Genre}</span>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="movie-director">
                            <span className="label">Director: </span>
                            <span className="value">{movie.Director}</span>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="movie-featured">
                            <span className="label">Featured: </span>
                            <span className="value">{movie.Featured}</span>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="movie-actors">
                            <span className="label">Actors: </span>
                            <span className="value">{movie.Actors}</span>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button 
                            onClick={() => { 
                            onBackClick(null); }}>
                                Back
                        </Button>
                    </Col>
                </Row>
            </Container>
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