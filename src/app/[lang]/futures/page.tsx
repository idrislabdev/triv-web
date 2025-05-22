import FuturesPage from '@/@core/pages/futures'
import { getLiverateMini, getPerpetualsInstrument } from '@/@core/services/api';
import { getDictionaryFutures } from '@/app/dictionaries';
import React from 'react'

export default async function Futures({ params }: any) {
    const objLang = await getDictionaryFutures(params.lang);
    let resp =  await getLiverateMini(100);
    const liverates = resp.data.data
    resp = await getPerpetualsInstrument();
    const prepsInstrument = resp.data
    console.log(prepsInstrument)
    return (
        <html lang={params.lang}>
            <head>
                {params.lang === 'id' && 
                <>
                
                </>
                }
                {params.lang === 'en' &&
                <>
                
                </>
                }
        
            </head>
            <body>
                <FuturesPage lang={params.lang} objLang={objLang} liverates={liverates} prepsInstrument={prepsInstrument}/>
            </body>
        </html>
      )
}
