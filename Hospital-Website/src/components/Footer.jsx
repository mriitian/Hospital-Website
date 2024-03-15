import React from "react";

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 mb-3">
      <div
        className="container text-center"
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <span className="text-muted">© 2024 DayCare. All rights reserved.</span>
        <div
          className="social-media"
          style={{
            display: "flex",
            justifyContent: "space-around",
            gap: "15px",
          }}
        >
          <a href="#" style={{ textDecoration: "none" }}>
            <i className="fab fa-facebook-f" style={{ fontSize: "20px" }}></i>
          </a>
          <a href="#" style={{ textDecoration: "none" }}>
            <i className="fab fa-twitter" style={{ fontSize: "20px" }}></i>
          </a>
          <a href="#" style={{ textDecoration: "none" }}>
            <i className="fab fa-instagram" style={{ fontSize: "20px" }}></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
