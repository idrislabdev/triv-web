import React, { Dispatch, SetStateAction, useState } from 'react'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Link from 'next/link';


const MarketFormContainer = (props: {
        lang:string,
        tabLimit:string, setTabLimit:Dispatch<SetStateAction<string>>,
        tabInfo:string, setTabInfo:Dispatch<SetStateAction<string>>,
    }) => {
    const { lang, tabLimit, setTabLimit, tabInfo, setTabInfo } = props
    const [range, setRange] = useState(0)
    const changeTablimit = (val:string) => {
        setTabLimit(val)
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
            <div className='button-group'>
                <button className='rounded-tl-[4px] rounded-bl-[4px] active'>Beli</button>
                <button className='rounded-tr-[4px] rounded-br-[4px]'>Jual</button>
            </div>
            <div className='tab-form'>
                <ul>
                    <li className={`${tabLimit === "limits" ? 'active' : ''}`}><a onClick={_ => changeTablimit('limits')}>Limits</a></li>
                    <li className={`${tabLimit === "instant" ? 'active' : ''}`}><a onClick={_ => changeTablimit('instant')}>Instant</a></li>
                    <li className={`${tabLimit === "stop_limit" ? 'active' : ''}`}><a onClick={_ => changeTablimit('stop_limit')}>Stop-Limit</a></li>
                </ul>
            </div>
            <div className='input-form'>
                <div className='form-group'>
                    <label>Price</label>
                    <div className='group-input prepend'>
                        <input className='color-2' placeholder='0'/>
                        <span className='prepend'>IDR</span>
                    </div>
                </div>
                <div className='form-group'>
                    <label>Amount</label>
                    <div className='group-input prepend'>
                        <input className='color-2' placeholder='0'/>
                        <span className='prepend'>IDR</span>
                    </div>
                </div>
                <div className='range-slider'>
                    <Slider
                        min={0}
                        marks={marks}
                        step={null}
                        onChange={handleChange}
                        defaultValue={range}
                    />
                </div>
                <div className='form-group'>
                    <label>Total</label>
                    <div className='group-input prepend'>
                        <input className='color-2' placeholder='0'/>
                        <span className='prepend'>IDR</span>
                    </div>
                </div>
                <Link href={`/${lang}/login`}>Login Untuk Trading </Link>
            </div>
            <div className='tab-form'>
                <ul>
                    <li className={`${tabInfo === "limit" ? 'active' : ''}`}><a onClick={_ => changeTablimit('limit')}>Limit</a></li>
                    <li className={`${tabInfo === "biaya" ? 'active' : ''}`}><a onClick={_ => changeTablimit('instant')}>Biaya</a></li>
                    <li className={`${tabInfo === "info" ? 'active' : ''}`}><a onClick={_ => changeTablimit('stop_limit')}>Info</a></li>
                </ul>
            </div>
            <div className='info-market'>
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
            </div>
        </div>
  )
}

export default MarketFormContainer
