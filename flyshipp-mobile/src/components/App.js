import { Container } from "react-bootstrap";
import FSLogin from "./FSLogin";

function App() {
  return (
    <Container className="d-flex align-items-center justify-content-center"
      style={{minHeight: '100vh'}}>
      <FSLogin />
    </Container>
  );
}

export default App;
