import Footer from '@/@core/components/footer'
import MainHeader from '@/@core/components/main-header'
import React from 'react'
import '@/styles/futures.css'
import { FuturesHeroSection } from './hero-section'
import FuturesIndexCryptoSection from './index-crypto-section'
import FuturesWhatCryptoSection from './what-crypto-section'
import FuturesWhyCryptoSection from './why-crypto-section'
import FuturesListCoinSection from './list-coin-section'
import FuturesStepSection from './step-section'
import FuturesPemisahanSection from './pemisahan-section'
import FuturesBuySellAssetsSection from './buy-sell-assets-section'

const FuturesPage = (props: {lang:string, objLang:any, liverates: any}) => {
    const { lang, objLang, liverates} = props
    return (
        <>
            <MainHeader classText="header-transparent" lang={lang}/>
            <main className='futures-page sm:mobile-responsive md:mobile-responsive light-theme'>
                <FuturesHeroSection />
                <FuturesIndexCryptoSection liverates={liverates} />
                {/* <FuturesWhatCryptoSection /> */}
                <FuturesWhyCryptoSection />
                <FuturesListCoinSection />
                <FuturesStepSection />
                <FuturesPemisahanSection />
                <FuturesBuySellAssetsSection />
            </main>
            <Footer />
        </>
    )
}

export default FuturesPage