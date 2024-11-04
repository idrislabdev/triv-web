"use client"

import { ILiverate } from '@/@core/@types/interfaces'
import { CaretDownIcon, CaretUpIcon, CryptoIcon, EuroIcon, GoldIcon, SearchIcon, TrendUpIcon, UsdIcon } from '@/@core/components/custom-icons'
import axiosInstance from '@/@core/utils/axios'
import Image from 'next/image'
import React, { useCallback, useEffect, useState } from 'react'

const LiverateListSection = (props: {liverates: ILiverate[]}) => {
  const { liverates } = props
  const [dataLiverates, setDataLiverates] = useState(liverates)
  const [category, setCategory] = useState('')
  const [params, setParams] = useState<{page:number,per:number,category:string|null,keyword:string|null}>({page: 1, per: 10, category: null, keyword: null})
  
  const fetchDataLiverate = useCallback(async () => {
    const resp = await axiosInstance.get(`/v2/liverate`, { params: { ...params } })
    setDataLiverates(resp.data.data)
  },[params])

  const changeCategory = (value:string) => {
    setCategory(value)
    setParams({...params, category:value})
  }

  useEffect(() => {
    fetchDataLiverate()
  }, [category, fetchDataLiverate])

  return (
    <section className='liverate-list-section'>
        <div className='list-header'>
            <div className='liverate-menu'>
              <ul>
                <li><a className={category === 'crypto' ? '!text-[#71BBED]' : '!text-[#838899]'} onClick={_ => changeCategory('crypto')}>
                  <span><CryptoIcon color={category === 'crypto' ? '#71BBED' : '#838899'} /></span>Crypto</a>
                </li>
                <li><a className={category === 'usd' ? '!text-[#71BBED]' : '!text-[rgb(131,136,153)]'} onClick={_ => changeCategory('usd')}>
                  <span><UsdIcon color={category === 'usd' ? '#71BBED' : '#838899'}  /></span>USD</a>
                </li>
                <li><a className={category === 'stocks' ? '!text-[#71BBED]' : '!text-[#838899]'} onClick={_ => changeCategory('stocks')}>
                  <span><TrendUpIcon color={category === 'stocks' ? '#71BBED' : '#838899'} /></span>Stock</a>
                </li>
                <li><a className={category === 'gold' ? '!text-[#71BBED]' : '!text-[#838899]'} onClick={_ => changeCategory('gold')}>
                  <span><GoldIcon color={category === 'gold' ? '#71BBED' : '#838899'} /></span>Gold</a>
                </li>
                <li><a className={category === 'euro' ? '!text-[#71BBED]' : '!text-[#838899]'} onClick={_ => changeCategory('euro')}>
                  <span><EuroIcon color={category === 'euro' ? '#71BBED' : '#838899'} /></span>Euro</a>
                </li>
              </ul>
            </div>
            <div className='group-input append'>
                <span className='append'><SearchIcon color={'#fff'} /></span>
                <input placeholder='Asset name'/>
            </div>
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
            {dataLiverates.map((item, index) => (
              <div className='row-list' key={index}>
                <div className='col-left'>
                  <div className='col-nama'>
                    <Image className='icon-liverate' src={item.icon_url} alt={item.label} width={0} height={0} sizes='100%'/>
                    <div className='col-nama-desc'>
                      <p>{item.label} <span>({item.currency})</span></p>
                      <span>{item.currency}</span>
                    </div>
                  </div>
                </div>
                <div className='col-right'>
                  <div className='col-beli'><label>IDR {item.buy_rate ? item.buy_rate.toLocaleString() : "0"}</label></div>
                  <div className='col-jual'><label>IDR {item.sell_rate ? item.sell_rate.toLocaleString() : "0"}</label></div>
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
