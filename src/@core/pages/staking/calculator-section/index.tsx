'use client';

import { IStaking } from '@/@core/@types/interfaces';
import { formatterNumber, formatterNumber2 } from '@/@core/utils/general';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import CurrencyInput from 'react-currency-input-field';

const StakingCalculatorSection = (props: { objLang: any; stakings: any }) => {
  const { objLang, stakings } = props;
  const [inputVal, setInputVal] = useState('0');
  const [asset, setAsset] = useState<IStaking>(
    stakings.find((x: IStaking) => x.currency === 'ETH')
  );
  const [yearlyReward, setYearlyReward] = useState(0);
  const [monthlyReward, setMonthlyReward] = useState(0);
  const [dailyReward, setDailyReward] = useState(0);
  const selectAsset = (val: string) => {
    setAsset(stakings.find((x: any) => x.currency === val));
  };

  useEffect(() => {
    setYearlyReward((asset.apy / 100) * parseInt(inputVal));
    setMonthlyReward((asset.apy / 52 / 100) * parseInt(inputVal));
    setDailyReward((asset.apy / 365 / 100) * parseInt(inputVal));
  }, [inputVal, asset.apy]);

  return (
    <section className="staking-calculator-section">
      <div className="card-staking-calculator">
        <div className="title-container">
          <h2>{objLang.title}</h2>
        </div>
        <div className="calculator-container">
          <div className="top-subcontainer">
            <div className="sub-subcontainer">
              <div className="form-input">
                <label>Stake Asset</label>
                <select
                  defaultValue={asset.currency}
                  onChange={(e) => selectAsset(e.target.value)}
                >
                  {stakings.map((item: any, index: number) => (
                    <option value={item.currency} key={index}>
                      {item.currency}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-input">
                <label>Amount Stake</label>
                <div className="group-input">
                  <CurrencyInput
                    value={inputVal}
                    decimalSeparator=","
                    groupSeparator="."
                    onValueChange={(value) => setInputVal(value ? value : '0')}
                    maxLength={12}
                  />
                  <span className="prepend">{asset.currency}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="middle-subcontainer">
            <div className="sub-subcontainer">
              <label>
                {asset.apy}
                <span>%</span>
              </label>
              <span>Annual Yield (Est.)</span>
            </div>
            <div className="sub-subcontainer">
              <label>
                {formatterNumber2(dailyReward.toFixed(2))}{' '}
                <span>{asset.currency}</span>
              </label>
              <span>Daily Reward (Est.)</span>
            </div>
          </div>
          <div className="middle-subcontainer">
            <div className="sub-subcontainer">
              <label>
                {formatterNumber2(monthlyReward.toFixed(2))}{' '}
                <span>{asset.currency}</span>
              </label>
              <span>Monthly Reward (Est.)</span>
            </div>
            <div className="sub-subcontainer">
              <label>
                {formatterNumber2(yearlyReward.toFixed(2))}{' '}
                <span>{asset.currency}</span>
              </label>
              <span>Yearly Reward (Est.)</span>
            </div>
          </div>
          <div className="bottom-subcontainer">
            <p>{objLang.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StakingCalculatorSection;
