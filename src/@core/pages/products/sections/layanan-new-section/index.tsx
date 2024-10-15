"use client"

import { IsiPulsaIcon, JualBeliIcon, PlaneIcon, SwapIcon, TerimaIcon, WalletIcon } from '@/@core/components/custom-icons'
import Image from 'next/image'
import React, { useCallback, useEffect } from 'react'

const ProductsLayananNewSection = (props: {objLang:any}) => {
  const { objLang } = props
  const onScroll = useCallback(() => {
      const { scrollY } = window;
      const elements = document.getElementsByClassName("products-layanan-new-section");
      var element = elements[0];
      if (element) {
        console.log(scrollY)
        if (scrollY > 3760) {
          document.getElementsByClassName("swap")[0].style.scale = 0.80;
          document.getElementsByClassName("hoddl")[0].style.scale = 0.84;
          document.getElementsByClassName("kirim")[0].style.scale = 0.88;
          document.getElementsByClassName("jual-beli")[0].style.scale = 0.92;
          document.getElementsByClassName("terima")[0].style.scale = 0.96;
          document.getElementsByClassName("pulsa")[0].style.scale = 1;
        }

        if (scrollY > 3403 && scrollY < 3760) {
          document.getElementsByClassName("swap")[0].style.scale = 0.84;
          document.getElementsByClassName("hoddl")[0].style.scale = 0.88;
          document.getElementsByClassName("kirim")[0].style.scale = 0.92;
          document.getElementsByClassName("jual-beli")[0].style.scale = 0.96;
          document.getElementsByClassName("terima")[0].style.scale = 1;
        }

        if (scrollY > 3103 && scrollY < 3403) {
          document.getElementsByClassName("swap")[0].style.scale = 0.88;
          document.getElementsByClassName("hoddl")[0].style.scale = 0.92;
          document.getElementsByClassName("kirim")[0].style.scale = 0.96;
          document.getElementsByClassName("jual-beli")[0].style.scale = 1;
        }

        if (scrollY > 2803 && scrollY < 3103) {
          document.getElementsByClassName("swap")[0].style.scale = 0.92;
          document.getElementsByClassName("hoddl")[0].style.scale = 0.96;
          document.getElementsByClassName("kirim")[0].style.scale = 1;
        }

        if (scrollY > 1503 && scrollY < 2803) {
          document.getElementsByClassName("swap")[0].style.scale = 0.96;
          document.getElementsByClassName("hoddl")[0].style.scale = 1;
        }

        if (scrollY < 2100) {
          document.getElementsByClassName("swap")[0].style.scale = 1;
        }
  
      }

  },[]);
  
  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
  })

  return (
    <section className='products-layanan-section'>
      <div className='title-container'>
        <h2>{objLang.title_1} <span>{objLang.title_2}</span> {objLang.title_3}</h2>
        <p>{objLang.content}</p>
      </div>
      <div className='layanan-container'>
        <div className='card-subcontainer swap sticky top-[150px] translate-y-[0px]'>
          <div className='box-layanan'>
            <span><SwapIcon color={'#fff'} /></span>
            <div className='content'>
              <h5>{objLang.card.swap.title}</h5>
              <p>{objLang.card.swap.content}</p>
            </div>
          </div>
          <div className='box-img iphone'>
            <Image src='/images/devices/iphone-bitcoin-2.png' alt='iphone' width={0} height={0} sizes='100%'/>
          </div>
        </div>
        <div className='card-subcontainer hoddl sticky top-[170px] translate-y-[0px]'>
          <div className='box-layanan'>
            <span><WalletIcon color={'#fff'} /></span>
            <div className='content'>
              <h5>{objLang.card.hoddl.title}</h5>
              <p>{objLang.card.hoddl.content}</p>
            </div>
          </div>
          <div className='box-img macbook'>
            <Image src='/images/devices/macbook-bitcoin.png' alt='macbook' width={0} height={0} sizes='100%'/>
          </div>
        </div>
        <div className='card-subcontainer kirim sticky top-[190px] translate-y-[0px]'>
          <div className='box-layanan'>
            <span><PlaneIcon color={'#fff'} /></span>
            <div className='content'>
              <h5>{objLang.card.kirim.title}</h5>
              <p>{objLang.card.kirim.content}</p>
            </div>
          </div>
          <div className='box-img iphone'>
            <Image src='/images/devices/iphone-bitcoin-2.png' alt='iphone' width={0} height={0} sizes='100%'/>
          </div>
        </div>
        <div className='card-subcontainer jual-beli sticky top-[210px] translate-y-[0px]'>
          <div className='box-layanan'>
            <span><JualBeliIcon color={'#fff'} /></span>
            <div className='content'>
              <h5>{objLang.card.jual_beli.title}</h5>
              <p>{objLang.card.jual_beli.content}</p>
            </div>
          </div>
          <div className='box-img macbook'>
            <Image src='/images/devices/macbook-buy-bitcoin.png' alt='macbook' width={0} height={0} sizes='100%'/>
          </div>
        </div>
        <div className='card-subcontainer terima sticky top-[230px] translate-y-[0px]'>
          <div className='box-layanan'>
            <span><TerimaIcon color={'#fff'} /></span>
            <div className='content'>
              <h5>{objLang.card.terima.title}</h5>
              <p>{objLang.card.terima.content}</p>
            </div>
          </div>
          <div className='box-img iphone'>
            <Image src='/images/devices/iphone-receive-bitcoin.png' alt='iphone' width={0} height={0} sizes='100%'/>
          </div>
        </div>
        <div className='card-subcontainer pulsa sticky top-[250px] translate-y-[0px]'>
          <div className='box-layanan'>
            <span><IsiPulsaIcon color={'#fff'} /></span>
            <div className='content'>
              <h5>{objLang.card.isi_pulsa.title}</h5>
              <p>{objLang.card.isi_pulsa.content}</p>
            </div>
          </div>
          <div className='box-img macbook'>
            <Image src='/images/devices/macbook-buy-bitcoin.png' alt='macbook' width={0} height={0} sizes='100%'/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductsLayananNewSection
