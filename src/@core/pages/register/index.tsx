'use client';
import { TrivIcon } from '@/@core/components/custom-icons';
import React, { useEffect } from 'react';
import Image from 'next/image';
import FormRegisterSubcontainer from './FormRegisterSubcontainer';

const Register = (props: { lang: string; dictRegister: any }) => {
  const { lang, dictRegister } = props;
  const pekerjaans = [
    'Pelajar/Mahasiswa',
    'Karyawan Swasta',
    'Profesional',
    'Wiraswasta',
    'TNI/Polri',
    'Pensiunan',
    'Tidak Bekerja',
    'Lainnya',
  ];
  const heightResponsive = () => {
    const elements = document.getElementsByClassName('register-page');
    var element = elements[0];
    if (element) {
      if (window.innerHeight < 850) {
        document
          .getElementsByClassName('register-page')[0]
          .classList.add('medium-responsive');
      } else {
        document
          .getElementsByClassName('register-page')[0]
          .classList.remove('medium-responsive');
      }
    }
  };
  useEffect(() => {
    window.addEventListener('resize', () => {
      heightResponsive();
    });
  }, []);
  useEffect(() => {
    heightResponsive();
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
            <h1>{dictRegister.greeting_text}</h1>
            <p>{dictRegister.entry_text}</p>
          </div>
          <FormRegisterSubcontainer
            lang={lang}
            dictRegister={dictRegister}
            pekerjaans={pekerjaans}
          />
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

export default Register;
