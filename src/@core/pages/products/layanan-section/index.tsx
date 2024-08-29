import { IsiPulsaIcon, JualBeliIcon, PlaneIcon, SwapIcon, TerimaIcon, WalletIcon } from '@/@core/components/custom-icons'
import Image from 'next/image'
import React from 'react'

const ProductsLayananSection = (props: {objLang:any}) => {
  const { objLang } = props
  return (
    <section className='products-layanan-section'>
      <div className='title-container'>
        <h2>{objLang.title}</h2>
        <p>{objLang.content}</p>
      </div>
      <div className='layanan-container'>
        <div className='card-subcontainer'>
          <div className='card-layanan'>
            <span className='jual-beli'><JualBeliIcon color={'#fff'} /></span>
            <div className='content'>
              <h5>{objLang.card.jual_beli.title}</h5>
              <p>{objLang.card.jual_beli.content}</p>
            </div>
          </div>
        </div>
        <div className='card-subcontainer'>
          <div className='card-layanan'>
            <span className='kirim'><PlaneIcon color={'#fff'} /></span>
            <div className='content'>
              <h5>{objLang.card.kirim.title}</h5>
              <p>{objLang.card.kirim.content}</p>
            </div>
          </div>
        </div>
        <div className='card-subcontainer'>
          <div className='card-layanan'>
            <span className='terima'><TerimaIcon color={'#fff'} /></span>
            <div className='content'>
              <h5>{objLang.card.terima.title}</h5>
              <p>{objLang.card.terima.content}</p>
            </div>
          </div>
        </div>
        <div className='card-subcontainer'>
          <div className='card-layanan'>
            <span className='hoddl'><WalletIcon color={'#fff'} /></span>
            <div className='content'>
              <h5>{objLang.card.hoddl.title}</h5>
              <p>{objLang.card.hoddl.content}</p>
            </div>
          </div>
        </div>
        <div className='card-subcontainer'>
          <div className='card-layanan'>
            <span className='swap'><SwapIcon color={'#fff'} /></span>
            <div className='content'>
              <h5>{objLang.card.swap.title}</h5>
              <p>{objLang.card.swap.content}</p>
            </div>
          </div>
        </div>
        <div className='card-subcontainer'>
          <div className='card-layanan'>
            <span className='isi-pulsa'><IsiPulsaIcon color={'#fff'} /></span>
            <div className='content'>
              <h5>{objLang.card.isi_pulsa.title}</h5>
              <p>{objLang.card.isi_pulsa.content}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductsLayananSection
