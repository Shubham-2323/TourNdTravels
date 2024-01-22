import React from 'react'
import './Footer.css'
import video from '../../Assests/video(2).mp4'
import { BsFillSendArrowUpFill } from "react-icons/bs";
import { MdOutlineTravelExplore } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaAngleRight } from "react-icons/fa";
import './Footer.scss'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const Footer = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, []);

  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video} muted autoPlay loop type='video/mp4'></video>
      </div>

      <div className="secContent container">
        <div data-aos='fade-up' className="contactDiv flex">
          <div className="text">
            <small>GET IN TOUCH</small>
            <h2>Travel With US</h2>
          </div>

          <div className="inputDiv flex">
            <input type="text" placeholder='Enter Email Address' />

            <button className='btn flex' type='submit'> Send
              <BsFillSendArrowUpFill className='icon' />
            </button>
          </div>
        </div>

        <div  data-aos='fade-up' className="footer-card flex">
          <div className="footer-intro flex">
            <div className="logoDiv">
              <a href="#" className='logo flex'>
                <h1><MdOutlineTravelExplore className='icon' /> Tour & Travels </h1>
              </a>
            </div>
            <div className="footerParagraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita necessitatibus ullam inventore optio minima culpa voluptas? Eius ipsam laboriosam accusantium delectus, numquam molestias unde facere amet voluptatibus est ipsum illo.
            </div>
            <div className="footerSocials flex">
              <FaTwitter className='icon' />
              <FaInstagram className='icon' />
              <FaFacebookMessenger className='icon' />
              <IoLogoYoutube className='icon' />
            </div>
          </div>
          <div className="footerLinks grid">

            {/* one */}
            <div data-aos='fade-up'data-aos-duration='4000' className="linkGroup">
              <span className="groupTitle">
                Agency
              </span>
              <li className="footerList flex">
                <FaAngleRight className='icon' />
                Services
              </li>
              <li className="footerList flex">
                <FaAngleRight className='icon' />
                Plans
              </li>
              <li className="footerList flex">
                <FaAngleRight className='icon' />
                Insurance
              </li>
              <li className="footerList flex">
                <FaAngleRight className='icon' />
                About
              </li>
              <li className="footerList flex">
                <FaAngleRight className='icon' />
                More
              </li>
              {/* <li className="footerList flex">
                <FaAngleRight className='icon' />
                Services
              </li> */}
            </div>

            {/* two */}
            <div data-aos='fade-up'data-aos-duration='4000'className="linkGroup">
              <span className="groupTitle">
                Guide
              </span>
              <li className="footerList flex">
                <FaAngleRight className='icon' />
                Tourism
              </li>
              <li className="footerList flex">
                <FaAngleRight className='icon' />
                Sponsor
              </li>
              <li className="footerList flex">
                <FaAngleRight className='icon' />
                Plans
              </li>
              <li className="footerList flex">
                <FaAngleRight className='icon' />
                News
              </li>
              <li className="footerList flex">
                <FaAngleRight className='icon' />
                More
              </li>
              {/* <li className="footerList flex">
                <FaAngleRight className='icon' />
                Services
              </li> */}
            </div>


            {/* three */}
            <div data-aos='fade-up' data-aos-duration='5000' className="linkGroup">
              <span className="groupTitle">
                Partners
              </span>
              <li className="footerList flex">
                <FaAngleRight className='icon' />
                Bookings
              </li>
              <li className="footerList flex">
                <FaAngleRight className='icon' />
                Rides
              </li>
              <li className="footerList flex">
                <FaAngleRight className='icon' />
                Insurance
              </li>
              <li className="footerList flex">
                <FaAngleRight className='icon' />
                Free Space
              </li>
              <li className="footerList flex">
                <FaAngleRight className='icon' />
                More
              </li>
              {/* <li className="footerList flex">
                <FaAngleRight className='icon' />
                Services
              </li> */}
            </div>
          </div>

          <div className="footerDiv flex">
            <small>Best travel Website</small>
            <small>Copyright Reserved @Shubham</small>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Footer
