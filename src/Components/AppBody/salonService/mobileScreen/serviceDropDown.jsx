import React, {useState} from 'react';
import { Collapse, Space } from 'antd';
import serviceCategories from "../serviceCategories.json"; 
import "./serviceDropDown.css";


const ServicesDropdown = () => {

    //Toggle service description content
    const [isExpanded, setIsExpanded] = useState(false);

     const toggleDescription = () => {
      setIsExpanded(prevState => !prevState); // Đảo ngược trạng thái
  };
    return (
        <div className="servicesDropdown">
            <h1 className="title">Services</h1>
            <Space direction="vertical" style={{ width: "100%" }}>
                {serviceCategories.map((category, index) => (
                    <Collapse className='categories' accordion >
                    
                        <Collapse.Panel className='categoryTitle' header={category.title} key={index}>
                            <div className="servicesList">
                                {category.services.map((service, i) => (
                                    <div key={i} className="serviceItem">
                                        <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between'
                                    }}>
                                        <h3 className='serviceTitle'>
                                            {service.name} <span style={{color: "Gray"}}> - </span> {service.duration}
                                        </h3>
                                        
                                    </div>

                                    <div className='descriptionContent'>
                                        <p className={isExpanded ? 'fullDescription' : 'description'}>
                                            {isExpanded 
                                                ? service.description 
                                                : (service.description.length > 200 
                                                    ? service.description.slice(0, 190) + '...' 
                                                    : service.description) // Không thêm dấu "..." nếu ngắn hơn 100 ký tự
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
                                        display:"flex",
                                        alignItems: "center", 
                                        justifyContent: "space-between",
                                        marginTop: "10px"
                                    }}>
                                        {/* Price */}
                                        <h3 className='price'>
                                            {/* Nếu dịch vụ có giảm giá */}
                                            {service.isDiscounted ? (
                                                <div className='discounted'>
                                                    <span className='new'>{service.discountPrice}</span>
                                                    <span className='orignal'>
                                                        {service.price}
                                                    </span>
                                                </div>
                                            ) : (
                                                <div className='normal'>
                                                    <span className='orignal'>{service.price}</span>
                                                    <span className='type'>
                                                        {service.isFixedPrice ? '' : '+'}
                                                    </span>
                                                </div>
                                            )}
                                        </h3>

                                        <button 
                                        className='btn3'
                                        onClick={() => {window.open("https://bellebooking.com/center/f53e86ffa62566d36515daa4f07ba6d2?hl=en-CA&gei=UD2DZ67TOfD-ptQPzY2kyAo&rwg_token=AJKvS9VUqDYwA-mOhuwnRN5YTCV_svDLS0MckRALQ0oeXKyBp8lEfNzwksfYQslEIClGKR9Wujv1TSaXvbSh90hVgExHgO2zWA%3D%3D")}}
                                        > Book Now </button>
                                    </div>
                                    </div>
                                ))}
                            </div>
                        </Collapse.Panel>
                        
                    
                </Collapse>
                ))}
            </Space>
        </div>
    );
};

export default ServicesDropdown;
