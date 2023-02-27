import React from "react"
import "./About.css"
import { Link } from "react-router-dom"

const AboutCard = () => {
  return (
    <>
      <div className='aboutCard mtop flex_space'>
        <div className='row row1'>
          <h4>About Us</h4>
          <h1>
            We provide<span> A Home</span><br></br> for abandoned pets
          </h1>
          <p>At Pet Heaven, we house and shelter pets that are unwanted by their owners. In our current world, pet purchases are at an all time high. With technology readily available at our fingertips, we are able to purchase a pet at a tap of a button. However, this also causes more pets to eventually be abandoned by their owners. These abandoned pets wander our streets, scavenging for food and evenually succumbing to huger or illnesses as they are not suited to living in our urban environment.</p>
          <p>If you are an owner who needs to find a new home for your pet, or someone who is looking to adopt a new pet, or just an animal lover who wants to visit our Heaven, click on the button below to learn more.</p>
          <Link to='/about'>
          <button className='secondary-btn'>
            Learn More <i className='fas fa-long-arrow-alt-right'></i>
          </button>
          </Link>
        </div>
        <div className='row image'>
          <img src='/images/about-img-1.jpg' alt='' />
          
        </div>
      </div>
    </>
  )
}

export default AboutCard