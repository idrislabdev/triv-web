import Image from 'next/image'
import React from 'react'

const HomeDividenStakingSection = () => {
  return (
    <section className='home-dividen-staking-section'>
      <div className='dividen-staking-device'>
        <Image src='/images/devices/iphone-with-description.png' alt='iphone with description' width={505} height={386} />
      </div>
      <div className='dividen-staking-description'>
        <div className='staking-description-title'>
            <h2>Dapatkan Dividen Staking Crypto Setiap Hari</h2>
            <p>Mulai cukup dengan 50rb dan tumbuhkan cryptomu bersama dengan TRIV</p>
        </div>
        <a>Daftar Sekarang</a>
      </div>
    </section>
  )
}

export default HomeDividenStakingSection
