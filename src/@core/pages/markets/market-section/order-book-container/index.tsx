import React, { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react'
import axiosInstance from '@/@core/utils/axios'
import { IBookOrder, ITrade } from '@/@core/@types/interfaces'
import moment from 'moment';

const MarketOrderBookContainer = (props: {market:any, setMarket:Dispatch<SetStateAction<any>>}) => {
    const {market, setMarket} = props
    
    const [dataAsks, setDataAsks] = useState<Array<IBookOrder>>([]);
    const [dataBids, setDataBids] = useState<Array<IBookOrder>>([]);
    const [dataTrades, setDataTrades] = useState<Array<ITrade>>([]);
    
    const getAsset = useCallback(async () => {
        const resp = await axiosInstance.get(`/v2/market/order-book?symbol=${market.symbol}`)
        const { asks } = resp.data.data;
        const { bids } = resp.data.data;

        let arrAsks:IBookOrder[] = [] as IBookOrder[];
        let arrBids:IBookOrder[] = [] as IBookOrder[];

        asks.forEach((item:any) => {
            let obj:IBookOrder = {} as IBookOrder;
            obj.qty = item[0]
            obj.price = item[1]
            obj.total = item[0]*item[1]
            obj.progress = Math.floor(Math.random() * 100)
            arrAsks.push(obj)
        });
        setDataAsks(arrAsks)

        bids.forEach((item:any) => {
            let obj:IBookOrder = {} as IBookOrder;
            obj.qty = item[0]
            obj.price = item[1]
            obj.total = item[0]*item[1]
            obj.progress = Math.floor(Math.random() * 100)
            arrBids.push(obj)
        });
        setDataBids(arrBids)

    }, [market])

    const getTrades = useCallback(async () => {
        const resp = await axiosInstance.get(`/v2/market/trades?symbol=${market.symbol}`)
        const temp:ITrade[] = resp.data.data;
        setDataTrades(temp)
    }, [market])

    useEffect(() => {
        getAsset();
    }, [getAsset])

    useEffect(() => {
        getTrades();
    }, [getTrades])
  return (
    <div className='order-book-container'>
        <div className='subcontainer-title'>
            <h5>Order Book</h5>
        </div>
        <div className='order-book-table'>
            <div className='table-header'>
                <div className='header-row'>
                    <label>Harga (IDR)</label>
                    <label>Jumlah</label>
                    <label>Total</label>
                </div>
            </div>
            <div className='table-body'>
                {
                    dataAsks.map((item:IBookOrder, index:number) => (
                        <div className='body-row' key={index}>
                            <label className='!text-[#EB5757]'>{item.price.toFixed(market.base_asset.precision)}</label>
                            <label>{item.qty.toFixed(market.quote_asset.precision)}</label>
                            <label>{item.total.toFixed(0)}</label>
                            <span style={{width: `${item.progress}%`}} ></span>
                        </div>
                    ))
                }
                
            </div>
        </div>
        <div className='subcontainer-title'>
            <h5 className='!text-[#67C48F]'>924.038.029</h5>
        </div>
        <div className='order-book-table'>
            <div className='table-header'>
                <div className='header-row'>
                    <label>Harga (IDR)</label>
                    <label>Jumlah</label>
                    <label>Total</label>
                </div>
            </div>
            <div className='table-body'>
                {
                    dataBids.map((item:IBookOrder, index:number) => (
                        <div className='body-row' key={index}>
                            <label className='!text-[#EB5757]'>{item.price.toFixed(market.base_asset.precision)}</label>
                            <label>{item.qty.toFixed(market.quote_asset.precision)}</label>
                            <label>{item.total.toFixed(0)}</label>
                            <span style={{width: `${item.progress}%`}} ></span>
                        </div>
                    ))
                }
                
            </div>
        </div>
        <div className='subcontainer-title border-t border-t-neutral-200'>
            <h5>Trade</h5>
        </div>
        <div className='order-book-table'>
            <div className='table-header'>
                <div className='header-row'>
                    <label>Harga (IDR)</label>
                    <label>Jumlah</label>
                    <label>Waktu</label>
                </div>
            </div>
            <div className='table-body'>
                {
                    dataTrades.map((item:ITrade, index:number) => (
                        <div className='body-row' key={index}>
                            <label className='!text-[#EB5757]'>{item.price.toFixed(0)}</label>
                            <label>{item.quantity.toFixed(0)}</label>
                            <label>{moment.unix(item.timestamp).format('HH:mm:ss')}</label>
                        </div>
                    ))
                }
                
            </div>
        </div>
    </div>
  )
}

export default MarketOrderBookContainer
