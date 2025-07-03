import React, { Dispatch, SetStateAction, useState } from 'react'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Link from 'next/link';
import { ArrowRightIcon } from '@/@core/components/custom-icons';


const MarketFormContainer = (props: {
        lang:string,
        tabLimit:string, setTabLimit:Dispatch<SetStateAction<string>>,
        tabInfo:string, setTabInfo:Dispatch<SetStateAction<string>>,
        market:any
    }) => {
    const { lang, tabLimit, setTabLimit, tabInfo, setTabInfo, market } = props
    const [range, setRange] = useState(0)
    const [buttonType, setButtonType] = useState('buy');
    const [priceLimit, setPriceLimit] = useState("0");
    const [amountLimit, setAmountLimit] = useState("0");
    const [totalLimit, setTotalLimit] = useState("0");

    const [priceInstant, setPriceInstant] = useState("0");
    const [totalInstant, setTotalInstant] = useState("0");

    const [stopStop, setStopStop] = useState("0");
    const [limitStop, setLimitStop] = useState("0");
    const [amountStop, setAmountStop] = useState("0");
    const [totalStop, setTotalStop] = useState("0");

    const changeTablimit = (val:string) => {
        setTabLimit(val)
    }
    const changeTabInfo = (val:string) => {
        setTabInfo(val)
    }
    const handleChange = async (e: React.MouseEvent<HTMLDivElement, MouseEvent> | any) => {
        setRange(parseInt(e))
        
    }
    const marks = {
        0: '0%',
        25: '25%',
        50: '50%',
        75: '75%',
        100: '100%',
    };

    return (
        <div className='form-container'>
            <div className={`button-group ${buttonType}`}>
                <button className={`rounded-tl-[4px] rounded-bl-[4px] ${buttonType === "buy" ? 'active' : ''}`} onClick={_ => setButtonType('buy')}>Beli</button>
                <button className={`rounded-tr-[4px] rounded-br-[4px] ${buttonType === "sell" ? 'active' : ''}`} onClick={_ => setButtonType('sell')}>Jual</button>
            </div>
            <div className='tab-form'>
                <ul>
                    <li className={`${tabLimit === "limits" ? 'active' : ''}`}><a onClick={_ => changeTablimit('limits')}>Limits</a></li>
                    <li className={`${tabLimit === "instant" ? 'active' : ''}`}><a onClick={_ => changeTablimit('instant')}>Instant</a></li>
                    <li className={`${tabLimit === "stop_limit" ? 'active' : ''}`}><a onClick={_ => changeTablimit('stop_limit')}>Stop-Limit</a></li>
                </ul>
            </div>
            <div className='input-form'>
                {tabLimit === 'limits' &&
                    <>
                        <div className='form-group'>
                            <label>Price</label>
                            <div className='group-input prepend'>
                                <input 
                                    value={priceLimit}
                                    className='color-2' placeholder='0' 
                                    onInput={(e: React.ChangeEvent<HTMLInputElement>) => setPriceLimit(e.target.value.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, "."))}
                                />
                                <span className='prepend'>{market.quote_asset.code}</span>
                            </div>
                        </div>
                        <div className='form-group'>
                            <label>Amount</label>
                            <div className='group-input prepend'>
                                <input 
                                    value={amountLimit}
                                    className='color-2' placeholder='0' 
                                    onInput={(e: React.ChangeEvent<HTMLInputElement>) => setAmountLimit(e.target.value.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, "."))}
                                />
                                <span className='prepend'>{market.quote_asset.code}</span>
                            </div>
                        </div>
                    </>
                }
                {tabLimit === 'instant' &&
                     <>
                        <div className='form-group'>
                            <label>Price</label>
                            <div className='group-input prepend'>
                                <label>Market Price</label>
                                <span className='prepend'>{market.quote_asset.code}</span>
                            </div>
                        </div>
                        <div className='form-group'>
                            <label>Total</label>
                            <div className='group-input prepend'>
                                <input 
                                    value={totalInstant}
                                    className='color-2' placeholder='0' 
                                    onInput={(e: React.ChangeEvent<HTMLInputElement>) => setTotalInstant(e.target.value.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, "."))}
                                />
                                <span className='prepend'>{market.quote_asset.code}</span>
                            </div>
                        </div>
                    </>
                }
                 {tabLimit === 'stop_limit' &&
                     <>
                        <div className='form-group'>
                            <label>Stop</label>
                            <div className='group-input prepend'>
                                <input 
                                    value={stopStop}
                                    className='color-2' placeholder='0' 
                                    onInput={(e: React.ChangeEvent<HTMLInputElement>) => setStopStop(e.target.value.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, "."))}
                                />
                                <span className='prepend'>{market.quote_asset.code}</span>
                            </div>
                        </div>
                        <div className='form-group'>
                            <label>Limit</label>
                            <div className='group-input prepend'>
                                <input 
                                    value={limitStop}
                                    className='color-2' placeholder='0' 
                                    onInput={(e: React.ChangeEvent<HTMLInputElement>) => setLimitStop(e.target.value.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, "."))}
                                />
                                <span className='prepend'>{market.quote_asset.code}</span>
                            </div>
                        </div>
                        <div className='form-group'>
                            <label>Amount</label>
                            <div className='group-input prepend'>
                                <input 
                                    value={amountStop}
                                    className='color-2' placeholder='0' 
                                    onInput={(e: React.ChangeEvent<HTMLInputElement>) => setAmountStop(e.target.value.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, "."))}
                                />
                                <span className='prepend'>{market.quote_asset.code}</span>
                            </div>
                        </div>
                    </>
                }
                <div className='px-[10px] mb-[10px]'>
                    <Slider
                        min={0}
                        marks={marks}
                        step={null}
                        onChange={handleChange}
                        defaultValue={range}
                    />
                </div>
                {tabLimit === 'stop_limits' &&
                    <div className='form-group'>
                        <label>Total</label>
                        <div className='group-input prepend'>
                            <input 
                                value={totalStop}
                                className='color-2' placeholder='0' 
                                onInput={(e: React.ChangeEvent<HTMLInputElement>) => setTotalStop(e.target.value.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, "."))}
                            />
                            <span className='prepend'>IDR</span>
                        </div>
                    </div>
                }
                 {tabLimit === 'limits' &&
                    <div className='form-group'>
                        <label>Total</label>
                        <div className='group-input prepend'>
                            <input 
                                value={totalLimit}
                                className='color-2' placeholder='0' 
                                onInput={(e: React.ChangeEvent<HTMLInputElement>) => setTotalLimit(e.target.value.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, "."))}
                            />
                            <span className='prepend'>IDR</span>
                        </div>
                    </div>
                }
                <Link href={`/${lang}/login`} className={`${buttonType}`}>Login Untuk Trading </Link>
            </div>
            <div className='tab-form'>
                <ul>
                    <li className={`${tabInfo === "limit" ? 'active' : ''}`}><a onClick={_ => changeTabInfo('limit')}>Limit</a></li>
                    {/* <li className={`${tabInfo === "biaya" ? 'active' : ''}`}><a onClick={_ => changeTabInfo('biaya')}>Biaya</a></li> */}
                    {/* <li className={`${tabInfo === "info" ? 'active' : ''}`}><a onClick={_ => changeTabInfo('info')}>Info</a></li> */}
                </ul>
            </div>
            <div className='info-market'>
                {tabInfo === 'limit' &&
                    <>
                        <div className='info-detail'>
                            <label>Jumlah Maks. Order</label>
                            <span>BTC 0,5</span>
                        </div>
                        <div className='info-detail'>
                            <label>Jumlah Min. Order</label>
                            <span>BTC 0,000005</span>
                        </div>
                        <div className='info-detail'>
                            <label>Maks. Order Nasional</label>
                            <span>IDR 500.000.000</span>
                        </div>
                        <div className='info-detail'>
                            <label>Min. Order Nasional</label>
                            <span>IDR 10.000</span>
                        </div>
                        <div className='info-detail'>
                            <label>Min. Tick Jumlah</label>
                            <span>BTC 0,00001</span>
                        </div>
                        <div className='info-detail'>
                            <label>Min. Tick Harga</label>
                            <span>IDR 1.000</span>
                        </div>
                    </>
                }
                {tabInfo === 'info' &&
                    <>
                        <div className='info'>
                            <h6>Tentang Bitcoin</h6>
                            <p className=''>
                                Bitcoin (BTC) adalah mata uang kripto pertama di dunia. Diciptakan pada tahun 2009, BTC disimpan dan diperdagangkan melalui 
                                jaringan internet menggunakan Bitcoin Blockchain, suatu buku besar digital yang terdistribusi. BTC dapat dibagi 
                                menjadi satuan yang lebih kecil— bernama Satoshi—di mana 1 BTC = 100 juta Satoshi.
                            </p>
                            <a>Website Resmi <ArrowRightIcon color={'#fff'} /></a>
                        </div>
                    </>
                }
            </div>
        </div>
  )
}

export default MarketFormContainer
