import React from 'react'
import Section1 from './Section1';
import Section from './Section';
import '../App.css';






/* images */
import img1 from '../images/model-s.jpg'
import img2 from '../images/model-x.jpg'
import img3 from '../images/model-3.jpg'
import img4 from '../images/model-y.jpg'
import img5 from '../images/solar-roof.jpg'
import img6 from '../images/accessories.jpg'
import img7 from '../images/solar-panel.jpg'    
import img from '../images/Tesla_Roschetzky Photography_Shutterstock_0.jpg'                                                          



const Home = () => {
  return (

    <container >

  <Section1 
            title="Tesla"
            description="Tesla, Inc. is an American multinational automotive and clean energy company headquartered in Austin, Texas, which designs, manufactures and sells electric vehicles, stationary battery energy storage devices from home to grid-scale, solar panels and solar shingles, and related products and services"
            image={img}
            deails="Founders: Elon Musk, Martin Eberhard, JB Straubel, Marc Tarpenning, Ian Wright"
            deails1="Headquarters: Austin, Texas, United States"
            leftbtn=" Custom Order"
            rightbtn=" Demo Drive"
        />
        <Section 
            title="Model S"
            description="Order Online for Touchless Delivery "
            image={img1}
            leftbtn=" Custom Order"
            rightbtn=" Demo Drive"
        />
        
        <Section
            title="Model Y"
        description="Order Online for Touchless Delivery "
        image={img4}
        leftbtn=" Custom Order"
        rightbtn=" Demo Drive" 
        />
        <Section 
            title="Model 3"
         description="Order Online for Touchless Delivery "
         image={img3}
         leftbtn=" Custom Order"
         rightbtn=" Demo Drive" 
         />
        <Section
            title="Model x"
          description="Order Online for Touchless Delivery "
          image={img2}
          leftbtn=" Custom Order"
          rightbtn=" Demo Drive" 
        />
        <Section
            title="Lowest Cost Solar Panels in America"
        description="Money-back guarantee "
        image={img7}
        leftbtn=" Custom Order"
        rightbtn=" Learn More" 
        />
        <Section
            title="Solar for New Roofs"
          description="Produce Clean Energy From Your Roof"
          image={img5}
          leftbtn=" Custom Order"
          rightbtn=" Learn More" 
        />
        <Section
            title="Accessories"
            description=""
            image={img6}
            leftbtn="Shop now "
         />


    </container>
  )
}

export default Home

