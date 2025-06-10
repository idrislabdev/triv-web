"use client"

import { TrivIcon } from '@/@core/components/custom-icons'
import React, { useEffect } from 'react'
import FormSubcontainer from './FormSubcontainer'
import Image from 'next/image'

const Login = (props: {lang:string, dictLogin:any}) => {
    const { lang, dictLogin } = props
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
        <div className='login-container'>
            <div className='left-subcontainer'>
            <div className='logo-subcontainer'>
                <TrivIcon color={'#318AC6'}/>
            </div>
            <div className='title-subcontainer'>
                <h1>{dictLogin.greeting_text}</h1>
                <p>{dictLogin.entry_text}</p>
            </div>
            <FormSubcontainer 
                lang={lang}
                keepmeText={dictLogin.keepme_text} 
                notRobotText={dictLogin.not_robot_text} 
                forgotText={dictLogin.forgot_text} 
                newUserText={dictLogin.new_user_text} 
                registerText={dictLogin.register_text} 
            />
            </div>
            <div className='right-subcontainer'>
                <div className='title-subcontainer'>
                    <h1>{dictLogin.welcome_text}</h1>
                    <p>{dictLogin.sub_welcome_text}</p>
                </div>
                <div className='image-subcontainer'>
                    <Image src='/images/others/login-screen.png' alt='captcha' width={471} height={392}/>
                </div>
                <div className='logo-subcontainer'>
                    <TrivIcon color={'#318AC6'}/>
                </div>
            </div>
        </div>
  )
}

export default Login
