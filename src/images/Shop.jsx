import React from 'react'
import video from '../images/abF0uRhidP4hdUBc2Jmir_desktop.webm'
import img from '../images/cybergraffity_desktop.avif'
import img1 from '../images/model-s.jpg'
import img2 from '../images/model-x.jpg'
import img3 from '../images/model-3.jpg'
import img4 from '../images/model-y.jpg'

import slid1 from '../images/1449859-00-D_0_2000.avif'
import slid2 from '../images/1448751-00-B_0_2000.avif'
import slid3 from '../images/1107681-00-A_0_2000.avif'
import slid4 from '../images/1734412-02-D_01_2000.avif'
import slid5 from '../images/8529318-00-A_0_2000.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


import  '../App.css';

import Shopcars from './Shopcars'




const Shop = () => { 

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
   
  return (
   
                <div className='shop'>
        
              <div className='videosec'>
                    <video src={video} autoPlay={true} loop="true" muted></video>
                    <img src={img} alt=""  className='imgvid'/>
                    <button className='vidbtn'>
                            Shop Now
                        </button>
              </div>

               <div className='sec1'>
                    <h1>Best Sellers</h1>
                   
                    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src={slid1} alt="" />
          <p>MODEL 3/Y KEY FOB</p>
          <p>150$</p>
        </div>
        <div>
        <img src={slid2} alt="" />
          <p>MODEL Y ALL-WEATHER INTERIOR LINERS</p>
          <p>200$</p>
        </div>
        <div>
        <img src={slid3} alt="" />
          <p>MODEL 3/Y AIR FILTER</p>
          <p>650$</p>


        </div>
        <div>
        <img src={slid4} alt="" />
          <p>UNIVERSAL WALL CONNECTOR</p>
          <p>6500$</p>
        </div>
        <div>
        <img src={slid5} alt="" />
          <p>KIDS SCRIBBLE T LOGO TEE</p>
          <p>50$</p>
        </div>
      </Slider>
    </div>
                    

               </div>
          
                            
           
       
              
             
               
                <div className='sec2'>
                    
                    <div>
                    <h3>CYBERTRUCK</h3>
                        <h5>ACCESSORIES</h5>
                        <button>
                            Shop Now
                        </button>
                    </div>
                       
                </div>

                <div className='seccars'>

                    <Shopcars
                    title="Model-s"
                    dec="ACCESSORIES"
                    img={img1}
                    />

        <Shopcars
                    title="Model-x"
                    dec="ACCESSORIES"
                    img={img2}
                    />

        <Shopcars
                    title="Model-3"
                    dec="ACCESSORIES"
                    img={img3}
                    />

        <Shopcars
                    title="Model-y"
                    dec="ACCESSORIES"
                    img={img4}
                    />

                </div>


                <div className='charging'>
                        <h2>CHARGING</h2>
                        <button>
                            Shop Now
                        </button>

                </div>


                <div className='lifestyle'>

                <h2>LIFESTYLE</h2>
                        <button>
                            Shop Now
                        </button>


                </div>


 </div>

  
)}


  
export default Shop

