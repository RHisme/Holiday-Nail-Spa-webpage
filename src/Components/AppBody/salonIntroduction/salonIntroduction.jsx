import React, {useState} from "react";
import "./salonIntroduction.css";
import {Rate, Collapse, Image, Flex, Tag, Carousel} from "antd";

import { FiPhoneCall } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";
import { IoPencilSharp } from "react-icons/io5";
import { ClockCircleOutlined } from '@ant-design/icons';
import { SlLike } from "react-icons/sl";
import { IoMdShare } from "react-icons/io";


import imageData from './images.json';




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
                    autoplay
                    arrows
                    infinite
                    autoplaySpeed={1800}
                    className='carousel'
                    
                >
                    {imageData.map((image, index) => (
                        <Image
                            key={index}
                            src={image.src}
                            alt={image.alt}
                            className='image'
                        />
                    ))}
                </Carousel>

                <button
                className='btn4'
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