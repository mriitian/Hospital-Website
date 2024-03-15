import React from "react";
import "../../../public/styles/popular.css";

export default function PopularSearches() {
  return (
    <div className="popularsearches">
      <div className="header">
        <h4>Popular Searches</h4>
      </div>
      <div className="item-grid">
        <div className="item-box">
          {" "}
          <div className="item">Dr. Amit Daruwala</div>{" "}
        </div>
        <div className="item-box">
          {" "}
          <div className="item">Dr. Swati Pallav</div>{" "}
        </div>
        <div className="item-box">
          {" "}
          <div className="item">Dr. Pallavi Sharma</div>{" "}
        </div>
        <div className="item-box">
          {" "}
          <div className="item">Dr. Virat Kohli</div>{" "}
        </div>
        <div className="item-box">
          {" "}
          <div className="item">Dr. Smriti Ahuja</div>{" "}
        </div>
      </div>
    </div>
  );
}
