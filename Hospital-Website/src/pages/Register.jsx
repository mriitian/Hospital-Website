import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function Register() {
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
            <Col>
              <Form.Label>First Name</Form.Label>
              <Form.Control type="fname" placeholder="First name" />
            </Col>
            <Col>
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="lname" placeholder="Last name" />
            </Col>
          </Row>
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

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St" />
          </Form.Group>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control />
            </Form.Group>
          </Row>
          <Row className="m-3">
            <Button variant="primary" type="submit">
              Register
            </Button>
          </Row>
        </Form>
      </div>
    </div>
  );
}

export default Register;
