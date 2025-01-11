import React, { useState } from "react";
import "./laptopScreen.css";
import serviceCategories from "../serviceCategories.json"; 
import BellaBookingNav from "../../BookingNav";

const LaptopSalonService = () => {
  const [activeCategory, setActiveCategory] = useState(0); // Default to the first category
  const [isExpanded, setIsExpanded] = useState(false); // Toggle for description expansion

  // Toggle service description content
  const toggleDescription = () => {
    setIsExpanded(prevState => !prevState); // Toggle description state
  };

  // Handle category click
  const handleCategoryClick = (index) => {
    setActiveCategory(index); // Update the active category when clicked
  };

  return (
    <div className="laptopSalonServices">
      <h1 className="title">Services</h1>
      <div className="servicesContainer">
        <div className="categories">
          {serviceCategories.map((category, index) => (
            <div
              key={index}
              className={`category ${activeCategory === index ? 'active' : ''}`} // Apply 'active' class to the selected category
              onClick={() => handleCategoryClick(index)} // Trigger category change
            >
              <span><h3>{category.title}</h3></span>
            </div>
          ))}
        </div>
        <div className="serviceList">
          {activeCategory !== null && (
            <div className="servicesGrid">
              {serviceCategories[activeCategory].services.map((service, i) => (
                <div key={i} className="serviceItem">
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <h3 className="serviceTitle">
                      {service.name} <span style={{ color: "Gray" }}> - </span> {service.duration}
                    </h3>
                  </div>

                  <div className="descriptionContent">
                    <p className={isExpanded ? 'fullDescription' : 'description'}>
                      {isExpanded
                        ? service.description
                        : (service.description.length > 200
                          ? service.description.slice(0, 190) + '...'
                          : service.description)
                      }
                      {service.description.length > 200 && !isExpanded && (
                        <button onClick={toggleDescription} className="btn5">
                          See More
                        </button>
                      )}
                      {service.description.length > 200 && isExpanded && (
                        <button onClick={toggleDescription} className="btn5">
                          See Less
                        </button>
                      )}
                    </p>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginTop: "10px"
                    }}
                  >
                    <h3 className="price">
                      {service.isDiscounted ? (
                        <div className="discounted">
                          <span className="new">{service.discountPrice}</span>
                          <span className="orignal">{service.price}</span>
                        </div>
                      ) : (
                        <div className="normal">
                          <span className="orignal">{service.price}</span>
                          <span className="type">
                            {service.isFixedPrice ? '' : '+'}
                          </span>
                        </div>
                      )}
                    </h3>

                    <button className="btn3" onClick={() => {window.open("https://bellebooking.com/center/f53e86ffa62566d36515daa4f07ba6d2?hl=en-CA&gei=Kjp-Z-7pE_mUwbkP2snakQs&rwg_token=AJKvS9WZjoNxOdGVdZ9DgbRU8mk774jHRhsuuR1HMmeUITescDxeQkG9UQoYpv74sKKPJmg-o0K6-4QMX7CgHI6i3ZFnAxIJkw%3D%3D")}}>Book Now</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LaptopSalonService;
