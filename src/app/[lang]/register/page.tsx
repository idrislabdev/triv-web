import { HideEyeIcon, LockIcon, MailIcon, TrivIcon } from '@/@core/components/custom-icons'
import React from 'react'
import Image from 'next/image'
import { getDictionaryRegister } from '@/app/dictionaries';

import '@/styles/register.css'

export default async function RegisterPage({ params }: any) {
    const {
        greeting_text, 
        entry_text, 
        name_form_text, 
        name_form_input_first_text, 
        name_form_input_second_text,
        email_text, 
        password_text, 
        password_repead_text, 
        job_text,
        register_first_text,
        register_second_text,
        register_third_text,
        register_fourth_text,
        welcome_text,
        sub_welcome_text,
        register_text,
    } = await getDictionaryRegister(params.lang);
  return (
    <main className='register-page sm:mobile-responsive light-theme'>
      <div className='register-container'>
        <div className='left-subcontainer'>
          <div className='logo-subcontainer'>
            <TrivIcon color={'#318AC6'}/>
          </div>
          <div className='title-subcontainer'>
            <h1>{greeting_text}</h1>
            <p>{entry_text}</p>
          </div>
          <div className='form-subcontainer'>
            <div className='form-name'>
              <label>{name_form_text}</label>
              <div className='form-input'>
                <input type='text' className='color-1' placeholder={name_form_input_first_text}/>
                <input type='text' className='color-1' placeholder={name_form_input_second_text}/>
              </div>
            </div>
            <div className='form-email'>
              <label>{email_text}</label>
              <input type='text' className='color-1' placeholder={email_text}/>
            </div>
            <div className='form-password'>
              <label>{password_text}</label>
              <div className='form-input'>
                <div className='group-input prepend'>
                    <span className='prepend'><HideEyeIcon color={'#838899'} /></span>
                    <input type='password' className='color-1' placeholder={password_text}/>
                </div>
                <div className='group-input prepend'>
                    <span className='prepend'><HideEyeIcon color={'#838899'} /></span>
                    <input type='password' className='color-1' placeholder={password_repead_text}/>
                </div>
              </div>
            </div>
            <div className='form-jobs'>
                <label>{job_text}</label>
                <select className='color-1'>
                    <option value="Programmer">Programmer</option>
                    <option value="Dokter">Dokter</option>
                    <option value="Wirausaha">Wirausaha</option>
                </select>
            </div>
            <div className='form-note'>
                <p>{register_first_text} <span>{register_second_text}</span>{register_third_text} <span>{register_fourth_text}</span></p>
            </div>
            <button>{register_text}</button>
            <div className='sub-title-subcontainer'>
                <h5>{welcome_text}</h5>
                <p>{sub_welcome_text}</p>
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
        </div>
        <div className='right-subcontainer'>
          <div className='title-subcontainer'>
            <h1>{welcome_text}</h1>
            <p>{sub_welcome_text}</p>
            <div className='terdaftar-diawasi'>
                <Image src='/images/otoritas-keuangans/bsi-logo.png' className='bsi-logo' alt='bsi' width={24.88} height={13.61}/>
                <Image src='/images/otoritas-keuangans/cisa-logo.png' className='cisa-logo' alt='cisa' width={19.83} height={18.27}/>
                <Image src='/images/otoritas-keuangans/cism-logo.png' className='cism-logo' alt='cism' width={43.55} height={16.72}/>
                <Image src='/images/otoritas-keuangans/pci-logo.png' className='pci-logo' alt='pci' width={19.83} height={15.94}/>
                <Image src='/images/otoritas-keuangans/cissp-logo.png' className='cissp-logo' alt='cissp' width={58.57} height={17.16}/>
            </div>
          </div>
          <div className='image-subcontainer'>
            <Image src='/images/others/register-screen.png' alt='captcha' width={574} height={400}/>
          </div>
          <div className='logo-subcontainer'>
            <TrivIcon color={'#318AC6'}/>
          </div>
        </div>
      </div>
    </main>
  )
}
