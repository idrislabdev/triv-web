"use client"

import React, { useEffect, useState } from 'react'

const FuturesPemisahanSection = (props : {objLang:any, lang:string}) => {
    const { objLang, lang } = props
    const [active, setActive] = useState('spot')
    const [activeIndex, setActiveIndex] = useState(1)
    const [imgs, setImgs] = useState<string[]>(['overview', 'spot', 'futures'])
    const defaultImgs = ['overview', 'spot', 'futures']
    const switchIMage = (val:string, index:number) => {
        // console.log(val, defaultImgs[activeIndex],  index)
        const formerIndex = imgs.findIndex((x) => x == val)
        const former2 = imgs[1];
        const temp = [...imgs]
        temp[1] = val;
        temp[formerIndex] = former2; 
        setImgs(temp)
        setActive(val)
    }

    
    return (
        <section className='futures-pemisahan-section'>
            <div className='main-container'>
                <div className='title-subcontainer'>
                    <h2>{objLang.title_1} <span>{objLang.title_2}</span> {lang == 'en' && objLang.title_3}</h2>
                    <p>{objLang.description}</p>
                </div>
                <div className='subcontainer'>
                    <ul>
                        <li className={`${active == 'overview' ? 'active' : ''}`}>
                            <a onClick={() => switchIMage('overview', 0)}>Overview</a>
                        </li>
                        <li className={`${active == 'spot' ? 'active' : ''}`}>
                            <a onClick={() => switchIMage('spot', 1)}>Spot</a>
                        </li>
                        <li className={`${active == 'futures' ? 'active' : ''}`}>
                            <a onClick={() => switchIMage('futures', 2)}>Futures</a>
                        </li>
                    </ul>
                    <div 
                        className={`images ${active === 'overview' ? 'translate-overview' : active === 'spot' ? 'translate-spot' : 'translate-futures'}`} 
                        id="images"
                        // style={{ transform: `translateX(${active === 'overview' ? 20 : active === 'spot' ? 0 : -20}%)` }}
                    >
                        {/* <div
                            className={`slider ${active === 'overview' ? 'slider__overview' : active === 'spot' ? 'slider__spot' : 'slider__futures'}`}
                            style={{ transform: `translateX(${active === 'overview' ? -121 : active === 'spot' ? 0 : 121}%)` }}
                        ></div> */}
                        <div id="img_area_1" className={`img-area overview ${active == 'overview' ? 'active' : ''}`}>
                        </div>
                        <div id="img_area_2" className={`img-area spot ${active == 'spot' ? 'active' : ''}`}>
                        </div>
                        <div id="img_area_3" className={`img-area futures ${active == 'futures' ? 'active' : ''}`}>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FuturesPemisahanSection