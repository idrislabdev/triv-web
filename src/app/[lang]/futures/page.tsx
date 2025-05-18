import FuturesPage from '@/@core/pages/futures'
import { getLiverateMini } from '@/@core/services/api';
import { getDictionaryFutures } from '@/app/dictionaries';
import React from 'react'

export default async function Futures({ params }: any) {
      const objLang = await getDictionaryFutures(params.lang);
    const resp =  await getLiverateMini(100);
    const liverates = resp.data.data
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
                <FuturesPage lang={params.lang} objLang={objLang} liverates={liverates}/>
            </body>
        </html>
      )
}
