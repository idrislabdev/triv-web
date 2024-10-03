import Image from 'next/image'
import React from 'react'

const StakingBannerSection = () => {
  return (
    <section className='staking-banner-section'>
        <div className='main-container'>
            <div className='sub-container'>
                <div className='text-area'>
                    <div className='text-header'>
                        <h2>
                            Triv Crypto Staking Terbaik, 
                            Mulai Hanya Dengan Rp 50.000 !
                        </h2>
                        <p>
                            Bangun portfolio kriptomu. kembangkan dengan staking crypto terbaik di ecosytem 
                            Triv marketplace Cryptocurrency Indonesia, terdaftar dan diawasi oleh Bappebti.
                        </p>
                    </div>
                    <div className='button-area'>
                        <a>Mulai Sekarang</a>
                        <div className='app-store-list'>
                            <Image src='/images/apps-store/playstore-logo-new.png' className='playstore-logo' alt='playstore logo' width={0} height={0} sizes='100%'/>
                            <Image src='/images/apps-store/appstore-logo-new.png' className='apple-logo' alt='apple logo' width={0} height={0} sizes='100%'/>
                        </div>
                    </div>
                </div>
                <div className='image-area'>
                    <Image src='/images/others/happy-asian-man-with-phone.png' alt='fee icon' width={0} height={0} sizes='100%'/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default StakingBannerSection
