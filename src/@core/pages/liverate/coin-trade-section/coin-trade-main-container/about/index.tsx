import { GlobeIcon, WhitepaperIcon } from '@/@core/components/custom-icons'
import React from 'react'

const CoinAbout = () => {
  return (
    <div className='about-area'>
        <div className='content'>
            <h5>Tentang Bitcoin</h5>
            <p>
                Bitcoin menggunakan teknologi peer-to-peer untuk beroperasi, tanpa otoritas pusat atau bank sentral; 
                pengelolaan transaksi dan penerbitan bitcoin dilakukan secara kolektif oleh jaringan.
                Bitcoin merupakan sumber-terbuka; rancangannya bersifat umum.
            </p>
        </div>
        <div className='badges'>
            <label className='badge'>
                <span><GlobeIcon /></span>
                Situs web
            </label>
            <label className='badge'>
                <span><WhitepaperIcon /></span>
                Whitepaper
            </label>
        </div>
    </div>
  )
}

export default CoinAbout