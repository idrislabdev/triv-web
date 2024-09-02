import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRightIcon } from '@/@core/components/custom-icons'

const HomeBuySellAssetsSection = (props: {lang:string, objLang:any}) => {
    const { lang, objLang } = props
    return (
         <section className='home-buy-sell-assets-section'>
         <div className='image-container'>
             <Image src='/images/devices/imac.png' alt='imac' width={392} height={355}/>
         </div>
         <div className='description-container'>
             <div className='start-now-description'>
                <h2>{objLang.title}</h2>
                <h5>{objLang.description_1}</h5>
                <p>{objLang.description_2}</p>
             </div>
             <div className='start-button-logo'>
                <Link href={`/${lang}/register`}>{objLang.button} <ArrowRightIcon color={'#fff'}/></Link>
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
