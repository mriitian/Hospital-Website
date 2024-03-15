import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function Login() {
  return (
    <div
      className=""
      style={{
        display: "flex",
        alignItems: "center",
        marginTop: "15vh",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <div className="heading">
        <h1>Register</h1>
      </div>
      <div
        className=""
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "25px",
          border: "1px solid black",
          borderRadius: "20px",
          width: "max-content",
        }}
      >
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Set Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Row>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Login;
