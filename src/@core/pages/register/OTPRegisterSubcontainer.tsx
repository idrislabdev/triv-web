"use client";

import React, { useState } from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import OTPInput from 'react-otp-input';
const OTPRegisterSubcontainer = () => {
  const [otp, setOtp] = useState('');

  return (
    <>
        <div className='title-subcontainer'>
            <h2>Verifikasi Nomor Telepon</h2>
        </div>
        <div className='information-subcontainer verify-otp'>
            <p>Kami telah mengirimkan kode verifikasi 6 digit ke nomor <span>0874662739987</span></p>
            <div className='otp-input'>
              <OTPInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                renderSeparator={<span>-</span>}
                renderInput={(props) => <input {...props} />}
                skipDefaultStyles={true}
                inputType='password'
                placeholder='******'
              />
            </div>
            <button className='verify'>Continue</button>
        </div>
        <div className='notice-subcontainer'>
          <p>Kamu dapat mengirimkan permintaan kode kembali dalam <span>28 sec</span></p>
        </div>
    </>
  )
}

export default OTPRegisterSubcontainer
