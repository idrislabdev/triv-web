import React from 'react';
import Image from 'next/image';
import { ArrowRightIcon } from '@/@core/components/custom-icons';
import Link from 'next/link';

const LiverateInvestasiNowSection = (props: { lang: string; objLang: any }) => {
  const { lang, objLang } = props;
  return (
    <section className="liverate-investasi-now-section">
      <div className="image-container">
        <Image
          src="/images/devices/imac.png"
          alt="imac"
          width={392}
          height={355}
        />
      </div>
      <div className="description-container">
        <div className="start-now-description">
          <h2>{objLang.title}</h2>
          <p>{objLang.description}</p>
        </div>
        <div className="start-button-logo">
          <Link href={`/${lang}/register`} className="button">
            {objLang.button} <ArrowRightIcon color={'#fff'} />
          </Link>
          <div className="start-now-store sm:!hidden">
            <a
              href="https://triv.co.id/app_store?locale=id"
              target="_blank"
              className="apple-logo"
            ></a>
            <a
              href="https://triv.co.id/android?locale=id"
              target="_blank"
              className="playstore-logo"
            ></a>
          </div>
          <div className="start-now-store-mobile sm:!flex">
            <a
              href="https://triv.co.id/app_store?locale=id"
              target="_blank"
              className="apple-logo"
            ></a>
            <a
              href="https://triv.co.id/android?locale=id"
              target="_blank"
              className="playstore-logo"
            ></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiverateInvestasiNowSection;
