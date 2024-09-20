"use client";

import React, { useState } from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import OTPInput from 'react-otp-input';
const OTPRegisterSubcontainer = (props: {dicRegister:any}) => {
  const { dicRegister } = props
  const [otp, setOtp] = useState('');
  
  return (
    <>
        <div className='title-subcontainer'>
            <h2>{dicRegister.otp_1}</h2>
        </div>
        <div className='information-subcontainer verify-otp'>
            <p>{dicRegister.otp_2} <span>0874662739987</span></p>
            <div className='otp-input'>
              <OTPInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                renderSeparator={<span> </span>}
                renderInput={(props) => <input {...props} />}
                skipDefaultStyles={true}
                inputType='password'
                placeholder='******'
              />
            </div>
            <button className='verify'>{dicRegister.otp_4}</button>
        </div>
        <div className='notice-subcontainer'>
          <p>{dicRegister.otp_3} <span>28 {dicRegister.second}</span></p>
        </div>
    </>
  )
}

export default OTPRegisterSubcontainer
