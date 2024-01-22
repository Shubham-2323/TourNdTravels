import React from 'react'
import { useEffect } from 'react'
import './Home.css'
import sea from '../../Assests/sea.mp4'
import './Home.scss'
import { MdOutlineAddLocationAlt } from "react-icons/md";
import { HiFilter } from "react-icons/hi";
import { FaFacebook } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { SiTripadvisor } from "react-icons/si";
import { BsListTask } from "react-icons/bs";
import { TbApps } from "react-icons/tb";
import Aos from 'aos'
import 'aos/dist/aos.css'



const Home = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, []);

  return (
    <section className='home'>
      <div className="overlay"></div>
      <video src={sea} muted autoPlay loop type='video/mp4'></video>

      <div className="homeContent container" >
        <div className="text-div">
          <span data-aos='fade-up' className="small-text">
            Our packages
          </span>
          <h1 data-aos='fade-up' className="home-title">
            Search your holidays
          </h1>
        </div>
        <div data-aos='fade-up' className="card-div grid">

          <div className="destination-input">
            <label htmlFor="city">Search Your Destination:</label>
            <div className="input flex">
              <input type="text" placeholder='Enter name here...' />
              <MdOutlineAddLocationAlt className='icon' />
            </div>
          </div>

          <div className="date-input">
            <label htmlFor="date">Select Date:</label>
            <div className="input flex">
              <input type="date" />
            </div>
          </div>


          <div className="price-input">
            <div className="label-total flex">
              <label htmlFor="price">
                Max Price:
              </label>
              <h3 className='total'>$1000</h3>
            </div>
            <div className="input flex">
              <input type="range" max='5000'
                min='1000' />
            </div>
          </div>
          <div className="searchoption flex">
            <HiFilter className='icon' />
            <span>More filters</span>
          </div>
        </div>

        <div data-aos='fade-up' className="homeFooterIcons flex">
          <div className="rightIcons">
            <FaFacebook className='icon' />
            <SiInstagram className='icon' />
            <SiTripadvisor className='icon' />

          </div>
          <div className="leftIcons">
            <BsListTask className='icon' />
            <TbApps className='icon' />


          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
