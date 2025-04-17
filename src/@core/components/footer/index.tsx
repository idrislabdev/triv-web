"use client";

import Image from 'next/image'
import React, { useState } from 'react'
import { FacebookIcon, InstagramIcon, LinkedinIcon, TelegramIcon, TiktokIcon, TwiterIcon, YoutubeIcon } from '../custom-icons'

const Footer = () => {
    const [listMarketPlace, setListMarketplace] = useState("1")
    const [listTrivFeature, setListrTrivFeature] = useState("0")
    const [listProduct, setListProduct] = useState("0")
    const [listCompany, setListCompany] = useState("0")

    return (
        <footer className='footer sm:mobile-responsive md:mobile-responsive'>
            <div className='footer-container'>
                <div className='footer-primary'>
                    <div className='footer-primary-left'>
                        <div className='container-menu'>
                            <label className='sm:hidden md:hidden'>Market Price</label>
                            <label className='hidden sm:flex sm:justify-between md:flex md:justify-between items-center' onClick={_ => setListMarketplace(listMarketPlace !== "1" ? "1" : "")}> Market Place
                                <svg className={`w-3 h-3 ${listMarketPlace === "1" ? 'transform rotate-180' : ''}`} 
                                    fill="none" strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth="2" 
                                    viewBox="0 0 24 24" 
                                    stroke="#fff"
                                >
                                    <path d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </label> 
                            <div className={`container-list-menu ${listMarketPlace === "1" ? `!max-h-[400px]` : ''}`}>
                                <ul>
                                    <li>Live Rate</li>
                                </ul>
                            </div>
                        </div>
                        <div className='container-menu'>
                            <label className='sm:hidden md:hidden'>Triv Feature</label>
                            <label className='hidden sm:flex sm:justify-between md:flex md:justify-between items-center' onClick={_ => setListrTrivFeature(listTrivFeature !== "1" ? "1" : "")}> Triv Feature
                                <svg className={`w-3 h-3 ${listTrivFeature === "1" ? 'transform rotate-180' : ''}`} 
                                    fill="none" strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth="2" 
                                    viewBox="0 0 24 24" 
                                    stroke="#fff"
                                >
                                    <path d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </label> 
                            <div className={`container-list-menu ${listTrivFeature === "1" ? `!max-h-[400px]` : ''}`}>
                                <ul>
                                    <li>Live Rate</li>
                                    <li>Market</li>
                                    <li>Merchant</li>
                                    <li>Affliate</li>
                                    <li>Gift Cards</li>
                                </ul>
                            </div>
                        </div>
                        {/* <div className='container-menu'>
                            <label className='sm:hidden md:hidden'>Product</label>
                            <label className='hidden sm:flex sm:justify-between md:flex md:justify-between items-center' onClick={_ => setListProduct(listProduct !== "1" ? "1" : "")}> Product
                                <svg className={`w-3 h-3 ${listProduct === "1" ? 'transform rotate-180' : ''}`} 
                                    fill="none" strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth="2" 
                                    viewBox="0 0 24 24" 
                                    stroke="#fff"
                                >
                                    <path d="M19 9l-7 7-7-7"></path>
                            </svg>
                            </label> 
                            <div className={`container-list-menu ${listProduct === "1" ? `!max-h-[400px]` : ''}`}>
                                <ul>
                                    <li>Pulsa</li>
                                    <li>Token Listrik</li>
                                    <li>Bayar Tagihan</li>
                                </ul>
                            </div>
                        </div> */}
                        <div className='container-menu'>
                            <label className='sm:hidden md:hidden'>Company</label>
                            <label className='hidden sm:flex sm:justify-between md:flex md:justify-between items-center' onClick={_ => setListCompany(listCompany !== "1" ? "1" : "")}> Market Price
                                <svg className={`w-3 h-3 ${listCompany === "1" ? 'transform rotate-180' : ''}`} 
                                    fill="none" strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth="2" 
                                    viewBox="0 0 24 24" 
                                    stroke="#fff"
                                >
                                    <path d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </label> 
                            <div className={`container-list-menu ${listCompany === "1" ? `!max-h-[400px]` : ''}`}>
                                <ul>
                                    <li>Contact Us</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='footer-primary-right'>
                        <div className='footer-triv-logo'>
                            <Image src='/images/logos/triv-logo-dark.png' alt='triv logo dark logo' width={226} height={101}/>
                        </div>
                        <div className='footer-triv-address-logo'>
                            <div className='footer-socialmedia-list'>
                                <ul>
                                    <li><a><InstagramIcon color='white'/></a></li>
                                    <li><a><YoutubeIcon color='white'/></a></li>
                                    <li><a><LinkedinIcon color='white'/></a></li>
                                    <li><a><FacebookIcon color='white'/></a></li>
                                    <li><a><TwiterIcon color='white'/></a></li>
                                    <li><a><TiktokIcon color='white'/></a></li>
                                    <li><a><TelegramIcon color='white'/></a></li>
                                </ul>
                            </div>
                            <div className='footer-address'>
                                <h6>PT. Tiga Inti Utama</h6>
                                <p>Jl. Jendral Sudirman Kav. 52-53 SCBD - Jakarta Selatan - 12190</p>
                                <p>phone : 021 4020 0828</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer-secondary'>
                    <div className='footer-secondary-left'>
                        <div className='copyright-text'><label>© 2024 PT Tiga Inti Utama. All Rights Reserved.</label></div>
                        <div className='footer-appstore'>
                            <Image src='/images/apps-store/playstore-dark-logo.png' className='logo-playstore' alt='playstore logo' width={130} height={38}/>
                            <Image src='/images/apps-store/appstore-dark-logo.png' className='logo-appstore' alt='appstore logo' width={114} height={38}/>
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
