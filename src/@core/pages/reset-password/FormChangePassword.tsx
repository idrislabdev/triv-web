"use client"

import { HideEyeIcon, InfoCircleIcon, LockIcon, MailIcon } from '@/@core/components/custom-icons'
import Image from 'next/image'
import React, { useState } from 'react'

const FormChangePassword = (props: {continueText:string, passwordText:string, passwordRepeadText:string, labelInfo:string}) => {
    const { continueText, passwordText, passwordRepeadText, labelInfo  } = props
    const [typePassword, setTypePassword] = useState('password');
    return (
        <div className='form-subcontainer'>
            <div className='form-group'>
                <label>{passwordText}</label>
                <div className='group-input prepend'>
                    <span className='prepend'><HideEyeIcon color={'#838899'} /></span>
                    <input type='password' className='color-1' placeholder={passwordText}/>
                </div>
            </div>
            <div className='form-group'>
                <label>{passwordRepeadText}</label>
                <div className='group-input prepend'>
                    <span className='prepend'><HideEyeIcon color={'#838899'} /></span>
                    <input type='password' className='color-1' placeholder={passwordRepeadText}/>
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
