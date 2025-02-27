import { ChevronUpIcon } from '@/@core/components/custom-icons'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import AnalysisChart from './analysis-chart'

const SentimenAnalysis = (props: {data:any, objLang:any}) => {
    const { data, objLang } = props

    const dropdownSentiment: any = useRef(null);
    const [show, setShow] = useState(false)
    const [selected, setSelected] = useState("tweet")
    const [donutData, setDonutData] = useState(data.data['tweet'])
    const medias = [
        {val: 'tweet', name: 'X'},
        {val: 'tiktok-video', name: 'Tiktok'},
        {val: 'reddit-post', name: 'Reddit'},
        {val: 'youtube-video', name: 'You Tube'},
        {val: 'news', name: 'News'},
    ]
    const chooseSelected = (val:string) => {
        setSelected(val)
        setDonutData(data.data[val])
        setShow(false)
    }

    useEffect(() => {
        function handleClick(event : MouseEvent) {
            if (dropdownSentiment.current && !dropdownSentiment.current.contains(event.target)) {
                setShow(false);
            }
        }
        window.addEventListener("click", handleClick);
        return () => window.removeEventListener("click", handleClick);
    }, [setShow]);

    return (
            <div className='card card-analysis'>
                <div className='card-header'>
                    <div className='card-title'>
                        <h5>Sentiment Analysis</h5>
                        <div className='action-list'>
                            <div className='dropdown-menu' ref={dropdownSentiment}>
                                <a onClick={_ => setShow(!show)}>{medias.find((x) => x.val == selected)?.name} ▼</a>
                                <ul className={show ? `show` : ``}>
                                    <li><a onClick={() => chooseSelected("tweet")} className={selected == 'tweet' ? 'active' : ''}>X</a></li>
                                    <li><a onClick={() => chooseSelected("tiktok-video")} className={selected == 'tiktok-video' ? 'active' : ''}>Tiktok</a></li>
                                    <li><a onClick={() => chooseSelected("reddit-post")} className={selected == 'reddit-post' ? 'active' : ''}>Reddit</a></li>
                                    <li><a onClick={() => chooseSelected("youtube-video")} className={selected == 'youtube-video' ? 'active' : ''}>You Tube</a></li>
                                    <li><a onClick={() => chooseSelected("news")} className={selected == 'news' ? 'active' : ''}>News</a></li>
                                </ul>
                            </div>
                            <ChevronUpIcon />
                        </div>
                    </div>
                    <p>{objLang.chart.sentiment_anlysis}</p>
                </div>
                <div className='card-body'>
                    <AnalysisChart dataSentiment={donutData} />
                </div>
            </div>
    )
}

export default SentimenAnalysis