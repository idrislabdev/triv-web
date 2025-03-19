"use client"
import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
import { CheckCircleIcon, ChevronIconDown, MoonIcon, SunIcon, TimesIcon, TrivIcon } from '../../custom-icons'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import { useGlobals } from '@/@core/hooks/useGlobals';

const MainSidebarMenu = (props: { lang:string, show:boolean, setShow: Dispatch<SetStateAction<boolean>> }) => {
    const { lang, show, setShow } = props
    const router = useRouter();
    const [showFlags, setShowFlags] = useState(false);
    const dropdownFlags2: any = useRef(null);
    const pathname = usePathname()
    const [mode, setMode] = useState('light-theme')
    const { globals, saveGlobals } = useGlobals()

    const toggleSubMenu = (id:string) => {
        const element = document.getElementById(id)
        const elementChevron = document.getElementById(id+'--chevron')

        if (element) {
            element.classList.toggle('!hidden')
        }
        if (elementChevron) {
            elementChevron.classList.toggle('transform');
            elementChevron.classList.toggle('rotate-180');
        }
    }

    const goToLink = (path:string) => {
        document.body.classList.remove('overflow-hidden')
        router.push(`/${lang}/${path}`)
    }

    const closeSidebar = () => {
        document.body.classList.remove('overflow-hidden')
        setShow(false)
    }

    const switchLang = (langText:string) => {
        let paths = pathname.split("/")
        paths[1] = langText
        router.push(paths.join("/"))

    }

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

    useEffect(() => {
        if (localStorage.getItem('mode') === 'dark-theme') {
            setMode('dark-theme')
        }
    },[setMode])

    useEffect(() => {
        if (!showFlags) return;
        function handleClick(event : MouseEvent) {
            if (dropdownFlags2.current && !dropdownFlags2.current.contains(event.target)) {
                document.body.classList.remove('overflow-hidden')
                setShowFlags(false);
            }
        }
        window.addEventListener("click", handleClick);
        return () => window.removeEventListener("click", handleClick);
    }, [showFlags]);

    return (
        <>
            <div className={`main-sidebar-overlay ${!show ? '!hidden' : ''}`} onClick={_ => closeSidebar()}></div>
            <div className={`main-sidebar-menu ${show ? 'show' : ''}`}>
                <div className='sidebar-menu-top'>
                    <div className='sidebar-header'>
                        <div className='sidebar-header-logo'>
                            <a onClick={_ => goToLink('')}><TrivIcon color={'#318AC6'} /></a>
                        </div>
                        <div className='sidebar-header-action'>
                            <ul className={`list-flags ${showFlags ? 'show': ''}`}>
                                <li>
                                    <a className='flag-button' onClick={_ => setShowFlags(!showFlags)} ref={dropdownFlags2}>
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
                            <a onClick={_ => switchTheme()}>
                            {mode === 'light-theme' && <MoonIcon color='#F2AF22' /> }
                            {mode === 'dark-theme' && <SunIcon color='#F2AF22' /> }
                            </a>
                            <a onClick={_ => closeSidebar()}><TimesIcon color={'#838899'} /></a>
                        </div>
                    </div>
                    <div className='sidebar-list'>
                        <ul>
                            <li><Link href={`/${lang}/liverate`}>Harga (Jual Beli)</Link></li>
                            <li>
                                <a className='flex justify-between items-center' onClick={_ => toggleSubMenu('submenu--emoney')}>
                                    <span>E-money</span>
                                    <svg 
                                        id='submenu--emoney--chevron'
                                        className={`w-3 h-3`} 
                                        fill="none" strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth="2" 
                                        viewBox="0 0 24 24" 
                                        stroke="#000"
                                    >
                                        <path d="M19 9l-7 7-7-7"></path>
                                    </svg>
                                </a>
                                <ul id="submenu--emoney" className='sidebar-submenu !hidden'>
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
                            {/* <li>
                                <a className='flex justify-between items-center' onClick={_ => toggleSubMenu('submenu--product')}>
                                    <span>Product</span>
                                    <svg 
                                        id='submenu--product--chevron'
                                        className={`w-3 h-3`} 
                                        fill="none" strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth="2" 
                                        viewBox="0 0 24 24" 
                                        stroke="#000"
                                    >
                                        <path d="M19 9l-7 7-7-7"></path>
                                    </svg>
                                </a>
                                <ul id="submenu--product" className='sidebar-submenu !hidden'>
                                    <li><Link href={`/${lang}/home/product-pulsa`}>Pulsa</Link></li>
                                    <li><Link href={`/${lang}/home/product-token-listrik`}>Token Listrik</Link></li>
                                    <li><Link href={`/${lang}/home/product-tagihan`}>Tagihan</Link></li>
                                </ul>
                            </li> */}
                                <li><a onClick={_ => goToLink('staking')}>Staking</a></li>
                                <li><a onClick={_ => goToLink('markets')}>Market</a></li>
                                <li><a onClick={_ => goToLink('stocks')}>US Stock</a></li>
                                <li><a onClick={_ => goToLink('home/affliate')}>Affliate</a></li>
                                <li><a onClick={_ => goToLink('blog')}>Blog</a></li>
                                <li><a onClick={_ => goToLink('home/contact-us')}>Contact Us</a></li>
                            </ul>
                    </div>
                </div>
                <div className='sidebar-menu-bottom'>
                    <a onClick={_ => goToLink('login')} className='button-login'>Log In</a>
                    <a onClick={_ => goToLink('register')} className='button-register'>Register</a>
                </div>
            </div>
        </>
    )
}

export default MainSidebarMenu
