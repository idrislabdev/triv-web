import React, { useEffect } from 'react'
import Image from 'next/image'
import { ILiverateMini } from '@/@core/@types/interfaces'


const HomeAssetCryptoSection = async (props : {liverates:ILiverateMini[]}) => {
    const {liverates} = props
    return (
        <section className='home-assets-crypto-section'>
            <div className='crypto-section-title'>
                <h2>Aset Crypto Populer</h2>
                <a>Lihat Aset Lainnya</a>
            </div>
            <div className='crypto-section-thumbs'>
                {liverates?.map((item:ILiverateMini, index:number) => (
                    <div className='asset-crypto-thumb' key={index}>
                        <div className='asset-crypto-thumb-container'>
                            <div className='crypto-thumb-top'>
                                <div className='icon-thumb-top'>
                                    <Image src={`${item.icon_url}`} alt='bitcoin' width={36} height={36}/>
                                </div>
                                <label>{item.currency}</label>
                            </div>
                            <div className='crypto-thumb-bottom'>
                                <label className='thumb-bottom-idr'>IDR {item.rate}</label>
                                <label className='thumb-bottom-index'>{item.change_24h * 100}%</label>
                            </div>
                        </div>
                    </div>
                ))

                }
            </div>
        </section>
    )
}

export default HomeAssetCryptoSection
