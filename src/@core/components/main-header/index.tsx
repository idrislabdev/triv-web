"use client"
import Image from 'next/image'
import React, { useCallback, useEffect, useState } from 'react'
import { BurgerIcon, MoonIcon, TrivIcon } from '../custom-icons';
import Link from 'next/link';
import MainSidebarMenu from './main-sidebar-menu';
import { usePathname, useRouter } from 'next/navigation';

const MainHeader = (props: {classText:string, lang: string}) => {
    const { classText, lang } = props
    const [active, setActive] = useState(false);
    const [showFlags, setShowFlags] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false);
    const pathname = usePathname()
    const router = useRouter();

    const onScroll = useCallback(() => {
        const { scrollY } = window;
        if ( scrollY >= 60) {
            document.getElementsByTagName("header")[0].classList.add('header-white');
            setActive(true)
        } else {
            document.getElementsByTagName("header")[0].classList.remove('header-white');
            setActive(false)
        }
    }, []);

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
        if (classText === '') {
            window.addEventListener("scroll", onScroll, { passive: true });
            return () => {
               window.removeEventListener("scroll", onScroll);
            }
        }
    });
    
    return (
        <>
            <header className={`main-header sm:mobile-responsive ${classText}`}>
                <div className='triv-logo-header'>
                    <Link href="/"><TrivIcon color={active === false  && classText === '' ? '#fff': '#318AC6'} /></Link>
                </div>
                <div className={`main-header-menu`}>
                    <ul>
                        <li><Link href="/liverate">Harga (Jual Beli)</Link></li>
                        <li>Service</li>
                        <li>Staking</li>
                        <li>Market</li>
                        <li>US Stock</li>
                        <li>Affliate</li>
                        <li>Blog</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className='main-header-action'>
                    <a className='burger-menu' onClick={_ => showMobileSidebar()}><BurgerIcon color={classText === '' ? '#fff': '#000'} /></a>
                    <div className='main-header-action-list'>
                        <a><MoonIcon color={classText === '' ? '#fff': '#F2AF22'} /></a>
                        <ul>
                            <li>
                                <a className='flex items-center gap-[4px]' onClick={_ => setShowFlags(!showFlags)}>
                                    <Image src={`/images/flags/${lang}.png`} alt='flag' width={'28'} height={'20'} />
                                    <svg 
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
                                <ul className={`list-flags ${showFlags ? 'show': ''}`}>
                                    <li>
                                        <a onClick={_ => switchLang('id')}>
                                            <Image src={`/images/flags/id.png`} alt='indonesian flags' width={'28'} height={'20'} />
                                        </a>
                                    </li>
                                    <li>
                                        <a onClick={_ => switchLang('en')}>
                                            <Image src={`/images/flags/en.png`} alt='english flags' width={'28'} height={'20'} />
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li><button className='btn-login-header'>Login</button></li>
                            <li><button className='btn-signup-header'>Sign Up</button></li>
                        </ul>
                    </div>
                </div>
            </header>
            <MainSidebarMenu show={showSidebar} setShow={setShowSidebar}/>
        </>
  )
}

export default MainHeader
