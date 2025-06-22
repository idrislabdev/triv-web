import { GlobeIcon, WhitepaperIcon } from '@/@core/components/custom-icons'
import React from 'react'

const CoinAbout = (props: {objLang:any, asset:any}) => {
    const { objLang, asset } = props
  return (
    <div className='about-area'>
        <div className='content'>
            <h5>Tentang {asset.label}</h5>
            <p>
             {objLang.trade_about.content.replaceAll("__label__", asset.label)}
            </p>
        </div>
        {/* <div className='badges'>
            <label className='badge'>
                <span><GlobeIcon /></span>
                Situs web
            </label>
            <label className='badge'>
                <span><WhitepaperIcon /></span>
                Whitepaper
            </label>
        </div> */}
    </div>
  )
}

export default CoinAbout