import React, { useState } from "react";

import { Container, Row, Col } from "react-bootstrap";
import "../../public/styles/hero.css";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function AppointmentHero() {
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
  const doctors = [
    "Dr. Megha Dhamne",
    "Dr. Parag Mohan Tamhankar",
    "Dr. Arnab Paul",
    "Dr. (Prof) Vijay Patil",
    "Dr. Aasim Maldar",
    "Dr. Abhay Narvekar",
    "Dr. Abhaya Gupta",
    "Dr. Abhijit Warade",
    "Dr. Abhirup Banerjee",
    "Dr. Abhishek Kini",
    "Dr. Aditya Menon",
    "Dr. Ajit Gajendragadkar",
    "Dr. Alan Almeida",
    "Dr. Alaric Aroojis",
    "Dr. Alok Sardesai",
  ];
  const timeSlots = [
    "9:00 AM - 10:00 AM",
    "10:00 AM - 11:00 AM",
    "11:00 AM - 12:00 PM",
    "12:00 PM - 1:00 PM",
    "1:00 PM - 2:00 PM",
    "2:00 PM - 3:00 PM",
    "3:00 PM - 4:00 PM",
    "4:00 PM - 5:00 PM",
    "5:00 PM - 6:00 PM",
  ];
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");
  const handleFocus = () => {
    setFocused(true);
  };

  const handleTimeSlotChange = (event) => {
    setSelectedTimeSlot(event.target.value);
  };
  const handleBlur = () => {
    setFocused(false);
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="hero-section-appoint">
      <Container fluid style={{ display: "flex", justifyContent: "center" }}>
        <Row style={{ width: "100%" }}>
          <Col
            className="book-appoint"
            style={{ alignItems: "center", gap: "10px" }}
          >
            <h1>Book an Appointment</h1>
            <h3>Choose your doctor and specialities</h3>
            <div
              className="btn btn-primary"
              style={{ width: "max-content" }}
              onClick={handleShow}
            >
              Book an Appointment
            </div>
          </Col>
          <Col className="doctor-icon">
            <i
              className="fa-solid fa-user-doctor"
              style={{ fontSize: "8vw", color: "#74c0fc" }}
            ></i>
          </Col>
        </Row>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Book an Appointment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="name " autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Contact No</Form.Label>
              <Form.Control
                type="tel"
                placeholder="contact number "
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>Select Doctor</Form.Label>

              <Form.Control
                as="select"
                name="doctor-search"
                id="doctor-search"
                className="doctor-search"
                onFocus={handleFocus}
                onBlur={handleBlur}
                style={{
                  width: "auto",
                  padding: "5px",
                  border: "2px solid rgba(0, 0, 0, 0.6)",
                }}
              >
                <option value="" selected>
                  Select a Doctor
                </option>
                {doctors.map((doctor, index) => (
                  <option key={index} value={doctor}>
                    {doctor}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
              <Form.Label>Select a Time Slot</Form.Label>
              <Form.Control
                as="select"
                name="time-slot"
                id="time-slot"
                onFocus={handleFocus}
                onBlur={handleBlur}
                value={selectedTimeSlot}
                onChange={handleTimeSlotChange}
                style={{
                  width: "auto",
                  padding: "5px",
                  border: "2px solid rgba(0, 0, 0, 0.6)",
                }}
              >
                <option value="">Select a Time Slot</option>
                {timeSlots.map((timeSlot, index) => (
                  <option key={index} value={timeSlot}>
                    {timeSlot}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea5"
            >
              <Form.Label>Describe the Problems</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
