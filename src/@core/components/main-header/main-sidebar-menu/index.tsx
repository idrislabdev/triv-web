"use client"
import React, { Dispatch, SetStateAction, useEffect } from 'react'
import { MoonIcon, TimesIcon, TrivIcon } from '../../custom-icons'
import Link from 'next/link'
import { useRouter } from 'next/navigation';

const MainSidebarMenu = (props: { lang:string, show:boolean, setShow: Dispatch<SetStateAction<boolean>> }) => {
    const { lang, show, setShow } = props
    const router = useRouter();

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

    const switchTheme = () => {
        var check = document.body.classList.contains('dark-theme')
        if (check) {
            localStorage.removeItem('mode');
        } else {
            localStorage.setItem('mode', 'dark-theme');
        }
        router.refresh();
        window.location.reload();
    }

    return (
        <>
            <div className={`main-sidebar-overlay ${!show ? '!hidden' : ''}`}></div>
            <div className={`main-sidebar-menu ${show ? 'show' : ''}`}>
                <div className='sidebar-menu-top'>
                    <div className='sidebar-header'>
                        <div className='sidebar-header-logo'>
                            <a onClick={_ => goToLink('')}><TrivIcon color={'#318AC6'} /></a>
                        </div>
                        <div className='sidebar-header-action'>
                            <a onClick={_ => switchTheme()}><MoonIcon color={'#F2AF22'} /></a>
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
                                    <li>Perfect Money</li>
                                    <li>Paypal</li>
                                </ul>
                            </li>
                            <li>
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
                                    <li>Mobile Top Up</li>
                                    <li>Electricty Token</li>
                                </ul>
                            </li>
                                <li><a onClick={_ => goToLink('staking')}>Staking</a></li>
                                <li><a onClick={_ => goToLink('stocks')}>Us Stock</a></li>
                                <li><a onClick={_ => goToLink('home/affliate')}>Us Stock</a></li>
                                <li><a onClick={_ => goToLink('blog')}>Affliate</a></li>
                                <li><a onClick={_ => goToLink('home/contact-us')}>Blog</a></li>
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
