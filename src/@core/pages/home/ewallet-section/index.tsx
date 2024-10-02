import Image from 'next/image'
import React from 'react'

const HomeEwalletSection = (props: {objLang:any}) => {
  const { objLang } = props
  return (
    <section className='home-ewallet-section'>
        <div className='ewallet-description'>
            <h2>{objLang.title_1} <span>{objLang.title_2}</span> {objLang.title_3}</h2>
            <h5>{objLang.subtitle}</h5>
            <p>
                {objLang.description}
            </p>
        </div>
        <div className='ewallet-image'>
            <Image src='/images/others/wallets.png' alt='wallets' width={0} height={0} sizes='100%' />
        </div>
    </section>
  )
}

export default HomeEwalletSection
