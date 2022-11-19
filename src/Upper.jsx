import React from 'react'
import { CgMenu } from "react-icons/cg";
import { BsSearch } from "react-icons/bs";
import './Upper.css'

const Upper = () => {
  return (
    <>
    <div className='upper-div'>
    <CgMenu className='cgmenu' />
    <h2 className='greeting' >Hello, Deepak Thakur !</h2>
    <figure  >
      <img className='profile-image' src='image/nurseprofile image.jpg'  />
    </figure>
     </div>
     <div className='input-field' >
     <span className='Search_icon' ><BsSearch/></span>
    <input  className='input-search' placeholder='Search'  />
    </div>
    </>
  )
}

export default Upper
