import React from "react";
import DoctorCard from "./Elements/DoctorCard";
import "../../public/styles/doctors.css";

export default function Doctors() {
  // Create an array of length 12 using Array.from() and map over it to render DoctorCard components
  const doctorsArray = Array.from({ length: 9 }, (_, index) => (
    <DoctorCard key={index} />
  ));

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "5vh 10px",
        gap: "25px",
      }}
    >
      <h2>Know about your Doctors</h2>
      <div className="doctors" style={{ width: "90%" }}>
        {doctorsArray}
      </div>
    </div>
  );
}
