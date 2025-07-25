"use client"

import { EyeIcon, HideEyeIcon, LockIcon, MailIcon } from '@/@core/components/custom-icons'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const FormSubcontainer = (props: {lang: string, keepmeText:string, notRobotText:string, forgotText:string, newUserText:string, registerText:string}) => {
    const { lang, keepmeText, notRobotText, forgotText, newUserText, registerText } = props
    const router = useRouter();
    const [typePassword, setTypePassword] = useState('password');

    const onSubmit = () => {
        router.push(`/${lang}`)
    }
    return (
        <div className='form-subcontainer'>
            <div className='group-input prepend-append'>
                <span className='append'><MailIcon color={'#838899'} /></span>
                <input type='text' className='color-1' placeholder='Email'/>
            </div>
            <div className='group-input prepend-append'>
                <span className='append'><LockIcon color={'#838899'} /></span>
                <span className='prepend cursor-pointer' onClick={_ => setTypePassword(typePassword === 'password' ? 'text' : 'password')}>
                    {typePassword === 'password' && <EyeIcon color={'#838899'} />}
                    {typePassword === 'text' && <HideEyeIcon color={'#838899'} />}
                </span>
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
                    <Image src='/images/others/captcha.png' alt='captcha' width={0} height={0} sizes='100%'/>
                </div>
            </div>
            <div className='button-flex'>
                <button onClick={() => onSubmit()}>Log In</button>
                <Link href={`/${lang}/reset-password`}>{forgotText}</Link>
            </div>
            <label className='new-user'>{newUserText} <Link href={`/${lang}/register`}>{registerText}</Link></label>
        </div>
  )
}

export default FormSubcontainer
