import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRightIcon } from '@/@core/components/custom-icons'

const FuturesBuySellAssetsSection = () => {
    return (
        <section className='futures-buy-sell-assets-section'>
            <div className='main-container'>
                <div className='image-subcontainer'>
                    <Image src='/images/others/woman-and-iphone-new.png' alt='woman and iphone' width={0} height={0} sizes='100%'/>
                </div>
                <div className='description-subcontainer'>
                    <div className='start-now-description'>
                        <h2>Beli dan Jual Aset Digital <span>dimanapun</span> dan <span>kapanpun</span> dengan Aplikasi Triv</h2>
                        <h5>Manage all of your portfolio and transaction in 1 device</h5>
                        <p>With the Triv application you can carry out all buying, selling and staking Cryptocurrency transactions in Indonesia Transaction in Indonesia in one hand. Get the best experience in monitoring and building your Digital Asset portfolio with the Triv application.</p>
                    </div>
                    <div className='start-button-logo'>
                        <Link href={`/id/register`}>Daftar Sekarang <ArrowRightIcon color={'#fff'}/></Link>
                        <div className='start-now-store'>
                            <Image src='/images/apps-store/playstore-logo.png' className='playstore-logo' alt='playstore logo' width={0} height={0} sizes='100%'/>
                            <Image src='/images/apps-store/appstore-logo.png' className='apple-logo' alt='apple logo' width={0} height={0} sizes='100%'/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      )
}

export default FuturesBuySellAssetsSection
