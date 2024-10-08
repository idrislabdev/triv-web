"use client"
import Image from 'next/image'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { BurgerIcon, ChevronIconDown, MoonIcon, SunIcon, TrivIcon } from '../custom-icons';
import Link from 'next/link';
import MainSidebarMenu from './main-sidebar-menu';
import { usePathname, useRouter } from 'next/navigation';
import "@/styles/components/market-header.css";
import { useGlobals } from '@/@core/hooks/useGlobals';
import { GlobalsProvider } from '@/@core/context/globalContext';

const MarketHeader = (props: { lang: string}) => {
    const { lang } = props

    const [showFlags, setShowFlags] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false);
    const dropdownFlags: any = useRef(null);
    const { globals, saveGlobals } = useGlobals()

    const pathname = usePathname()
    const router = useRouter();

    if (localStorage.getItem('mode') === 'dark-theme') {
        document.body.classList.add("dark-theme", "market")
    }

    const switchTheme = () => {
        var check = document.body.classList.contains('dark-theme')
        if (check) {
            localStorage.removeItem('mode');
            document.body.classList.remove("dark-theme");
            saveGlobals({...globals, theme: 'light'})
        } else {
            localStorage.setItem('mode', 'dark-theme');
            saveGlobals({...globals, theme: 'dark'})
        }
    }

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
            document.body.classList.add("dark-theme", "market")
            saveGlobals({...globals, theme: 'dark'})
        }
    }, [globals.theme])

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
            <header className={`market-header sm:mobile-responsive`}>
                <div className='triv-logo-header'>
                    <Link href="/"><TrivIcon color={'#318AC6'} /></Link>
                </div>
                <div className='market-header-action'>
                    <a className='burger-menu' onClick={_ => showMobileSidebar()}><BurgerIcon color={'#000'} /></a>
                    <div className='market-header-action-list'>
                        <ul>
                            <li><Link href={`/${lang}/register`} className='btn-signup-header'>Sign Up</Link></li>
                            <li><Link href={`/${lang}/login`} className='btn-login-header'>Login</Link></li>
                            <li className='flex'>
                                <a className='flag-button' onClick={_ => setShowFlags(!showFlags)} ref={dropdownFlags}>
                                    <Image src={`/images/flags/${lang}.png`} alt='flag' width={'28'} height={'20'} />
                                    <span className={`transition-all duration-300 ${showFlags ? 'rotate-180': ''}`}><ChevronIconDown color={'#fff'}/></span>
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
                        </ul>
                        <a className='button-switch-theme' onClick={_ => switchTheme()}>
                            {globals.theme === 'light' && <MoonIcon color='#fff' /> }
                            {globals.theme === 'dark' && <SunIcon color='#fff' /> }
                        </a>

                    </div>
                </div>
            </header>
            <MainSidebarMenu lang={lang} show={showSidebar} setShow={setShowSidebar}/>
        </>
  )
}

export default MarketHeader
