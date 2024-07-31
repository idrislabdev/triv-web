import Image from 'next/image'
import React from 'react'

const HomeEwalletSection = () => {
  return (
    <section className='home-ewallet-section'>
        <div className='ewallet-description'>
            <h2>Triv Mendukung 100 Bank &amp; E-wallet di Indonesia untuk semua transaksi kami</h2>
            <h5>24/7 Real Time Deposit &amp; Withdrawal</h5>
            <p>
                Seluruh deposit dan penarikan rupiah Triv diproses secara instant dalam hitungan menit ke 
                berbagai bank dan e-wallet.Butuh dana tengah malam? Done! tidak perlu menunggu hingga esok harinya. 
                Berbeda dengan pasar saham dan reksa dana, Aset digital tidak memiliki hari libur, 
                seluruh transaksi deposit dan penarikan diproses 24 jam termasuk pada hari libur.
            </p>
        </div>
        <div className='ewallet-image'>
            <Image src='/images/others/woman-and-iphone.png' alt='woman and iphone' width={455} height={435} />
        </div>
    </section>
  )
}

export default HomeEwalletSection
