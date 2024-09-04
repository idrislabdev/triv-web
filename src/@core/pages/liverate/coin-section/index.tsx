import { ArrowRightIcon, TrendChartIcon } from '@/@core/components/custom-icons'
import React from 'react'

const LiverateCoinSection = (props: {objLang:any}) => {
  const { objLang } = props
  return (
    <section className='liverate-coin-section'>
        <div className='coin-main-container'>
            <div className='about-subcontainer'>
              <h5>Tentang Bitcoin</h5>
              <p>Bitcoin (BTC) adalah kripto pertama di dunia. ia disebut sebagai “electronic cash” yang didistribusikan secara peer-to-peer untuk menghindari double spending.</p>
              <a>Website Resmi <ArrowRightIcon color={'#fff'} /></a>
            </div>
            <div className='activity-subcontainer'>
              <h5>Aktivitas Pengguna Triv</h5>
              <div className='key-progerss'></div>
              <p>Aktivitas beli dan jual BTC seluruh pengguna Triv dalam 24 jam terakhir. Hal ini menunjukkan Trivuser tertarik pada aset, namun bukan ajakan untuk membeli atau menjual aset</p>
            </div>
            <div className='key-subcontainer'>
              <div className='key-statistic'>
                <TrendChartIcon color={'#fff'} />
                <label>Kapasitas Pasar</label>
                <p></p>
              </div>
              <div className='key-statistic'>
                <TrendChartIcon color={'#fff'} />
                <label>Nilai Terdilusi Penuh</label>
                <p></p>
              </div>
              <div className='key-statistic'>
                <TrendChartIcon color={'#fff'} />
                <label>Suplai Yang Beredar</label>
                <p></p>
              </div>
              <div className='key-statistic'>
                <TrendChartIcon color={'#fff'} />
                <label>Suplai Maksimum</label>
                <p></p>
              </div>
              <div className='key-statistic'>
                <TrendChartIcon color={'#fff'} />
                <label>Volume Global</label>
                <p></p>
              </div>
            </div>
            <div className='blog-subcontainer'></div>
        </div>
        <div className='bitcoin-side-container'>
            <div className='buy-subcontainer'></div>
            <div className='other-coins-subcontainer'></div>
        </div>
    </section>
  )
}

export default LiverateCoinSection
