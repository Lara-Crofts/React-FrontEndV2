// Herotwo.jsx
import React from 'react';
import Slider from './Slider';
import Img1 from '../images2/cards001.jpg'; 
import Img2 from '../images2/card002.jpg'; 
import Img3 from '../images2/card003.jpg'; 
import Img4 from '../images2/card004.jpg'; 
import Img5 from '../images2/cardimg05.jpg'; 


import "../styles/Herotwo.css";

function Herotwo() {
    return (
        <>
          <Slider>
            <ul className="image-list">
              <img className="image-item" src={Img1} alt="img-1" />
              <img className="image-item" src={Img3} alt="img-2" />
              <img className="image-item" src={Img2} alt="img-3" />
              <img className="image-item" src={Img4} alt="img-4" />
              <img className="image-item" src={Img5} alt="img-5" />
              <img className="image-item" src={Img5} alt="img-6" />
            </ul>
          </Slider>
        </>
    );
};

export default Herotwo;
