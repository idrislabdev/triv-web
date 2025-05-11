import Image from 'next/image'
import React from 'react'

const FuturesPemisahanSection = () => {
  return (
    <main className='futures-pemisahan-section'>
        <div className='main-container'>
            <div className='title-subcontainer'>
                <h2>Pemisahan Aman antara Aset Spot dan <span>Futures</span></h2>
                <p>Dengan pemisahan yang jelas antara portfolio Spot dan Futures, Anda bisa dengan mudah mengelola aset kripto dan bisa memindahkan aset di antara dua Portfolio.</p>
            </div>
            <div className='subcontainer'>
                <ul>
                    <li><a>Overview</a></li>
                    <li className='active'><a>Spot</a></li>
                    <li><a>Futures</a></li>
                </ul>
                <div className='images'>
                    <div className='img-area img-area__1'>
                        {/* <Image src='/images/futures/iphone-overview.png' alt='iphone-overview' width={0} height={0} sizes='100%'/> */}
                    </div>
                    <div className='img-area img-area__2 active'>
                        {/* <Image src='/images/futures/iphone-spot.png' alt='iphone-spot' width={0} height={0} sizes='100%'/> */}
                    </div>
                    <div className='img-area img-area__3'>
                        {/* <Image src='/images/futures/iphone-futures.png' alt='iphone-futures' width={0} height={0} sizes='100%'/> */}
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default FuturesPemisahanSection