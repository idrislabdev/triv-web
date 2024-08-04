import Image from 'next/image'
import React from 'react'

const HomeRancangSection = () => {
  return (
    <section className='home-rancang-section'>
        <div className='home-rancang-device'>
            <Image src='/images/devices/imac.png' alt='imac' width={492} height={407}/>
        </div>
        <div className='home-rancang-description'>
            <h2>Dirancang khusus untuk analisis, trading investasi crypto</h2>
            <div className='rancang-description-details'>
                <div className='flex items-start gap-[40px]'>
                    <div className='rancang-description-detail'>
                        <Image src='/images/3d-icons/3d-bitcoin.png' alt='3d bitcoin' width={70} height={70}/>
                        <h5>700+ Cryptocurrencies</h5>
                        <p>Pilih dan trading beragam aset digital di TRIV</p>
                    </div>
                    <div className='rancang-description-detail'>
                        <Image src='/images/3d-icons/3d-cloud-bitcoin.png' alt='3d cloud bitcoin' width={70} height={70}/>
                        <h5>Tersedia fitur spot dan market</h5>
                        <p>Beli secara cepat dengan 2 klik atau trading dengan limit dan stop loss order</p>
                    </div>
                </div>
                <div className='flex items-start gap-[40px]'>
                    <div className='rancang-description-detail'>
                        <Image src='/images/3d-icons/3d-blockchain.png' alt='3d blockchain' width={70} height={70}/>
                        <h5>Spread selisih harga jual-beli Triv</h5>
                        <p>Salah satu yang terendah di market Cryptocurrency Indonesia, system kami memantau market dan melakukan penyesuaian harga secara real-time.</p>
                    </div>
                    <div className='rancang-description-detail'>
                        <Image src='/images/3d-icons/3d-clock.png' alt='3d clock' width={70} height={70}/>
                        <h5>Deposit & Tarik 24 jam</h5>
                        <p>TRIV beroperasi setiap hari bahkan pada hari libur. Deposit dan Tarik dana secara real-time 24/7</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HomeRancangSection
