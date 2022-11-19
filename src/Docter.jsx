import React from 'react'
import { BsFillCaretRightFill } from "react-icons/bs";
import './Docter.css'
import { NavLink } from 'react-router-dom';
import {add} from './Store/cartSlice'
import { useDispatch } from 'react-redux';

var data = [
  {
  name : "Dr. Chachu Bajaj",
  rating : 4.7,
  expertise : 5,
  price : 1000,
  img : "Image/nurseprofile image.jpg",
  id : 1,
  field : "Dental",
  HealthCare : 41,
  Health : 28 ,
  rat : 45 ,
  exp : 50,
 },
 {
     name : "Dr. Dhrita",
     rating : 4.3,
     expertise : 4,
     price : 1500,
     img :  "image/nurse3.jpg",
     id : 2,
     field : "Ortho",
     HealthCare : 71,
     Health : 56 ,
     rat : 40 ,
     exp : 30,

    },
    {
     name : "Dr. Lydia",
     rating : 4.1,
     expertise : 4.6,
     price : 800,
     img :  "image/nurse2.jpg",
     id : 3,
     field : "Cardiology",
     HealthCare : 82,
     Health : 75 ,
     rat : 60 ,
     exp : 36,
    }

];


const Docter = () => {

  const dispatch = useDispatch();

  const handleAdd = (elem) =>{
    console.log(elem)
    dispatch(add(elem))
  }

  return (
   <>
        <h3 className='top-docter' >Top Docters</h3>
        <div className='home-btn' >
        <button className='see-btn' >See more   <span className='arrow-btn' ><BsFillCaretRightFill/></span> </button>
        </div>
    <div className='all-docter'>
    {
      data.map((elem, index) =>{
        return(
      
      <div className='docter-list--div'key={elem.id} >
    <figure>
        <img className='first-docter' src={elem.img} />
    </figure>
    <h2 className='dr-name' >{elem.name}</h2>
    <p className='docter-field' >{elem.field}</p>
    <NavLink to="/profile" >
    <button onClick={() => handleAdd(elem)}  className='see-detail'  >See Details</button>
    </NavLink>
</div>
        )
      })
    }
    </div>
   </>
  )
}

export default Docter