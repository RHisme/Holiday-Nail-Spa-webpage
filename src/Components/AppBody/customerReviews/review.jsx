import React from "react";
import reviews from "./customerReviews.json";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'; // Import styles for React Multi Carousel
import {Rate} from "antd";


const responsiveForReviewCarousel = {
    superLarge: {
        breakpoint: { max: 4000, min: 1024 },
        items: 3,
    },
    large: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    medium: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

const CustomersReview = () => {
    var rateValue = 4.6; 
    var totalRate = 305;
    
    return(
        <div className="customerReview">
                    <h1 className='title'> Reviews </h1>
                    <Rate disabled defaultValue={rateValue} />
                    <div className='rateValue'>
                        <span> {rateValue} </span>
                        <span className='evaluates'> ({totalRate}) </span>
                    </div>
                    <Carousel
                        responsive={responsiveForReviewCarousel}
                        infinite={false}
                        autoPlay={false}
                        autoPlaySpeed={3000}
                        showDots={true}
                        className='reviewsContainer'
                    >
                        {reviews.map((review, index) => (
                            <div key={index} className="reviewItem">
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <img src={review.avatar} alt={review.name} className="avatar" />
                                    <div>
                                        <h4 className="customerName">{review.name}</h4>
                                        <p className="reviewDate">{review.date}</p>
                                    </div>
                                </div>
                                <Rate disabled defaultValue={review.rating} />
                                <p className="reviewspan">{review.review}</p>
                            </div>
                        ))}
                    </Carousel>
                    
            </div>


    );
}
export default CustomersReview;