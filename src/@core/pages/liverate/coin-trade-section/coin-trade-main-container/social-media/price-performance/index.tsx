import { ChevronUpIcon } from '@/@core/components/custom-icons'
import React from 'react'

const PricePerformance = () => {
  return (
        <div className='card card-performance'>
        <div className='card-header'>
            <div className='card-title'>
                <h5>Price Performance</h5>
                <ChevronUpIcon />
            </div>
            <ul className='tab-time'>
                <li className='active'><a>24j</a></li>
                <li><a>52w</a></li>
                <li><a>All Time</a></li>
            </ul>
        </div>
        <div className='card-body'>
            <div className='row'>
                <div className='row-content child'>
                    <label>Rendah</label>
                    <p>Tinggi</p>
                </div>
                <div className='row-content'>
                    <label>$200</label>
                    <p>$290</p>
                </div>
                <div className="slider-container-lite">
                    <div className="slider-thumb" style={{left: '50%'}}></div>
                </div>
            </div>
            <div className='row'>
                <div className='row-content'>
                    <label>All-time high</label>
                    <p>$240</p>
                </div>
                <div className='row-content child'>
                    <label>oct 09,2024(8 days ago)</label>
                    <p className='text-minus'>-24,89%</p>
                </div>
            </div>
            <div className='row'>
                <div className='row-content'>
                    <label>All-time low</label>
                    <p>$210</p>
                </div>
                <div className='row-content child'>
                    <label>oct 09,2024(8 days ago)</label>
                    <p className='text-plus'>+12,84%</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PricePerformance