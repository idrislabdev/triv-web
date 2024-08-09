import Image from 'next/image'
import React from 'react'

const StakingBenefitSection = () => {
  return (
    <section className='staking-benefit-section'>
      <div className='media-container'>
        <div className='frame-media'>
            <iframe allow="autoplay; encrypted-media" id="player" src="https://www.youtube.com/embed/YHxGlMC9aak" frameBorder="0" allowFullScreen>
            </iframe>
        </div>
        <div className='description-media'>
            <h5>Tonton video youtube kami untuk mempelajari langkah tutorial lengkap melakukan Triv Staking</h5>
            <p>Dengan menggunakan staking Triv, Anda akan memperoleh penghasilan tambahan sambil HODLing koin Anda, sangat cocok untuk investor jangka panjang yang percaya pada pertumbuhan ekosistem koin Anda. Tanpa biaya, Tanpa risiko, dan Diasuransikan untuk semua transaksi staking Triv Anda.</p>
        </div>
      </div>
      <div className='benefit-container'>
        <h2>Keuntungan staking kripto di Triv</h2>
        <div className='benefit-type-container'>
            <div className='benefit-icon'>
                <Image src='/images/others/insured.png' alt='insured icon' width={60} height={60}/>
            </div>
            <div className='benefit-desc'>
                <h4>100% Insured</h4>
                <p>
                    Seluruh dana nasabah Triv di cold storage dijamin dan diasuransikan oleh Bitgo Kustodian 
                    dan Lloyd insurance England sebesar 100.000.000 USD atau setara 1.45 Trilliun Rupiah.
                </p>
            </div>
        </div>
        <div className='benefit-type-container'>
            <div className='benefit-icon'>
                <Image src='/images/others/fee.png' alt='fee icon' width={60} height={60}/>
            </div>
            <div className='benefit-desc'>
                <h4>0% Fee</h4>
                <p>
                    Terima bunga tanpa potongan apapun, bunga yang ditunjukkan adalah bunga yang Anda dapatkan bersih.
                </p>
            </div>
        </div>
        <div className='benefit-type-container'>
            <div className='benefit-icon'>
                <Image src='/images/others/dividen.png' alt='dividen icon' width={60} height={60}/>
            </div>
            <div className='benefit-desc'>
                <h4>Bunga Dividen</h4>
                <p>
                    Bunga dibagikan secara tetap dan dapat anda cairkan secara langsung ke 61 bank & E-wallet yang didukung oleh system Triv 24 jam tanpa hari libur.
                </p>
            </div>
        </div>
        <button>Get Started</button>
      </div>
    </section>
  )
}

export default StakingBenefitSection
