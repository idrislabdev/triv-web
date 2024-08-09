import Image from 'next/image'
import React from 'react'

const StakingGuideCryptoSection = () => {
  return (
    <section className='staking-guide-crypto-section'>
        <div className='guide-container'>
            <h2>Panduan tentang cara staking kripto</h2>
            <div className='guide-steps'>
                <ul>
                    <li>
                        <div className='guide-icon'>
                            <Image src='/images/others/step-koin.png' alt='step koin' width={60} height={60}/>\
                        </div>
                        <div className='guide-desc'>
                            <h5>Pilih koin favorit Anda</h5>
                            <p>
                                Pilih berbagai jenis koin yang didukung oleh Triv. 
                                Crypto Staking cocok untuk investor jangka panjang yang percaya terhadap pertumbuhan coin tersebut.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className='guide-icon'>
                            <Image src='/images/others/step-jumlah.png' alt='step koin' width={60} height={60}/>\
                        </div>
                        <div className='guide-desc'>
                            <h5>Masukkan jumlah Staking</h5>
                            <p>
                                Hanya dengan 50.000 Rupiah, anda sudah dapat melakukan staking dan mendapatkan bunga dari coin terkait.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className='guide-icon'>
                            <Image src='/images/others/step-bunga.png' alt='step koin' className='!w-[65.5px] !h-[74px]' width={65.5} height={74}/>\
                        </div>
                        <div className='guide-desc'>
                            <h5>Terima bunga staking !</h5>
                            <p>
                                Bunga akan langsung dikreditkan pada akun anda baik secara harian atau mingguan dan dapat langsung 
                                dicairkan ke berbagai bank ataupun distaking ulang untuk mendapatkan bunga dividen yang lebih besar.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div className='guide-phone'>
            <Image src='/images/devices/iphone-with-description-2.png' alt='iphone with description' width={620} height={519} />
        </div>
    </section>
  )
}

export default StakingGuideCryptoSection
