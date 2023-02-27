import React from "react"
import "./Footer.css"
import { Link } from "react-router-dom"
import {
  
  FaFacebook,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid'>
          <div className='box'>
            <h2>ABOUT US</h2>
            <p>We love and care for animals as if their our own. Please do follow all our social media sites to find out more about us!</p>
            <div className="contactUs">
            <h2>Social Media</h2>
            <div className="address">
              <FaFacebook size={25} />
              <p> &nbsp;Facebook</p>
            </div>
            <div className="address">
              <FaInstagram size={25} />
              <p> &nbsp;Instagram</p>
            </div>
            <div className="address">
              <FaTiktok size={25} />
              <p> &nbsp;TikTok &nbsp; &nbsp; &nbsp; &nbsp;</p>
            </div>
          </div>
          </div>
          
            <div className='box'>
              <h2>NAVIGATION</h2>
              <ul>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='/about'>About us</Link>
                </li>

                <li>
                  <Link to='/adopt'>Adopt</Link>
                </li>

                <li>
                  <Link to='/release'>Release</Link>
                </li>

                <li>
                  <Link to='/contact'>Adopt Form</Link>
                </li>

              </ul>
            </div>
            



            <div className='box'>
              <h2>NEWSLETTER</h2>
              <p>Enter your email to receive the latest updates from us!</p>

              <input type='text' name='' id='' />
              <input type='text' className='primary-btn' value='SUBSCRIBE' />
            </div>
          </div>
          
      </footer>
      <div className='legal'>
        <p>© 2023 All Rights Reserved.</p>
      </div>
    </>
  )
}

export default Footer