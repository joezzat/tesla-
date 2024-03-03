import React from 'react'
import  '../App.css';
import{ useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_go5rffa', 'template_h9fyodw',
       form.current, {
        publicKey: 'XuWAXvKXOk8xL4R1F',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset()
  };


  return (




    <section className='contact'>
     
        <form ref={form} onSubmit={sendEmail}>

                <h1>       Contact Us  </h1>
              <div>
              <input type="text" name="user_name" placeholder='Your Name' className='inp'/>
             
             <input type="email" name="user_email" placeholder='Your Email' className='inp'/>
              </div>
                
                
                <textarea name="message" placeholder='Leave Your message'  className='inp' />

                 

                <input type="submit" value="" className='sub'/> 
        </form>
     
  

    </section>
  
  )
}

export default Contact


