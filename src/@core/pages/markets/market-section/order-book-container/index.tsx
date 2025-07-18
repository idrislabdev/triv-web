import React, {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react';
import axiosInstance from '@/@core/utils/axios';
import { IBookOrder, ITrade } from '@/@core/@types/interfaces';
import moment from 'moment';
import { formatterNumber, formatterNumber2 } from '@/@core/utils/general';

const MarketOrderBookContainer = (props: {
  market: any;
  setMarket: Dispatch<SetStateAction<any>>;
  orderBook: any;
  trades: any;
}) => {
  const { market, setMarket, orderBook, trades } = props;
  const asks = orderBook.asks;
  const bids = orderBook.bids;
  const symbol = market.symbol.split('_');
  let arrAsks: IBookOrder[] = [] as IBookOrder[];
  let arrBids: IBookOrder[] = [] as IBookOrder[];
  let increment = 0;
  increment = 1;
  asks.forEach((item: any) => {
    increment++;
    let obj: IBookOrder = {} as IBookOrder;
    obj.qty = item[0];
    obj.price = item[1];
    obj.total = item[0] * item[1];
    obj.progress = (increment / asks.length) * 100;
    arrAsks.push(obj);
  });

  increment = 1;
  bids.forEach((item: any) => {
    increment++;
    let obj: IBookOrder = {} as IBookOrder;
    obj.qty = item[0];
    obj.price = item[1];
    obj.total = item[0] * item[1];
    obj.progress = (increment / asks.length) * 100;
    arrBids.push(obj);
  });
  const dataAsks = arrBids;
  const dataBids = arrAsks;
  const dataTrades = trades;

  return (
    <div className="order-book-container">
      <div className="subcontainer-title">
        <h5>Order Book</h5>
      </div>
      <div className="order-book-table">
        <div className="table-header">
          <div className="header-row">
            <label>Harga (IDR)</label>
            <label>Jumlah ({symbol[0]})</label>
            <label>Total ({symbol[0]})</label>
          </div>
        </div>
        <div className="table-body">
          {dataAsks.map((item: IBookOrder, index: number) => (
            <div className="body-row" key={index}>
              <label className="price-digit">
                {formatterNumber2(
                  item.price.toFixed(market.base_asset.precision)
                )}
              </label>
              <label>
                {formatterNumber2(
                  item.qty.toFixed(market.quote_asset.precision)
                )}
              </label>
              <label>{formatterNumber2(item.total.toFixed(0))}</label>
              <span style={{ width: `${item.progress}%` }}></span>
            </div>
          ))}
        </div>
      </div>
      <div className="subcontainer-title">
        <h5 className="down">
          {formatterNumber2(
            dataBids.reduce((a, b) => a + (b['total'] || 0), 0).toFixed(2)
          )}
        </h5>
      </div>
      <div className="order-book-table down">
        <div className="table-header">
          <div className="header-row">
            <label>Harga (IDR)</label>
            <label>Jumlah ({symbol[0]})</label>
            <label>Total ({symbol[0]})</label>
          </div>
        </div>
        <div className="table-body">
          {dataBids.map((item: IBookOrder, index: number) => (
            <div className="body-row" key={index}>
              <label className="price-digit">
                {formatterNumber2(
                  item.price.toFixed(market.base_asset.precision)
                )}
              </label>
              <label>
                {formatterNumber2(
                  item.qty.toFixed(market.quote_asset.precision)
                )}
              </label>
              <label>{formatterNumber2(item.total.toFixed(0))}</label>
              <span style={{ width: `${item.progress}%` }}></span>
            </div>
          ))}
        </div>
      </div>
      <div className="subcontainer-title border-t border-t-neutral-200">
        <h5>Trade</h5>
      </div>
      <div className="order-book-table">
        <div className="table-header">
          <div className="header-row">
            <label>Harga (IDR)</label>
            <label>Jumlah ({symbol[0]})</label>
            <label>Waktu</label>
          </div>
        </div>
        <div className="table-body">
          {dataTrades.map((item: ITrade, index: number) => (
            <div className="body-row" key={index}>
              <label className="price-digit">
                {formatterNumber2(item.price.toFixed(0))}
              </label>
              <label>{formatterNumber2(item.quantity.toString())}</label>
              <label>{moment.unix(item.timestamp).format('HH:mm:ss')}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketOrderBookContainer;
