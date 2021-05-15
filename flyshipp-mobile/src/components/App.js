import React from "react";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import FSLogin from "./FSLogin";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FSMainMenu from "./FSMainMenu";
import PrivateRoute from "./PrivateRoute";

class App extends React.Component {
  render() {
    return (
      <Container className="d-flex flex-column align-items-center justify-content-center"
        style={{ minHeight: '100vh' }}>
        <AuthProvider>
          <Router>
            <Switch>
              <PrivateRoute exact path="/" component={FSMainMenu}></PrivateRoute>
              <Route path="/login" component={FSLogin}></Route>
            </Switch>
          </Router>
        </AuthProvider>
      </Container>
    );
  }
}

export default App;
