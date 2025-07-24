'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import en from '@/app/dictionaries/general/en.json';
import id from '@/app/dictionaries/general/id.json';
import CurrencyInput from 'react-currency-input-field';
const FormServicePaypal = (props: {
  asset: any;
  lang: any;
  objProduct: any;
  imgObj: string;
  objLang: any;
}) => {
  const { asset, lang, objProduct, imgObj, objLang } = props;
  const [buttonType, setButtonType] = useState('buy');
  const [nominal, setNominal] = useState('0');
  const [value, setValue] = useState(0);

  let objLangForm: any;
  if (lang == 'id') {
    objLangForm = id.form;
  } else {
    objLangForm = en.form;
  }

  useEffect(() => {
    if (buttonType === 'buy') {
      setValue(parseInt(nominal) / asset.buy_rate);
    } else {
      setValue(parseInt(nominal) / asset.sell_rate);
    }
  }, [nominal, asset, buttonType]);

  return (
    <div className="form-service">
      {/* <div className={`button-tab ${buttonType}`}>
                <button className={`!rounded-tl-[4px] !rounded-bl-[4px] ${buttonType === "buy" ? 'active' : ''}`} onClick={_ => setButtonType('buy')}>Beli</button>
                <button className={`!rounded-tr-[4px] !rounded-br-[4px] ${buttonType === "sell" ? 'active' : ''}`} onClick={_ => setButtonType('sell')}>Jual</button>
            </div> */}
      {imgObj == '' && (
        <h5 className="title">
          {objLangForm.buy_long.replaceAll('__label__', objProduct.name)}
        </h5>
      )}
      {imgObj != '' && (
        <div className="form-title">
          <h5>{objLangForm.buy}</h5>{' '}
          <Image
            src={imgObj}
            alt={objProduct.name}
            width={0}
            height={0}
            sizes="100%"
          />
          <h5 className="sm:mr-[4px] md:mr-[4px]">
            {objLangForm.starting} IDR 50,000!
          </h5>
        </div>
      )}

      <p className="description">{objLangForm.purchase}</p>
      <div className="group-input">
        <span className="append">Rp</span>
        <CurrencyInput
          value={nominal}
          decimalSeparator="."
          groupSeparator=","
          onValueChange={(value) => setNominal(value ? value : '0')}
        />
      </div>
      <div className="button-group">
        <button onClick={() => setNominal('100000')}>100.000</button>
        <button onClick={() => setNominal('500000')}>500.000</button>
        <button onClick={() => setNominal('1000000')}>1.000.000</button>
        <button onClick={() => setNominal('2000000')}>2.000.000</button>
      </div>
      <div className="get-input">
        <label>{objLangForm.you_will_get}</label>
        <div className="label-value">
          <span>
            {asset.currency} {value == 0 ? value : value.toFixed(7)}
          </span>
        </div>
      </div>
      <button className="btn-primary">
        {objLangForm.buy} {objProduct.name} {objLangForm.now}
      </button>
    </div>
  );
};

export default FormServicePaypal;
