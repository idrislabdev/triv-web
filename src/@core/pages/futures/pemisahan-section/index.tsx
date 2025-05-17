"use client"

import React, { useState } from 'react'

const FuturesPemisahanSection = () => {
    const [active, setActive] = useState('spot')
    return (
        <section className='futures-pemisahan-section'>
            <div className='main-container'>
                <div className='title-subcontainer'>
                    <h2>Pemisahan Aman antara Aset Spot dan <span>Futures</span></h2>
                    <p>Dengan pemisahan yang jelas antara portfolio Spot dan Futures, Anda bisa dengan mudah mengelola aset kripto dan bisa memindahkan aset di antara dua Portfolio.</p>
                </div>
                <div className='subcontainer'>
                    <ul>
                        <li className={`${active == 'overview' ? 'active' : ''}`}>
                            <a onClick={() => setActive('overview')}>Overview</a>
                        </li>
                        <li className={`${active == 'spot' ? 'active' : ''}`}>
                            <a onClick={() => setActive('spot')}>Spot</a>
                        </li>
                        <li className={`${active == 'futures' ? 'active' : ''}`}>
                            <a onClick={() => setActive('futures')}>Futures</a>
                        </li>
                    </ul>
                    <div className='images'>
                        {/* <div
                            className={`slider ${active === 'overview' ? 'slider__overview' : active === 'spot' ? 'slider__spot' : 'slider__futures'}`}
                            style={{ transform: `translateX(${active === 'overview' ? -121 : active === 'spot' ? 0 : 121}%)` }}
                        ></div> */}
                        <div className={`img-area img-area__overview ${active == 'overview' ? 'active' : ''}`}>
                        </div>
                        <div className={`img-area img-area__spot ${active == 'spot' ? 'active' : ''}`}>
                        </div>
                        <div className={`img-area img-area__futures ${active == 'futures' ? 'active' : ''}`}>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FuturesPemisahanSection