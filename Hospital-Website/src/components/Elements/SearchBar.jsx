import React from "react";
import Form from "react-bootstrap/Form";
import "../../../public/styles/search.css";
import DoctorSearch from "./DoctorSearch";

export default function SearchBar() {
  const specialities = [
    "Adult Immunization Clinic",
    "Allergy Clinic",
    "Anaesthesiology",
    "Blood Bank",
    "Cardiology",
    "Dental",
    "Dermatology",
    "ENT",
    "Emergency",
    "Gastroenterology",
  ];
  return (
    <div className="search-place">
      <DoctorSearch />
      <Form.Select
        aria-label="Default select example"
        style={{ borderRadius: "0" }}
        className="select-search"
      >
        <option value="">Speciality</option>
        {specialities.map((speciality, index) => (
          <option key={index} value={speciality}>
            {speciality}
          </option>
        ))}
      </Form.Select>
    </div>
  );
}
