'use client';
import { TrivIcon } from '@/@core/components/custom-icons';
import React, { useEffect } from 'react';
import Image from 'next/image';

const RegisterVerify = (props: { lang: string; dictRegister: any }) => {
  const { lang, dictRegister } = props;

  useEffect(() => {
    if (localStorage.getItem('mode') === 'dark-theme') {
      document.body.classList.add('dark-theme');
    }
  });

  return (
    <div className="register-container">
      <div className="left-subcontainer">
        <div className="logo-subcontainer">
          <TrivIcon color={'#318AC6'} />
        </div>
        <div className="left-main-subcontainer">
          <div className="title-subcontainer">
            <h2>{dictRegister.welcome_register}</h2>
          </div>
          <div className="information-subcontainer">
            <p>
              {dictRegister.verify_1} : <span>aditya@gmail.com</span>
            </p>
            <p>{dictRegister.verify_2}</p>
            <p className="small">
              * {dictRegister.verify_3} 2 {dictRegister.minute}
            </p>
          </div>
          <div className="notice-subcontainer">
            <p>{dictRegister.verify_4}</p>
            <a>{dictRegister.verify_5}</a>
          </div>
        </div>
      </div>
      <div className="right-subcontainer">
        <div className="right-main-subcontainer">
          <div className="title-subcontainer">
            <h1>{dictRegister.welcome_text}</h1>
            <p>{dictRegister.sub_welcome_text}</p>
            <div className="terdaftar-diawasi">
              <div className="bsi-logo"></div>
              <div className="cisa-logo"></div>
              <div className="cism-logo"></div>
              <div className="pci-logo"></div>
              <div className="cissp-logo"></div>
            </div>
          </div>
          <div className="image-subcontainer">
            <Image
              src="/images/others/register-screen.png"
              alt="captcha"
              width={574}
              height={400}
            />
          </div>
          <div className="logo-subcontainer">
            <TrivIcon color={'#318AC6'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterVerify;
