"use client"
import Image from 'next/image'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { BurgerIcon, CheckCircleIcon, ChevronIconDown, MoonIcon, SunIcon, TrivIcon } from '../custom-icons';
import Link from 'next/link';
import MainSidebarMenu from './main-sidebar-menu';
import { usePathname, useRouter } from 'next/navigation';
import { useGlobals } from '@/@core/hooks/useGlobals';

const MainHeader = (props: {classText:string, lang: string}) => {
    const { classText, lang } = props
    const [active, setActive] = useState(false);
    const [showFlags, setShowFlags] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false);
    const [mode, setMode] = useState('light-theme')
    const dropdownFlags: any = useRef(null);

    const pathname = usePathname()
    const router = useRouter();
    const { globals, saveGlobals } = useGlobals()

    const switchTheme = () => {
        var check = document.body.classList.contains('dark-theme')
        if (check) {
            document.body.classList.remove("dark-theme");
            localStorage.removeItem('mode');
            setMode('light-theme')
            saveGlobals({...globals, theme: 'light'})

        } else {
            document.body.classList.add("dark-theme");
            localStorage.setItem('mode', 'dark-theme');
            setMode('dark-theme')
            saveGlobals({...globals, theme: 'dark'})
        }
    }

    const onScroll = useCallback(() => {
        const { scrollY } = window;
        if (classText === '') {
            if ( scrollY >= 60) {
                document.getElementsByTagName("header")[0].classList.add('header-white', 'drop-shadow');
                setActive(true)
            } else {
                if (document.getElementsByTagName("header")[0]) {
                    document.getElementsByTagName("header")[0].classList.remove('header-white', 'drop-shadow');
                    setActive(false)
                }

            }
        } else {
            if ( scrollY >= 60) {
                document.getElementsByTagName("header")[0].classList.add('drop-shadow');
                setActive(true)
            } else {
                if (document.getElementsByTagName("header")[0]) {
                    document.getElementsByTagName("header")[0].classList.remove('drop-shadow');
                    setActive(false)
                }
            }
        }

    },[]);

    const showMobileSidebar = () => {
        setShowSidebar(true)
        document.body.classList.add('overflow-hidden')
    }

    const switchLang = (langText:string) => {
        let paths = pathname.split("/")
        paths[1] = langText
        router.push(paths.join("/"))

    }

    useEffect(() => {
        if (localStorage.getItem('mode') === 'dark-theme') {
            saveGlobals({...globals, theme: 'dark'})
        }
    }, [globals.theme])

    useEffect(() => {
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => {
           window.removeEventListener("scroll", onScroll);
        }
    });

    useEffect(() => {
        if (localStorage.getItem('mode') === 'dark-theme') {
            document.body.classList.add("dark-theme");
            setMode('dark-theme')
        }
    },[setMode])

    useEffect(() => {
        if (!showFlags) return;
        function handleClick(event : MouseEvent) {
            if (dropdownFlags.current && !dropdownFlags.current.contains(event.target)) {
                setShowFlags(false);
            }
        }
        window.addEventListener("click", handleClick);
        return () => window.removeEventListener("click", handleClick);
    }, [showFlags]);

    
    return (
        <>
            <header className={`main-header sm:mobile-responsive md:mobile-responsive ${classText}`}>
                <div className='triv-logo-header'>
                    <Link href="/"><TrivIcon color={active === false  && classText === '' ? '#fff': '#318AC6'} /></Link>
                </div>
                <div className={`main-header-menu`}>
                    <ul>
                        <li><Link href={`/${lang}/liverate`}>Harga (Jual Beli)</Link></li>
                        <li className='has-sub'>
                            <a>Service <ChevronIconDown color={'#fff'} /></a>
                            <ul className='submenu'>
                                <li>
                                    <a>E-Currency <ChevronIconDown color={'#000'} /></a>
                                    <ul className='submenu'>
                                        <li><Link href={`/${lang}/home/perfect-money`}>Perfect Money</Link></li>
                                        <li><Link href={`/${lang}/home/paypal`}>Paypal</Link></li>
                                        <li><Link href={`/${lang}/home/bitcoin`}>Bitcoin</Link></li>
                                        <li><Link href={`/${lang}/home/ethereum`}>Ethereum</Link></li>
                                        <li><Link href={`/${lang}/home/stellar`}>Stellar</Link></li>
                                        <li><Link href={`/${lang}/home/ripple`}>Ripple</Link></li>
                                        <li><Link href={`/${lang}/home/eos`}>Eos</Link></li>
                                        <li><Link href={`/${lang}/home/dash`}>Dash</Link></li>
                                        <li><Link href={`/${lang}/home/tether`}>Tether</Link></li>
                                        <li><Link href={`/${lang}/home/chainlink`}>Chainlink</Link></li>
                                        <li><Link href={`/${lang}/home/dogecoin`}>DogeCoin</Link></li>
                                        <li><Link href={`/${lang}/home/matic-polygon`}>Matic-Polygon</Link></li>
                                        <li><Link href={`/${lang}/home/polkadot`}>Polkadot</Link></li>
                                        <li><Link href={`/${lang}/home/cardano`}>Cardano</Link></li>
                                        <li><Link href={`/${lang}/home/solana`}>Solana</Link></li>
                                        <li><Link href={`/${lang}/home/axielnifinity`}>Axielnifinity</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <a>Product <ChevronIconDown color={'#000'} /></a>
                                    <ul className='submenu'>
                                        <li><Link href={`/${lang}/home/product-pulsa`}>Pulsa</Link></li>
                                        <li><Link href={`/${lang}/home/product-token-listrik`}>Token Listrik</Link></li>
                                        <li><Link href={`/${lang}/home/product-tagihan`}>Tagihan</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><Link href={`/${lang}/staking`}>Staking</Link></li>
                        <li><Link href={`/${lang}/markets`}>Market</Link></li>
                        <li><Link href={`/${lang}/stocks`}>US Stocks</Link></li>
                        <li><Link href={`/${lang}/home/affliate`}>Affliate</Link></li>
                        <li><Link href={`/${lang}/blog`}>Blog</Link></li>
                        <li><Link href={`/${lang}/home/contact-us`}>Contact Us</Link></li>
                    </ul>
                </div>
                <div className='main-header-action'>
                    <a className='burger-menu' onClick={_ => showMobileSidebar()}><BurgerIcon color={classText === '' ? '#fff': '#000'} /></a>
                    <div className='main-header-action-list'>
                        <a className='button-switch-theme' onClick={_ => switchTheme()}>
                            {mode === 'light-theme' && <MoonIcon color='#fff' /> }
                            {mode === 'dark-theme' && <SunIcon color='#fff' /> }
                        </a>
                        <ul>
                            <li className={`flags ${showFlags ? 'show': ''}`}>
                                <ul className={`list-flags ${showFlags ? 'show': ''}`}>
                                    <li>
                                        <a className='flag-button' onClick={_ => setShowFlags(!showFlags)} ref={dropdownFlags}>
                                            <Image src={`/images/flags/${lang}.png`} alt='flag' width={'28'} height={'20'} />
                                            {!showFlags &&
                                                <span className={`chevron-icon`}><ChevronIconDown color={'#fff'}/></span>
                                            }
                                            {showFlags &&
                                                <span className={`check-icon`}><CheckCircleIcon /></span>
                                            }
                                        </a>
                                    </li>
                                    <li className={`${showFlags ? 'block': 'hidden'}`}>
                                        {lang === 'en' &&
                                            <a onClick={_ => switchLang('id')}>
                                                <Image src={`/images/flags/id.png`} alt='indonesian flags' width={'28'} height={'20'} />
                                            </a>
                                        }
                                         {lang === 'id' &&
                                            <a onClick={_ => switchLang('en')}>
                                                <Image src={`/images/flags/en.png`} alt='indonesian flags' width={'28'} height={'20'} />
                                            </a>
                                        }
                                    </li>
                                </ul>
                            </li>
                            <li><Link href={`/${lang}/login`} className='btn-login-header'>Login</Link></li>
                            <li><Link href={`/${lang}/register`} className='btn-signup-header'>Sign Up</Link></li>
                        </ul>
                    </div>
                </div>
            </header>
            <MainSidebarMenu lang={lang} show={showSidebar} setShow={setShowSidebar}/>
        </>
  )
}

export default MainHeader
