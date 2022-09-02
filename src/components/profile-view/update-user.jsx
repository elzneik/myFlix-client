import React from "react";
import {Form, Button, Card, CardGroup, Col, Row } from "react-bootstrap";

export function UpdateUser ({ handleSubmit, handleUpdate }) {
  return (
    <Container>
      <Row>
        <Col>
          <CardGroup>
            <Card>
              <Card.Body> 
                <Card.Title><h4>User info</h4></Card.Title>
                  <Form>
                      <Form.Group>
                        <Form.Label>Username: </Form.Label>
                        <Form.Control
                          type="text"
                          name="Username"
                          placeholder="Enter a username"
                          onChange={(e) => this.setUsername(e.target.value)}
                          required
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Password: </Form.Label>
                        <Form.Control
                          type="password"
                          name="Password"
                          placeholder="New Password"
                          onChange={(e) => this.setPassword(e.target.value)}
                          required
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Email: </Form.Label>
                        <Form.Control
                          type="email"
                          name="Email"
                          placeholder="New Email"
                          onChange={(e) => this.setEmail(e.target.value)}
                          required
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Birthday</Form.Label>
                        <Form.Control
                          type="date"
                          name="Birthday"
                          onChange={(e) => this.setBirthday(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group>
                        <Button
                          variant="warning"
                          type="submit"
                          onClick={() => this.editUser()}
                        >
                          Update User
                        </Button>
                        <Button
                          className="delete-button"
                          variant="danger"
                          onClick={() => this.onDeleteUser()}
                        >
                          Delete User
                        </Button>
                      </Form.Group>
                    </Form>
                  </Card.Body>
                </Card>
            </CardGroup>  
          </Col>
        </Row>
      </Container>
 )
}

/*
  <Card className="update-inputs">
  <Card.Header>Update Profile</Card.Header>
  <Card.Body>
    <Card.Text>
      <Form
        className="update-form"
        onSubmit={(e) =>
          this.editUser(
            e,
            this.Username,
            this.Password,
            this.Email,
            this.Birthday
          )
        }
      >
*/

      


/*
<form className="proile-form" onSubmit={(e) => handleSubmit(e)}>
            <h4>User info</h4>
            <label>Username:</label>
            <input
                type="text"
                name="Username"
                defaultValue={user.Username}
                onChange={e => handleUpdate (e)} />
            <label>Password:</label>
            <input
                type="password"
                name="password"
                defaultValue={user.password}
                onChange={e => handleUpdate (e)} />
            <label>Email address</label>
            <input
                type="email"
                name="email"
                defaultValue={user.Email}
                onChange={e => handleUpdate (e.target.value)} /> 
            <button variant="primary" type="submit">
                Update
            </button>
        </form>
*/
