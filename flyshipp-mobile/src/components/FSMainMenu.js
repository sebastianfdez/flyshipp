import React, { useState } from 'react';
import { Card, Button, Alert, Container } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { useHistory } from 'react-router-dom';


function FSMainMenu(props) {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogOut() {
    setError('');
    try {
      await logout();
      history.push('/login');
    } catch {
      setError('Failed to Log out')
    }
  }

  return (
    <Container className="d-flex align-items-center justify-content-center flex-column"
      style={{ minHeight: '100vh' }}>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">
            Welcome to FlyShipp
          </h2>
          {currentUser && <strong>Email: {currentUser.email}</strong>}
          {error && <Alert variant="danger">{error}</Alert>}
        </Card.Body>
      </Card>
      <div className="w-100 d-flex flex-column justify-content-center align-items-center">
        <Button variant="link" onClick={handleLogOut}>Log out</Button>
      </div>
    </Container>
  );
}

export default FSMainMenu;