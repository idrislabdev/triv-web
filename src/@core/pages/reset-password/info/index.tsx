"use client"
import { TrivIcon } from '@/@core/components/custom-icons'
import React, { useEffect } from 'react'
import Image from 'next/image'

const ResetPasswordInfo = (props: {dictionaries:any}) => {
    const { dictionaries } = props

    useEffect(() => {
        if (localStorage.getItem('mode') === 'dark-theme') {
            document.body.classList.add("dark-theme");
        }
    })
    
    return (
      <div className='reset-password-container'>
        <div className='left-subcontainer fit-screen'>
          <div className='logo-subcontainer'>
            <TrivIcon color={'#318AC6'}/>
          </div>
          <div className='left-main-subcontainer'>
            <div className='title-subcontainer'>
              <h2>{dictionaries.greeting_text}</h2>
            </div>
            <div className='information-subcontainer'>
              <p>{dictionaries.info_1} : <span>aditya@gmail.com</span></p>
              <p>{dictionaries.info_2}</p>
            </div>
            <div className='notice-subcontainer'>
              <p>{dictionaries.info_3}</p>
            </div>
          </div>
        </div>
        <div className='right-subcontainer'>
            <div className='right-main-subcontainer'>
                <div className='title-subcontainer'>
                    <h1>{dictionaries.welcome_text}</h1>
                    <p>{dictionaries.sub_welcome_text}</p>
                    <div className='terdaftar-diawasi'>
                        <Image src='/images/otoritas-keuangans/bsi-logo.png' className='bsi-logo' alt='bsi' width={0} height={0} sizes='100%'/>
                        <Image src='/images/otoritas-keuangans/cisa-logo.png' className='cisa-logo' alt='cisa' width={0} height={0} sizes='100%'/>
                        <Image src='/images/otoritas-keuangans/cism-logo.png' className='cism-logo' alt='cism' width={0} height={0} sizes='100%'/>
                        <Image src='/images/otoritas-keuangans/pci-logo.png' className='pci-logo' alt='pci' width={0} height={0} sizes='100%'/>
                        <Image src='/images/otoritas-keuangans/cissp-logo.png' className='cissp-logo' alt='cissp' width={0} height={0} sizes='100%'/>
                    </div>
                </div>
                <div className='image-subcontainer'>
                    <Image src='/images/others/security-password.png' alt='captcha' width={0} height={0} sizes='100%'/>
                </div>
                <div className='logo-subcontainer'>
                    <TrivIcon color={'#318AC6'}/>
                </div>
            </div>
        </div>
      </div>
    ) 
}

export default ResetPasswordInfo
