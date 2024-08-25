import Footer from '@/@core/components/footer'
import MainHeader from '@/@core/components/main-header'
import AffliateHeroSection from '@/@core/pages/affliate/hero-section'
import React from 'react'

import '@/styles/affliate.css'
import { getDictionariesAffliate } from '@/app/dictionaries'
import AffliateComissionsection from '@/@core/pages/affliate/comission-section'
import AffliateDownlineSection from '@/@core/pages/affliate/downline-section'
import AffliateWithdrawSection from '@/@core/pages/affliate/withdraw-section'
import AffliateHolidaySection from '@/@core/pages/affliate/holiday-section'
import AffliateExtraSection from '@/@core/pages/affliate/extra-section'
export default async function Affliate({ params }: any) {
    const {
        hero_section,
        comission_section,
        downline_section,
        withdraw_section,
        holiday_section,
        extra_section,
    } = await getDictionariesAffliate(params.lang);
    return (
        <>
            <MainHeader classText={""} lang={params.lang}/>
                <main className='affliate-page sm:mobile-responsive light-theme'>
                    <AffliateHeroSection objLang={hero_section}/>
                    <AffliateComissionsection objLang={comission_section} />
                    <AffliateDownlineSection objLang={downline_section} />
                    <AffliateWithdrawSection objLang={withdraw_section} />
                    <AffliateHolidaySection objLang={holiday_section} />
                    <AffliateExtraSection objLang={extra_section} />
                </main>
            <Footer />
        </>
  )
}

