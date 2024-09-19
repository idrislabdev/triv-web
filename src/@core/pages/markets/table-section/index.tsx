"use client"

import Link from 'next/link'
import React, { useState } from 'react'

const MarketTableSection = (props: {lang:string}) => {
    const { lang } = props
    const [tab, setTab] = useState('open_order')
    const [emptyState, setEmptyState] = useState(false);
    const openOrders = [
        {date: '2024-08-12 09:04:48', pair: 'BTC/IDR', filled: 80, type: 'Limit', side: 'Buy', price: '890.000.000', amount: '0.04', total : '16.000.000', trigger: '-', status: 'completed', action:''},
        {date: '2024-08-12 09:04:48', pair: 'BTC/IDR', filled: 80, type: 'Limit', side: 'Buy', price: '890.000.000', amount: '0.04', total : '16.000.000', trigger: '-', status: 'active', action:''},
        {date: '2024-08-12 09:04:48', pair: 'BTC/IDR', filled: 80, type: 'Limit', side: 'Buy', price: '890.000.000', amount: '0.04', total : '16.000.000', trigger: '-', status: 'canceled', action:''},
        {date: '2024-08-12 09:04:48', pair: 'BTC/IDR', filled: 80, type: 'Limit', side: 'Buy', price: '890.000.000', amount: '0.04', total : '16.000.000', trigger: '-', status: 'failed', action:''}
    ]

    const riwayatOrders = [
        {date: '2024-08-12 09:04:48', pair: 'BTC/IDR', filled: 0.0, type: 'Limit', side: 'Buy', price: '890.000.000', amount: '0.04', total : '16.000.000', trigger: '-', status: 'completed', order_id:'c5343246hsh3'},
        {date: '2024-08-12 09:04:48', pair: 'BTC/IDR', filled: 0.0, type: 'Limit', side: 'Buy', price: '890.000.000', amount: '0.04', total : '16.000.000', trigger: '-', status: 'active', order_id:'c5343246hsh3'},
        {date: '2024-08-12 09:04:48', pair: 'BTC/IDR', filled: 0.0, type: 'Limit', side: 'Buy', price: '890.000.000', amount: '0.04', total : '16.000.000', trigger: '-', status: 'canceled', order_id:'c5343246hsh3'},
        {date: '2024-08-12 09:04:48', pair: 'BTC/IDR', filled: 0.0, type: 'Limit', side: 'Buy', price: '890.000.000', amount: '0.04', total : '16.000.000', trigger: '-', status: 'failed', order_id:'c5343246hsh3'}
    ]

    const riwayatTradings = [
        {date: '2024-08-12 09:04:48', price: '890.000.000', amount: '0.04', state_taxt: '0.083772', you_get : '16.000.000', status: 'buy', order_id:'c5343246hsh3'},
        {date: '2024-08-12 09:04:48', price: '890.000.000', amount: '0.04', state_taxt: '0.083772', you_get : '16.000.000', status: 'sell', order_id:'c5343246hsh3'},
        {date: '2024-08-12 09:04:48', price: '890.000.000', amount: '0.04', state_taxt: '0.083772', you_get : '16.000.000', status: 'buy', order_id:'c5343246hsh3'},
    ]
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
                {tab === 'open_order' &&
                    <table>
                        <thead>
                            <tr>
                                <td>Date</td>
                                <td>Pair</td>
                                <td>Filled</td>
                                <td>Type</td>
                                <td>Side</td>
                                <td>Price</td>
                                <td>Amount</td>
                                <td>Total</td>
                                <td>Trigger</td>
                                <td className='text-center'>Status</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {emptyState === true &&
                                <tr className='empty-state'>
                                    <td colSpan={11}>
                                        <span><Link href={`/${lang}/login`}>Login</Link> atau <Link href={`/${lang}/register`}>Daftar</Link> untuk Trading</span>
                                    </td>
                                </tr>
                            }
                            {emptyState === false &&
                                openOrders.map((item:any, index:number) => (
                                    <tr key={index}>
                                        <td>{item.date}</td>
                                        <td>{item.pair}</td>
                                        <td></td>
                                        <td>{item.type}</td>
                                        <td>{item.side}</td>
                                        <td>{item.price}</td>
                                        <td>{item.amount}</td>
                                        <td>{item.total}</td>
                                        <td>{item.trigger}</td>
                                        <td className='text-center'>
                                            <span className={`badge-status ${item.status}`}>
                                                {item.status}
                                            </span>
                                        </td>
                                        <td>
                                            <span className={`action cancel`}>Cancel</span>
                                        </td>
                                    </tr>
                                ))
                            }
                            
                        </tbody>
                    </table>
                }
                 {tab === 'riwayat_order' &&
                    <table>
                        <thead>
                            <tr>
                                <td>Date</td>
                                <td>Pair</td>
                                <td>Type</td>
                                <td>Side</td>
                                <td>Price</td>
                                <td>Amount</td>
                                <td>Filled</td>
                                <td>Total</td>
                                <td>Trigger</td>
                                <td className='text-center'>Status</td>
                                <td>Orderid</td>
                            </tr>
                        </thead>
                        <tbody>
                            {emptyState === true &&
                                <tr className='empty-state'>
                                    <td colSpan={11}>
                                        <span><Link href={`/${lang}/login`}>Login</Link> atau <Link href={`/${lang}/register`}>Daftar</Link> untuk Trading</span>
                                    </td>
                                </tr>
                            }
                            {emptyState === false &&
                                riwayatOrders.map((item:any, index:number) => (
                                    <tr key={index}>
                                        <td>{item.date}</td>
                                        <td>{item.pair}</td>
                                        <td>{item.type}</td>
                                        <td>{item.side}</td>
                                        <td>{item.price}</td>
                                        <td>{item.amount}</td>
                                        <td>{item.filled}</td>
                                        <td>{item.total}</td>
                                        <td>{item.trigger}</td>
                                        <td className='text-center'>
                                            <span className={`badge-status ${item.status}`}>
                                                {item.status}
                                            </span>
                                        </td>
                                        <td>{item.order_id}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                }
                 {tab === 'riwayat_trading' &&
                    <table>
                        <thead>
                            <tr>
                                <td>Date</td>
                                <td>Price</td>
                                <td>Amount</td>
                                <td>State Taxt</td>
                                <td>You Get</td>
                                <td>Orderid</td>
                                <td className='text-center'>Status</td>
                            </tr>
                        </thead>
                        <tbody>
                        {emptyState === true &&
                                <tr className='empty-state'>
                                    <td colSpan={7}>
                                        <span><Link href={`/${lang}/login`}>Login</Link> atau <Link href={`/${lang}/register`}>Daftar</Link> untuk Trading</span>
                                    </td>
                                </tr>
                            }
                            {emptyState === false &&
                                riwayatTradings.map((item:any, index:number) => (
                                    <tr key={index}>
                                        <td>{item.date}</td>
                                        <td>{item.price}</td>
                                        <td>{item.amount}</td>
                                        <td>{item.state_taxt}</td>
                                        <td>{item.you_get}</td>
                                        <td>{item.order_id}</td>
                                        <td className='text-center'>
                                            <span className={`badge-status ${item.status}`}>
                                                {item.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                }
                
            </div>
        </section>
    )
}

export default MarketTableSection
