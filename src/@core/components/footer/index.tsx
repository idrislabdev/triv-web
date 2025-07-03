"use client";

import Image from 'next/image'
import React, { useState } from 'react'
import { FacebookIcon, InstagramIcon, LinkedinIcon, NewFacebookIcon, NewInstagramIcom, NewLinkedinIcon, NewTelegramIcon, NewTiktokIcon, NewXIcon, NewYoutubeIcon, TelegramIcon, TiktokIcon, TwiterIcon, YoutubeIcon } from '../custom-icons'

const Footer = () => {
    const [listMarketPlace, setListMarketplace] = useState("1")
    const [listTrivFeature, setListrTrivFeature] = useState("0")
    const [listProduct, setListProduct] = useState("0")
    const [listCompany, setListCompany] = useState("0")
    const [listOtherCyrpto, setListOtherCrypto] = useState("0")
    const year = new Date()

    return (
        <footer className='footer sm:mobile-responsive md:mobile-responsive'>
            <div className='footer-container'>
                <div className='footer-primary'>
                    <div className='footer-primary-left'>
                        <div className='footer-triv-logo'>
                            <Image src='/images/logos/triv-logo-big.png' alt='triv logo dark logo' width={0} height={0} sizes='100%'/>
                        </div>
                        <div className='footer-triv-address-logo'>
                            <div className='footer-address'>
                                <h6>PT. Tiga Inti Utama</h6>
                                <p>Jl. Jendral Sudirman Kav. 52-53 SCBD - Jakarta Selatan - 12190 phone : 021 4020 0828</p>
                            </div>
                            <div className='footer-socialmedia-list'>
                                <ul>
                                    <li><a href='https://triv.co.id/instagram' target='_blank'><NewInstagramIcom /></a></li>
                                    <li><a href='https://triv.co.id/youtube' target='_blank'><NewYoutubeIcon /></a></li>
                                    <li><a href='https://id.linkedin.com/company/triv' target='_blank'><NewLinkedinIcon /></a></li>
                                    <li><a href='https://www.facebook.com/Trivcoid-Triv-Indonesia-830427083739607' target='_blank'><NewFacebookIcon /></a></li>
                                    <li><a href='https://triv.co.id/twitter' target='_blank'><NewXIcon /></a></li>
                                    <li><a href='https://triv.co.id/tiktok' target='_blank'><NewTiktokIcon /></a></li>
                                    <li><a href='https://triv.co.id/grouptelegram' target='_blank'><NewTelegramIcon /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='footer-primary-right'>
                        <div className='list-menu'>
                            <div className='container-menu'>
                                <label>Market Price</label>
                                <div className={`container-list-menu ${listMarketPlace === "1" ? `!max-h-[400px]` : ''}`}>
                                    <ul>
                                        <li>Live Rate</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='container-menu'>
                                <label>Triv Feature</label>
                                <div className={`container-list-menu ${listTrivFeature === "1" ? `!max-h-[400px]` : ''}`}>
                                    <ul>
                                        <li>Market</li>
                                        <li>Merchant</li>
                                        <li>Affliate</li>
                                        <li>Gift Cards</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='container-menu'>
                                <label>Company</label>
                                <div className={`container-list-menu ${listCompany === "1" ? `!max-h-[400px]` : ''}`}>
                                    <ul>
                                        <li>Blog</li>
                                        <li>Contact Us</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='list-menu'>
                            <div className='container-menu'>
                                <label>Crypto & Aset Digital Lain</label>
                                <div className={`container-list-menu ${listOtherCyrpto === "1" ? `!max-h-[400px]` : ''}`}>
                                    <ul>
                                        <li>Bitcoin</li>
                                        <li>Ethereum</li>
                                        <li>Stellar</li>
                                        <li>Ripple</li>
                                        <li>Cardano</li>
                                    </ul>
                                    <ul>
                                        <li>Eos</li>
                                        <li>Dash</li>
                                        <li>Tether</li>
                                        <li>Litecoin</li>
                                        <li>Polkadot</li>
                                    </ul>
                                    <ul>
                                        <li>BNB</li>
                                        <li>DogeCoin</li>
                                        <li>ChainLink</li>
                                        <li>MaticPolygon</li>
                                    </ul>
                                    <ul>
                                        <li>Shiba Inu</li>
                                        <li>Axie Infinity</li>
                                        <li>Saham AS</li>
                                        <li>Saham Tesla</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='footer-secondary'>
                    <div className='footer-secondary-left'>
                        <div className='copyright-text'><label>© 2015 - {year.getFullYear()} PT Tiga Inti Utama. All Rights Reserved.</label></div>
                        <div className='footer-appstore'>
                            <a href='https://play.google.com/store/apps/details?id=id.co.triv' target='_blank'><Image src='/images/apps-store/playstore-dark-logo.png' className='logo-playstore' alt='playstore logo' width={130} height={38}/></a>
                            <a href='https://apps.apple.com/id/app/triv-buy-bitcoin-crypto/id1470919460' target='_blank'><Image src='/images/apps-store/appstore-dark-logo.png' className='logo-appstore' alt='appstore logo' width={114} height={38}/></a>
                        </div>
                    </div>
                    <div className='footer-secondary-right'>
                    <div className='terdaftar-text'><label>Terdaftar dan diawasi oleh</label></div>
                    <div className='footer-terdaftar-list'>
                            <div className='bsi-logo'><Image src='/images/otoritas-keuangans/bsi-light-logo.png' alt='bsi logo' width={69} height={37} /></div>
                            <div className='cisa-logo'><Image src='/images/otoritas-keuangans/cisa-light-logo.png' alt='cisa logo' width={100} height={40} /></div>
                            <div className='bappebti-logo'><Image src='/images/otoritas-keuangans/bappebti-light-logo.png' alt='bappebti logo' width={123} height={28} /></div>
                            <div className='kominfo-logo'><Image src='/images/otoritas-keuangans/kominfo-light-logo.png' alt='kominfo logo' width={100} height={31} /></div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
