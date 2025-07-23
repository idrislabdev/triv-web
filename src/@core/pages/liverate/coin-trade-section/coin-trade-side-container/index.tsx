'use client';
import { IBlog, ILiverateMini } from '@/@core/@types/interfaces';
import CardNewsBlog from '@/@core/components/cards/card-news-blog';
import { CaretDownIcon, CaretUpIcon } from '@/@core/components/custom-icons';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const CoinTradeSideContainer = (props: {
  asset: any;
  liverateMinies: ILiverateMini[];
  blogs: IBlog[];
  objLang: any;
  lang: string;
}) => {
  const { asset, liverateMinies, blogs, objLang, lang } = props;
  const [amount, setAmount] = useState('0');
  return (
    <div className="coin-side-container">
      <div className="buy-subcontainer">
        <h5>
          {objLang.trade_section.buy_form.replaceAll('__label__', asset.label)}
        </h5>
        <div className="input-subcontainer">
          <label>{objLang.trade_section.buy_nominal}</label>
          <div className="input-area">
            <div className="group-input append">
              <span className="append">Rp</span>
              <input
                value={amount}
                placeholder="0"
                onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setAmount(
                    e.target.value
                      .replace(/\D/g, '')
                      .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
                  )
                }
              />
            </div>
            <div className="list-button">
              <a>100.000</a>
              <a>500.000</a>
              <a>1.000.000</a>
            </div>
          </div>
        </div>
        <div className="value-subcontainer">
          <span>{objLang.trade_section.what_you_get}</span>
          <label>
            {asset.currency} <span>0</span>
          </label>
        </div>
        <button>
          {objLang.trade_section.buy_button.replaceAll(
            '__label__',
            asset.label
          )}
        </button>
      </div>
      <div className="other-coins-subcontainer">
        <Link className="other-coin" href={`/${lang}/liverate`}>
          {objLang.trade_section.also_see}
        </Link>
        <p>{objLang.trade_section.also_details}</p>
        <div className="other-list">
          {liverateMinies.map((item: ILiverateMini, index: number) => (
            <Link
              href={`/${lang}/liverate/${item.slug}/trade`}
              className="liverate-mini"
              key={index}
            >
              <div className="symbol-area">
                <Image
                  src={item.icon_url}
                  alt="{asset.label}"
                  width={0}
                  height={0}
                  sizes="100%"
                />
                <div className="area-text">
                  <label>{item.code}</label>
                  <span>{item.currency}</span>
                </div>
              </div>
              <div className="currency-area">
                <label>
                  IDR{' '}
                  {item.rate.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                </label>
                <span className={item.change_24h < 0 ? 'down' : 'up'}>
                  {item.change_24h < 0 && (
                    <span>
                      <CaretDownIcon color={'#EB5757'} />
                    </span>
                  )}
                  {item.change_24h >= 0 && (
                    <span>
                      <CaretUpIcon color={'#71BBED'} />
                    </span>
                  )}
                  {/* {item.change_24h < 0 ? '-' : '+'} */}
                  {(
                    item.change_24h *
                    100 *
                    (item.change_24h < 0 ? -1 : 1)
                  ).toFixed()}
                  %
                </span>
              </div>
            </Link>
          ))}
        </div>
        <Link href={`/${lang}/liverate`}>{objLang.trade_section.see_more}</Link>
      </div>
    </div>
  );
};

export default CoinTradeSideContainer;
