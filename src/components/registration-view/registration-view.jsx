import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import {Form, Button, Card, Container, Row, Col} from 'react-bootstrap';
import { Link } from "react-router-dom";

import "./registration-view.scss";

export function RegistrationView(props) {
    const [ name, setName ] = useState("");
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ birthday, setBirthday ] = useState("");
    const [ values, setValues ] = useState({
      nameErr: "",
      usernameErr: "",
      passwordErr: "",
      emailErr: "",
      birthdayErr: "",
    });
  // Declare hook for each input
  /*
    const [ nameErr, setNameErr ] = useState('');
    const [ usernameErr, setUsernameErr ] = useState('');
    const [ passwordErr, setPasswordErr ] = useState('');
    const [ emailErr, setEmailErr ] = useState('');
    const [ birthdayErr, setBirthdayErr ] = useState('');
  */

    // validate input
      const validate = () => {
      let isReq = true;
      if(!name){
        setValues({...values, nameErr: "Name is required"});
        isReq = false;
        }
      if(!username){
        setValues({...values, usernameErr: "Username required"});
        isReq = false;
        } else if (username = length < 5) {
        setValues({...values, usernameErr: "Username must be 5 characters long"});
        isReq = false;
        }
        if (!password) {
          setValues({ ...values, passwordErr: "Password Required" });
          isReq = false;
        } else if (password.length < 6) {
          setValues({...values, passwordErr: "Password must be atleast 6 characters long",
          });
          isReq = false;
        }
        if (!email) {
          setValues({ ...values, emailErr: "Email Required" });
          isReq = false;
        } else if (email.indexOf("@") === -1) {
          setValues({ ...values, emailErr: "Email is invalid" });
          isReq = false;
        }
        return isReq;
    }
    

    // Modify state of MainView to be registered and logged in with new user
  const handleSubmit = (e) => {
    e.preventDefault();
    const isReq = validate ();
    if (isReq) { 
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
        alert("Registration successful, please login!");
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
                        placeholder="Enter your Name"
                        value={name}
                        onChange={e => setName(e.target.value)} 
                        required   
                        />
                      {values.nameErr && <p>{values.nameErr}</p>}
                    </Form.Group>

                    <Form.Group
                    controlId="formUsername"
                    className="reg-form-inputs">
                      <Form.Label>Username: </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter a username"
                        value={username}
                        onChange={e => setUsername(e.target.value)} 
                        required          
                        />
                      
                    </Form.Group>

                    <Form.Group
                    controlId="formPassword"
                    className="reg-form-inputs">
                      <Form.Label>Password: </Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Your password must be 8 or more characters"
                        value={password}
                        onChange={e => setPassword(e.target.value)} 
                        required
                        minLength="8" 
                        />
                        {values.passwordErr && <p>{values.passwordErr}</p>}
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
                        placeholder="Enter your email address"
                        value={email}
                        onChange={e => setEmail(e.target.value)} 
                        required  
                        />
                        {values.emailErr && <p>{values.emailErr}</p>}
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                      </Form.Text>
                    </Form.Group>

                    <Form.Group
                    controlId="updateBirthday">
                      <Form.Label>Birthday: </Form.Label>
                      <Form.Control
                        type="date"
                        placeholder="Enter your birthday"
                        value={birthday}
                        onChange={e => setBirthday(e.target.value)} 
                        required
                        />
                    </Form.Group>

                    <Button 
                      className="Register"
                      variant="primary"
                      type="submit"
                      onClick={handleSubmit}
                    >
                        Submit
                    </Button>
                    <p></p>
                    <p> 
                      Already registered? <Link to={"/"}> Sign in </Link>
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
RegistrationView.propTypes = {
  register: PropTypes.shape({
    Name: PropTypes.string.isRequired,
    Username: PropTypes.string.isRequired,
    Password: PropTypes.string.isRequired,
    Email: PropTypes.string.isRequired,
    Birthday: PropTypes.string.isRequired,
  }),
};