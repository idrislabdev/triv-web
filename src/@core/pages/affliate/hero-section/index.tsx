import { ArrowRightIcon } from '@/@core/components/custom-icons';
import Link from 'next/link';
import React from 'react';

const AffliateHeroSection = (props: { lang: string; objLang: any }) => {
  const { lang, objLang } = props;
  return (
    <section className="affliate-hero-section">
      <div className="hero-container">
        <h1>
          {objLang.title_1} <span>{objLang.title_2}</span>, {objLang.title_3}{' '}
          <span>{objLang.title_4}</span>
        </h1>
        <p>{objLang.description}</p>
        <Link href={`/${lang}/register`}>
          {objLang.button} <ArrowRightIcon color={'#fff'} />
        </Link>
      </div>
    </section>
  );
};

export default AffliateHeroSection;
