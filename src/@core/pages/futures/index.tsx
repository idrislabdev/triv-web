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

const FuturesPage = (props: {lang:string, objLang:any, liverates: any, prepsInstrument: any}) => {
    const { lang, objLang, liverates, prepsInstrument} = props
    return (
        <>
            <MainHeader classText="header-transparent" lang={lang}/>
            <main className='futures-page sm:mobile-responsive md:mobile-responsive light-theme'>
                <FuturesHeroSection objLang={objLang.hero_section}/>
                <FuturesIndexCryptoSection liverates={liverates} />
                {/* <FuturesWhatCryptoSection /> */}
                <FuturesWhyCryptoSection objLang={objLang.what_why_section} lang={lang} />
                <FuturesListCoinSection objLang={objLang.list_coints_section} lang={lang} prepsInstrument={prepsInstrument} />
                <FuturesStepSection objLang={objLang.step_section} />
                <FuturesPemisahanSection objLang={objLang.pemisahan_section} lang={lang} />
                <FuturesBuySellAssetsSection objLang={objLang.invest_section} />
            </main>
            <Footer />
        </>
    )
}

export default FuturesPage