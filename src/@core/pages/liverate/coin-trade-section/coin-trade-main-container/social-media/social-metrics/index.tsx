import { ChevronUpIcon } from '@/@core/components/custom-icons'
import Image from 'next/image'
import React from 'react'

const SocialMediaMetric = () => {
  return (
        <div className='card card-metrics'>
            <div className='card-header'>
                <div className='card-title'>
                    <h5>Social Metrics</h5>
                    <ChevronUpIcon />
                </div>
            </div>
            <div className='card-body'>
                <div className='metric'>
                    <Image src={`/images/logos/x.png`} alt='x' width={0} height={0} sizes='100%' />
                    <div className="slider-container">
                        <div className="slider-progress" style={{width: '50%'}}></div>
                        <div className="slider-thumb" style={{left: '50%'}}>50%</div>
                    </div>
                </div>
                <div className='metric'>
                    <Image src={`/images/logos/tiktok.png`} alt='tiktok' width={0} height={0} sizes='100%' />
                    <div className="slider-container">
                        <div className="slider-progress" style={{width: '20%'}}></div>
                        <div className="slider-thumb" style={{left: '20%'}}>20%</div>
                    </div>
                </div>
                <div className='metric'>
                    <Image src={`/images/logos/reddit.png`} alt='reddit' width={0} height={0} sizes='100%' />
                    <div className="slider-container">
                        <div className="slider-progress" style={{width: '20%'}}></div>
                        <div className="slider-thumb" style={{left: '20%'}}>20%</div>
                    </div>
                </div>
                <div className='metric'>
                    <Image src={`/images/logos/youtube.png`} alt='youtube' width={0} height={0} sizes='100%' />
                    <div className="slider-container">
                        <div className="slider-progress" style={{width: '5%'}}></div>
                        <div className="slider-thumb" style={{left: '5%'}}>5%</div>
                    </div>
                </div>
                <div className='metric'>
                    <Image src={`/images/logos/folder.png`} alt='folder' width={0} height={0} sizes='100%' />
                    <div className="slider-container">
                        <div className="slider-progress" style={{width: '5%'}}></div>
                        <div className="slider-thumb" style={{left: '5%'}}>5%</div>
                    </div>
                </div>
            </div>
            <div className='card-footer'>
                <label className='note'>Note percentages might not add up to 100% due to rounidng</label>
                <div className='info'>
                    <Image src={`/images/others/bulb.png`} alt='bulb' width={0} height={0} sizes='100%' />
                    <p>The number of news mentions for MSFT today is <span>higher</span> compared to the average last 14 days</p>
                </div>
            </div>
        </div>
  )
}

export default SocialMediaMetric