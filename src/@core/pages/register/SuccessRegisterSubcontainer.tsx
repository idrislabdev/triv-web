"use client";

import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const SuccessRegisterSubcontainer = () => {
  return (
    <>
        <div className='title-subcontainer'>
            <h2>Verifikasi Berhasil</h2>
        </div>
        <div className='information-subcontainer success'>
            <p>Kami telah mengirimkan kode verifikasi 6 digit ke nomor <span>0874662739987</span></p>
            <button className='success'>
                <span>Continue</span>
                <CircularProgressbar value={70} text={`${70}%`} />
            </button>
        </div>
    </>
  )
}

export default SuccessRegisterSubcontainer
