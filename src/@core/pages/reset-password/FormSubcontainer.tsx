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
            <div className='captcha-checkbox'>
                <label className="checkbox-input">{notRobotText}
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                </label>
                <div className='captcha-image'>
                    <Image src='/images/others/captcha.png' alt='captcha' width={0} height={0} sizes='100%'/>
                </div>
            </div>
            <div className='button-flex'>
                <button>Log In</button>
            </div>
        </div>
  )
}

export default FormSubcontainer
