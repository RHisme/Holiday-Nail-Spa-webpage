import React, { forwardRef } from "react";
import {Col, Row} from "antd";

import salonImages from './images.json';

const SalonGallery = forwardRef((props, ref) => {
    return (
        <div  className="gallery" ref={ref} id="gallery">
            <h1 className='title'> Gallery </h1>
            <Row gutter={[8, 16]}>
                {salonImages.map((image, index) => (
                    <Col key={index} xs={24} sm={12} md={8} lg={6}>
                        <img 
                        className='images' 
                        src={image} 
                        alt={`Nail Design ${index + 1}`} 
                         />
                    </Col>
                ))}
            </Row>

            <button className='btn' 
            onClick={()=>{window.open("https://www.google.com/maps/uv?pb=!1s0x4cce1196685058c7%3A0x11f437bbc82a1330!3m1!7e115!4s%2Fmaps%2Fplace%2Fholiday%2Bnails%2F%4045.465544%2C-75.542553%2C3a%2C75y%2C148.02h%2C90t%2Fdata%3D*213m4*211e1*213m2*211sJbSQ9xTMbZmrQ-p67t9hzg*212e0*214m2*213m1*211s0x4cce1196685058c7%3A0x11f437bbc82a1330%3Fsa%3DX%26ved%3D2ahUKEwibxIzTzOeKAxX5CnkGHSL4Di0Qpx96BAhHEAA!5sholiday%20nails%20-%20Google%20Search!15sCgIgAQ&imagekey=!1e10!2sAF1QipOw3-0-79eWTq0wttLKbT3F-2NGRa0_fwLfD7H5&cr=le_a7&hl=en&ved=1t%3A206134&ictx=111")}}
            style={{marginBottom:'50px'}}> See more </button>


        </div>
    );
});

export default SalonGallery; 