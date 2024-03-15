import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SearchBar from "./Elements/SearchBar";
import PopularSearches from "./Elements/PopularSearches";
import CommonSpeciality from "./Elements/CommonSpeciality";

function AppointmentSearch() {
  return (
    <Container
      fluid
      style={{
        backgroundColor: "#006eff",
        padding: "50px 5vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Row>
        <Col>
          <SearchBar />
        </Col>
      </Row>
      <Row style={{ width: "90%" }}>
        <Col style={{ width: "80%" }}>
          <PopularSearches />
        </Col>
        <Col style={{ width: "80%" }}>
          <CommonSpeciality />
        </Col>
      </Row>
    </Container>
  );
}

export default AppointmentSearch;
