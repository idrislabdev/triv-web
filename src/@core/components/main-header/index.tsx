"use client"
import Image from 'next/image'
import React, { useCallback, useEffect, useState } from 'react'
import { BurgerIcon, ChevronIconDown, MoonIcon, TrivIcon } from '../custom-icons';
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
                        <li><Link href={`/${lang}/liverate`}>Harga (Jual Beli)</Link></li>
                        <li>Service</li>
                        <li><Link href={`/${lang}/staking`}>Staking</Link></li>
                        <li>Market</li>
                        <li><Link href={`/${lang}/stocks`}>US Stocks</Link></li>
                        <li><Link href={`/${lang}/home/affliate`}>Affliate</Link></li>
                        <li><Link href={`/${lang}/blog`}>Blog</Link></li>
                        <li><Link href={`/${lang}/home/contact-us`}>Contact Us</Link></li>
                    </ul>
                </div>
                <div className='main-header-action'>
                    <a className='burger-menu' onClick={_ => showMobileSidebar()}><BurgerIcon color={classText === '' ? '#fff': '#000'} /></a>
                    <div className='main-header-action-list'>
                        <a className='button-switch-theme'><MoonIcon color='#fff' /></a>
                        <ul>
                            <li>
                                <a className='flag-button' onClick={_ => setShowFlags(!showFlags)}>
                                    <Image src={`/images/flags/${lang}.png`} alt='flag' width={'28'} height={'20'} />
                                    <ChevronIconDown color={'#fff'}/>
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
