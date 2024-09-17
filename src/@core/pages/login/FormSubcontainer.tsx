"use client"

import { HideEyeIcon, LockIcon, MailIcon } from '@/@core/components/custom-icons'
import Image from 'next/image'
import React, { useState } from 'react'

const FormSubcontainer = (props: {keepmeText:string, notRobotText:string, forgotText:string, newUserText:string, registerText:string}) => {
    const { keepmeText, notRobotText, forgotText, newUserText, registerText } = props
    const [typePassword, setTypePassword] = useState('password');
    return (
        <div className='form-subcontainer'>
            <div className='group-input prepend-append'>
                <span className='append'><MailIcon color={'#838899'} /></span>
                <input type='text' className='color-1' placeholder='Email'/>
            </div>
            <div className='group-input prepend-append'>
                <span className='append'><LockIcon color={'#838899'} /></span>
                <span className='prepend cursor-pointer' onClick={_ => setTypePassword(typePassword === 'password' ? 'text' : 'password')}><HideEyeIcon color={'#838899'} /></span>
                <input type={typePassword} className='color-1' placeholder='Password'/>
            </div>
            <div className='keepme-login'>
                <label className="checkbox-input">{keepmeText}
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                </label>
            </div>
            <div className='captcha-checkbox'>
                <label className="checkbox-input">{notRobotText}
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                </label>
                <div className='captcha-image'>
                    <Image src='/images/others/captcha.png' alt='captcha' width={80} height={88}/>
                </div>
            </div>
            <div className='button-flex'>
                <button>Log In</button>
                <a>{forgotText}</a>
            </div>
            <label className='new-user'>{newUserText} <a>{registerText}</a></label>
        </div>
  )
}

export default FormSubcontainer
