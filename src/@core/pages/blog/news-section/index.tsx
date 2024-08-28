import CardNewsMain from '@/@core/components/cards/card-news-main'
import React from 'react'
import CardNewsSecondary from '@/@core/components/cards/card-news-secondary';
import CardNewsSticky from '@/@core/components/cards/card-news-sticky';
const BlogNewsSection = (props: {lang: string, main:any, news:any[], stickies:any[], categories:string[], objLang:any}) => {
  const { lang, main, news, stickies, categories, objLang } = props;
  return (
    <section className='blog-news-section'>
      <div className='blog-main-container'>
        <div className='main-subcontainer'>
          <h1>{objLang.title_main}</h1>
          <CardNewsMain lang={lang} item={main}/>
        </div>
        <div className='daily-subcontainer'>
          <h2>{objLang.title_daily}</h2>
          {
            news.map((item:any, index:number) => (
              <CardNewsSecondary lang={lang} item={item} key={index}/>
            ))
          }
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

export default BlogNewsSection
