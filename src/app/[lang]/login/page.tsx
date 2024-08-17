import { LockIcon, MailIcon, TrivIcon } from '@/@core/components/custom-icons'
import React from 'react'

import '@/styles/login.css'
import Image from 'next/image'
export default async function LoginPage({ params }: any) {
  return (
    <main className='login-page sm:mobile-responsive light-theme'>
      <div className='login-container'>
        <div className='left-subcontainer'>
          <div className='logo-subcontainer'>
            <TrivIcon color={'#318AC6'}/>
          </div>
          <div className='title-subcontainer'>
            <h1>Halo!</h1>
            <p>Masuk ke akun anda</p>
          </div>
          <div className='form-subcontainer'>
            <div className='group-input'>
              <span className='append'><MailIcon color={'#838899'} /></span>
              <input type='text'/>
            </div>
            <div className='group-input'>
              <span className='append'><LockIcon color={'#838899'} /></span>
              <input type='password' />
            </div>
            <div className='keepme-login'>
              <label className="checkbox-input">Keep me signed on this computer
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
            </div>
            <div className='captcha-checkbox'>
              <label className="checkbox-input">I`m not robot
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
              <div className='captcha-image'>
                <Image src='/images/others/captcha.png' alt='captcha' width={80} height={88}/>
              </div>
            </div>
            <div className='button-flex'>
              <button>Log In</button>
              <a>Lupa kata sandi?</a>
            </div>
            <label className='new-user'>Pengguna Baru? <a>Daftar</a></label>
          </div>
        </div>
        <div className='right-subcontainer'>
          <div className='title-subcontainer'>
            <h1>Selamat Datang Kembali Di Triv</h1>
            <p>Trivers, Mari Bersama Membangun Ekosistem Keuangan Terbesar Di Indonesia</p>
          </div>
          <div className='image-subcontainer'>
            <Image src='/images/others/login-startup.png' alt='captcha' width={471} height={392}/>
          </div>
          <div className='logo-subcontainer'>
            <TrivIcon color={'#318AC6'}/>
          </div>
        </div>
      </div>
    </main>
  )
}
