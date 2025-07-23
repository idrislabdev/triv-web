'use client';
import Image from 'next/image';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  BurgerIcon,
  CheckCircleIcon,
  ChevronIconDown,
  MoonIcon,
  SunIcon,
  TrivIcon,
} from '../custom-icons';
import Link from 'next/link';
import MainSidebarMenu from './main-sidebar-menu';
import { usePathname, useRouter } from 'next/navigation';
import { useGlobals } from '@/@core/hooks/useGlobals';

const MainHeader = (props: { classText: string; lang: string }) => {
  const { classText, lang } = props;
  const [active, setActive] = useState(false);
  const [showFlags, setShowFlags] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [mode, setMode] = useState('light-theme');
  const dropdownFlags: any = useRef(null);

  const pathname = usePathname();
  const router = useRouter();
  const { globals, saveGlobals } = useGlobals();

  const switchTheme = () => {
    var check = document.body.classList.contains('dark-theme');
    if (check) {
      document.body.classList.remove('dark-theme');
      localStorage.removeItem('mode');
      setMode('light-theme');
      saveGlobals({ ...globals, theme: 'light' });
    } else {
      document.body.classList.add('dark-theme');
      localStorage.setItem('mode', 'dark-theme');
      setMode('dark-theme');
      saveGlobals({ ...globals, theme: 'dark' });
    }
  };

  const onScroll = useCallback(() => {
    const { scrollY } = window;
    if (classText === '') {
      if (scrollY >= 60) {
        document
          .getElementsByTagName('header')[0]
          .classList.add('header-white', 'drop-shadow');
        setActive(true);
      } else {
        if (document.getElementsByTagName('header')[0]) {
          document
            .getElementsByTagName('header')[0]
            .classList.remove('header-white', 'drop-shadow');
          setActive(false);
        }
      }
    } else {
      if (scrollY >= 60) {
        document.getElementsByTagName('header')[0].classList.add('drop-shadow');
        setActive(true);
      } else {
        if (document.getElementsByTagName('header')[0]) {
          document
            .getElementsByTagName('header')[0]
            .classList.remove('drop-shadow');
          setActive(false);
        }
      }
    }
  }, []);

  const showMobileSidebar = () => {
    setShowSidebar(true);
    document.body.classList.add('overflow-hidden');
  };

  const switchLang = (langText: string) => {
    let paths = pathname.split('/');
    paths[1] = langText;
    router.push(paths.join('/'));
  };

  const checkMenuService = () => {
    const path2 = pathname.split('/')[2];
    if (path2 == 'home') {
      if (
        pathname.split('/')[3] == 'paypal' ||
        pathname.split('/')[3] == 'bitcoin' ||
        pathname.split('/')[3] == 'ethereum' ||
        pathname.split('/')[3] == 'stellar' ||
        pathname.split('/')[3] == 'ripple' ||
        pathname.split('/')[3] == 'vaulta' ||
        pathname.split('/')[3] == 'dash' ||
        pathname.split('/')[3] == 'tether' ||
        pathname.split('/')[3] == 'chainlink' ||
        pathname.split('/')[3] == 'polygon' ||
        pathname.split('/')[3] == 'polkadot' ||
        pathname.split('/')[3] == 'cardano' ||
        pathname.split('/')[3] == 'polkadot' ||
        pathname.split('/')[3] == 'solana' ||
        pathname.split('/')[3] == 'tron' ||
        pathname.split('/')[3] == 'pepe' ||
        pathname.split('/')[3] == 'hyperliquid' ||
        pathname.split('/')[3] == 'shibainu' ||
        pathname.split('/')[3] == 'bnb' ||
        pathname.split('/')[3] == 'litecoin' ||
        pathname.split('/')[3] == 'axieinfinity' ||
        pathname.split('/')[3] == 'product-pulsa' ||
        pathname.split('/')[3] == 'product-token-listrik' ||
        pathname.split('/')[3] == 'product-tagihan'
      ) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };

  const checkMenuCurrenncy = () => {
    const path2 = pathname.split('/')[2];
    const path = pathname.split('/')[3];
    if (path2 == 'home') {
      if (
        path == 'paypal' ||
        path == 'bitcoin' ||
        path == 'ethereum' ||
        path == 'stellar' ||
        path == 'ripple' ||
        path == 'vaulta' ||
        path == 'dash' ||
        path == 'tether' ||
        path == 'chainlink' ||
        path == 'polygon' ||
        path == 'polkadot' ||
        path == 'cardano' ||
        path == 'polkadot' ||
        path == 'solana' ||
        path == 'axieinfinity'
      ) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };

  const checkMenuProduct = () => {
    const path = pathname.split('/')[3];

    if (
      path == 'product-pulsa' ||
      path == 'product-token-listrik' ||
      path == 'product-taghihan'
    ) {
      return true;
    } else {
      return false;
    }
  };

  const heightResponsive = () => {
    const elements = document.getElementsByClassName('submenu-level-2');
    var element = elements[0];
    if (element) {
      if (window.innerHeight < 600) {
        document
          .getElementsByClassName('submenu-level-2')[0]
          .classList.add('h-[400px]');
      } else {
        document
          .getElementsByClassName('submenu-level-2')[0]
          .classList.remove('h-[400px]');
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
      saveGlobals({ ...globals, theme: 'dark' });
    }
  }, [globals.theme]);

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    const { scrollY } = window;
    if (classText === '') {
      if (scrollY >= 60) {
        document
          .getElementsByTagName('header')[0]
          .classList.add('header-white', 'drop-shadow');
      } else {
        if (document.getElementsByTagName('header')[0]) {
          document
            .getElementsByTagName('header')[0]
            .classList.remove('header-white', 'drop-shadow');
        }
      }
    } else {
      if (scrollY >= 60) {
        document.getElementsByTagName('header')[0].classList.add('drop-shadow');
      } else {
        if (document.getElementsByTagName('header')[0]) {
          document
            .getElementsByTagName('header')[0]
            .classList.remove('drop-shadow');
        }
      }
    }

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  });

  useEffect(() => {
    if (localStorage.getItem('mode') === 'dark-theme') {
      document.body.classList.add('dark-theme');
      setMode('dark-theme');
    }
  }, [setMode]);

  useEffect(() => {
    if (!showFlags) return;
    function handleClick(event: MouseEvent) {
      if (
        dropdownFlags.current &&
        !dropdownFlags.current.contains(event.target)
      ) {
        setShowFlags(false);
      }
    }
    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, [showFlags]);

  return (
    <>
      <header
        className={`${classText} ${
          classText === 'header-white' ? 'drop-shadow' : ''
        }`}
      >
        <div
          className={`main-header sm:mobile-responsive md:mobile-responsive ${classText}`}
        >
          <div className="triv-logo-header">
            <Link href={`/${lang}`}>
              <TrivIcon
                color={
                  active === false && classText === '' ? '#fff' : '#318AC6'
                }
              />
            </Link>
          </div>
          <div className={`main-header-menu`}>
            <ul>
              <li
                className={`${
                  pathname.split('/')[2] === 'liverate' ? 'active' : ''
                }`}
              >
                <Link href={`/${lang}/liverate`}>
                  {lang == 'id' ? 'Harga (Jual Beli)' : 'Liverate'}
                </Link>
              </li>
              <li className={`has-sub ${checkMenuService() ? 'active' : ''}`}>
                <a>
                  Service <ChevronIconDown color={'#fff'} />
                </a>
                <ul className="submenu">
                  <li className={`${checkMenuCurrenncy() ? 'active' : ''}`}>
                    <a>
                      E-Currency <ChevronIconDown color={'#000'} />
                    </a>
                    <ul className="submenu submenu-level-2">
                      {/* <li><Link href={`/${lang}/home/perfect-money`}>Perfect Money</Link></li> */}
                      <li
                        className={`${
                          pathname.split('/')[2] == 'home' &&
                          pathname.split('/')[3] === 'paypal'
                            ? 'active'
                            : ''
                        }`}
                      >
                        <Link href={`/${lang}/home/paypal`}>Paypal</Link>
                      </li>
                      <li
                        className={`${
                          pathname.split('/')[2] == 'home' &&
                          pathname.split('/')[3] === 'bitcoin'
                            ? 'active'
                            : ''
                        }`}
                      >
                        <Link href={`/${lang}/home/bitcoin`}>Bitcoin</Link>
                      </li>
                      <li
                        className={`${
                          pathname.split('/')[2] == 'home' &&
                          pathname.split('/')[3] === 'ethereum'
                            ? 'active'
                            : ''
                        }`}
                      >
                        <Link href={`/${lang}/home/ethereum`}>Ethereum</Link>
                      </li>
                      <li
                        className={`${
                          pathname.split('/')[2] == 'home' &&
                          pathname.split('/')[3] === 'stellar'
                            ? 'active'
                            : ''
                        }`}
                      >
                        <Link href={`/${lang}/home/stellar`}>Stellar</Link>
                      </li>
                      <li
                        className={`${
                          pathname.split('/')[2] == 'home' &&
                          pathname.split('/')[3] === 'ripple'
                            ? 'active'
                            : ''
                        }`}
                      >
                        <Link href={`/${lang}/home/ripple`}>Ripple</Link>
                      </li>
                      <li
                        className={`${
                          pathname.split('/')[2] == 'home' &&
                          pathname.split('/')[3] === 'vaulta'
                            ? 'active'
                            : ''
                        }`}
                      >
                        <Link href={`/${lang}/home/vaulta`}>Vaulta</Link>
                      </li>
                      <li
                        className={`${
                          pathname.split('/')[2] == 'home' &&
                          pathname.split('/')[3] === 'litecoin'
                            ? 'active'
                            : ''
                        }`}
                      >
                        <Link href={`/${lang}/home/litecoin`}>Litecoin</Link>
                      </li>
                      <li
                        className={`${
                          pathname.split('/')[2] == 'home' &&
                          pathname.split('/')[3] === 'dash'
                            ? 'active'
                            : ''
                        }`}
                      >
                        <Link href={`/${lang}/home/dash`}>Dash</Link>
                      </li>
                      <li
                        className={`${
                          pathname.split('/')[2] == 'home' &&
                          pathname.split('/')[3] === 'tether'
                            ? 'active'
                            : ''
                        }`}
                      >
                        <Link href={`/${lang}/home/tether`}>Tether</Link>
                      </li>
                      <li
                        className={`${
                          pathname.split('/')[2] == 'home' &&
                          pathname.split('/')[3] === 'chainlink'
                            ? 'active'
                            : ''
                        }`}
                      >
                        <Link href={`/${lang}/home/chainlink`}>Chainlink</Link>
                      </li>
                      <li
                        className={`${
                          pathname.split('/')[2] == 'home' &&
                          pathname.split('/')[3] === 'dogecoin'
                            ? 'active'
                            : ''
                        }`}
                      >
                        <Link href={`/${lang}/home/dogecoin`}>DogeCoin</Link>
                      </li>
                      <li
                        className={`${
                          pathname.split('/')[2] == 'home' &&
                          pathname.split('/')[3] === 'bnb'
                            ? 'active'
                            : ''
                        }`}
                      >
                        <Link href={`/${lang}/home/bnb`}>BNB</Link>
                      </li>
                      <li
                        className={`${
                          pathname.split('/')[2] == 'home' &&
                          pathname.split('/')[3] === 'polygon'
                            ? 'active'
                            : ''
                        }`}
                      >
                        <Link href={`/${lang}/home/polygon`}>Polygon</Link>
                      </li>
                      <li
                        className={`${
                          pathname.split('/')[2] == 'home' &&
                          pathname.split('/')[3] === 'shibainu'
                            ? 'active'
                            : ''
                        }`}
                      >
                        <Link href={`/${lang}/home/shibainu`}>Shiba Inu</Link>
                      </li>
                      <li
                        className={`${
                          pathname.split('/')[2] == 'home' &&
                          pathname.split('/')[3] === 'polkadot'
                            ? 'active'
                            : ''
                        }`}
                      >
                        <Link href={`/${lang}/home/polkadot`}>Polkadot</Link>
                      </li>
                      <li
                        className={`${
                          pathname.split('/')[2] == 'home' &&
                          pathname.split('/')[3] === 'cardano'
                            ? 'active'
                            : ''
                        }`}
                      >
                        <Link href={`/${lang}/home/cardano`}>Cardano</Link>
                      </li>
                      <li
                        className={`${
                          pathname.split('/')[2] == 'home' &&
                          pathname.split('/')[3] === 'solana'
                            ? 'active'
                            : ''
                        }`}
                      >
                        <Link href={`/${lang}/home/solana`}>Solana</Link>
                      </li>
                      <li
                        className={`${
                          pathname.split('/')[2] == 'home' &&
                          pathname.split('/')[3] === 'axieinfinity'
                            ? 'active'
                            : ''
                        }`}
                      >
                        <Link href={`/${lang}/home/axieinfinity`}>
                          Axie Infinity
                        </Link>
                      </li>
                      <li
                        className={`${
                          pathname.split('/')[2] == 'home' &&
                          pathname.split('/')[3] === 'tron'
                            ? 'active'
                            : ''
                        }`}
                      >
                        <Link href={`/${lang}/home/tron`}>Tron</Link>
                      </li>
                      <li
                        className={`${
                          pathname.split('/')[2] == 'home' &&
                          pathname.split('/')[3] === 'pepe'
                            ? 'active'
                            : ''
                        }`}
                      >
                        <Link href={`/${lang}/home/pepe`}>Pepe</Link>
                      </li>
                      <li
                        className={`${
                          pathname.split('/')[2] == 'home' &&
                          pathname.split('/')[3] === 'hyperliquid'
                            ? 'active'
                            : ''
                        }`}
                      >
                        <Link href={`/${lang}/home/hyperliquid`}>
                          Hyperliquid
                        </Link>
                      </li>
                    </ul>
                  </li>
                  {/* <li className={`${checkMenuProduct() ? 'active' : ''}`}>
                                        <a>Product <ChevronIconDown color={'#000'} /></a>
                                        <ul className='submenu'>
                                            <li className={`${pathname.split("/")[3] === 'product-pulsa' ? 'active' : ''}`}><Link href={`/${lang}/home/product-pulsa`}>Pulsa</Link></li>
                                            <li className={`${pathname.split("/")[3] === 'product-token-listrik' ? 'active' : ''}`}><Link href={`/${lang}/home/product-token-listrik`}>Token Listrik</Link></li>
                                            <li className={`${pathname.split("/")[3] === 'product-token-listrik' ? 'active' : ''}`}><Link href={`/${lang}/home/product-tagihan`}>Tagihan</Link></li>
                                        </ul>
                                    </li> */}
                </ul>
              </li>
              <li
                className={`${
                  pathname.split('/')[2] === 'staking' ? 'active' : ''
                }`}
              >
                <Link href={`/${lang}/staking`}>Staking</Link>
              </li>
              <li
                className={`${
                  pathname.split('/')[2] === 'futures' ? 'active' : ''
                }`}
              >
                <Link href={`/${lang}/futures`}>Futures</Link>
              </li>
              <li
                className={`${
                  pathname.split('/')[2] === 'markets' ? 'active' : ''
                }`}
              >
                <Link href={`/${lang}/markets`}>Market</Link>
              </li>
              <li
                className={`${
                  pathname.split('/')[2] === 'stocks' ? 'active' : ''
                }`}
              >
                <Link href={`/${lang}/stocks`}>US Stocks</Link>
              </li>
              <li
                className={`${
                  pathname.split('/')[3] === 'affliate' ? 'active' : ''
                }`}
              >
                <Link href={`/${lang}/home/affliate`}>Affliate</Link>
              </li>
              <li
                className={`${
                  pathname.split('/')[2] === 'blog' ? 'active' : ''
                }`}
              >
                <Link href={`/${lang}/blog`}>Blog</Link>
              </li>
              <li
                className={`${
                  pathname.split('/')[3] === 'contact-us' ? 'active' : ''
                }`}
              >
                <Link href={`/${lang}/home/contact-us`}>Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="main-header-action">
            <a className="burger-menu" onClick={(_) => showMobileSidebar()}>
              <BurgerIcon color={classText === '' ? '#fff' : '#000'} />
            </a>
            <div className="main-header-action-list">
              <a className="button-switch-theme" onClick={(_) => switchTheme()}>
                {mode === 'light-theme' && <MoonIcon color="#fff" />}
                {mode === 'dark-theme' && <SunIcon color="#fff" />}
              </a>
              <ul>
                <li className={`flags ${showFlags ? 'show' : ''}`}>
                  <ul className={`list-flags ${showFlags ? 'show' : ''}`}>
                    <li>
                      <a
                        className="flag-button"
                        onClick={(_) => setShowFlags(!showFlags)}
                        ref={dropdownFlags}
                      >
                        <Image
                          src={`/images/flags/${lang}.png`}
                          alt="flag"
                          width={'28'}
                          height={'20'}
                        />
                        {!showFlags && (
                          <span className={`chevron-icon`}>
                            <ChevronIconDown color={'#fff'} />
                          </span>
                        )}
                        {showFlags && (
                          <span className={`check-icon`}>
                            <CheckCircleIcon />
                          </span>
                        )}
                      </a>
                    </li>
                    <li className={`${showFlags ? 'block' : 'hidden'}`}>
                      {lang === 'en' && (
                        <a onClick={(_) => switchLang('id')}>
                          <Image
                            src={`/images/flags/id.png`}
                            alt="indonesian flags"
                            width={'28'}
                            height={'20'}
                          />
                        </a>
                      )}
                      {lang === 'id' && (
                        <a onClick={(_) => switchLang('en')}>
                          <Image
                            src={`/images/flags/en.png`}
                            alt="indonesian flags"
                            width={'28'}
                            height={'20'}
                          />
                        </a>
                      )}
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href={`/${lang}/login`} className="btn-login-header">
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${lang}/register`}
                    className="btn-signup-header"
                  >
                    Sign Up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <MainSidebarMenu
        lang={lang}
        show={showSidebar}
        setShow={setShowSidebar}
      />
    </>
  );
};

export default MainHeader;
