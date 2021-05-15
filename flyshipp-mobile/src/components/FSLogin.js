import React, { useRef, useState } from 'react';
import { Card, Button, Form, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';

export default function FSLogin() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    setLoading(true);
    try {
      setError('');
      await login(emailRef.current.value, passwordRef.current.value);
      setLoading(false);
      setError('');
      setSuccess('Login Success');
    } catch (e) {
      console.log(e);
      setError('Failed to log in');
      setLoading(false);
    }
  }

  return (
    <div>
      <Card className="h-100">
        <Card.Body>
          <h2 className="text-center mb-4">Welcome to FlyShipp!</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {success && <Alert variant="primary">{success}</Alert>}
          <Form className="d-flex flex-column justify-content-center align-items-center"
            onSubmit={handleSubmit}>
            <Form.Group className="w-80 mt-4" id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Your flyshipp mail"
                ref={emailRef}
                required />
            </Form.Group>
            <Form.Group className="w-80 mt-4" id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Your password"
                ref={passwordRef}
                required
              />
            </Form.Group>
            <Button disabled={loading} className="w-50 mt-4" type="submit">Log in</Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

