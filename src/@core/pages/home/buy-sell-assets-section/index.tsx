import React from 'react'
import Image from 'next/image'

const HomeBuySellAssetsSection = () => {
    return (
         <section className='home-buy-sell-assets-section'>
         <div className='image-container'>
             <Image src='/images/devices/imac.png' alt='imac' width={392} height={355}/>
         </div>
         <div className='description-container'>
             <div className='start-now-description'>
                <h2>Buy and sell Digital Assets on the go with Triv mobile.</h2>
                <h5>Manage all of your portfolio and transaction in 1 device</h5>
                <p>With the Triv application you can carry out all buying, selling and staking Cryptocurrency transactions in Indonesia Transaction in Indonesia in one hand. Get the best experience in monitoring and building your Digital Asset portfolio with the Triv application.</p>
             </div>
             <div className='start-button-logo'>
             <a>Daftar Sekarang</a>
                 <div className='start-now-store'>
                     <Image src='/images/apps-store/appstore-logo.png' className='apple-logo' alt='apple logo' width={130.64} height={38.71}/>
                     <Image src='/images/apps-store/playstore-logo.png' className='playstore-logo' alt='playstore logo' width={114.43} height={37.02}/>
                 </div>
             </div>
         </div>
     </section>
      )
}

export default HomeBuySellAssetsSection
