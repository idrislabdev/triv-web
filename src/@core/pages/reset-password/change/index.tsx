"use client"

import { TrivIcon } from '@/@core/components/custom-icons'
import React, { useEffect } from 'react'
import FormSubcontainer from '../FormSubcontainer'
import Image from 'next/image'
import FormChangePassword from '../FormChangePassword'

const ResetPasswordChange = (props: {dictionaries:any}) => {
    const { dictionaries } = props
    const heightResponsive = () => {
        const elements = document.getElementsByClassName("login-page");
        var element = elements[0];
        if (element) {
            if(window.innerHeight < 850) {
                document.getElementsByClassName("login-page")[0].classList.add('medium-responsive')
            } else {
                document.getElementsByClassName("login-page")[0].classList.remove('medium-responsive')
            }
        }
    }
    useEffect(()=> {
        window.addEventListener('resize', ()=> {
            heightResponsive();
        })
    }, [])
    useEffect(() => {
        heightResponsive();
        if (localStorage.getItem('mode') === 'dark-theme') {
            document.body.classList.add("dark-theme");
        }
    })
    return (
        <div className='reset-password-container'>
            <div className='left-subcontainer'>
                <div className='logo-subcontainer'>
                    <TrivIcon color={'#318AC6'}/>
                </div>
                <div className='left-main-subcontainer'>
                    <div className='title-subcontainer'>
                        <h1>{dictionaries.new_password_text}</h1>
                        <p>{dictionaries.entry_new_text} <span>bastian@gmail.com</span></p>
                    </div>
                    <FormChangePassword 
                        continueText={dictionaries.continue_text}
                        passwordRepeadText={dictionaries.password_repead_text}
                        passwordText={dictionaries.password_text}
                        labelInfo={dictionaries.label_info}
                    />
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

export default ResetPasswordChange
