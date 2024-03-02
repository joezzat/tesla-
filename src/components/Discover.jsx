import React from 'react'
import video from '../images/About-Us-Hero-Desktop-Global.webm'
import { Fade } from "react-awesome-reveal";

import video3 from '../images/About-Us-Join-Desktop-Global.webm'
import video2 from '../images/About-Us-Fun-Desktop-Global.webm'
import img from '../images/About-Us-Machine-Desktop-Global.avif'
import img2 from '../images/About-Us-Exceptional-Desktop-Global.avif'


import { Link } from 'react-router-dom';

const Discover = () => {


  return (

<section className='dis'>
<Fade cascade damping={0.1}>

    <section className='dis1'>
            <video src={video} autoPlay={true} loop muted></video>
            <h1> About Us </h1>
            <p>Accelerating the World's Transition to Sustainable Energy</p>
    </section>

    <section className='dis2'>

    <h4> The Future is Sustainable </h4> 
    <p> We’re building a world powered by solar energy, running on batteries and transported by electric vehicles. Explore the most recent impact of our products, people and supply chain.    </p>
    <button>
                           EXPLORE IMPACT
                        </button>
    </section>    

      
    <section className='dis3'>

    </section>

    <section className='dis4'>
  </section>    


    <section className='dis5'>

    <video src={video2} autoPlay={true} loop muted></video>

    </section>    


    <section className='dis6'>

      <div className='dis6div'>

              <div >
                    <h2>Make it (Ridiculously) Fun</h2>
              </div>

              <div>
                    <p> Our vehicles are some of the safest in the world. After safety, our goal is to make every Tesla the most fun you could possibly have in a vehicle. We build features that make being in your vehicle more enjoyable—from gaming to movies, easter eggs and more. With over-the-air software updates, we regularly introduce features at the push of a button.</p>
              </div>

      </div>

      <div> 
        <img src={img} alt="" />
      </div>

      <div className='dis6div'>

              <div >
                    <h2>The Machine That Builds the Machine</h2>
              </div>

              <div>
                    <p> To shift humanity away from fossil fuels, we need extreme scale. Headquartered in Texas, we operate six huge, vertically integrated factories across three continents. With over 100,000 employees, our teams design, build, sell and service our products in-house.</p>
              </div>

      </div>


      <div> 
        <img src={img2} alt="" />
      </div>
         
     
         
         
    </section>    

    <section className='dis7'>

        <video src={video3} autoPlay={true} loop muted ></video>

    </section>

    <section className='dis8'>

        <div>
              <div> 
                    <h1>
                          Contact Us 
                    </h1>
              </div>
              <div>
                <Link to="/Contact">
                  <button>
                  Contact
                  </button>
                  </Link>
              </div>
        </div>

  </section>    

    
   
</Fade>
</section>
)
}

export default Discover