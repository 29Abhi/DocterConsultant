import React from 'react'
import { BsFillArrowLeftCircleFill} from "react-icons/bs";
import './Profile.css'
import { NavLink } from 'react-router-dom';
import PieRadius from './PieRadius'
import { Docter1data } from './App';
import About from './About'
import { useSelector } from 'react-redux';
import {remove} from './Store/cartSlice';
import { useDispatch } from 'react-redux';





const Profile = () => {
  const dispatch1 = useDispatch();

  const itemdata = useSelector((state) => state.cart);
  console.log(itemdata)
 
  const removedata = () => {
    console.log("removedata")
    dispatch1(remove());
  }

  return (
   <>
   
    
    <h1 className='profile-head' >Profile</h1>
         <div className='profile_detail' >
         <NavLink to="/" >
    <BsFillArrowLeftCircleFill className='back-arrow' onClick={()=> removedata()} />
    </NavLink>
          {
            itemdata.map((elem, index)=>{
              return (
                <>
                 <div className='demo' key={elem.id} >
            <img src={elem.img} className='profile-image-docter' />
          </div>
       
           <div className='docter-name'>
            <h2 className='Docter-name-1'>{elem.name}</h2>
            <button className='docter-button' >Detail</button>
            <button className='rating-button' >
            <div className='rating-star' >{elem.rating} ⭐⭐⭐⭐⭐</div>
            <h2 className='add-review' >Add Review</h2>
            </button>
           </div>
           <div className='piebox' >
          <div className='piechart' >
          <PieRadius />
          </div>
          <div className='describeinfo' >
            <h2 className='hea' >Health Care {elem.HealthCare}%</h2>
            <hr className='hea_line' />
            <h2 className='rat' >Rating {elem. rating}</h2>
            <hr  className='rat_line'  />
            <h2 className='exp' >Experiance {elem.expertise}</h2>
            <hr  className='exp_line'   />
          </div>
          </div> 
         
          </>
              )
            })
          }
        
          </div>
        
          <About/>
       
   </>
  )
}

export default Profile
