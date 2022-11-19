import React, { useState } from 'react'
import './Calender.css'
import TimePicker from 'react-time-picker';

const Calender = () => {

const [date, setDate] = useState('0000/00/00');
const [value, onChange] = useState('10:00');

const finddate = (event) => {
    console.log(event.target.value);
    setDate(event.target.value);
}

  return (
    <>
    <div className='calender_div' >
    <div className='right_div' > 
  <h1 className='calender_head' >Selected Date : {date}</h1>
  <input  className='calender_cal' type='date' onChange={finddate} />
  </div>
  <div className='left_div' >
  <h1  className='time_head'>Selected Time :{value}</h1>
  <TimePicker className='appoint_timeslot' onChange={onChange} value={value} />
  </div>
  </div>
  </>
  )
}

export default Calender
