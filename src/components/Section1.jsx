import React from 'react'
import styled from 'styled-components'
import Arrow from '../images/arrow-bottom-svgrepo-com.svg'
import { Fade } from "react-awesome-reveal";

import '../App.css';


function Section({ description,deails,deails1,  image ,  leftbtn, rightbtn  }) {


  return (

    <Wrap bdimg={image} className='sec'>
         <Fade cascade damping={0.1}>

         
        <ItemText className='title1'>
                <p> {description} </p>
                <p> {deails} </p>
                <p> {deails1} </p>
        </ItemText>

       
        <DownArrow src={Arrow} />
        </Fade>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
width: 100vw;
height: 100vh;
background-size: cover;
background-position: center;
background-repeat: no-repeat;
background-image: url();
display: flex;
flex-direction: column;
justify-content: space-between; /*V*/
align-items: center; /* H */
background-image: ${props=> `url('${props.bdimg}')`}



`

const ItemText= styled.div`
padding-top: 15vh;
text-align: center;
font-weight: 800;
font-size: 30px;
`

const ButtonGroup = styled.div`
display: flex;
margin-bottom: 50px;

@media  (max-width:768px) {
       
          flex-direction: column;
      }
`

const LeftButton= styled.div`
background-color: rgba(23, 26, 32, 0.8);
height: 40px;
width: 256px;
color: white;
display: flex;
justify-content: center;
align-items: center;
border-radius: 100px
opacity: 0.85;
text-transform: uppercase;
font-size: 12px;
cursor: pointer;
margin-right: 10px;

 @media (max-width:768px) {
        
 margin-bottom: 30px;
          
}
      
`
const RightButton= styled(LeftButton)`

`
const DownArrow= styled.img`
margin-top: 20px;
height: 40px; 
width: 20px;
animation: animateDown infinite 1.5s;
font-size: 30px;

`

const Buttons=styled.div`
`