import React from 'react'
import Image from 'next/image'

const StocksRegisterNowSection = (props: {objLang:any}) => {
    const { objLang } = props;
    return (
         <section className='stocks-register-now-section'>
         <div className='image-container'>
             <Image src='/images/devices/imac.png' alt='imac' width={392} height={355}/>
         </div>
         <div className='description-container'>
             <div className='start-now-description'>
                <h2>{objLang.title}</h2>
                <p>{objLang.description}</p>
             </div>
             <div className='start-button-logo'>
                <a>{objLang.button_text}</a>
                 <div className='start-now-store sm:!hidden'>
                     <Image src='/images/apps-store/apple.png' className='apple-logo' alt='apple logo' width={31} height={37}/>
                     <Image src='/images/apps-store/playstore.png' className='playstore-logo' alt='playstore logo' width={30} height={32}/>
                 </div>
                 <div className='start-now-store-mobile sm:!flex'>
                     <Image src='/images/apps-store/appstore-logo.png' className='apple-logo' alt='apple logo' width={130.64} height={38.71}/>
                     <Image src='/images/apps-store/playstore-logo.png' className='playstore-logo' alt='playstore logo' width={114.43} height={37.02}/>
                 </div>
             </div>
         </div>
     </section>
      )
}

export default StocksRegisterNowSection
