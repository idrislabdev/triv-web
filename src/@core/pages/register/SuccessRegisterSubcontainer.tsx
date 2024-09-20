"use client";

import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const SuccessRegisterSubcontainer = (props: {dicRegister:any}) => {
  const { dicRegister } = props
  return (
    <>
        <div className='title-subcontainer'>
            <h2>{dicRegister.success_1}</h2>
        </div>
        <div className='information-subcontainer success'>
            <p>{dicRegister.success_2} <span>0874662739987</span></p>
            <button className='success'>
                <span>{dicRegister.success_3}</span>
                <CircularProgressbar value={70} text={`${70}%`} />
            </button>
        </div>
    </>
  )
}

export default SuccessRegisterSubcontainer
