import React, { useState } from "react";
import "./Carousel.css"; // Import your CSS file for styling

const Carousel = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      className="carousel"
      style={{
        maxWidth: "80%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <div className="carousel-inner">
        {items.map((item, index) => (
          <div
            key={index}
            className={index === activeIndex ? "slide active" : "slide"}
            style={{
              transform: `translateX(-${activeIndex * 100}%)`,
              transition: "500ms ease-in-out",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {/* Your card component */}
            <div
              className="card"
              style={{
                width: "70%",
                flexDirection: "row",
                justifyContent: "space-evenly",
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{ width: "150px" }}
              />
              <div
                className="text"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <h3>{item.author}</h3>
                <p>{item.quote}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        className=""
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <button className="arrow prev btn btn-primary" onClick={prevSlide}>
          {"<"}
        </button>
        <button className="arrow next btn btn-primary" onClick={nextSlide}>
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Carousel;
