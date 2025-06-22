import { ArrowRightIcon, BuildingIcon, FaqIcon, MessageSquareIcon } from '@/@core/components/custom-icons'
import React from 'react'

const ContactUsInfoSection = (props: { objLang: any}) => {
    const { objLang } = props
    return (
        <section className='contact-us-info-section'>
            <div className='info-container'>
                <div className='info-card'>
                    <div className='card-header'>
                        <div className='header-icon ask'>
                            <FaqIcon color={'#fff'} />
                        </div>
                    </div>
                    <div className='card-content'>
                        <h5>{objLang.enquire.title}</h5>
                        <p>{objLang.enquire.content}</p>
                        <a>{objLang.enquire.link} <ArrowRightIcon color={'#fff'} /></a>
                    </div>
                </div>
                <div className='info-card'>
                    <div className='card-header'>
                        <div className='header-icon live-chat'>
                            <MessageSquareIcon color={'#fff'} />
                        </div>
                    </div>
                    <div className='card-content'>
                        <h5>{objLang.live_chat.title}</h5>
                        <p>{objLang.live_chat.content}</p>
                        <a>{objLang.live_chat.link} <ArrowRightIcon color={'#fff'} /></a>
                    </div>
                </div>
                <div className='info-card'>
                    <div className='card-header'>
                        <div className='header-icon letter'>
                            <BuildingIcon color={'#F8ECF5'} />
                        </div>
                    </div>
                    <div className='card-content'>
                        <h5>{objLang.by_post.title}</h5>
                        <p>{objLang.by_post.content}</p>
                        <a>{objLang.by_post.link} <ArrowRightIcon color={'#fff'} /></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUsInfoSection
