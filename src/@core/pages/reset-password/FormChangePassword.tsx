"use client"

import { HideEyeIcon, InfoCircleIcon, LockIcon, MailIcon } from '@/@core/components/custom-icons'
import Image from 'next/image'
import React, { useState } from 'react'

const FormChangePassword = (props: {continueText:string, passwordText:string, passwordRepeadText:string, labelInfo:string}) => {
    const { continueText, passwordText, passwordRepeadText, labelInfo  } = props
    const [typePassword, setTypePassword] = useState('password');
    const [typeConfirmPassword, setTypeConfirmPassword] = useState('password');
    return (
        <div className='form-subcontainer'>
            <div className='form-group'>
                <label>{passwordText}</label>
                <div className='group-input prepend'>
                    <span className='prepend cursor-pointer' onClick={_ => setTypePassword(typePassword === 'password' ? 'text' : 'password')}>
                        <HideEyeIcon color={'#838899'} />
                    </span>
                    <input type={typePassword} className='color-1' placeholder={passwordText}/>
                </div>
            </div>
            <div className='form-group'>
                <label>{passwordRepeadText}</label>
                <div className='group-input prepend'>
                    <span className='prepend cursor-pointer' onClick={_ => setTypeConfirmPassword(typeConfirmPassword === 'password' ? 'text' : 'password')}>
                        <HideEyeIcon color={'#838899'} />
                    </span>
                    <input type={typeConfirmPassword} className='color-1' placeholder={passwordRepeadText}/>
                </div>
            </div>
            <label className='label-info'>
                <InfoCircleIcon />
                <span>{labelInfo}</span>
            </label>
            <div className='button-flex'>
                <button>{continueText}</button>
            </div>
        </div>
  )
}

export default FormChangePassword
