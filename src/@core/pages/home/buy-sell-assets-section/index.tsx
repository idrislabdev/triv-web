import Image from 'next/image'
import React from 'react'

const HomeBuySellAssetsSection = () => {
  return (
    <section className='home-buy-sell-assets-section'>
        <div className='home-buy-sell-device'>
            <Image src='/images/devices/imac.png' alt='imac' width={392} height={355}/>
        </div>
        <div className='home-buy-sell-descriptions'>
            <div className='home-buy-sell-description'>
                <h2>Buy and sell Digital Assets on the go with Triv mobile.</h2>
                <h5>Manage all of your portfolio and transaction in 1 device</h5>
                <p>
                    With the Triv application you can carry out all buying, selling and staking Cryptocurrency transactions in 
                    Indonesia Transaction in Indonesia in one hand. Get the best experience in monitoring and building your Digital 
                    Asset portfolio with the Triv application.
                </p>
            </div>
            <a>Daftar Sekarang</a>
            <div className='home-buy-sell-store'>
                <Image src='/images/apps-store/playstore-logo.png' className='buy-sell-playtore' alt='playstore logo' width={130} height={38}/>
                <Image src='/images/apps-store/appstore-logo.png' className='buy-sell-appstore' alt='appstore logo' width={114} height={38}/>
            </div>
        </div>
    </section>
  )
}

export default HomeBuySellAssetsSection
