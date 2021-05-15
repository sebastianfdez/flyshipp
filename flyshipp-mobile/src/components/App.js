import React from "react";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import FSLogin from "./FSLogin";

class App extends React.Component {
  render() {
    return (
      <AuthProvider>
        <Container className="d-flex align-items-center justify-content-center"
          style={{ minHeight: '100vh' }}>
          <FSLogin />
        </Container>
      </AuthProvider>
    );
  }
}

export default App;
