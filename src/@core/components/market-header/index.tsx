"use client"
import Image from 'next/image'
import React, { useCallback, useEffect, useState } from 'react'
import { BurgerIcon, ChevronIconDown, MoonIcon, TrivIcon } from '../custom-icons';
import Link from 'next/link';
import MainSidebarMenu from './main-sidebar-menu';
import { usePathname, useRouter } from 'next/navigation';
import "@/styles/components/market-header.css";

const MarketHeader = (props: { lang: string}) => {
    const { lang } = props

    const [active, setActive] = useState(false);
    const [showFlags, setShowFlags] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false);
    const pathname = usePathname()
    const router = useRouter();



    const showMobileSidebar = () => {
        setShowSidebar(true)
        document.body.classList.add('overflow-hidden')
    }

    const switchLang = (langText:string) => {
        let paths = pathname.split("/")
        paths[1] = langText
        router.push(paths.join("/"))

    }

    return (
        <>
            <header className={`market-header sm:mobile-responsive md:mobile-responsive`}>
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
                        </ul>
                        <a className='button-switch-theme'><MoonIcon color='#fff' /></a>

                    </div>
                </div>
            </header>
            <MainSidebarMenu lang={lang} show={showSidebar} setShow={setShowSidebar}/>
        </>
  )
}

export default MarketHeader
