import Link from 'next/link'
import React from 'react'

const StockRegisterSection = (props: {lang:string, langObj:any}) => {
    const { lang, langObj } = props
    return (
        <section className='stocks-register-section'>
            <div className='box-container'>
                <h1>{langObj.title}</h1>
                <h5>{langObj.subtitle}</h5>
                <p>{langObj.description}</p>
                <Link href={`/${lang}/register`}>{langObj.button_text}</Link>
            </div>
        </section>
    )
}

export default StockRegisterSection
