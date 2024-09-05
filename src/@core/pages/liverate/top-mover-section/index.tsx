import { IHighlight, ILiverateMini } from '@/@core/@types/interfaces'
import { CaretUpIcon, GraphIcon } from '@/@core/components/custom-icons'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const LiverateTopMoverSection = (props : { lang:string, objLang:any, hightlight:IHighlight}) => {
    const { lang, objLang, hightlight } = props
    return (
        <div className='liverate-top-mover-section'>
            <h2><span></span>{objLang.title}</h2>
            <div className='top-mover-containers'>
                <Link className='top-mover-container' href={`/${lang}/liverate/${hightlight.top_gainer.label.toLowerCase().replace(" ", "")}`}>
                    <div className='top-mover-container-left'>
                        <label>Top Gainer(24h)</label>
                        <div className='top-mover-text-icon'>
                            <Image src={hightlight.top_gainer.icon_url} alt='graph' width={56} height={56}/>
                            <div className='top-mover-text'>
                                <label>{hightlight.top_gainer.label}</label>
                                <p>IDR {hightlight.top_gainer.rate}</p>
                            </div>
                        </div>
                    </div>
                    <p className='top-mover-text-mobile'>IDR {hightlight.top_gainer.rate}</p>
                    <div className='top-mover-container-right'>
                        <span><span><CaretUpIcon color={'#71BBED'} /></span>14.93%</span>
                        <div className='top-mover-graph'>
                            <Image src='/images/others/graph-up.png' alt='graph' width={99} height={38}/>
                        </div>
                    </div>
                </Link>
                <Link className='top-mover-container' href={`/${lang}/liverate/${hightlight.highest_volume.label.toLowerCase().replace(" ", "")}`}>
                    <div className='top-mover-container-left'>
                        <label>Most Popular (24h)</label>
                        <div className='top-mover-text-icon'>
                            <Image src={hightlight.highest_volume.icon_url} alt='graph' width={56} height={56}/>
                            <div className='top-mover-text'>
                                <label>{hightlight.highest_volume.label}</label>
                                <p>IDR {hightlight.highest_volume.rate}</p>
                            </div>
                        </div>
                    </div>
                    <p className='top-mover-text-mobile'>IDR {hightlight.highest_volume.rate}</p>
                    <div className='top-mover-container-right'>
                        <span><span><CaretUpIcon color={'#71BBED'} /></span>14.93%</span>
                        <div className='top-mover-graph'>
                            <Image src='/images/others/graph-up.png' alt='graph' width={99} height={38}/>
                        </div>
                    </div>
                </Link>
                <Link className='top-mover-container' href={`/${lang}/liverate/${hightlight.most_popular.label.toLowerCase().replace(" ", "")}`}>
                    <div className='top-mover-container-left'>
                        <label>Highest Volume (24h)</label>
                        <div className='top-mover-text-icon'>
                            <Image src={hightlight.most_popular.icon_url} alt='graph' width={56} height={56}/>
                            <div className='top-mover-text'>
                                <label>{hightlight.most_popular.label}</label>
                                <p>IDR {hightlight.most_popular.rate}</p>
                            </div>
                        </div>
                    </div>
                    <p className='top-mover-text-mobile'>IDR {hightlight.most_popular.rate}</p>
                    <div className='top-mover-container-right'>
                        <span><span><CaretUpIcon color={'#71BBED'} /></span>14.93%</span>
                        <div className='top-mover-graph'>
                            <Image src='/images/others/graph-up.png' alt='graph' width={99} height={38}/>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
  )
}

export default LiverateTopMoverSection

