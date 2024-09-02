import Image from 'next/image'
import React from 'react'

const HomeEwalletSection = (props: {objLang:any}) => {
  const { objLang } = props
  return (
    <section className='home-ewallet-section'>
        <div className='ewallet-description'>
            <h2>{objLang.title}</h2>
            <h5>{objLang.subtitle}</h5>
            <p>
                {objLang.description}
            </p>
        </div>
        <div className='ewallet-image'>
            <Image src='/images/others/woman-and-iphone.png' alt='woman and iphone' width={455} height={435} />
        </div>
    </section>
  )
}

export default HomeEwalletSection
