"use client"

import { HideEyeIcon } from '@/@core/components/custom-icons'
import Image from 'next/image'
import React, { useState } from 'react'

const FormRegisterSubcontainer = (props: {dictRegister:any, pekerjaans:string[]}) => {
    const { dictRegister, pekerjaans } = props
    const [dataPekerjaan, setDataPekerjaans] = useState(pekerjaans)
    const [pekerjaan, setPekerjaan] = useState('');

    const changePekerjaan = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setPekerjaan(event.target.value)
    }
    return (
        <div className='form-subcontainer'>
            <form>
                <div className='form-name'>
                    <label>{dictRegister.name_form_text}</label>
                    <div className='form-input'>
                    <input type='text' className='color-1' placeholder={dictRegister.name_form_input_first_text}/>
                    <input type='text' className='color-1' placeholder={dictRegister.name_form_input_second_text}/>
                    </div>
                </div>
                <div className='form-email'>
                    <label>{dictRegister.email_text}</label>
                    <input type='email' className='color-1' 
                        placeholder={dictRegister.email_text} 
                        onInvalid={e => (e.target as HTMLInputElement).setCustomValidity("Please include an '@' in the email address ")} 
                        required
                    />
                </div>
                <div className='form-password'>
                    <label>{dictRegister.password_text}</label>
                    <div className='form-input'>
                        <div className='group-input prepend'>
                            <span className='prepend'><HideEyeIcon color={'#838899'} /></span>
                            <input type='password' className='color-1' placeholder={dictRegister.password_text}/>
                        </div>
                        <div className='group-input prepend'>
                            <span className='prepend'><HideEyeIcon color={'#838899'} /></span>
                            <input type='password' className='color-1' placeholder={dictRegister.password_repead_text}/>
                        </div>
                    </div>
                </div>
                <div className='form-jobs'>
                    <label>{dictRegister.job_text}</label>
                    <select className={pekerjaan == '' ? `!text-neutral-500` : `color-1`} defaultValue={pekerjaan} onChange={changePekerjaan}>
                        <option value="" disabled>{dictRegister.placeholder_job}</option>
                        {
                            dataPekerjaan.map((item:string, index:number) => (
                                <option value={item} className='text-neutral-800' key={index}>{item}</option>
                            ))
                        }
                    </select>
                </div>
                <div className='form-note'>
                    <p>{dictRegister.register_first_text} <span>{dictRegister.register_second_text} </span>{dictRegister.register_third_text} <span> {dictRegister.register_fourth_text}</span></p>
                </div>
                <button type='submit'>{dictRegister.register_text}</button>
            </form>
            <label className='has-user'>{dictRegister.has_account_1} <a>{dictRegister.has_account_2}</a></label>
            <div className='sub-title-subcontainer'>
                <h5>{dictRegister.welcome_text}</h5>
                <p>{dictRegister.sub_welcome_text}</p>
                <div className='terdaftar-diawasi'>
                    <div className='img-wrapper'>
                        <Image src='/images/otoritas-keuangans/bsi-logo.png' className='bsi-logo' alt='bsi' width={45.15} height={24.69}/>
                    </div>
                    <div className='img-wrapper'>
                        <Image src='/images/otoritas-keuangans/cisa-logo.png' className='cisa-logo' alt='cisa' width={35.98} height={33.16}/>
                    </div>
                    <div className='img-wrapper'>
                        <Image src='/images/otoritas-keuangans/cism-logo.png' className='cism-logo' alt='cism' width={79.01} height={30.33}/>
                    </div>
                    <div className='img-wrapper'>
                        <Image src='/images/otoritas-keuangans/pci-logo.png' className='pci-logo' alt='pci' width={35.98} height={28.92}/>
                    </div>
                    <div className='img-wrapper'>
                        <Image src='/images/otoritas-keuangans/cissp-logo.png' className='cissp-logo' alt='cissp' width={106.26} height={31.13}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormRegisterSubcontainer
