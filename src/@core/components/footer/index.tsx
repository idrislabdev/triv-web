import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer-primary'>
            <div className='footer-primary-left'>
                <div className='container-menu'>
                    <h5>Market Place</h5>
                    <ul>
                        <li>Live Rate</li>
                    </ul>
                </div>
                <div className='container-menu'>
                    <h5>Triv Feature</h5>
                    <ul>
                        <li>Live Rate</li>
                        <li>Market</li>
                        <li>Merchant</li>
                        <li>Affliate</li>
                        <li>Gift Cards</li>
                    </ul>
                </div>
                <div className='container-menu'>
                    <h5>Product</h5>
                    <ul>
                        <li>Pulsa</li>
                        <li>Token Listrik</li>
                        <li>Bayar Tagihan</li>
                    </ul>
                </div>
                <div className='container-menu'>
                    <h5>Company</h5>
                    <ul>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>
            <div className='footer-primary-right'>
                <div className='footer-triv-logo'>
                    <Image src='/images/logos/triv-logo-dark.png' alt='triv logo dark logo' width={226} height={101}/>
                </div>
                <div className='footer-address'>
                    <h6>PT. Tiga Inti Utama</h6>
                    <p>Jl. Jendral Sudirman Kav. 52-53 SCBD - Jakarta Selatan - 12190</p>
                    <p>phone : 021 4020 0828</p>
                </div>
            </div>
        </div>
        <div className='footer-secondary'>
            <div className='footer-secondary-left'>
                <div className='copyright-text'><label>© 2015 - 2024 Triv All Rights Reserved.</label></div>
                <div className='footer-appstore'>
                    <Image src='/images/apps-store/playstore-dark-logo.png' className='footer-playtore' alt='playstore logo' width={130} height={38}/>
                    <Image src='/images/apps-store/appstore-dark-logo.png' className='footer-appstore' alt='appstore logo' width={114} height={38}/>
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
    </footer>
  )
}

export default Footer
