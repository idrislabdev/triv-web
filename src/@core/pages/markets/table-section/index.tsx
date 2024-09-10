"use client"

import Link from 'next/link'
import React, { useState } from 'react'

const MarketTableSection = (props: {lang:string}) => {
    const { lang } = props
    const [tab, setTab] = useState('open_order')
    return (
        <section className='market-table-section'>
            <div className='tab-table'>
                <ul>
                    <li className={`${tab === "open_order" ? 'active' : ''}`}><a onClick={_ => setTab('open_order')}>Open Order</a></li>
                    <li className={`${tab === "riwayat_order" ? 'active' : ''}`}><a onClick={_ => setTab('riwayat_order')}>Riwayat Order</a></li>
                    <li className={`${tab === "riwayat_trading" ? 'active' : ''}`}><a onClick={_ => setTab('riwayat_trading')}>Riwayat Trading</a></li>
                </ul>
            </div>
            <div className='main-table'>
                <table>
                    <thead>
                        <tr>
                            <td>Aset</td>
                            <td>Total</td>
                            <td>Tersedia</td>
                            <td>Locked</td>
                            <td>Tersedia</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='empty-state'>
                            <td colSpan={5}>
                                <span><Link href={`/${lang}/login`}>Login</Link> atau <Link href={`/${lang}/register`}>Daftar</Link> untuk Trading</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default MarketTableSection
