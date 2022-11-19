import React from 'react';
import Home from './Home';
import Profile from './Profile';
import Appoinment from './Appoinment';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { createContext } from "react";
import './App.css';


const Docter1data = createContext();

function App() {
  return (
    <>
   
      <Docter1data.Provider value = {  {
         name : "Dr. Chachu Bajaj",
         rating : 4.7,
         expertise : 5,
         price : 1000,
         img : "image/nurseprofile image.jpg",
         id : 1 
        }} >
    <div className="App">
     <div className='semicircle' >
     <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>} />    
      <Route path="/profile" element={<Profile/>}  /> 
      <Route path='/appoinment' element={<Appoinment/>} /> 
      </Routes>
     </BrowserRouter> 
   
    
     </div>
     <div className='semicircle2'></div>
    
     </div>
     </Docter1data.Provider>
   
    </>
  );
}

export default App;
export {Docter1data};
