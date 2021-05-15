import React, { Component, createRef } from 'react';
import { Card, Button, Form } from 'react-bootstrap';

class FSLogin extends Component {
  constructor(props) {
    super(props);
    console.log('created');
    this.emailRef = createRef();
    this.passwordRef = createRef();
  }

  render() {
    return (
      <div>
        <Card className="h-100">
          <Card.Body>
            <h2 className="text-center mb-4">Welcome to FlyShipp!</h2>
            <Form className="d-flex flex-column justify-content-center align-items-center">
              <Form.Group className="w-80 mt-4" id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={this.emailRef} required/>
              </Form.Group>
              <Form.Group className="w-80 mt-4" id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={this.passwordRef} required/>
              </Form.Group>
              <Button className="w-50 mt-4" type="submit">Log in</Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

FSLogin.propTypes = {

};

export default FSLogin;
