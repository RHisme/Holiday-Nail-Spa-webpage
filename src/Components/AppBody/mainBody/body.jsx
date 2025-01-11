import React, {useEffect, useState, useRef} from 'react';
import './body.css';

import SalonIntroduction from '../salonIntroduction/salonIntroduction';
import LaptopSalonService from '../salonService/laptopScreen/laptopSalonService';
import Staffs from '../staffs/staffs';
import CustomersReview from '../customerReviews/review';
import SalonGallery from '../salonGallery/gallery';
import ServicesDropdown from '../salonService/mobileScreen/serviceDropDown';


const Body = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Check screen size on initial render
  const galleryRef = useRef(null);
  useEffect(() => {
    // Update the state whenever the screen size changes
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Attach event listener to window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="body">
        <SalonIntroduction galleryRef={galleryRef}/>
        {isMobile ? <ServicesDropdown /> : <LaptopSalonService />}
        <Staffs/>
        <CustomersReview/>
        <SalonGallery ref={galleryRef}/>    
    </section>
  )
}

export default Body
