"use client"
import Image from 'next/image'
import React, { useCallback, useEffect, useState } from 'react'
import { MoonIcon, TrivIcon } from '../custom-icons';

const MainHeader = () => {
    const [active, setActive] = useState(false);

    const onScroll = useCallback(() => {
        const { scrollY } = window;
        if ( scrollY >= 60) {
            document.getElementsByTagName("header")[0].classList.add('active');
            setActive(true)
        } else {
            document.getElementsByTagName("header")[0].classList.remove('active');
            setActive(false)
        }
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => {
           window.removeEventListener("scroll", onScroll, { passive: true });
        }
      });
    
    return (
        <header className='main-header'>
            <div>
                <TrivIcon color={active === false ? '#fff': '#318AC6'} />
            </div>
            <div className='main-header-menu'>
                <ul>
                    <li>Harga (Jual Beli)</li>
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
                <a><MoonIcon color={active === false ? '#fff': '#F2AF22'} /></a>
                <div className='main-header-action-list'>
                    <ul>
                        <li><Image src='/images/flags/id.png' alt='english language' width={'28'} height={'20'} /></li>
                        <li><button className='btn-login-header'>Login</button></li>
                        <li><button className='btn-signup-header'>Sign Up</button></li>
                    </ul>
                </div>
            </div>
        </header>
  )
}

export default MainHeader
