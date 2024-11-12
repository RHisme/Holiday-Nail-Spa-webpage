import React, {useState, useRef} from "react";
import "./salonIntroduction.css";
import {Rate, Collapse, Image, Flex, Tag} from "antd";

import { FiPhoneCall } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";
import { IoPencilSharp } from "react-icons/io5";
import { ClockCircleOutlined } from '@ant-design/icons';
import { SlLike } from "react-icons/sl";
import { IoMdShare } from "react-icons/io";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'; // Import styles for React Multi Carousel

const responsiveForIntroCarousel = {
    superLarge: {
        breakpoint: { max: 4000, min: 1024 },
        items: 1, // Show 1 item for large screens
    },
    large: {
        breakpoint: { max: 1024, min: 464 },
        items: 1, // Show 1 item for medium screens
    },
    medium: {
        breakpoint: { max: 464, min: 0 },
        items: 1, // Show 1 item for small screens
    },
};

const hoursOfOperation = [
    { day: 'Sunday', hours: '11am - 6pm' },
    { day: 'Monday', hours: '10am - 8pm' },
    { day: 'Tuesday', hours: '10am - 8pm' },
    { day: 'Wednesday', hours: '10am - 8 pm' },
    { day: 'Thursday', hours: '10am - 8pm' },
    { day: 'Friday', hours: '10am - 8pm' },
    { day: 'Saturday', hours: '10am - 8pm' },
];
  
const getCurrentDayInfo = () => {
    const today = new Date().getDay();
    return hoursOfOperation[today]; // Get today's hours
};



const SalonIntroduction = () => {
    var rateValue = 4.5; 
    var totalRate = 322;
    const currentDayInfo = getCurrentDayInfo(); // Get current day's hours
    const isOpenNow = true; // Check if the business is open now
    const currentDayIndex = new Date().getDay(); // Get the current day's index

     // Create a ref for the gallery section
    const galleryRef = useRef(null);

    // Scroll smoothly to the gallery section
    const navigateToGallery = () => {
        if (galleryRef.current) {
        galleryRef.current.scrollIntoView({ behavior: 'smooth' }); // Scroll smoothly to the gallery section
        }
    };

    const salonDescription = "Holiday Nail & Spa is a luxurious and festive destination where you can relax, unwind, and treat yourself to a perfect holiday experience. Whether you're preparing for a special holiday event or simply indulging in a bit of self-care, their skilled technicians create stunning holiday-inspired designs, featuring festive colors, glitter, and unique seasonal accents. At Holiday Nail & Spa, every visit is a celebration of beauty, relaxation, and the holiday spirit.";
    //Toggle service description content
    const [isExpanded, setIsExpanded] = useState(false);

     const toggleDescription = () => {
      setIsExpanded(prevState => !prevState);
     }

    return(
        
        <div className="salonIntroduction" >
            <div style={{display:'flex',flexDirection:'column', alignItems:'flex-end'}}>
                <Carousel
                    responsive={responsiveForIntroCarousel}
                    autoPlay={true}
                    infinite={true}
                    showDots={true}
                    autoPlaySpeed={3000} // Duration of autoplay (in milliseconds)
                    arrows={true} // Show navigation arrows
                    className='carousel'
                >
                    <Image
                        src='https://images.alphacoders.com/132/1322096.png'
                        className='image'
                    />
                    <Image
                        src='https://images4.alphacoders.com/134/1344806.png'
                        className='image'
                    />
                    <Image
                        src='https://wallpapers.com/images/hd/acrylic-nails-7ti8qcrl75w2g248.jpg'
                        className='image'
                    />
                    <Image
                        src='https://www.letseatcake.com/wp-content/uploads/2021/03/spring-nails-12.jpg'
                        className='image'
                    />
                    <Image
                        src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj2Tp7GY7RyU83ZOVd_sXyk1GXCR9tP8pKTDevnXhdKysQi_PIIxqTbN9DRNV3-A2zD77NfZ9UPvW5exVCOURydFvydTCtqmTd808kK31pUp1YiwBK965k5iOQuPLo981a1KQfr9adgdjU/s1600/IMG_5675.JPG'
                        className='image'
                    />
                    <Image
                        src='https://glownailbar.com/wp-content/uploads/2023/09/Untitled-design-27.jpg'
                        className='image'
                    />
                </Carousel>

                <button
                className='btn4'
                onClick={navigateToGallery}
                style={{
                   width:'10rem',
                   marginTop: '10px',
                   marginBottom: '60px'
                }}
                > 
                Go to Gallery </button>

             <div/>
            </div>
             <div className="salonInfo"> 
                <h1 className='title' style={{color: "black"}}> Holiday Nails & Spa</h1>
                <div className="rate">
                    <div>
                    <span style={{fontWeight:600}}> {rateValue}</span>
                    <Rate disabled allowHalf defaultValue={rateValue}/>
                    <span style={{color:'purple'}}> ({totalRate}) </span>
                    </div>
                    <div className="icon" >
                        <SlLike />
                        <IoMdShare />
                    </div>
                </div>
                <div className="contact" style={{cursor:'pointer'}}>
                    <FiPhoneCall/>
                    <span> (613) 793 2803</span>
                    
                </div>
                <div className="location" style={{cursor:'pointer'}}>
                    <FaLocationDot/>
                    <span> 5949 Jeanne D'Arc BlvdS, Orleans, Ottawa, ON K1C2N1</span>
                </div>

                <button className='btn'> 
                    <IoPencilSharp />   
                    Book Now 
                </button>



                <div className="hour">
                    {/*<h1 className='title' style={{color: "black"}}> Hours</h1>*/}

                    <Collapse expandIconPosition="end" bordered={false} >

                        <Collapse.Panel className='operationStatus'
                        
                        header={
                        <div style={{
                            display:'flex',
                            justifyContent:'space-between', 
                            color:'var(--SecondaryColor)', 
                            fontSize:'1rem', 
                            fontWeight:'500',
                            border: "none",
                            }}>
                           {isOpenNow ? (
                            /* If open, show Open now and time */
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <ClockCircleOutlined />
                                <span>Open now:</span>
                            </div>
                            ) : (
                            /* If closed, show Close */
                            <span>Closed</span>
                            )}

                            {/* Right side: Show time only if open */}
                            {isOpenNow && <div>{currentDayInfo.hours}</div>}
                                    
                        
                        </div>
                        
                        }
                        >
                            <div className="timeContainer">
                                {hoursOfOperation.map(({ day, hours }, index) => (
                                    <div key={day} className='timeList'>
                                        <span className='timeBox' style={{ fontWeight: currentDayIndex === index ? 'bold' : 'normal' }}>
                                            <span className='dayspan'> {day}: </span>
                                            <span className='hoursspan'> {hours} </span>
                                        </span>
                                    </div>
                                ))}
                            </div>
                            
                        </Collapse.Panel>
                    </Collapse>
                </div>

                <div className="aboutUs">
                    <h3>  About Us  </h3>
                    <Flex gap= '10px 4px' className='serviceCategories'>
                        <Tag color='magenta' className='tag'> Nails </Tag>
                        <Tag color='orange'className='tag'> Spa </Tag>
                        <Tag color='cyan' className='tag'> Lashes </Tag>
                        <Tag color= 'green' className='tag'> Waxing </Tag>

                    </Flex>
                    <div className='descriptionContent'>
                        <p className={isExpanded ? 'fullDescription' : 'description'}>
                            {isExpanded 
                                ? salonDescription 
                                : (salonDescription.length > 200 
                                    ? salonDescription.slice(0, 190) + '...' 
                                    : salonDescription) 
                            }
                            {salonDescription.length > 200 && !isExpanded && (
                                <button onClick={toggleDescription} className="btn5">
                                    See More
                                </button>
                            )}
                            {salonDescription.length > 200 && isExpanded && (
                                <button onClick={toggleDescription} className="btn5">
                                    See Less
                                </button>
                            )}
                        </p>

                    </div>
                </div>

                      
             </div>


             
        </div>


    );
}

export default SalonIntroduction;