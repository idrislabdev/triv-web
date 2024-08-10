import React from 'react'
import Image from 'next/image'

const StakingStartNowSection = () => {
    return (
        <section className='staking-start-now-section'>
            <div className='image-container'>
                <Image src='/images/devices/imac.png' alt='imac' width={392} height={355}/>
            </div>
            <div className='description-container'>
                <div className='start-now-description'>
                    <h2>Triv Crypto Staking Terbaik, Mulai Hanya Dengan Rp 50.000 !</h2>
                    <p>Bangun portfolio kriptomu. kembangkan dengan staking crypto terbaik di ecosytem Triv marketplace Cryptocurrency Indonesia, terdaftar dan diawasi oleh Bappebti.</p>
                </div>
                <div className='start-button-logo'>
                    <a>Mulai Sekarang</a>
                    <div className='start-now-store'>
                        <Image src='/images/apps-store/apple.png' className='apple-logo' alt='apple logo' width={31} height={37}/>
                        <Image src='/images/apps-store/playstore.png' className='playstore-logo' alt='playstore logo' width={30} height={32}/>
                    </div>
                </div>
            </div>
        </section>
      )
}

export default StakingStartNowSection
