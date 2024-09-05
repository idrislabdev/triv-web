"use client"
import { ILiverateMini } from '@/@core/@types/interfaces';
import Image from 'next/image';
import React, { useState } from 'react'

const CoinSideContainer = (props: {asset:any, liverateMinies:ILiverateMini[]}) => {
    const { asset, liverateMinies } = props;
    const [amount, setAmount] = useState("0")
    return (
        <div className='coin-side-container'>
            <div className='buy-subcontainer'>
            <h5>Beli {asset.label} Mulai dari Rp50.000!</h5>
            <div className='input-subcontainer'>
                <label>Masukkan jumlah pembelian:</label>
                <div className='input-area'>
                    <div className='group-input append'>
                        <span className='append'>Rp</span>
                        <input 
                            value={amount} 
                            placeholder='0' 
                            onInput={(e: React.ChangeEvent<HTMLInputElement>) => setAmount(e.target.value.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, "."))}
                        />
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
                <label>{asset.currency} <span>0</span></label>
            </div>
            <button>Beli {asset.label} Sekarang</button>
            </div>
            <div className='other-coins-subcontainer'>
                <h5>Lihat Juga</h5>
                <p>Harga crypto lain yang tersedia di Triv dalam 24 jam terakhir</p>
                <div className='other-list'>
                    {
                        liverateMinies.map((item:ILiverateMini, index:number) => (
                            <a className='liverate-mini' key={index}>
                            <div className='symbol-area'>
                                <Image src={item.icon_url} alt='{asset.label}' width={0} height={0} sizes='100%'/>
                                <div className='area-text'>
                                    <label>{item.code}</label>
                                    <span>{item.currency}</span>
                                </div>
                            </div>
                            <div className='currency-area'>
                                <label>IDR {item.rate.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</label>
                                <span className={item.change_24h < 0 ? 'down' : 'up'}>
                                    {item.change_24h < 0 ? '-' : '+'}
                                    {(item.change_24h * 100 * (item.change_24h < 0 ? -1 : 1)).toFixed()}%
                                </span>
                            </div>
                            </a>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default CoinSideContainer
