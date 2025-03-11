import { getLiverateMini } from "@/@core/services/api";
import { getDictionariesStocks } from "../../dictionaries";
import StocksPageWrapper from "@/@core/pages/stocks/page-wrapper";

export default async function  Stocks({ params }: any) {
  const resp =  await getLiverateMini(100);
  const liverates = resp.data.data

  const objHome = await getDictionariesStocks(params.lang);
  

  return (
    <html lang={params.lang}>
      <head>
        {params.lang === 'id' &&
            <>
                <meta name="csrf-token" content="8HZHPdkXVjwzNfwuGrV2NjQa9bYVwdUwvcMapZiCVs14kI0UfBrEdc3PwuPIr02casRTVmRccEIIPkn6SmbLLg==" />
                <meta content="text/html; charset=UTF-8" httpEquiv="Content-Type" />
                <meta content="width=device-width, initial-scale=1, shrink-to-fit=no" name="viewport" />
                <meta content="Triv - Jual Beli eMoney dan Aset Digital Terbesar di Indonesia" name="title" />
                <meta content="Marketplace jual beli saham Amerika di Indonesia. Investasi tesla, netflix, amazon, paypal, google dan saham amerika lain lebih mudah di Triv" name="description" />
                <meta content="origin-when-crossorigin" name="referrer" />
                <meta content="index, follow, noodp" name="robots" />
                <meta content="index, follow, noodp" name="googlebot" />
                <meta content="index, follow, noodp" name="msnbot" />
                <meta content="id_ID" property="og:locale" />
                <meta content="Triv" property="og:site_name" />
                <meta content="website" property="og:type" />
                <meta content="Saham Amerika (AS): Bursa, Kabar Pasar &amp; Cara Beli - Triv" property="og:title" />
                <meta content="Marketplace jual beli saham Amerika di Indonesia. Investasi tesla, netflix, amazon, paypal, google dan saham amerika lain lebih mudah di Triv" property="og:description" />
                <meta content="https://triv.co.id/id/stocks" property="og:url" />
                <meta content="https://triv.co.id/assets/logo_triv-6bfd8b14aab606f32abb737168e7d6ce14c567877614d274e9675d768da1a505.png" property="og:image" />
                <meta content="https://triv.co.id/assets/logo_triv-6bfd8b14aab606f32abb737168e7d6ce14c567877614d274e9675d768da1a505.png" property="og:image:secure_url" />
                <meta content="196" property="og:image:width" />
                <meta content="82" property="og:image:height" />
                <meta content="summary_large_image" name="twitter:card" />
                <meta content="Saham Amerika (AS): Bursa, Kabar Pasar &amp; Cara Beli - Triv" name="twitter:title" />
                <meta content="Marketplace jual beli saham Amerika di Indonesia. Investasi tesla, netflix, amazon, paypal, google dan saham amerika lain lebih mudah di Triv" name="twitter:description" />
                <meta content="https://triv.co.id/assets/logo_triv-6bfd8b14aab606f32abb737168e7d6ce14c567877614d274e9675d768da1a505.png" name="twitter:image" />
                <meta content="" name="author" />
                <meta content="width=device-width, initial-scale=1" name="viewport" />
                <meta name="csrf-param" content="authenticity_token" />
                <meta name="csrf-token" content="wDxa5HjDll2V4zZWI7WW836RnJSC6w5z+Mbh8TPxdKxI2pDN3c4EFGsZCJvxr61ZIE86dPN2qwFNO7Ku4RXpTw==" />
                <link href="/assets/favicon-9de6a86b049b3b956dbc81cc43c816c4f656a017cb7978cb52485c17356448fa.ico" rel="icon" />
                <link href="https://triv.co.id/id/stocks" rel="canonical" />
                <link href="https://triv.co.id/id" rel="home" />
                <link href="https://triv.co.id/id/stocks" hrefLang="id" rel="alternate" />
                <link href="https://triv.co.id/en/stocks" hrefLang="en" rel="alternate" />
                <link href="https://triv.co.id/id/stocks" hrefLang="x-default" rel="alternate" />
                <title>Saham Amerika (AS): Bursa, Kabar Pasar &amp; Cara Beli - Triv</title>
            </>
        }
        {params.lang === 'en' &&
            <>
                <meta name="csrf-token" content="Q4Hn0+hXjqQGyEnGitI8jYCqjEhs9vWxgj3njnQM3YXLZy36TVoc7fgydwtYyAcn3nQqqB1rUMM3wLTRpuhAZg==" />
                <meta content="text/html; charset=UTF-8" httpEquiv="Content-Type" />
                <meta content="width=device-width, initial-scale=1, shrink-to-fit=no" name="viewport" />
                <meta content="Triv - Jual Beli eMoney dan Aset Digital Terbesar di Indonesia" name="title" />
                <meta content="Marketplace for buying and selling American stocks in Indonesia. Investing in tesla, netflix, amazon, paypal, google and other american stocks is easier on Triv" name="description" />
                <meta content="origin-when-crossorigin" name="referrer" />
                <meta content="index, follow, noodp" name="robots" />
                <meta content="index, follow, noodp" name="googlebot" />
                <meta content="index, follow, noodp" name="msnbot" />
                <meta content="en_US" property="og:locale" />
                <meta content="Triv" property="og:site_name" />
                <meta content="website" property="og:type" />
                <meta content="Buy American Stocks in Indonesia - Triv" property="og:title" />
                <meta content="Marketplace for buying and selling American stocks in Indonesia. Investing in tesla, netflix, amazon, paypal, google and other american stocks is easier on Triv" property="og:description" />
                <meta content="https://triv.co.id/en/stocks" property="og:url" />
                <meta content="https://triv.co.id/assets/logo_triv-6bfd8b14aab606f32abb737168e7d6ce14c567877614d274e9675d768da1a505.png" property="og:image" />
                <meta content="https://triv.co.id/assets/logo_triv-6bfd8b14aab606f32abb737168e7d6ce14c567877614d274e9675d768da1a505.png" property="og:image:secure_url" />
                <meta content="196" property="og:image:width" />
                <meta content="82" property="og:image:height" />
                <meta content="summary_large_image" name="twitter:card" />
                <meta content="Buy American Stocks in Indonesia - Triv" name="twitter:title" />
                <meta content="Marketplace for buying and selling American stocks in Indonesia. Investing in tesla, netflix, amazon, paypal, google and other american stocks is easier on Triv" name="twitter:description" />
                <meta content="https://triv.co.id/assets/logo_triv-6bfd8b14aab606f32abb737168e7d6ce14c567877614d274e9675d768da1a505.png" name="twitter:image" />
                <meta content="" name="author" />
                <meta content="width=device-width, initial-scale=1" name="viewport" />
                <meta name="csrf-param" content="authenticity_token" />
                <meta name="csrf-token" content="0A9ZhfP5KSvcfOe86YcHy6MlO1cC0kEGLIOwQ2k19a1Y6ZOsVvS7YiKG2XE7nTxh/fudt3NP5HSZfuMcu9FoTg==" />
                <link href="/assets/favicon-9de6a86b049b3b956dbc81cc43c816c4f656a017cb7978cb52485c17356448fa.ico" rel="icon" />
                <link href="https://triv.co.id/en/stocks" rel="canonical" />
                <link href="https://triv.co.id/id" rel="home" />
                <link href="https://triv.co.id/id/stocks" hrefLang="id" rel="alternate" />
                <link href="https://triv.co.id/en/stocks" hrefLang="en" rel="alternate" />
                <link href="https://triv.co.id/en/stocks" hrefLang="x-default" rel="alternate" />
                <title>Buy American Stocks in Indonesia - Triv</title>
            </>
        }
    </head>
      <body>
        <StocksPageWrapper lang={params.lang} objLang={objHome} liverates={liverates}/>
      </body>
    </html>
  );
}
