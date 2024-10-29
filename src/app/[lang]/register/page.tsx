import { HideEyeIcon, LockIcon, MailIcon, TrivIcon } from '@/@core/components/custom-icons'
import React from 'react'
import Image from 'next/image'
import Register from '@/@core/pages/register';
import { getDictionaryRegister } from '@/app/dictionaries';

import '@/styles/register.css'

export default async function RegisterPage({ params }: any) {
  const dictRegister = await getDictionaryRegister(params.lang);

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
        <main className='register-page lg:medium-responsive md:mobile-responsive sm:mobile-responsive light-theme'>
          <Register dictRegister={dictRegister} />
        </main>
      </body>
    </html>
  )
}
