import React from "react";
import Carousel from "./Elements/Carousel";

export default function Experiences() {
  const items = [
    {
      id: 1,
      quote:
        "I had a wonderful experience with the staff and doctors. They were caring and attentive throughout my treatment.",
      author: "John Doe",
      image: "/assets/patients/patient1.jpg",
    },
    {
      id: 2,
      quote:
        "The care I received exceeded my expectations. I highly recommend this healthcare facility to anyone in need.",
      author: "Jane Smith",
      image: "/assets/patients/patient2.jpg",
    },
    {
      id: 3,
      quote:
        "From the moment I walked in, I felt welcomed and supported. Thank you for making my visit a positive one.",
      author: "Alice Johnson",
      image: "/assets/patients/patient1.jpg",
    },
  ];
  return (
    <div
      className="Carousel"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        padding: "25px",
      }}
    >
      <h3 style={{ textAlign: "center" }}>Patients Experiences</h3>
      <Carousel items={items} />
    </div>
  );
}
