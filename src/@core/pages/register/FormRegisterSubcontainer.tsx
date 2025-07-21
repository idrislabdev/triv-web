'use client';

import { EyeIcon, HideEyeIcon } from '@/@core/components/custom-icons';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const FormRegisterSubcontainer = (props: {
  lang: string;
  dictRegister: any;
  pekerjaans: string[];
}) => {
  const { lang, dictRegister, pekerjaans } = props;
  const router = useRouter();
  const [dataPekerjaan, setDataPekerjaans] = useState(pekerjaans);
  // const [pekerjaan, setPekerjaan] = useState('');
  const [typePassword, setTypePassword] = useState('password');
  const [typeConfirmPassword, setTypeConfirmPassword] = useState('password');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [occupation, setOccupation] = useState('');

  const checkDisabled = () => {
    if (
      firstName == '' ||
      lastName == '' ||
      email == '' ||
      password == '' ||
      confirmPassword == '' ||
      occupation == "'"
    )
      return true;
  };

  const changePekerjaan = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setOccupation(event.target.value);
    // setPekerjaan(event.target.value);
  };

  const onSubmit = () => {
    router.push(`/${lang}/register/verify`);
  };

  return (
    <div className="form-subcontainer">
      <div className="form-name">
        <label>{dictRegister.name_form_text}</label>
        <div className="form-input">
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            className="color-1"
            placeholder={dictRegister.name_form_input_first_text}
          />
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            className="color-1"
            placeholder={dictRegister.name_form_input_second_text}
          />
        </div>
      </div>
      <div className="form-email">
        <label>{dictRegister.email_text}</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="color-1"
          placeholder={dictRegister.email_text}
          onInvalid={(e) =>
            (e.target as HTMLInputElement).setCustomValidity(
              "Please include an '@' in the email address "
            )
          }
          required
        />
      </div>
      <div className="form-password">
        <label>{dictRegister.password_text}</label>
        <div className="form-input">
          <div className="group-input prepend">
            <span
              className="prepend cursor-pointer"
              onClick={(_) =>
                setTypePassword(
                  typePassword === 'password' ? 'text' : 'password'
                )
              }
            >
              {typePassword === 'password' && <EyeIcon color={'#838899'} />}
              {typePassword === 'text' && <HideEyeIcon color={'#838899'} />}
            </span>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={typePassword}
              className="color-1"
              placeholder={dictRegister.password_text}
            />
          </div>
          <div className="group-input prepend">
            <span
              className="prepend cursor-pointer"
              onClick={(_) =>
                setTypeConfirmPassword(
                  typeConfirmPassword === 'password' ? 'text' : 'password'
                )
              }
            >
              {typeConfirmPassword === 'password' && (
                <EyeIcon color={'#838899'} />
              )}
              {typeConfirmPassword === 'text' && (
                <HideEyeIcon color={'#838899'} />
              )}
            </span>
            <input
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              type={typeConfirmPassword}
              className="color-1"
              placeholder={dictRegister.password_repead_text}
            />
          </div>
        </div>
      </div>
      <div className="form-jobs">
        <label>{dictRegister.job_text}</label>
        <select
          className={occupation == '' ? `!text-neutral-500` : `color-1`}
          defaultValue={occupation}
          onChange={changePekerjaan}
        >
          <option value="" disabled>
            {dictRegister.placeholder_job}
          </option>
          {dataPekerjaan.map((item: string, index: number) => (
            <option value={item} className="text-neutral-800" key={index}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div className="form-note">
        <p>
          {dictRegister.register_first_text}{' '}
          <span>
            <Link href={`/${lang}/home/ketentuan-layanan`}>
              {dictRegister.register_second_text}
            </Link>{' '}
          </span>
          <span>
            <Link href={`/${lang}/home/kyc`}>
              {dictRegister.register_third_text}{' '}
            </Link>
          </span>
          <span>
            {' '}
            <span>{dictRegister.register_fourth_text} </span>
            <Link href={`/${lang}/home/privacy-policy`}>
              {dictRegister.register_fifth_text}
            </Link>
          </span>
        </p>
      </div>
      <button
        onClick={() => onSubmit()}
        disabled={checkDisabled() ? true : false}
      >
        {dictRegister.register_text}
      </button>
      <label className="has-user">
        {dictRegister.has_account_1}{' '}
        <Link href={`/${lang}/login`}>{dictRegister.has_account_2}</Link>
      </label>
    </div>
  );
};

export default FormRegisterSubcontainer;
