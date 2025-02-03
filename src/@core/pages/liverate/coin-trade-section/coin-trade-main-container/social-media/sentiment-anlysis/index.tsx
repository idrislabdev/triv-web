import { ChevronUpIcon } from '@/@core/components/custom-icons'
import Image from 'next/image'
import React from 'react'
import AnalysisChart from './analysis-chart'

const SentimenAnalysis = () => {
  return (
        <div className='card card-analysis'>
            <div className='card-header'>
                <div className='card-title'>
                    <h5>Sentiment Analysis</h5>
                    <ChevronUpIcon />
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