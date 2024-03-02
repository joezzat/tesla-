import React, {useState} from 'react'
import styled from 'styled-components'
import logo from '../images/logo.svg'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import DarkMode from './DarkMode/DarkMode';
import { Link, NavLink } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';
import { Fade } from "react-awesome-reveal";

import  '../App.css';



function Header() {

    const [burgerStatus, setBurgerStatus]= useState(false);
  return (
    
 
      <Navbar className='nav'>

      <Nav>
         <Fade cascade damping={0.1}>

        
      <a href='/'>
          <img src={logo} alt="logo" />
      </a>
      
      
      <Menu>
        
            <NavItem>
                    <NavLink to="/Shop" className="navlink">Shop</NavLink>
            </NavItem>

            <NavItem>
                    <NavLink to="/FindUS" className="navlink">Find US</NavLink>
            </NavItem>

            <NavItem>
                    <NavLink to="/Discover" className="navlink">About Us</NavLink>
            </NavItem>
            
      </Menu>
     

      

      <CustomMenu onClick={()=> setBurgerStatus(true)}/>

      <BurgerMenu show={burgerStatus}>

        <CustomWraper>
        <DarkMode/>
        <CustomClose onClick={()=> setBurgerStatus(false) }/>
        </CustomWraper>
       
        <li><Link to="/Shop" > <a> Shop</a> </Link></li>
        <li><Link to="/FindUs" > <a> FindUs</a> </Link></li>
        <li><Link to="/Contact" > <a> Contact</a> </Link></li>
            <li><a href="#"> Roadaster</a></li>
            <li><a href="#"> cybertruck</a></li>
            <li><a href="#">Existing Invetory </a></li>
            <li><Link to="/Discover" > <a> Discover</a> </Link></li>
            <li><a href="#"> Trade-in</a></li>
            <li><a href="#"> Roadaster</a></li>
            <li><a href="#"> cybertruck</a></li>
           
      </BurgerMenu>
      </Fade>
      </Nav>
      </Navbar>
     )
}

export default Header

const Container= styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:  20px;
    top: 0 ;
    left: 0 ;
    right: 0 ;
`
const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex:1;

    @media (max-width:768px){
      display: none
  }

`


const CustomMenu= styled(MenuIcon)`
    cursor: pointer;
`



const BurgerMenu= styled.div`
position: fixed;
top: 0; 
bottom: 0;
right:0;
background: var( --background);
width:300px;
z-index:100;
list-style: none;
padding: 20px;
display: flex;
flex-direction: column;
text-align: start;
transform: ${prop => prop.show ? 'translate(0)' :  'translate(100%)'};
transition: transform 0.2s ;
color:var(--color);

li{
  padding: 15px 0;
  border-bottom: 1px solid var(--color);

    a{
      font-weight:600;
      color: var(--color);

    }
}
`

const CustomClose= styled(CloseIcon)`
cursor: pointer;
color: var(--color);
`
const CustomWraper= styled.div`
display: flex;
justify-content: flex-end;

`