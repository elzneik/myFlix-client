import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {Form, Button, Card, CardGroup, Container, Row, Col} from "react-bootstrap";

export function LoginView(props) {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  // Declare hook for each input
  const [ usernameErr, setUsernameErr ] = useState('');
  const [ passwordErr, setPasswordErr ] = useState('');

// validate user inputs
const validate = () => {
    let isReq = true;
    if(!username){
    setUsernameErr('Username Required');
    isReq = false;
    }else if(username.length < 2){
    setUsernameErr('Username must be 2 characters long');
    isReq = false;
    }
    if(!password){
    setPasswordErr('Password Required');
    isReq = false;
    }else if(password.length < 6){
    setPassword('Password must be 6 characters long');
    isReq = false;
    }
    return isReq;
}

const handleSubmit = (e) => {
    e.preventDefault();
    const isReq = validate();
    if(isReq) {
      /* Send request to the server for authentication */

    axios.post('https://protected-river-88909.herokuapp.com/login', {
      Username: username,
      Password: password
    })
    .then(response => {
      const data = response.data;
      props.onLoggedIn(data);
    })
    .catch(e => {
      console.log('no such user')
    });
  }
};

return (
  <Container>
    <Row>
      <Col>
        <CardGroup>
          <Card>
            <Card.Body>
              <Card.Title>Please login using your credentials</Card.Title>
              <Form>
                <Form.Group controlId="formUsername">
                  <Form.Label>Username:</Form.Label>
                  <Form.Control 
                    type="text"
                    value={username}
                    onChange={e => setUsername(e.target.value)} 
                    required
                    placeholder="Enter username"
                    />
                    {/* code added here to display validation error */}
                    {setUsernameErr && <p>{setUsernameErr}</p>}
                </Form.Group>
                <Form.Group controlId="formPassword">
                  <Form.Label>Password:</Form.Label>
                  <Form.Control 
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                    minLength="5"
                    placeholder="Your password must be 5 or more characters"
                    /> 
                    {/* code added here to display validation error */}
                    {setPasswordErr && <p>{setPasswordErr}</p>}
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
            </Card.Body>
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