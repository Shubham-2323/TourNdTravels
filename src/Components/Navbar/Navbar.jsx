import React from 'react'
import { useState } from 'react';
import './Navbar.css'
import { MdOutlineTravelExplore } from "react-icons/md";
import { FaRegWindowClose } from "react-icons/fa";
import { TbGridDots } from "react-icons/tb";
// import './Navbar.scss'
import './Navbar.scss'



const Navbar = () => {

    const [active, setactive] = useState('navbar');

    // fnc for active navbar

    function activeNavbar(){
        setactive('navbar activeNavbar')
    }
    
    // fnc to close Navbar

    function closeNavbar(){
        setactive('navbar')
    }
    
    return (
        <section className='navbarSection'>
            <header className="header flex">
                <div className="logoDiv">
                    <a href="#" className='logo flex'>
                        <h1><MdOutlineTravelExplore className='icon' /> Tour & Travels </h1>
                    </a>
                </div>
                <div className={active}>
                    <ul className="navlist flex">
                        <li className="navitem">
                            <a href="#" className='navlink'>Home</a>
                        </li>
                        <li className="navitem">
                            <a href="#" className='navlink'>Package</a>
                        </li>
                        <li className="navitem">
                            <a href="#" className='navlink'>Shop</a>
                        </li>
                        <li className="navitem">
                            <a href="#" className='navlink'>About</a>
                        </li>
                        <li className="navitem">
                            <a href="#" className='navlink'>Pages</a>
                        </li>
                        <li className="navitem">
                            <a href="#" className='navlink'>News</a>
                        </li>
                        <li className="navitem">
                            <a href="#" className='navlink'>Contact</a>
                        </li>

                        <button className='btn'><a href="#">Book Now</a></button>
                    </ul>


                    <div onClick={closeNavbar}className="closeNavbar">
                    <FaRegWindowClose className='icon' />
                    </div>

                </div>
                    <div onClick={activeNavbar} className="toggle">
                    <TbGridDots className='icon'/>
                    </div>

            </header>
        </section>
    )
}

export default Navbar
