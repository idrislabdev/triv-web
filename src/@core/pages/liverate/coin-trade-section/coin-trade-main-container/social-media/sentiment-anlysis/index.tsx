import { ChevronUpIcon } from '@/@core/components/custom-icons'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import AnalysisChart from './analysis-chart'

const SentimenAnalysis = () => {
    const dropdownSentiment: any = useRef(null);
    const [show, setShow] = useState(false)
    const [selected, setSelected] = useState("You Tube")

    const chooseSelected = (val:string) => {
        setSelected(val)
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
                                <a onClick={_ => setShow(!show)}>{selected} ▼</a>
                                <ul className={show ? `show` : ``}>
                                    <li><a onClick={() => chooseSelected("X")} className={selected == 'X' ? 'active' : ''}>X</a></li>
                                    <li><a onClick={() => chooseSelected("Tiktok")} className={selected == 'Tiktok' ? 'active' : ''}>Tiktok</a></li>
                                    <li><a onClick={() => chooseSelected("Reddit")} className={selected == 'Reddit' ? 'active' : ''}>Reddit</a></li>
                                    <li><a onClick={() => chooseSelected("You Tube")} className={selected == 'You Tube' ? 'active' : ''}>You Tube</a></li>
                                    <li><a onClick={() => chooseSelected("News")} className={selected == 'News' ? 'active' : ''}>News</a></li>
                                </ul>
                            </div>
                            <ChevronUpIcon />
                        </div>
                    </div>
                    <p>Use TRIV AI-powered social media data analysis to understand market sentiments and decide your trading plans.</p>
                </div>
                <div className='card-body'>
                    <AnalysisChart />
                </div>
            </div>
    )
}

export default SentimenAnalysis