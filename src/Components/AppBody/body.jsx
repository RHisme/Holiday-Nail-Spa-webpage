import React, { useState, useRef } from 'react';
import './body.css';
import { Carousel, Rate, Button, Collapse, Image, Flex, Tag, Col, Row} from "antd";
import { FiPhone, FiPhoneCall } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";
import { IoPencilSharp } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { FaShare } from "react-icons/fa";

import { ClockCircleOutlined } from '@ant-design/icons';

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


const serviceCategories = [
    {
        title: "Nails Services",
        services: [
            { 
                name: "Manicure", 
                price: "$25", 
                discountPrice: "$20", 
                isDiscounted: true, 
                isFixedPrice: true, 
                duration: "45 mins", 
                description: "Classic manicure with nail shaping and polish." 
            },
            { 
                name: "Pedicure", 
                price: "$30", 
                isDiscounted: false, 
                isFixedPrice: false, 
                duration: "60 mins", 
                description: "Relaxing pedicure with foot soak and massage." 
            },
            { 
                name: "Acrylic Nails", 
                price: "$50", 
                discountPrice: "$45", 
                isDiscounted: true, 
                isFixedPrice: true, 
                duration: "90 mins", 
                description: "Durable acrylic nails for a stylish look." 
            },
            { 
                name: "Shellac", 
                price: "$40", 
                isDiscounted: false, 
                isFixedPrice: true, 
                duration: "60 mins", 
                description: "Long-lasting shellac polish for nails." 
            },
            { 
                name: "Nail Art", 
                price: "$20", 
                isDiscounted: false, 
                isFixedPrice: false, 
                duration: "30 mins", 
                description: "Creative designs added to your nails." 
            }
        ]
    },
    {
        title: "Pediant Manicure",
        services: [
            { 
                name: "Classic Pedicure", 
                price: "$35", 
                isDiscounted: false, 
                isFixedPrice: true, 
                duration: "50 mins", 
                description: "Standard pedicure with exfoliation." 
            },
            { 
                name: "Spa Pedicure", 
                price: "$50", 
                discountPrice: "$45", 
                isDiscounted: true, 
                isFixedPrice: true, 
                duration: "70 mins", 
                description: "Includes a foot mask and massage." 
            },
            { 
                name: "Gel Pedicure", 
                price: "$45", 
                isDiscounted: false, 
                isFixedPrice: false, 
                duration: "60 mins", 
                description: "Long-lasting gel polish for feet." 
            }
        ]
    },
    {
        title: "Esthetic Services",
        services: [
            { 
                name: "Facials", 
                price: "$70", 
                discountPrice: "$60", 
                isDiscounted: true, 
                isFixedPrice: true, 
                duration: "60 mins", 
                description: "Deep cleansing facial customized for your skin." 
            },
            { 
                name: "Skin Treatments", 
                price: "$80", 
                isDiscounted: false, 
                isFixedPrice: true, 
                duration: "75 mins", 
                description: "Advanced skin treatments for various concerns." 
            }
        ]
    },
    {
        title: "Eyelashes Extension",
        services: [
            { 
                name: "Classic Extensions", 
                price: "$100", 
                discountPrice: "$90", 
                isDiscounted: true, 
                isFixedPrice: true, 
                duration: "90 mins", 
                description: "Natural look with one extension per lash." 
            },
            { 
                name: "Volume Extensions", 
                price: "$150", 
                isDiscounted: false, 
                isFixedPrice: true, 
                duration: "120 mins", 
                description: "Full look with multiple extensions per lash." 
            },
            { 
                name: "Hybrid Extensions", 
                price: "$130", 
                isDiscounted: false, 
                isFixedPrice: false, 
                duration: "$105 mins", 
                description: "Mix of classic and volume lashes." 
            }
        ]
    },
    {
        title: "Waxing Services",
        services: [
            { 
                name: "Leg Waxing", 
                price: "$40", 
                discountPrice: "$35", 
                isDiscounted: true, 
                isFixedPrice: false, 
                duration: "30 mins", 
                description: "Full leg waxing for smooth skin." 
            },
            { 
                name: "Bikini Waxing", 
                price: "$25", 
                isDiscounted: false, 
                isFixedPrice: true, 
                duration: "20 mins", 
                description: "Bikini line waxing for a clean look." 
            },
            { 
                name: "Facial Waxing", 
                price: "$15", 
                isDiscounted: false, 
                isFixedPrice: true, 
                duration: "15 mins", 
                description: "Eyebrows and upper lip waxing." 
            }
        ]
    },
    {
        title: "Add On",
        services: [
            { 
                name: "Nail Art", 
                price: "$15", 
                isDiscounted: false, 
                isFixedPrice: false, 
                duration: "20 mins", 
                description: "Creative designs to enhance your nails." 
            },
            { 
                name: "Paraffin Treatment", 
                price: "$25", 
                isDiscounted: false, 
                isFixedPrice: true, 
                duration: "30 mins", 
                description: "Moisturizing treatment for hands or feet." 
            },
            { 
                name: "Gel Removal", 
                price: "$15", 
                isDiscounted: false, 
                isFixedPrice: true, 
                duration: "15 mins", 
                description: "Gentle removal of gel polish." 
            }
        ]
    }
];


const staffMembers = [
    {
        name: "Jane Doe",
        introduction: "Expert in nail art and customer service.",
        rating: 4.8,
        image: "https://htmediagroup.vn/wp-content/uploads/2022/04/Anh-CV-2_avatar-min.jpg"
    },
    {
        name: "John Smith",
        introduction: "Specializes in eyelash extensions and facials.",
        rating: 4.6,
        image: "https://htmediagroup.vn/wp-content/uploads/2022/11/Anh-giam-doc-nam-01-min.jpg"
    },
    {
        name: "Emily Johnson",
        introduction: "Professional waxing and skincare expert.",
        rating: 4.9,
        image: "https://channel.mediacdn.vn/prupload/156/2017/12/img20171211150727637.jpg"
    },
    // Add more staff members as needed
];

const reviews = [
    {
        name: "John Doe",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMDGGxnaZ5oCLmiT6Fps0LL15z2R1tPcSivg&s",
        rating: 5,
        review: "Great service! Highly recommend!",
        date: "2024-09-25"
    },
    {
        name: "Anna Smith",
        avatar: "https://m.yodycdn.com/blog/anh-dai-dien-hai-yodyvn3-b3a8cf32-e08a-47fc-a741-71626aadc4de.jpg",
        rating: 4,
        review: "Very satisfied with my experience!",
        date: "2024-09-24"
    },
    {
        name: "Carlos Garcia",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMpyxWRq0NREvwUVGSJ9NkDmIc8C1R-dc57Q&s",
        rating: 5,
        review: "Best salon I've ever visited!",
        date: "2024-09-23"
    },
    {
        name: "Maria Lopez",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT99hEiDGWLpnid1kGLmnOs8RMuyaitDLM2GA&s",
        rating: 4,
        review: "Lovely atmosphere and friendly staff.",
        date: "2024-09-22"
    },
    {
        name: "Liam O'Connor",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-IxweiKWIdzzPmlSvhK5M30yGbBsxPsFbRA&s",
        rating: 5,
        review: "An amazing experience from start to finish!",
        date: "2024-09-21"
    },
    // Thêm các đánh giá khác ở đây
];

const salonImages = [
    'https://phoenixnailsandbeautyottawa.com/uploads/fnail0cylrnah/logo/2022/03/31/AAC4E489-1FA5-4082-8D28-6E77B397C9F1.jpeg',
    'https://emmnailspa.com/wp-content/uploads/2022/08/emm-nails-salon-spa-port-st.-lucie-fl-34987-img-3.png',
    'https://s3-media0.fl.yelpcdn.com/bphoto/j617bwhM2rPKGyfPp51RQA/348s.jpg',
    'https://lirp.cdn-website.com/0a319f32/dms3rep/multi/opt/70+Best+Nail+Designs+-+Trends_+Coolest+Nail+Art+Ideas+in+2024+-+ORGANIC+BEAUTY+LOVER-640w.jpeg',
    'https://i.redd.it/jwpwknabwud81.jpg',
    'https://images.unsplash.com/photo-1604654894610-df63bc536371?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmFpbHN8ZW58MHx8MHx8fDA%3D',
    'https://i.pinimg.com/736x/f2/65/c3/f265c32e80e856c88c0d3a4b2ba82ce3.jpg',
    'https://www.fabmood.com/inspiration/wp-content/uploads/2022/03/tortoiseshell-nails-25.jpg',
    // Add more images as needed
];
const Body = () => {
  var rateValue = 4.5; 
  var totalRate = 322;
  const currentDayInfo = getCurrentDayInfo(); // Get current day's hours
  const isOpenNow = true; // Check if the business is open now
  const currentDayIndex = new Date().getDay(); // Get the current day's index
  const [activeCategory, setActiveCategory] = useState(0);

  const handleCategoryClick = (index) => {
        setActiveCategory(activeCategory === index ? null : index);
  };

  // Create a ref for the gallery section
  const galleryRef = useRef(null);

  // Scroll smoothly to the gallery section
  const navigateToGallery = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollIntoView({ behavior: 'smooth' }); // Scroll smoothly to the gallery section
    }
  };

  return (
    <section className="body">
        <div className="salonIntroduction" >
            <div style={{display:'flex',flexDirection:'column', alignItems:'flex-end'}}>
                <Carousel className='carousel'autoplay arrows>
                <Image
                src='https://images.alphacoders.com/132/1322096.png'
                className = 'image'
                >
                    </Image>

                    <Image
                src='https://images4.alphacoders.com/134/1344806.png'
                className = 'image'
                >
                    </Image>
                    
                    <Image
                src='https://wallpapers.com/images/hd/acrylic-nails-7ti8qcrl75w2g248.jpg'
                className = 'image'
                >
                    </Image>
                    <Image
                src='https://www.letseatcake.com/wp-content/uploads/2021/03/spring-nails-12.jpg'
                className = 'image'
                >
                    </Image>
                    <Image
                src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj2Tp7GY7RyU83ZOVd_sXyk1GXCR9tP8pKTDevnXhdKysQi_PIIxqTbN9DRNV3-A2zD77NfZ9UPvW5exVCOURydFvydTCtqmTd808kK31pUp1YiwBK965k5iOQuPLo981a1KQfr9adgdjU/s1600/IMG_5675.JPG'
                className = 'image'
                >
                    </Image>
                    <Image
                src='https://glownailbar.com/wp-content/uploads/2023/09/Untitled-design-27.jpg'
                className = 'image'
                >
                    </Image>
                    
                </Carousel>

                <button
                className='btn2'
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
                    <text style={{fontWeight:600}}> {rateValue}</text>
                    <Rate disabled allowHalf defaultValue={rateValue}/>
                    <text style={{color:'purple'}}> ({totalRate}) </text>
                </div>
                <div className="contact" style={{cursor:'pointer'}}>
                    <FiPhoneCall/>
                    <text> (613) 793 2803</text>
                    
                </div>
                <div className="location" style={{cursor:'pointer'}}>
                    <FaLocationDot/>
                    <text> 5949 Jeanne D'Arc BlvdS, Orleans, Ottawa, ON K1C2N1</text>
                </div>

                <button className='btn'> 
                    <IoPencilSharp />   
                    Book Now 
                </button>

                <div className="icon">
                    <CiHeart style={{color: "red"}}/>
                    <FaShare style={{color: "black"}}/>
                </div>
                {/*
                <button className='btn2'>
                    <HiUserGroup />
                    Group Booking
                </button>
                */}

                <div className="hour">
                    {/*<h1 className='title' style={{color: "black"}}> Hours</h1>*/}

                    <Collapse expandIconPosition="right">

                        <Collapse.Panel className='operationStatus'
                        header={
                        <div style={{
                            display:'flex',
                            justifyContent:'space-between', 
                            color:'var(--SecondaryColor)', 
                            fontSize:'1rem', 
                            fontWeight:'500',
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
                            {hoursOfOperation.map(({ day, hours }, index) => (
                                <div key={day} className='timeList'>
                                    <text className='timeBox' style={{ fontWeight: currentDayIndex === index ? 'bold' : 'normal' }}>
                                        <text className='dayText'> {day}: </text>
                                        <text className='hoursText'> {hours} </text>
                                    </text>
                                </div>
                            ))}
                        </Collapse.Panel>
                    </Collapse>
                </div>


             </div>

             
        </div>


        <div className="aboutUs">
            <h1 className="title">
                About US
            </h1>
            <Flex gap= '10px 4px' className='serviceCategories'>
                <Tag color='magenta' className='tag'> Nails </Tag>
                <Tag color='orange'className='tag'> Spa </Tag>
                <Tag color='cyan' className='tag'> Lashes </Tag>
                <Tag color= 'green' className='tag'> Waxing </Tag>

            </Flex>
            <text className='content'>
            Welcome to Holiday Nail & Spa, your premier destination for top-notch beauty and relaxation services in the heart of Ottawa, Ontario. Nestled at 1000 Gerrard St E, our dedicated team is here to pamper you with an array of indulgent treatments designed to enhance your natural beauty and provide you with a rejuvenating experience. At Nails For You, we specialize in a wide range of services, including manicures, pedicures, shellac applications, acrylics, bio/UV gel nails, eyelash extensions, soothing massages, and expert waxing services.
            We take pride in offering a tranquil and inviting atmosphere where you can escape the hustle and bustle of daily life and immerse yourself in a world of self-care and beauty enhancement. Come join us and let us help you look and feel your absolute best. Your journey to relaxation and revitalization starts here at Nails For You.
            To make your experience with us even more convenient, we provide online booking through FastBiz Booking. Simply visit our website and schedule your appointment at your convenience.
            </text>
        </div>

        <div className="salonServices">
            <h1 className='title'> Services </h1>
            
            <div className="servicesContainer">
                <div className="categories">
                    {serviceCategories.map((category, index) => (
                        <div key={index} className={`category ${activeCategory === index ? 'active' : ''}`} onClick={() => handleCategoryClick(index)}>
                            <text>{category.title}</text>
                        </div>
                    ))}
                </div>
                <div className="serviceList">
                    {activeCategory !== null && (
                        <div className="servicesGrid">
                            {serviceCategories[activeCategory].services.map((service, i) => (
                                <div key={i} className="serviceItem">
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between'
                                    }}>
                                        <h3 className='name'>{service.name}</h3>
                                        <button className='btn3'> Book Now </button>
                                    </div>

                                    <div className='price'>
                                        {/* Nếu dịch vụ có giảm giá */}
                                        {service.isDiscounted ? (
                                            <div className='discounted'>
                                                <text className='new'>{service.discountPrice}</text>
                                                <text className='orignal'>
                                                    {service.price}
                                                </text>
                                            </div>
                                        ) : (
                                            <div className='normal'>
                                                <text className='orignal'>{service.price}</text>
                                                <text style={{ marginLeft: '5px' }} className='type'>
                                                    {service.isFixedPrice ? 'fixed' : 'from'}
                                                </text>
                                            </div>
                                        )}
                                    </div>

                                    <p className='description'>
                                        {service.description} - {service.duration}
                                    </p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>


            </div>
        </div>


        <div className="salonStaff">
            <h1 className='title'> Staff </h1>;
            
           
            <div className="staffContainer">
                {staffMembers.map((staff, index) => (
                    <div key={index} className="staffItem">

                        <div style={{display:'flex', alignItems:'center', gap:'20px'}}>

                            <img src={staff.image} alt={staff.name} className="staffImage" />
                            <div  style={{display:'flex', flexDirection:'column'}}>
                                <h3 className='name'>{staff.name}</h3>
                                <div style={{display:'flex', alignItems:'center', gap:'5px'}}>
                                    <Rate disabled defaultValue={staff.rating} />
                                    <text> ({staff.rating})</text>
                                </div>
                            </div>
                        </div>   
                        <p className='introduction'>"{staff.introduction}"</p>

            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button className='btn'> Book Now </button>
            </div>
                    </div>
                ))}
            </div>
        </div>

        <div className="customerReview">
            <h1 className='title'> Reviews </h1>
            <Rate disabled defaultValue={rateValue} />

            <div className='rateValue'>
                <text> {rateValue} </text>
                <text className='evaluates'> ({totalRate}) </text>
            </div>

            {reviews.map((review, index) => (
                <div key={index} className="reviewItem">

                    <div style={{display:'flex', alignItems: 'center', gap:'10px'}}>
                        <img src={review.avatar} alt={review.name} className="avatar" />
                        <div> 
                            <h4 className="customerName">{review.name}</h4>
                            <p className="reviewDate">{review.date}</p>
                        </div>
                    </div>

                        <Rate disabled defaultValue={review.rating} />
                        <p className="reviewText">{review.review}</p>
                </div>
            ))}

            <button className='btn' style={{marginBottom:'50px'}}> See more </button>
        </div>

        <div className="gallery" ref={galleryRef}>
            <h1 className='title'> Gallery </h1>
            <Row gutter={[8, 16]}>
                {salonImages.map((image, index) => (
                    <Col key={index} span={6}>
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



    
    </section>
  )
}

export default Body
