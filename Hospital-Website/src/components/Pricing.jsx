import React from "react";
import "../../public/styles/card.css";

const PricingPage = () => {
  return (
    <div className="container" style={{ padding: "25px" }}>
      <h1 className="text-center my-5">Choose Your Plan</h1>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">FREE</h2>
              <p className="card-text">
                Access to basic appointment booking and educational resources
              </p>
              <p className="card-text">
                <b>$0 / month</b>
              </p>
              <ul className="list-unstyled">
                <li>Online appointment booking</li>
                <li>Limited access to educational resources</li>
                <li>Patient testimonials viewing</li>
                <li>Telemedicine services access</li>
              </ul>
              <button className="btn btn-primary">Continue with Free</button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">BASIC</h2>
              <p className="card-text">
                Enhanced appointment booking and educational resources
              </p>
              <p className="card-text">
                <b>$29 / month</b>
              </p>
              <ul className="list-unstyled">
                <li>All features of FREE plan</li>
                <li>Advanced appointment scheduling options</li>
                <li>Full access to educational resources</li>
                <li>Priority viewing of patient testimonials</li>
                <li>Telemedicine services with extended hours</li>
              </ul>
              <button className="btn btn-primary">Try the Basic plan</button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">PRO</h2>
              <p className="card-text">
                Premium appointment booking and educational resources
              </p>
              <p className="card-text">
                <b>$49 / month</b>
              </p>
              <ul className="list-unstyled">
                <li>All features of BASIC plan</li>
                <li>VIP appointment scheduling with preferred doctors</li>
                <li>Exclusive access to premium educational content</li>
                <li>Featured patient testimonials showcase</li>
                <li>24/7 telemedicine services with dedicated support</li>
              </ul>
              <button className="btn btn-primary">Try the PRO plan</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
