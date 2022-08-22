import React, { useState } from 'react';
import axios from 'axios';
import {Form, Button, Card, CardGroup, Container, Row, Col} from 'react-bootstrap';

export function RegistrationView(props) {
    const [ name, setName ] = useState('');
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ birthday, setBirthday ] = useState('');
  // Declare hook for each input
    const [ nameErr, setNameErr ] = useState('');
    const [ usernameErr, setUsernameErr ] = useState('');
    const [ passwordErr, setPasswordErr ] = useState('');
    const [ emailErr, setEmailErr ] = useState('');
    const [ birthdayErr, setBirthdayErr ] = useState('');
    

    // validate input
      const validate = () => {
      let isReq = true;
      if(!name){
        setNameErr('Name is required');
        isReq = false;
        }
      if(!username){
        setUsernameErr("Username Required");
        isReq = false;
        } else if (username = length < 5) {
        setUsernameErr("Username must be 5 characters long");
        isReq = false;
        }
      if(!password){
        setPasswordErr('Password Required');
        isReq = false;
        }else if(password.length < 6){
        setPassword('Password must be 6 characters long');
        isReq = false;
        }
      if(!email){
        setEmailErr('Email Required');
        isReq = false;
        }else if(email.indexOf('@') === -1){
        setEmail('Email is invalid.');
        isReq = false;
        }
        return isReq;
    }
    

  const handleSubmit = (e) => {
    e.preventDefault();
    const isReq = validate ();
    if (isReq) { 

    //console.log(username, password, email, birthday);
    /* Send a request to the server for authentication */
    /* then call props.onLoggedIn(username) */
    /* props.onLoggedIn(username);*/

    axios.post('https://protected-river-88909.herokuapp.com/users', {
      Name: name,
      Username: username,
      Password: password,
      Email: email,
      Birthday: birthday
    })
    .then(response => {
      const data = response.data;
      console.log(data);
      window.open('/', '_self'); // the second argument '_self' is necessary so that the page will open in the current tab
    })
    .catch(response => {
      console.error(response);
      alert("unable to register");
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
                  <Card.Title>Please Register</Card.Title>
                  <Form>
                  <Form.Group 
                    controlId="formName"
                    className="reg-form-inputs">
                      <Form.Label>Name: </Form.Label>
                      <Form.Control
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)} 
                        required 
                        placeholder="Enter your Name"
                        />
                      {setNameErr && <p>{setNameErr}</p>}
                    </Form.Group>
                    <Form.Group
                    controlId="formUsername"
                    className="reg-form-inputs">
                      <Form.Label>Username: </Form.Label>
                      <Form.Control
                        type="text"
                        value={username}
                        onChange={e => setUsername(e.target.value)} 
                        required 
                        placeholder="Enter a username"
                        />
                      {setUsernameErr && <p>{setUsernameErr}</p>}
                    </Form.Group>
                    <Form.Group
                    controlId="formPassword"
                    className="reg-form-inputs">
                      <Form.Label>Password: </Form.Label>
                      <Form.Control
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)} 
                        required
                        minLength="8"
                        placeholder="Your password must be 8 or more  characters"
                        />
                        {setPasswordErr && <p>{setPasswordErr}</p>}
                        <Form.Text className="text-muted">
                        We'll never share your password with anyone else.
                      </Form.Text>
                    </Form.Group>
                    <Form.Group
                    controlId="Email"
                    className="reg-form-inputs">
                      <Form.Label>E-Mail: </Form.Label>
                      <Form.Control                       
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)} 
                        required 
                        placeholder="Enter your email address"
                        />
                        {setEmailErr && <p>{setEmailErr}</p>}
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                      </Form.Text>
                    </Form.Group>
                    <Form.Group
                    controlId="updateBirthday">
                      <Form.Label>Birthday: </Form.Label>
                      <Form.Control
                        type="date"
                        value={birthday}
                        onChange={e => setBirthday(e.target.value)} 
                        required
                        />
                        {setBirthdayErr && <p>{setBirthdayErr}</p>}
                    </Form.Group>
                    <Button 
                      variant="primary"
                      size="sm"
                      type="submit"
                      onClick={handleSubmit}>
                        Submit
                    </Button>
                    <p></p>
                    <p> Already registered <Link to={"/"}> sign in </Link> here.</p>
                  </Form>
                </Card.Body>
              </Card>
            </CardGroup>
          </Col>
        </Row>
      </Container>
  );
}