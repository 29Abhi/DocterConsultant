import React, {useState} from 'react'
import { BsFillArrowLeftCircleFill} from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Appointment.css';
import { BsTelephonePlusFill, BsFillChatRightDotsFill} from "react-icons/bs";
import Calender from './Calender';



const Appoinment = () => {

  const itemdata = useSelector((state) => state.cart);

  const bookappoint = () => {
    alert("Your Appointment is Booked "  )
  }

  return (
    <>
       <NavLink to="/profile" >
    <BsFillArrowLeftCircleFill className='back-arrow'  />
    </NavLink>
    <h1 className='profile-head' >Book an Appointment</h1>
    <div>
    {
      itemdata.map((elem, index)=>{
        return(
          <>
          <div className='appoint_div'  key={elem.id} >
        <figure>
        <img src={elem.img} className='appoint_img'/>

      </figure>
      <h1 className='appoint_name' >{elem.name}</h1>
      <button className='appoint_btn' >Connect</button>
      <button  className='appoint_call' > <span><BsTelephonePlusFill/></span> Call</button>
     
      <button className='appoint_email' > <span><BsFillChatRightDotsFill/></span> Email</button>
      </div>
      </>
      )})
    }
    </div>
    <Calender/>
    <button className='book_apoint_btn' onClick={bookappoint} >Book Appointment</button>
    </>
  )
}

export default Appoinment
