import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRightIcon } from '@/@core/components/custom-icons'

const HomeBuySellAssetsSection = (props: {lang:string, objLang:any}) => {
    const { lang, objLang } = props
    return (
         <section className='home-buy-sell-assets-section'>
         <div className='image-container'>
             <Image src='/images/others/woman-and-iphone-new.png' alt='woman and iphone' width={0} height={0} sizes='100%'/>
         </div>
         <div className='description-container'>
             <div className='start-now-description'>
                <h2>{objLang.title_1} <span>{objLang.title_2}</span> {objLang.title_3} <span>{objLang.title_4}</span> {objLang.title_5}</h2>
                <h5>{objLang.subtitle}</h5>
                <p>{objLang.description}</p>
             </div>
             <div className='start-button-logo'>
                <Link href={`/${lang}/register`}>{objLang.button} <ArrowRightIcon color={'#fff'}/></Link>
                 <div className='start-now-store'>
                     <Image src='/images/apps-store/playstore-logo.png' className='playstore-logo' alt='playstore logo' width={0} height={0} sizes='100%'/>
                     <Image src='/images/apps-store/appstore-logo.png' className='apple-logo' alt='apple logo' width={0} height={0} sizes='100%'/>
                 </div>
             </div>
         </div>
     </section>
      )
}

export default HomeBuySellAssetsSection
