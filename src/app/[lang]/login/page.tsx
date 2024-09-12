import { HideEyeIcon, LockIcon, MailIcon, TrivIcon } from '@/@core/components/custom-icons'
import React from 'react'
import { getDictionaryLogin } from "@/app/dictionaries";
import Image from 'next/image'

import '@/styles/login.css'
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
          <div className='form-subcontainer'>
            <div className='group-input prepend-append'>
              <span className='append'><MailIcon color={'#838899'} /></span>
              <span className='prepend'><HideEyeIcon color={'#838899'} /></span>
              <input type='text' className='color-1' placeholder='Email'/>
            </div>
            <div className='group-input prepend-append'>
              <span className='append'><LockIcon color={'#838899'} /></span>
              <span className='prepend'><HideEyeIcon color={'#838899'} /></span>
              <input type='password' className='color-1' placeholder='Password'/>
            </div>
            <div className='keepme-login'>
              <label className="checkbox-input">{keepme_text}
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
            </div>
            <div className='captcha-checkbox'>
              <label className="checkbox-input">{not_robot_text}
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
              <div className='captcha-image'>
                <Image src='/images/others/captcha.png' alt='captcha' width={80} height={88}/>
              </div>
            </div>
            <div className='button-flex'>
              <button>Log In</button>
              <a>{forgot_text}</a>
            </div>
            <label className='new-user'>{new_user_text} <a>{register_text}</a></label>
          </div>
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
