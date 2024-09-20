"use client"
import { TrivIcon } from '@/@core/components/custom-icons'
import React, { useEffect } from 'react'
import Image from 'next/image'
import FormRegisterSubcontainer from './FormRegisterSubcontainer'

const Register = (props: {dictRegister:any}) => {
    const { dictRegister } = props
    const pekerjaans = [
        'Pelajar/Mahasiswa',
        'Karyawan Swasta',
        'Profesional',
        'Wiraswasta',
        'TNI/Polri',
        'Pensiunan',
        'Tidak Bekerja',
        'Lainnya',
      ]
    useEffect(() => {
        if (localStorage.getItem('mode') === 'dark-theme') {
            document.body.classList.add("dark-theme");
        }
    })
    
    return (
        <div className='register-container'>
        <div className='left-subcontainer'>
          <div className='logo-subcontainer'>
            <TrivIcon color={'#318AC6'}/>
          </div>
          <div className='title-subcontainer'>
            <h1>{dictRegister.greeting_text}</h1>
            <p>{dictRegister.entry_text}</p>
          </div>
          <FormRegisterSubcontainer dictRegister={dictRegister} pekerjaans={pekerjaans} />
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

export default Register
