"use client";

import MainHeader from '@/@core/components/main-header'
import React from 'react'
import LiverateCoinSection from '../coin-section'
import { IBlog, ICoin, ILiverateMini } from '@/@core/@types/interfaces'
import Footer from '@/@core/components/footer'
import { GlobalsProvider } from '@/@core/context/globalContext'

const LiverateDetailPage = (props: {lang:string, objLang:any, blogs:IBlog[], liverateMinies:ILiverateMini[], coin:ICoin, asset:any}) => {
  const { lang, objLang, blogs, liverateMinies, coin, asset} = props
  return (
    <GlobalsProvider>
        <MainHeader classText="header-white" lang={lang}/>
        <main className='liverate-page sm:mobile-responsive md:mobile-responsive light-theme'>
            <LiverateCoinSection 
                lang={lang} 
                objLang={objLang} 
                blogs={blogs} 
                liverateMinies={liverateMinies} 
                coin={coin} 
                asset={asset}
            />
        </main>
        <Footer />
    </GlobalsProvider>
  )
}

export default LiverateDetailPage
