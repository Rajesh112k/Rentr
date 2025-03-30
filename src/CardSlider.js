import React, { useState } from "react";
import { Link } from "react-router-dom";

const CardSlider = ({ jsonData, filters }) => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const cardsPerSlide = 9;

  const totalItems = jsonData.length;
  const totalSlides = Math.ceil(totalItems / cardsPerSlide);

  const handleNext = () => {
    if (currentSlide < totalSlides) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 1) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    setCurrentSlide(pageNumber);
  };

  const getCardRange = () => {
    const start = (currentSlide - 1) * cardsPerSlide;
    const end = Math.min(currentSlide * cardsPerSlide, totalItems);
    return [start, end];
  };

  const [startIndex, endIndex] = getCardRange();

  const filteredData = jsonData
    .filter((item) => {
      return (
        (!filters.isFurnished || JSON.parse(item.amenities || "[]").includes("furnished")) &&
        (!filters.isPetsAllowed || JSON.parse(item.amenities || "[]").includes("petFriendly")) &&
        (!filters.iswasher || JSON.parse(item.amenities || "[]").includes("inUnitLaundry")) &&
        (!filters.isdish || JSON.parse(item.amenities || "[]").includes("dishwasher")) &&
        (!filters.isbalcony || JSON.parse(item.amenities || "[]").includes("balcony")) &&
        (!filters.isparking || JSON.parse(item.amenities || "[]").includes("parking"))
        // Add more conditions for other checkboxes as needed
      );
    })
    .slice(startIndex, endIndex);

  const Card = ({ data }) => (
    <Link to={`/propertydetails/${data.id}`}>
      <div className="card">
        <img src={data.image} alt={data.description} />
        <h3>{data.description}</h3>
        <p>Address: {data.Address}</p>
      </div>
    </Link>
  );

  return (
    <div>
      <div className="carousel">
        <div className="carousel-container">
          {filteredData.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>

        <div className="pagination">
          <button onClick={handlePrev} className="btn">
            {"<"}
          </button>
          {Array.from({ length: totalSlides }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageClick(index + 1)}
              className={`page-number ${currentSlide === index + 1 ? "active" : ""}`}
            >
              {index + 1}
            </button>
          ))}
          <button onClick={handleNext} className="btn">
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardSlider;
