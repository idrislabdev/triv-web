import CardNewsMain from '@/@core/components/cards/card-news-main'
import React from 'react'
import CardNewsSecondary from '@/@core/components/cards/card-news-secondary';
import CardNewsSticky from '@/@core/components/cards/card-news-sticky';
import NewsDetailContent from '../news-detail-content';
import { FacebookIcon, GoogleIcon, InvisionIcon, LinkedinIcon, PeopleIcon, TwiterIcon } from '@/@core/components/custom-icons';
const BlogNewsDetailSection = (props: {main:any, news:any[], stickies:any[], categories:string[], objLang:any}) => {
  const { main, news, stickies, categories, objLang } = props;
  return (
    <section className='blog-news-section'>
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
        <div className='blog-subscribe'>
          <h2>{objLang.title_subscribe}</h2>
          <p>{objLang.desc_subscribe}</p>
          <div className='submit-subscribe'>
            <input placeholder={objLang.placeholder_email_subscribe}/>
            <button>{objLang.button_subscribe}</button>
          </div>
        </div>
        <div className='blog-sticky-post'>
          <h2>{objLang.title_sticky}</h2>
          <div className='sticky-subcontainer'>
            {
              stickies.map((item:any, index:number) => (
                <CardNewsSticky item={item} key={index}/>
              ))
            }
          </div>
        </div>
        <div className='blog-categories'>
          <h2>{objLang.title_category}</h2>
          <ul>
            {
              categories.map((item:string, index:number) => (
                <li key={index}><a>{item}</a></li>
              ))
            }
          </ul>
        </div>
      </div>
    </section>
  )
}

export default BlogNewsDetailSection
