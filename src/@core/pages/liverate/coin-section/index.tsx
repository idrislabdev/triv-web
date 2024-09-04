import { ArrowRightIcon, ChartPie, ChartPie2, ChartPPT, ChevronIconDown, TrendChartIcon, TrendChartIcon2 } from '@/@core/components/custom-icons'
import React from 'react'
import LiverateCoinChartWrapper from '../coin-chart-wrapper'
import Image from 'next/image'
import CardNewsBlog from '@/@core/components/cards/card-news-blog'
import { IBlog, ILiverateMini } from '@/@core/@types/interfaces'

const LiverateCoinSection = (props: {lang:string, objLang:any, blogs:IBlog[], liverateMinies:ILiverateMini[]}) => {
  const { lang, objLang, blogs, liverateMinies } = props
  return (
    <section className='liverate-coin-section'>
        <h2><span><Image src={'https://cihuy.triv.id/assets/user-dashboard/icons/bitcoin-7db0cde8ba2cc1983bb0a13bf2ef1f6628a4f75828adaf4a9acf001f6df2df68.png'} alt='bitcoin' width={0} height={0} sizes='100%'/></span>Harga Bitcoin (BTC) Hari Ini</h2>
        <div className='coin-container'>
          <div className='coin-main-container'>
              <div className='chart-subcontainer'>
                <LiverateCoinChartWrapper />
              </div>
              <div className='about-subcontainer'>
                <h5>Tentang Bitcoin</h5>
                <p>Bitcoin (BTC) adalah kripto pertama di dunia. ia disebut sebagai “electronic cash” yang didistribusikan secara peer-to-peer untuk menghindari double spending.</p>
                <a>Website Resmi <ArrowRightIcon color={'#fff'} /></a>
              </div>
              <div className='activity-subcontainer'>
                <h5>Aktivitas Pengguna Triv</h5>
                <div className='progress-cubcontainer'>
                  <div className='key-progress'>
                    <span className='w-[52%] progress-beli'></span>
                    <span className='w-[48%] progress-jual'></span>
                  </div>
                  <div className='key-progress-label'>
                    <label className='progress-beli'><span className='progress-beli'></span>52% Beli</label>
                    <label className='progress-jual'><span className='progress-jual'></span>48% Jual</label>
                  </div>
                </div>
                <p>Aktivitas beli dan jual BTC seluruh pengguna Triv dalam 24 jam terakhir. Hal ini menunjukkan Trivuser tertarik pada aset, namun bukan ajakan untuk membeli atau menjual aset</p>
              </div>
              <div className='key-subcontainer'>
                <h5>Key Statistic</h5>
                <div className='key-statistic-subcontainer'>
                  <div className='key-statistic'>
                    <TrendChartIcon2 color={'#fff'} />
                    <label>Kapasitas Pasar</label>
                    <p>268T</p>
                  </div>
                  <div className='key-statistic'>
                    <TrendChartIcon color={'#fff'} />
                    <label>Nilai Terdilusi Penuh</label>
                    <p>338T</p>
                  </div>
                  <div className='key-statistic'>
                    <ChartPie color={'#fff'} />
                    <label>Suplai Yang Beredar</label>
                    <p>35.7M ADA</p>
                  </div>
                  <div className='key-statistic'>
                    <ChartPie2 color={'#fff'} />
                    <label>Suplai Maksimum</label>
                    <p className='!text-[#71BBED]'>45M</p>
                  </div>
                  <div className='key-statistic'>
                    <ChartPPT color={'#fff'} />
                    <label>Volume Global</label>
                    <p className='!text-[#EB5757]'>5.14T</p>
                  </div>
                </div>
              </div>
              <div className='blog-subcontainer'>
                {
                  blogs.map((item:any, index:number) => (
                    <CardNewsBlog lang={lang} item={item} key={index}/>
                  ))
                }
              </div>
          </div>
          <div className='coin-side-container'>
              <div className='buy-subcontainer'>
                <h5>Beli Bitcoin Mulai dari Rp50.000!</h5>
                <div className='input-subcontainer'>
                  <label>Masukkan jumlah pembelian:</label>
                  <div className='input-area'>
                    <div className='group-input append'>
                        <span className='append'>Rp</span>
                        <input placeholder='0'/>
                    </div>
                    <div className='list-button'>
                      <a>100.00</a>
                      <a>500.00</a>
                      <a>1.000.00</a>
                    </div>
                  </div>
                </div>
                <div className='value-subcontainer'>
                  <span>Kamu akan mendapatkan:</span>
                  <label>BTC <span>0</span></label>
                </div>
                <button>Beli Bitcoin Sekarang</button>
              </div>
              <div className='other-coins-subcontainer'>
                <h5>Lihat Juga</h5>
                <p>Harga crypto lain yang tersedia di Triv dalam 24 jam terakhir</p>
                <div className='other-list'>
                  {
                    liverateMinies.map((item:ILiverateMini, index:number) => (
                      <a className='liverate-mini' key={index}>
                        <div className='symbol-area'>
                          <Image src={item.icon_url} alt='bitcoin' width={0} height={0} sizes='100%'/>
                          <div className='area-text'>
                            <label>{item.code}</label>
                            <span>{item.currency}</span>
                          </div>
                        </div>
                        <div className='currency-area'>
                          <label>IDR {item.rate.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</label>
                          <span className={item.change_24h < 0 ? 'down' : 'up'}>
                          {item.change_24h < 0 ? '-' : '+'}
                          {(item.change_24h * 100 * (item.change_24h < 0 ? -1 : 1)).toFixed()}%</span>
                        </div>
                      </a>
                    ))
                  }
                </div>
              </div>
          </div>
        </div>
    </section>
  )
}

export default LiverateCoinSection
