import { ArrowRightIcon } from '@/@core/components/custom-icons';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const StakingBannerSection = (props: { lang: string; objLang: any }) => {
  const { lang, objLang } = props;
  return (
    <section className="staking-banner-section">
      <div className="main-container">
        <div className="sub-container">
          <div className="text-area">
            <div className="text-header">
              <h2>{objLang.title}</h2>
              <p>{objLang.description}</p>
            </div>
            <div className="button-area">
              <Link href={`/${lang}/register`} className="button">
                {objLang.button} <ArrowRightIcon color={'#4DAAE9'} />
              </Link>
              <div className="app-store-list">
                <a
                  href="https://play.google.com/store/apps/details?id=id.co.triv"
                  target="_blank"
                >
                  <Image
                    src="/images/apps-store/playstore-logo-new.png"
                    className="playstore-logo"
                    alt="playstore logo"
                    width={0}
                    height={0}
                    sizes="100%"
                  />
                </a>
                <a
                  href="https://apps.apple.com/id/app/triv-buy-bitcoin-crypto/id1470919460"
                  target="_blank"
                >
                  <Image
                    src="/images/apps-store/appstore-logo-new.png"
                    className="apple-logo"
                    alt="apple logo"
                    width={0}
                    height={0}
                    sizes="100%"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="image-area">
            <Image
              src="/images/others/happy-asian-man-with-phone.png"
              alt="fee icon"
              width={0}
              height={0}
              sizes="100%"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StakingBannerSection;
