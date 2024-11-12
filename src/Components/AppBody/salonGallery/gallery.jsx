import React, {useRef} from "react";
import {Col, Row} from "antd";

import salonImages from './images.json';

const SalonGallery = () => {
    const galleryRef = useRef(null);
    return (
        <div className="gallery" ref={galleryRef}>
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

            <button className='btn' style={{marginBottom:'50px'}}> See more </button>


        </div>
    );
}

export default SalonGallery; 