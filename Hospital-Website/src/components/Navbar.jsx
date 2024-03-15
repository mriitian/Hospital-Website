import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../../public/assets/image.png";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

function NavBar({ showExplore }) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary p-4">
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            src="../../public/assets/image.png"
            alt=""
            style={{ width: "150px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "120px", gap: "10px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">
              <b>Home</b>
            </Nav.Link>
            <Nav.Link as={Link} to="/appointment">
              <b>Appointments</b>
            </Nav.Link>
            <Nav.Link href="#action2">
              <b>Tools</b>
            </Nav.Link>
            <Nav.Link as={Link} to="/blogs">
              <b>Our Blogs</b>
            </Nav.Link>
            <Nav.Link href="#action2">
              <b>About Us</b>
            </Nav.Link>
            {showExplore ? ( // Use a ternary operator for conditional rendering
              <NavDropdown title="Explore" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">
                  <ScrollLink to="featuredSection" smooth={true} duration={200}>
                    <b>Educational Resources</b>
                  </ScrollLink>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action4">
                  <b>Telemedicine Services</b>
                </NavDropdown.Item>
              </NavDropdown>
            ) : null}
          </Nav>
          <Form className="d-flex" style={{ gap: "10px" }}>
            <Button variant="primary" as={Link} to="/login">
              Login
            </Button>
            <Button variant="outline-primary" as={Link} to="/register">
              Register
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
