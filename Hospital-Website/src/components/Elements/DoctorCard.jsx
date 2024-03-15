import React from "react";
import Card from "react-bootstrap/Card";

export default function DoctorCard() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card
        style={{
          width: "18rem",
          display: "flex",
          flexDirection: "column",
          boxShadow: "0px 0px 5px 0px rgba(0, 0, 0, 0.2)",
          cursor: "pointer",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",

            cursor: "pointer",
          }}
        >
          <div
            className="card-icon"
            style={{ marginTop: "10px", padding: "15px" }}
          >
            <i
              className="fa-solid fa-user-doctor"
              style={{ fontSize: "40px" }}
            ></i>
          </div>
          <Card.Body>
            <Card.Title>Dr. Amit Shukla</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              <b>Head of Department and Consultant - ENT Surgeon</b>
            </Card.Subtitle>
            <Card.Text style={{ fontSize: "smaller" }}>
              MS, DLO, FRCS (ENT), Royal College of Surgeons & Physicians
              Glasgow (UK)
            </Card.Text>
          </Card.Body>
        </div>
        <Card.Link href="#" className="btn btn-primary">
          Book an Appointment
        </Card.Link>
      </Card>
    </div>
  );
}
