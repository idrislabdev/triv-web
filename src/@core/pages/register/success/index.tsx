'use client';
import { TrivIcon } from '@/@core/components/custom-icons';
import React, { useEffect } from 'react';
import Image from 'next/image';
import SuccessRegisterSubcontainer from '../SuccessRegisterSubcontainer';

const RegisterrSuccess = (props: { lang: string; dictRegister: any }) => {
  const { lang, dictRegister } = props;

  useEffect(() => {
    if (localStorage.getItem('mode') === 'dark-theme') {
      document.body.classList.add('dark-theme');
    }
  });

  return (
    <div className="register-container">
      <div className="left-subcontainer fit-screen">
        <div className="logo-subcontainer">
          <TrivIcon color={'#318AC6'} />
        </div>
        <div className="left-main-subcontainer">
          <SuccessRegisterSubcontainer dicRegister={dictRegister} />
          <div className="terdaftar-subcontainer">
            <h5>{dictRegister.welcome_text}</h5>
            <p>{dictRegister.sub_welcome_text}</p>
            <div className="terdaftar-diawasi">
              <div className="bsi-logo"></div>
              <div className="cisa-logo"></div>
              <div className="cism-logo"></div>
              <div className="pci-logo"></div>
              <div className="cissp-logo"></div>
            </div>
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
              src="/images/others/security-password.png"
              alt="security password"
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

export default RegisterrSuccess;
