import { HideEyeIcon, LockIcon, MailIcon, TrivIcon } from '@/@core/components/custom-icons'
import React from 'react'
import { getDictionaryLogin } from "@/app/dictionaries";
import Image from 'next/image'

import '@/styles/login.css'
import FormSubcontainer from '@/@core/pages/login/FormSubcontainer';
export default async function LoginPage({ params }: any) {
  const {
    greeting_text, 
    entry_text, 
    keepme_text, 
    not_robot_text, 
    forgot_text,
    new_user_text, 
    register_text, 
    welcome_text, 
    sub_welcome_text
  } = await getDictionaryLogin(params.lang);

  return (
    <main className='login-page sm:mobile-responsive md:mobile-responsive light-theme'>
      <div className='login-container'>
        <div className='left-subcontainer'>
          <div className='logo-subcontainer'>
            <TrivIcon color={'#318AC6'}/>
          </div>
          <div className='title-subcontainer'>
            <h1>{greeting_text}</h1>
            <p>{entry_text}</p>
          </div>
          <FormSubcontainer keepmeText={keepme_text} notRobotText={not_robot_text} forgotText={forgot_text} newUserText={new_user_text} registerText={register_text} />
        </div>
        <div className='right-subcontainer'>
          <div className='title-subcontainer'>
            <h1>{welcome_text}</h1>
            <p>{sub_welcome_text}</p>
          </div>
          <div className='image-subcontainer'>
            <Image src='/images/others/login-screen.png' alt='captcha' width={471} height={392}/>
          </div>
          <div className='logo-subcontainer'>
            <TrivIcon color={'#318AC6'}/>
          </div>
        </div>
      </div>
    </main>
  )
}
