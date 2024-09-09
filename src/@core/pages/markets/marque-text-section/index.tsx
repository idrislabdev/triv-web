import React from 'react'
import Marquee from "react-fast-marquee";

const MarqueTextSection = (props: {markets:any}) => {
    const { markets } = props
  return (
    <section className='marque-text-section'>
        <Marquee pauseOnHover={true}>
            {
                markets.map((item:any, index:number) => (
                    <label key={index}>{item.base_asset.code}/{item.quote_asset.code} <span>{item.price_changes.today}%</span></label>
                ))
            }
        </Marquee>
    </section>
  )
}

export default MarqueTextSection
