import Image from 'next/image'
import React from 'react'

const HomeInvestasiSection = () => {
  return (
    <section className='home-investasi-section'>
        <div className='investasi-section-box'>
            <h2>Investasi mudah dan cepat</h2>
            <div className='investasi-details'>
                <div className='investasi-detail'>
                    <div className='investasi-detail-description'>
                        <h5>Buka Akun Gratis &amp; Cepat</h5>
                        <p>Daftar dengan mudah dalam hitungan detik</p>
                    </div>
                    <Image src='/images/devices/iphone-15pro-a.png' alt='iphone 15 pro' width={193} height={286} />
                </div>
                <div className='investasi-detail'>
                    <div className='investasi-detail-description'>
                        <h5>Deposit &amp; Mulai Investasi</h5>
                        <p>Daftar dengan mudah dalam hitungan detik</p>
                    </div>
                    <Image src='/images/devices/iphone-15pro-b.png' alt='iphone 15 pro' width={193} height={286} />
                </div>
                <div className='investasi-detail'>
                    <div className='investasi-detail-description'>
                        <h5>Investasi &amp; Trading Crypto</h5>
                        <p>Daftar dengan mudah dalam hitungan detik</p>
                    </div>
                    <Image src='/images/devices/iphone-15pro-c.png' alt='iphone 15 pro' width={193} height={286} />
                </div>
            </div>
        </div>
    </section>
  )
}

export default HomeInvestasiSection
