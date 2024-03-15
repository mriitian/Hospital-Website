import React from "react";
import "../../../public/styles/popular.css";

export default function CommonSpeciality() {
  return (
    <div className="popularsearches">
      <div className="header">
        <h4>Common Specialities</h4>
      </div>
      <div className="item-grid">
        <div className="item-box">
          {" "}
          <div className="item">Center for Cardiac Care</div>{" "}
        </div>
        <div className="item-box">
          {" "}
          <div className="item">Center for Cancer Care</div>{" "}
        </div>
        <div className="item-box">
          {" "}
          <div className="item">Center for Neuro Care</div>{" "}
        </div>
        <div className="item-box">
          {" "}
          <div className="item">Center for Orthopedic Care</div>{" "}
        </div>
        <div className="item-box">
          {" "}
          <div className="item">Pulmonary Medicines</div>{" "}
        </div>
      </div>
    </div>
  );
}
