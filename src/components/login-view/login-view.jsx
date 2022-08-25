import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {Form, Button, Card, Container, Row, Col} from "react-bootstrap";
import { Link } from "react-router-dom";

import "./login-view.scss";

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
    }else if(username.length < 5){
    setUsernameErr('Username must be 5 characters long');
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
    .catch((e) => {
      console.log("no such user")
    });
  }
};

return (
  <Container>
    <Row>
      <Col>
        <CardGroup>
          <Card className="login-view">
            <Card.Body>
              <Card.Title>Log-in</Card.Title>
              <Form>
                <Form.Group controlId="formUsername">
                  <Form.Label>Username:</Form.Label>
                  <Form.Control 
                    type="text"
                    placeholder="Enter username"
                    value={username}
                    onChange={e => setUsername(e.target.value)} 
                    required
                    />
                    {/* code added here to display validation error */}
                    {usernameErr && <p>{usernameErr}</p>}
                </Form.Group>

                <Form.Group controlId="formPassword">
                  <Form.Label>Password:</Form.Label>
                  <Form.Control 
                    type="password"
                    placeholder="Your password must be 5 or more characters"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                    minLength="5"
                    /> 
                    {/* code added here to display validation error */}
                    {passwordErr && <p>{passwordErr}</p>}
                  <Form.Text className="text-muted">
                    We'll never share your password with anyone else.
                  </Form.Text>
                </Form.Group>

                <Button
                  className="button-login"
                  variant="primary"
                  // size="lg"
                  type="submit" 
                  onClick={handleSubmit}
                >
                    Submit
                </Button>
                <br></br>
                <p>
                  Need an account? <Link to={"/register"}>Sign up</Link>
                </p>
              </Form>
            </Card.Body>
          </Card>
        </CardGroup>
      </Col>
    </Row>
  </Container>
  );
}

// prop-types
// Give informational warnings in browser if data does not match required shape
LoginView.propTypes = {
    user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
  }).isRequired,
  onLoggedIn: PropTypes.func.isRequired
};