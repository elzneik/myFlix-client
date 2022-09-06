import React from "react";
import {Button, Container, Row, Col} from "react-bootstrap";

import { Link } from "react-router-dom";

import "./movie-view.scss";

export class MovieView extends React.Component {
    render() {
        const { movie, onBackClick } = this.props;

        return (
<Card className="movie-view">
        <Card.Header>
          <Card.Img variant="top" src={movie.ImagePath} />
        </Card.Header>
        <Card.Body className="movie-view-title">
          <h1>{movie.Title}</h1>
        </Card.Body>
        <Card.Body>
          <h4>Genre</h4>
          <Link to={`/genres/${movie.Genre.Name}`}>
            <h4 className="genre-link link">{movie.Genre.Name}</h4>
          </Link>
        </Card.Body>
        <Card.Body>
          <h4>Director</h4>
          <Link to={`/directors/${movie.Director.Name}`}>
            <h4 className="director-link link">{movie.Director.Name}</h4>
          </Link>
        </Card.Body>
        <Card.Body>
          <h4>Description:</h4>
          {movie.Description}
        </Card.Body>

        <Card.Footer>
          <Button
            className="movie-view-button"
            onClick={() => {
              onBackClick();
            }}
          >
            Back
          </Button>
        </Card.Footer>
      </Card>
    );
  }
}



/*
return (
            <Container fluid className="movie-View">
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
                            <Link to={`/genres/${movie.Genre.Name}`}>
                                 <Button variant="link">Genre</Button>
                            </Link>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="movie-director">
                            <span className="label">Director: </span>
                            <span className="value">{movie.Director}</span>
                            <Link to={`/directors/${movie.Director.Name}`}>
                                <Button variant="link">Director</Button>
                            </Link>
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
                            onBackClick() }}>
                                Back
                        </Button>
                    </Col>
                </Row>
            </Container>
        );
    }
}
*/
/*
MovieView.PropTypes = {
    movie: PropTypes.shape({
      Title: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired,
      ImagePath: PropTypes.string.isRequired
    }).isRequired,
    onBackClick: PropTypes.func.isRequired
  };
  */