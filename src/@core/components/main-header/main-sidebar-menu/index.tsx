"use client"
import React, { Dispatch, SetStateAction, useEffect } from 'react'
import { MoonIcon, TimesIcon, TrivIcon } from '../../custom-icons'
import Link from 'next/link'

const MainSidebarMenu = (props: { lang:string, show:boolean, setShow: Dispatch<SetStateAction<boolean>> }) => {
    const { lang, show, setShow } = props
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

    const closeSidebar = () => {
        setShow(false)
        document.body.classList.remove('overflow-hidden')
    }


    return (
        <>
            <div className={`main-sidebar-overlay ${!show ? '!hidden' : ''}`}></div>
            <div className={`main-sidebar-menu ${show ? 'show' : ''}`}>
                <div className='sidebar-menu-top'>
                    <div className='sidebar-header'>
                        <div className='sidebar-header-logo'>
                            <Link href="/"><TrivIcon color={'#318AC6'} /></Link>
                        </div>
                        <div className='sidebar-header-action'>
                            <a><MoonIcon color={'#F2AF22'} /></a>
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
                            <li><Link href={`/${lang}/staking`}>Staking</Link></li>
                            <li>US Stock</li>
                            <li>Affliate</li>
                            <li>Blog</li>
                            <li>Contact US</li>
                        </ul>
                    </div>
                </div>
                <div className='sidebar-menu-bottom'>
                    <button className='button-login'>Log In</button>
                    <button className='button-register'>Register</button>
                </div>
            </div>
        </>
    )
}

export default MainSidebarMenu
