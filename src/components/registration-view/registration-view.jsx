import React, { useState } from 'react';
import {Form, Button, Card, CardGroup, Container, Row, Col} from 'react-bootstrap';

export function RegistrationView(props) {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ birthday, setBirthday ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password, email, birthday);
    /* Send a request to the server for authentication */
    /* then call props.onLoggedIn(username) */
    /* props.onLoggedIn(username);*/
  };

  return (
      <Container>
        <Row>
          <Col>
            <CardGroup>
              <Card>
                <Card.Body> 
                  <Card.Title>Please Register</Card.Title>
                  <Form>
                    <Form.Group>
                      <Form.Label>Username: </Form.Label>
                      <Form.Control
                        type="text"
                        value={username}
                        onChange={e => setUsername(e.target.value)} 
                        required 
                        placeholder="Enter a username"
                        />
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>Password: </Form.Label>
                      <Form.Control
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)} 
                        required
                        minLength="8"
                        placeholder="Your password must be 8 or more  characters"
                        />
                        <Form.Text className="text-muted">
                        We'll never share your password with anyone else.
                      </Form.Text>
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>E-Mail: </Form.Label>
                      <Form.Control
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)} 
                        required 
                        placeholder="Enter your email address"
                        />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                      </Form.Text>
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>Birthday: </Form.Label>
                      <Form.Control
                        type="email"
                        value={birthday}
                        onChange={e => setBirthday(e.target.value)} 
                        required 
                        placeholder="Enter your birthday (XXXXYYZZ)"
                        />
                        <Form.Text className="text-muted">
                        We'll never share your E-Mail with anyone else.
                      </Form.Text>
                    </Form.Group>
                    <Button 
                      variant="primary"
                      size="sm"
                      type="submit"
                      onClick={handleSubmit}>
                        Submit
                    </Button>
                    <Button
                      href="#" // Link to Login View
                      variant="primary"
                      size="sm"
                      type="submit"
                      onClick={handleSubmit}>
                        Login
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