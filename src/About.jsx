import React from 'react'
import './About.css'
import { BsCalendar2DateFill} from "react-icons/bs";
import { NavLink } from 'react-router-dom';

const About = () => {
  return (
  <>
    <div className='about_section'>
        <div className='about_side' >
        <h2 className='head' >About</h2>
        <p className='para' >Doctors have a very noble profession. In addition, they are equipped with comprehensive knowledge and devices that enable them to diagnose and treat their patients with correct procedures. Doctors require medical staffs that help them in performing their treatment.
        Doctors have a very noble profession. In addition, they are equipped with comprehensive knowledge and devices that enable them to diagnose and treat their patients with correct procedures. Doctors require medical staffs that help them in performing their treatment.</p>
        <h3 className='h3'>See More ➔ </h3>
        </div>
        <div className='book' >
        <BsCalendar2DateFill className='calender'/>
        <h3 className='day' >Monday : : Friday</h3>
        <h3 className='time' >10.00 am to  07.00 pm </h3>
        <NavLink to="/appoinment">
        <button className='book_appoint' >Book Now</button>
        </NavLink>
        </div>
    </div>
  </>
  )
}

export default About