import Image from 'next/image'
import React from 'react'

const FuturesStepSection = () => {
  return (
    <main className='futures-step-section'>
        <div className='main-container'>
            <h2>4 Langkah Cepat Buat Trading <span>Futures</span> di Triv</h2>
            <div className='subcontainer'>
                <div className='step-row'>
                    <div className='step active'>
                        <div className='text-area'>
                            <h5>1. Top up USDT-mu dulu 🪙</h5>
                            <p>Beli USDT kamu lewat akun Spot dengan IDR atau swap kripto asset kamu.</p>
                        </div>
                        <div className='img-area'>
                            <Image src='/images/futures/step-topup.png' alt='step-topup' width={0} height={0} sizes='100%'/>
                        </div>
                    </div>
                    <div className='step'>
                        <div className='text-area'>
                            <h5>2. Transfer ke dompet futures 🔁</h5>
                            <p>Siapin Strategi dan Langsung Buka Posisi 🚀</p>
                        </div>
                        <div className='img-area'>
                            <Image src='/images/futures/step-transfer.png' alt='step-transfer' width={0} height={0} sizes='100%'/>
                        </div>
                    </div>
                </div>
                <div className='step-row'>
                    <div className='step'>
                        <div className='text-area'>
                            <h5>3. Pilih market favoritmu 📈</h5>
                            <p>Telusuri berbagai market kripto, dari BTC sampai altcoin yang lagi hype, dan temukan market terbaik pilihanmu.</p>
                        </div>
                        <div className='img-area'>
                            <Image src='/images/futures/step-market.png' alt='step-market' width={0} height={0} sizes='100%'/>
                        </div>
                    </div>
                    <div className='step'>
                        <div className='text-area'>
                            <h5>4. Siapin Strategi dan Langsung Buka Posisi 🚀</h5>
                            <p>Manfaatkan leverage hingga 25x, serta fitur Take Profit dan Stop Loss untuk bantu optimalkan posisi dan kelola risiko dengan lebih aman.</p>
                        </div>
                        <div className='img-area'>
                            <Image src='/images/futures/step-strategy.png' alt='step-strategy' width={0} height={0} sizes='100%'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default FuturesStepSection