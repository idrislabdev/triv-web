import React from 'react'
import '@/styles/contact-us.css'
const ContactUsHeaderSection = (props: { objLang: any}) => {
    const { objLang } = props
    return (
        <section className='contact-us-header-section'>
            <div className='header-container'>
                <h2>{objLang.title}</h2>
                <div className='header-subcontainer'>
                    <p>{objLang.description}</p>
                    <p>{objLang.to} <span>help@triv.co.id</span> | <span>Contact our CEO</span></p>
                </div>
            </div>
        </section>
    )
}

export default ContactUsHeaderSection
