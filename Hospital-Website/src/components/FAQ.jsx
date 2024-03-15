import Accordion from "react-bootstrap/Accordion";
import "../../public/styles/card.css";

function FAQ() {
  return (
    <div
      className="faq"
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        padding: "5vw",
        margin: "5vh 0",
        gap: "5vh",
      }}
    >
      <h1>Common questions</h1>
      <Accordion defaultActiveKey="0" style={{ width: "100%" }}>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            How can I book an appointment online?
          </Accordion.Header>
          <Accordion.Body>
            You can easily book an appointment online by visiting our website
            and selecting your preferred doctor and suitable time slot.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            What educational resources are available on the website?
          </Accordion.Header>
          <Accordion.Body>
            Our website offers a variety of educational resources including
            articles, videos, and infographics on prenatal and child care
            topics.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            How can I access telemedicine services?
          </Accordion.Header>
          <Accordion.Body>
            You can access our telemedicine services by following the
            instructions provided on our website for remote consultations.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default FAQ;
