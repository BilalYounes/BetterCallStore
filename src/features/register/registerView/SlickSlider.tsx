
import register1 from '../../../assets/register1.gif';
import register2 from '../../../assets/register2.gif';

import React from 'react';
import Slider from 'react-slick';
import '../style/slider.scss'
const MySlider: React.FC = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // Enable automatic sliding
        autoplaySpeed: 5000, // Set the time interval between slide changes (in milliseconds)
      };

  return (
    <div className="slider">
<Slider {...settings}>
      <div>
        <img src={register1} alt="First GIF" />
      </div>
      <div>
        <img src={register2} alt="Second GIF" />
      </div>
    </Slider>
    </div>
    
  );
};

export default MySlider;