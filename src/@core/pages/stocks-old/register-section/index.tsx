import Link from 'next/link'
import React from 'react'

const StockRegisterSection = (props: {lang:string, objLang:any}) => {
    const { lang, objLang } = props
    return (
        <section className='stocks-register-section'>
            <div className='box-container'>
                <h1>{objLang.title}</h1>
                <h5>{objLang.subtitle}</h5>
                <p>{objLang.description}</p>
                <Link href={`/${lang}/register`}>{objLang.button_text}</Link>
            </div>
        </section>
    )
}

export default StockRegisterSection
