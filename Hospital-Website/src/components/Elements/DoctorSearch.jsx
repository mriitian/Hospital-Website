import React, { useState } from "react";
import { Link } from "react-router-dom";

const DoctorSearch = () => {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState(""); // Corrected state setter function name

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

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  const handleItemClick = (doctor) => {
    console.log("clicked");
    setValue(doctor); // Update the value when an item is clicked
    setFocused(false); // Close the dropdown
  };

  return (
    <div>
      <form action="" className="search-text">
        <input
          type="text"
          name="doctor-search"
          id="doctor-search"
          className="doctor-search"
          placeholder="Search by Doctor's Name"
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={value} // Removed unnecessary ternary operation
          onChange={(e) => setValue(e.target.value)} // Added onChange handler to update input value
        />
        <button type="submit" className="search-icon">
          <i className="fa-brands fa-searchengin"></i>
        </button>
      </form>
      {focused && (
        <div
          aria-label="menu-options"
          className="rbt-menu dropdown-menu show"
          role="listbox"
          style={{
            position: "absolute",
            display: "block",
            maxHeight: "300px",
            overflow: "auto",
            willChange: "transform",
            width: "400.5px",
          }}
        >
          {doctors.map((doctor, index) => (
            <a
              key={index}
              href={`/${doctor}`} // Use href instead of to
              aria-label={doctor}
              aria-selected="false"
              id={`book_appointment_search-item-${index}`}
              role="option"
              className="dropdown-item"
              onClick={() => handleItemClick(doctor)}
            >
              {doctor}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default DoctorSearch;
