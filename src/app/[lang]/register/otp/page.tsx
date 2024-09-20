import { HideEyeIcon, LockIcon, MailIcon, TrivIcon } from '@/@core/components/custom-icons'
import React from 'react'
import Image from 'next/image'
import { getDictionaryRegister } from '@/app/dictionaries';

import '@/styles/register.css'
import OTPRegisterSubcontainer from '@/@core/pages/register/OTPRegisterSubcontainer';

export default async function RegisterOTPPage({ params }: any) {
    const dictRegister = await getDictionaryRegister(params.lang);
    const pekerjaans = [
      'Pelajar/Mahasiswa',
      'Karyawan Swasta',
      'Profesional',
      'Wiraswasta',
      'TNI/Polri',
      'Pensiunan',
      'Tidak Bekerja',
      'Lainnya',
    ]
  return (
    <html lang={params.lang}>
      <head>
        {params.lang === 'id' &&
          <>
            <meta content="width=device-width, initial-scale=1, shrink-to-fit=no" name="viewport" />
            <meta name="csrf-param" content="authenticity_token" />
            <meta name="csrf-token" content="c+0ddbAcSs2LJr0GS/CW/5FuKK1gqqPFR57AIUxHOxn7C9dcFRHYhHXcg8uZ6q1Vz7COTRE3BrfyY5N+nqOm+g==" />
            <meta content="text/html; charset=UTF-8" httpEquiv="Content-Type" />
            <meta content="width=device-width, initial-scale=1, shrink-to-fit=no" name="viewport" />
            <meta content="Triv - Jual Beli eMoney dan Aset Digital Terbesar di Indonesia" name="title" />
            <meta  content="Triv memudahkan Anda dalam jual - beli berbagai eMoney dan aset digital secara cepat dan aman hanya dalam hitungan Detik 24 jam tanpa hari libur." name="description" />
            <meta content="origin-when-crossorigin" name="referrer" />
            <meta content="index, follow, noodp" name="robots" />
            <meta content="index, follow, noodp" name="googlebot" />
            <meta content="index, follow, noodp" name="msnbot" />
            <meta content="id_ID" property="og:locale" />
            <meta content="Triv" property="og:site_name" />
            <meta content="website" property="og:type" />
            <meta content="Login" property="og:title" />
            <meta content="Triv memudahkan Anda dalam jual - beli berbagai eMoney dan aset digital secara cepat dan aman hanya dalam hitungan Detik 24 jam tanpa hari libur." property="og:description" />
            <meta content="https://triv.co.id/id/login" property="og:url" />
            <meta content="https://triv.co.id/assets/logo_triv-6bfd8b14aab606f32abb737168e7d6ce14c567877614d274e9675d768da1a505.png" property="og:image" />
            <meta content="https://triv.co.id/assets/logo_triv-6bfd8b14aab606f32abb737168e7d6ce14c567877614d274e9675d768da1a505.png" property="og:image:secure_url" />
            <meta content="196" property="og:image:width" />
            <meta content="82" property="og:image:height" />
            <meta content="summary_large_image" name="twitter:card" />
            <meta content="Login" name="twitter:title" />
            <meta content="Triv memudahkan Anda dalam jual - beli berbagai eMoney dan aset digital secara cepat dan aman hanya dalam hitungan Detik 24 jam tanpa hari libur." name="twitter:description" />
            <meta content="https://triv.co.id/assets/logo_triv-6bfd8b14aab606f32abb737168e7d6ce14c567877614d274e9675d768da1a505.png" name="twitter:image" />
          </>
        }
        {params.lang === 'en' &&
          <>
            <meta content="width=device-width, initial-scale=1, shrink-to-fit=no" name="viewport" />
            <meta name="csrf-param" content="authenticity_token" />
            <meta name="csrf-token" content="c+0ddbAcSs2LJr0GS/CW/5FuKK1gqqPFR57AIUxHOxn7C9dcFRHYhHXcg8uZ6q1Vz7COTRE3BrfyY5N+nqOm+g==" />
            <meta content="text/html; charset=UTF-8" httpEquiv="Content-Type" />
            <meta content="width=device-width, initial-scale=1, shrink-to-fit=no" name="viewport" />
            <meta content="Triv - Jual Beli eMoney dan Aset Digital Terbesar di Indonesia" name="title" />
            <meta content="Triv memudahkan Anda dalam jual - beli berbagai eMoney dan aset digital secara cepat dan aman hanya dalam hitungan Detik 24 jam tanpa hari libur." name="description" />
            <meta content="origin-when-crossorigin" name="referrer" />
            <meta content="index, follow, noodp" name="robots" />
            <meta content="index, follow, noodp" name="googlebot" />
            <meta content="index, follow, noodp" name="msnbot" />
            <meta content="id_ID" property="og:locale" />
            <meta content="Triv" property="og:site_name" />
            <meta content="website" property="og:type" />
            <meta content="Login" property="og:title" />
            <meta content="Triv memudahkan Anda dalam jual - beli berbagai eMoney dan aset digital secara cepat dan aman hanya dalam hitungan Detik 24 jam tanpa hari libur." property="og:description" />
            <meta content="https://triv.co.id/id/login" property="og:url" />
            <meta content="https://triv.co.id/assets/logo_triv-6bfd8b14aab606f32abb737168e7d6ce14c567877614d274e9675d768da1a505.png" property="og:image" />
            <meta content="https://triv.co.id/assets/logo_triv-6bfd8b14aab606f32abb737168e7d6ce14c567877614d274e9675d768da1a505.png" property="og:image:secure_url" />
            <meta content="196" property="og:image:width" />
            <meta content="82" property="og:image:height" />
            <meta content="summary_large_image" name="twitter:card" />
            <meta content="Login" name="twitter:title" />
            <meta content="Triv memudahkan Anda dalam jual - beli berbagai eMoney dan aset digital secara cepat dan aman hanya dalam hitungan Detik 24 jam tanpa hari libur." name="twitter:description" />
            <meta content="https://triv.co.id/assets/logo_triv-6bfd8b14aab606f32abb737168e7d6ce14c567877614d274e9675d768da1a505.png" name="twitter:image" />
          </>
        }
      </head>
      <body>
        <main className='register-page sm:mobile-responsive md:mobile-responsive light-theme'>
          <div className='register-container'>
            <div className='left-subcontainer fit-screen'>
              <div className='logo-subcontainer'>
                <TrivIcon color={'#318AC6'}/>
              </div>
              <OTPRegisterSubcontainer />
            
              <div className='terdaftar-subcontainer'>
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
            <div className='right-subcontainer'>
              <div className='title-subcontainer'>
                <h1>{dictRegister.welcome_text}</h1>
                <p>{dictRegister.sub_welcome_text}</p>
                <div className='terdaftar-diawasi'>
                    <Image src='/images/otoritas-keuangans/bsi-logo.png' className='bsi-logo' alt='bsi' width={24.88} height={13.61}/>
                    <Image src='/images/otoritas-keuangans/cisa-logo.png' className='cisa-logo' alt='cisa' width={19.83} height={18.27}/>
                    <Image src='/images/otoritas-keuangans/cism-logo.png' className='cism-logo' alt='cism' width={43.55} height={16.72}/>
                    <Image src='/images/otoritas-keuangans/pci-logo.png' className='pci-logo' alt='pci' width={19.83} height={15.94}/>
                    <Image src='/images/otoritas-keuangans/cissp-logo.png' className='cissp-logo' alt='cissp' width={58.57} height={17.16}/>
                </div>
              </div>
              <div className='image-subcontainer'>
                <Image src='/images/others/security-password.png' alt='security password' width={574} height={400}/>
              </div>
              <div className='logo-subcontainer'>
                <TrivIcon color={'#318AC6'}/>
              </div>
            </div>
          </div>
        </main>
      </body>
    </html>
  )
}
