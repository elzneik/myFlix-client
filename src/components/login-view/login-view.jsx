import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {Form, Button, Card, CardGroup, Container, Row, Col} from 'react-bootstrap;

export function LoginView(props) {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    /* Send a request to the server for authentication */
    /* then call props.onLoggedIn(username) */
    props.onLoggedIn(username);
  };

return (
  <Container>
    <Row>
      <Col>
        <CardGroup>
          <Card>
            <CardBody>
              <CardTitle>Please login using your credentials</CardTitle>
              <Form>
                <Form.Group controlId="formUsername">
                  <Form.Label>Username:</Form.Label>
                  <Form.Control 
                    type="text"
                    value={username}
                    onChange={e => setUsername(e.target.value)} 
                    required
                    placeholder="Enter a username"
                    />
                </Form.Group>
                <Form.Group controlId="formPassword">
                  <Form.Label>Password:</Form.Label>
                  <Form.Control 
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                    minLength="8"
                    placeholder="Your password must be 8 or more characters"
                    />
                  <Form.Text className="text-muted">
                    We'll never share your password with anyone else.
                  </Form.Text>
                </Form.Group>
                <Button 
                  variant="primary"
                  size="lg"
                  type="submit" 
                  onClick={handleSubmit}>
                    Submit
                </Button>
                <br></br>
                <Button
                  href="#" // Link to Registraton View
                  variant="primary"
                  size="sm"
                  type="submit" 
                  onClick={handleSubmit}>
                    Register
                </Button>
              </Form>
            </CardBody>
          </Card>
        </CardGroup>
      </Col>
    </Row>
  </Container>
  );
}

LoginView.propTypes = {
  movie: PropTypes.shape({
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired
};