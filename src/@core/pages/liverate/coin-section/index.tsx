import React from 'react'
import Image from 'next/image'
import { IBlog, ICoin, ILiverateMini } from '@/@core/@types/interfaces'
import CoinSideContainer from './coin-side-container'
import CoinMainContainer from './coin-main-container'

const LiverateCoinSection = (props: {lang:string, objLang:any, blogs:IBlog[], liverateMinies:ILiverateMini[], coin:ICoin, asset:any}) => {
  const { lang, objLang, blogs, liverateMinies, coin, asset} = props
  return (
    <section className='liverate-coin-section'>
        <h2><span><Image src={'https://cihuy.triv.id/assets/user-dashboard/icons/bitcoin-7db0cde8ba2cc1983bb0a13bf2ef1f6628a4f75828adaf4a9acf001f6df2df68.png'} alt='bitcoin' width={0} height={0} sizes='100%'/>
          </span>Harga {asset.label} ({asset.currency}) Hari Ini
        </h2>
        <div className='coin-container'>
          <CoinMainContainer lang={lang} objLang={objLang} blogs={blogs} coin={coin} asset={asset} />
          <CoinSideContainer asset={asset} liverateMinies={liverateMinies} />
        </div>
    </section>
  )
}

export default LiverateCoinSection
