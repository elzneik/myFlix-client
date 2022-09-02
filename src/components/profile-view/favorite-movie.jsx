import React from "react";
import { Link } from "react-router-dom";
import {Col, Row, Figure, Button, Card} from "react-bootstrap";
import "./profile-view.scss";


export function FavoriteMovies ({ FavoriteMovieList }) {
return (
<Card className="favmov-inputs">
    <Card.Body>
      <Row>
        <Col xs={12}>
        <h4>Favorite Movie</h4>
        </Col>
      </Row>

      <Row>
        {FavoriteMovieList.map((ImagePath, Title, _id) => {
          return (
            <Col xs="12" md="6" lg="3" key={_id} className="fav-movie">
              <Figure>
                <Link to={`/movies/${movie._id}`}>
                  <Figure.Image src={ImagePath} alt={Title} />
                  <Figure.Caption>{Title}</Figure.Caption>
                </Link>
              </Figure>
              <Button
                className="remove"
                variant="secondary"
                onClick={() => removeFav(movie._id)}>
                  Remove from the list
              </Button>
            </Col>
          )
        })
        }
      </Row>
    </Card.Body>
  </Card>
  )
}