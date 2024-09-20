"use client"
import { TrivIcon } from '@/@core/components/custom-icons'
import React, { useEffect } from 'react'
import Image from 'next/image'

const RegisterVerify = (props: {dictRegister:any}) => {
    const { dictRegister } = props

    useEffect(() => {
        if (localStorage.getItem('mode') === 'dark-theme') {
            document.body.classList.add("dark-theme");
        }
    })
    
    return (
      <div className='register-container'>
        <div className='left-subcontainer fit-screen'>
          <div className='logo-subcontainer'>
            <TrivIcon color={'#318AC6'}/>
          </div>
          <div className='title-subcontainer'>
            <h2>{dictRegister.welcome_register}</h2>
          </div>
          <div className='information-subcontainer'>
            <p>{dictRegister.verify_1} : <span>aditya@gmail.com</span></p>
            <p>{dictRegister.verify_2}</p>
            <p className='small'>* {dictRegister.verify_3} 2 {dictRegister.minute}</p>
          </div>
          <div className='notice-subcontainer'>
            <p>{dictRegister.verify_4}</p>
            <a>{dictRegister.verify_5}</a>
          </div>
          <div className='terdaftar-subcontainer'>
            <h5>{dictRegister.welcome_text}</h5>
            <p>{dictRegister.sub_welcome_text}</p>
            <div className='terdaftar-diawasi'>
                <div className='img-wrapper'>
                    <Image src='/images/otoritas-keuangans/bsi-logo.png' className='bsi-logo' alt='bsi' width={45.15} height={24.69}/>
                </div>
                <div className='img-wrapper'>
                    <Image src='/images/otoritas-keuangans/cisa-logo.png' className='cisa-logo' alt='cisa' width={35.98} height={33.16}/>
                </div>
                <div className='img-wrapper'>
                    <Image src='/images/otoritas-keuangans/cism-logo.png' className='cism-logo' alt='cism' width={79.01} height={30.33}/>
                </div>
                <div className='img-wrapper'>
                    <Image src='/images/otoritas-keuangans/pci-logo.png' className='pci-logo' alt='pci' width={35.98} height={28.92}/>
                </div>
                <div className='img-wrapper'>
                    <Image src='/images/otoritas-keuangans/cissp-logo.png' className='cissp-logo' alt='cissp' width={106.26} height={31.13}/>
                </div>
            </div>
          </div>
        </div>
        <div className='right-subcontainer'>
          <div className='title-subcontainer'>
            <h1>{dictRegister.welcome_text}</h1>
            <p>{dictRegister.sub_welcome_text}</p>
            <div className='terdaftar-diawasi'>
                <Image src='/images/otoritas-keuangans/bsi-logo.png' className='bsi-logo' alt='bsi' width={24.88} height={13.61}/>
                <Image src='/images/otoritas-keuangans/cisa-logo.png' className='cisa-logo' alt='cisa' width={19.83} height={18.27}/>
                <Image src='/images/otoritas-keuangans/cism-logo.png' className='cism-logo' alt='cism' width={43.55} height={16.72}/>
                <Image src='/images/otoritas-keuangans/pci-logo.png' className='pci-logo' alt='pci' width={19.83} height={15.94}/>
                <Image src='/images/otoritas-keuangans/cissp-logo.png' className='cissp-logo' alt='cissp' width={58.57} height={17.16}/>
            </div>
          </div>
          <div className='image-subcontainer'>
            <Image src='/images/others/register-screen.png' alt='captcha' width={574} height={400}/>
          </div>
          <div className='logo-subcontainer'>
            <TrivIcon color={'#318AC6'}/>
          </div>
        </div>
      </div>
    ) 
}

export default RegisterVerify
