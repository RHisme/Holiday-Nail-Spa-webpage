import React from "react";
import "./staffs.css";
import staffMembers from "./staffMembers.json";
import Carousel from 'react-multi-carousel';
import {Rate} from "antd";

import 'react-multi-carousel/lib/styles.css'; // Import styles for React Multi Carousel

const responsiveForStaffCarousel = {
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

const Staffs =() => {
    return(
        <div className="salonStaff">
            <h1 className='title'> Staffs </h1>
            
           
            <Carousel 
                responsive={responsiveForStaffCarousel} 
                infinite={false} 
                arrows={true}
                autoPlaySpeed={3000}
                showDots={true}
                autoPlay={false}
                className='staffContainer'
                >
                {staffMembers.map((staff) => (
                    <div key={staff.name} className="staffItem">
                     
                        <img src={staff.image} alt={staff.name} className="staffImage" />
                        <div style={{display: "flex"}}>
                            <Rate disabled defaultValue={staff.rating} />
                            <span> ({staff.rating})</span>
                        </div> 
                        <h3 className='name'>{staff.name}</h3>

                                
                        
                        <p className='position'>{staff.position}</p>
                            
                        <button className='btn3' onClick={() => {window.open("https://bellebooking.com/center/f53e86ffa62566d36515daa4f07ba6d2?hl=en-CA&gei=Kjp-Z-7pE_mUwbkP2snakQs&rwg_token=AJKvS9WZjoNxOdGVdZ9DgbRU8mk774jHRhsuuR1HMmeUITescDxeQkG9UQoYpv74sKKPJmg-o0K6-4QMX7CgHI6i3ZFnAxIJkw%3D%3D")}}>Book Now</button>
                        
                    </div>
                ))}
            </Carousel>

        </div>
    );
}

export default Staffs;