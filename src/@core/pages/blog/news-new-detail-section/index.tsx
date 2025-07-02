import React from 'react'
import CardNewsSticky from '@/@core/components/cards/card-news-sticky';
import NewsDetailContent from '../news-detail-content';
import { BarcodeIcon, FacebookIcon, GoogleIcon, InvisionIcon, PeopleIcon, TwiterIcon } from '@/@core/components/custom-icons';
import Link from 'next/link';
import Image from 'next/image';
const BlogNewsNewDetailSection = (props: {main:any, news:any[], stickies:any[], categories:string[], objLang:any, lang:string}) => {
  const { main, news, stickies, categories, objLang, lang } = props;
  return (
    <section className='blog-news-new-section'>
      <div className='blog-main-container'>
        <div className='main-subcontainer'>
          <NewsDetailContent content={null}/>
          <div className='news-detail-footer'>
            <div className='user-info'>
              <PeopleIcon color={'#fff'} />
              <span>Jeremy</span>
            </div>
            <div className='socialmedia-list'>
              <a><GoogleIcon color={'#fff'}/></a>
              <a><FacebookIcon color={'#fff'}/></a>
              <a><InvisionIcon color={'#fff'}/></a>
              <a><TwiterIcon color={'#fff'}/></a>
            </div>
          </div>
          <div className='news-comment-column disabled'>
            <span>Coments are closed for this post.</span>
          </div>
        </div>
      </div>
      <div className='blog-side-container'>
        <div className='blog-invest-login'>
          <Image src='/images/3d-icons/3d-cryptocurrency.png' className='crypto' alt='3d cryptocurrency' width={0} height={0} sizes='100%'/>     
          <h5>Yuk, berinvestasi & kembangkan aset dengan Triv</h5>   
          <div className='button-group'>
            <Link href={`/${lang}/login`} className='btn-login'>Login</Link>
            <Link href={`/${lang}/register`} className='btn-daftar'>Daftar</Link>
          </div>  
          <p>Kamu juga bisa download aplikasi Triv sekarang!</p>
          <div className='barcode-appstore'>
            {/* <BarcodeIcon /> */}
            <div className='appstore-list'>
              <a href='https://play.google.com/store/apps/details?id=id.co.triv' target='_blank'>
                <Image src='/images/apps-store/playstore-logo-new.png' alt='barcode login' width={0} height={0} sizes='100%'/>     
              </a>
              <a href='https://apps.apple.com/id/app/triv-buy-bitcoin-crypto/id1470919460' target='_blank'>
                <Image src='/images/apps-store/appstore-logo-new.png' alt='barcode login' width={0} height={0} sizes='100%'/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogNewsNewDetailSection
