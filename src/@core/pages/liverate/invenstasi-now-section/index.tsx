import React from 'react'
import Image from 'next/image'

const LiverateInvestasiNowSection = () => {
    return (
        <section className='liverate-investasi-now-section'>
            <div className='investasi-now-device'>
                <Image src='/images/devices/imac.png' alt='imac' width={392} height={355}/>
            </div>
            <div className='investasi-now-descriptions'>
                <div className='investasi-now-description'>
                    <h2>Mulai Investasi Sekarang</h2>
                    <p>Daftar dalam hitungan menit dan capai tujuan investasimu sekarang🚀</p>
                </div>
                <div className='investasi-button-logo'>
                    <a>Daftar Sekarang</a>
                    <div className='investasi-now-store'>
                        <Image src='/images/apps-store/apple.png' className='apple-logo' alt='apple logo' width={31} height={37}/>
                        <Image src='/images/apps-store/playstore.png' className='playstore-logo' alt='playstore logo' width={30} height={32}/>
                    </div>
                </div>
            </div>
        </section>
      )
}

export default LiverateInvestasiNowSection
