import { ILiverate } from '@/@core/@types/interfaces'
import { CaretDownIcon, CaretUpIcon, CryptoIcon, EuroIcon, GoldIcon, TrendUpIcon, UsdIcon } from '@/@core/components/custom-icons'
import Image from 'next/image'
import React from 'react'

const LiverateListSection = (props: {liverates: ILiverate[]}) => {
  const { liverates } = props
  return (
    <section className='liverate-list-section'>
        <div className='list-header'>
            <div className='liverate-menu'>
              <ul>
                <li><a className='!text-[#71BBED]'><span><CryptoIcon color='#71BBED' /></span>Crypto</a></li>
                <li><a className='!text-[#838899]'><span><UsdIcon color='#838899' /></span>USD</a></li>
                <li><a className='!text-[#838899]'><span><TrendUpIcon color='#838899' /></span>Stock</a></li>
                <li><a className='!text-[#838899]'><span><GoldIcon color='#838899' /></span>Gold</a></li>
                <li><a className='!text-[#838899]'><span><EuroIcon color='#838899' /></span>Euro</a></li>
              </ul>
            </div>
            <input placeholder='Asset name' />
        </div>
        <div className='list-liverate-content'>
          <div className='list-table-header'>
            <div className='col-left'>
              <div className='col-nama'><label>Nama Aset</label></div>
            </div>
           <div className='col-right'>
              <div className='col-beli'><label>Beli (IDR)</label></div>
              <div className='col-jual'><label>Jual (IDR)</label></div>
              <div className='col-change'><label>Change</label></div>
              <div className='col-trend'><label>Trend</label></div>
           </div>
           <div className='col-aksi'></div>
          </div>
          <div className='list-table-body'>
            {liverates.map((item, index) => (
              <div className='row-list' key={index}>
                <div className='col-left'>
                  <div className='col-nama'>
                    <Image className='icon-liverate' src={item.icon_url} alt={item.label} width={46} height={46}/>
                    <div className='col-nama-desc'>
                      <p>{item.label} <span>({item.currency})</span></p>
                      <span>{item.currency}</span>
                    </div>
                  </div>
                </div>
                <div className='col-right'>
                  <div className='col-beli'><label>IDR {item.buy_rate.toLocaleString()}</label></div>
                  <div className='col-jual'><label>IDR {item.sell_rate.toLocaleString()}</label></div>
                  <div className='col-change'>
                    <label>
                    {item.change_24h < 0 && <span><CaretDownIcon color={'#EB5757'} /></span>}
                    {item.change_24h >=0 && <span><CaretUpIcon color={'#71BBED'} /></span>}
                      <span className={item.change_24h >=0 ? 'text-primary' : 'text-red-500'}>{(item.change_24h*100).toFixed(0)}%</span>
                    </label>
                    
                  </div>
                  <div className='col-trend'>
                    {item.change_24h < 0 && <Image className='graph' src='/images/others/graph-down.png' alt='graph down' width={51} height={28}/> }
                    {item.change_24h >= 0 && <Image className='graph' src='/images/others/graph-up.png' alt='graph up' width={51} height={28}/> }
                  </div>
                </div>
                <div className='col-aksi'>
                  <button>Trade</button>
                </div>
              </div>
            ))

            }
          </div>
        </div>
    </section>
  )
}

export default LiverateListSection
