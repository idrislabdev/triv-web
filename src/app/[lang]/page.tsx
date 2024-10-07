import HomePage from "@/@core/pages/home/page";
import { getLiverateMini } from "@/@core/services/api";
import { getDictionaryHome } from "../dictionaries";

export default async function  HomeLang({ params }: any) {
  const resp =  await getLiverateMini();
  const liverates = resp.data.data

  const objHome = await getDictionaryHome(params.lang);
  

  return (
    <html lang={params.lang}>
      <head>
        {params.lang === 'id' &&
          <>
            <meta name="csrf-token" content="P8HwucyJ95JivrlxxDEaq0xXKBP5vinnl5mALbQDFs63JzqQaYRl25xEh7wWKyEBEomO84gjjJUiZNNyZueLLQ==" />
            <meta content="text/html; charset=UTF-8" httpEquiv="Content-Type" />
            <meta content="width=device-width, initial-scale=1, shrink-to-fit=no" name="viewport" />
            <meta content="TRIV: Marketplace Cryptocurrency &amp; Digital Asset Indonesia" name="title" />
            <meta content="Marketplace Cryptocurrency Indonesia (Bitcoin, Ethereum &amp; kripto lainnya). Jual beli aset digital, paypal &amp; e-Money terpercaya sejak 2015 &amp; terdaftar Bappebti" name="description" />
            <meta content="origin-when-crossorigin" name="referrer" />
            <meta content="index, follow, noodp" name="robots" />
            <meta content="index, follow, noodp" name="googlebot" />
            <meta content="index, follow, noodp" name="msnbot" />
            <meta content="id_ID" property="og:locale" />
            <meta content="Triv" property="og:site_name" />
            <meta content="website" property="og:type" />
            <meta content="TRIV: Marketplace Cryptocurrency &amp; Digital Asset Indonesia" property="og:title" />
            <meta content="Marketplace Cryptocurrency Indonesia (Bitcoin, Ethereum &amp; kripto lainnya). Jual beli aset digital, paypal &amp; e-Money terpercaya sejak 2015 &amp; terdaftar Bappebti" property="og:description" />
            <meta content="https://triv.co.id/id" property="og:url" />
            <meta content="https://triv.co.id/assets/logo_triv-6bfd8b14aab606f32abb737168e7d6ce14c567877614d274e9675d768da1a505.png" property="og:image" />
            <meta content="https://triv.co.id/assets/logo_triv-6bfd8b14aab606f32abb737168e7d6ce14c567877614d274e9675d768da1a505.png" property="og:image:secure_url" />
            <meta content="196" property="og:image:width" />
            <meta content="82" property="og:image:height" />
            <meta content="summary_large_image" name="twitter:card" />
            <meta content="TRIV: Marketplace Cryptocurrency &amp; Digital Asset Indonesia" name="twitter:title" />
            <meta content="Marketplace Cryptocurrency Indonesia (Bitcoin, Ethereum &amp; kripto lainnya). Jual beli aset digital, paypal &amp; e-Money terpercaya sejak 2015 &amp; terdaftar Bappebti" name="twitter:description" />
            <meta content="https://triv.co.id/assets/logo_triv-6bfd8b14aab606f32abb737168e7d6ce14c567877614d274e9675d768da1a505.png" name="twitter:image" />
            <meta content="" name="author" />
            <meta content="width=device-width, initial-scale=1" name="viewport" />
            <meta name="csrf-param" content="authenticity_token" />
            <meta name="csrf-token" content="74JyFuzqt7Nrp42PJTezGIZWuDC6Xe/Vc71MiZZhpKRnZLg/Secl+pVds0L3LYiy2Ige0MvASqfGQB/WRIU5Rw==" />
            <link href="https://triv.co.id/id" rel="canonical" />
            <link href="https://triv.co.id/id" rel="home" />
            <link href="https://triv.co.id/id" hrefLang="id" rel="alternate" />
            <link href="https://triv.co.id/en" hrefLang="en" rel="alternate" />
            <link href="https://triv.co.id/id" hrefLang="x-default" rel="alternate" />
            <title>TRIV: Marketplace Cryptocurrency &amp; Digital Asset Indonesia</title>
          </>
        }
        {params.lang === 'en' &&
          <>
            <meta name="csrf-token" content="MN3/USCNOK6jJw4/eud0+027quZoi2Aoe9/H+zGP1r64OzV4hYCq513dMPKo/U9RE2UMBhkWxVrOIpSk42tLXQ==" />
            <meta content="text/html; charset=UTF-8" httpEquiv="Content-Type" />
            <meta content="width=device-width, initial-scale=1, shrink-to-fit=no" name="viewport" />
            <meta content="TRIV: Indonesian Cryptocurrency &amp; Digital Asset Marketplace" name="title" />
            <meta content="Indonesian Cryptocurrency Marketplace (Bitcoin, Ethereum &amp; other crypto). Reliable trading of digital assets, paypal &amp; e-Money since 2015 &amp; registered with Bappebti" name="description" />
            <meta content="origin-when-crossorigin" name="referrer" />
            <meta content="index, follow, noodp" name="robots" />
            <meta content="index, follow, noodp" name="googlebot" />
            <meta content="index, follow, noodp" name="msnbot" />
            <meta content="en_US" property="og:locale" />
            <meta content="Triv" property="og:site_name" />
            <meta content="website" property="og:type" />
            <meta content="TRIV: Indonesian Cryptocurrency &amp; Digital Asset Marketplace" property="og:title" />
            <meta content="Indonesian Cryptocurrency Marketplace (Bitcoin, Ethereum &amp; other crypto). Reliable trading of digital assets, paypal &amp; e-Money since 2015 &amp; registered with Bappebti"  property="og:description" />
            <meta content="https://triv.co.id/en" property="og:url" />
            <meta content="https://triv.co.id/assets/logo_triv-6bfd8b14aab606f32abb737168e7d6ce14c567877614d274e9675d768da1a505.png" property="og:image" />
            <meta content="https://triv.co.id/assets/logo_triv-6bfd8b14aab606f32abb737168e7d6ce14c567877614d274e9675d768da1a505.png" property="og:image:secure_url" />
            <meta content="196" property="og:image:width" />
            <meta content="82" property="og:image:height" />
            <meta content="summary_large_image" name="twitter:card" />
            <meta content="TRIV: Indonesian Cryptocurrency &amp; Digital Asset Marketplace" name="twitter:title" />
            <meta content="Indonesian Cryptocurrency Marketplace (Bitcoin, Ethereum &amp; other crypto). Reliable trading of digital assets, paypal &amp; e-Money since 2015 &amp; registered with Bappebti" name="twitter:description" />
            <meta content="https://triv.co.id/assets/logo_triv-6bfd8b14aab606f32abb737168e7d6ce14c567877614d274e9675d768da1a505.png" name="twitter:image" />
            <meta content="" name="author" />
            <meta content="width=device-width, initial-scale=1" name="viewport" />
            <meta name="csrf-param" content="authenticity_token" />
            <meta name="csrf-token" content="5qJra2aeoNRgzLic23Mrmxs2KIhCFEjGF8vCPh2woxduRKFCw5MynZ42hlEJaRAxReiOaDOJ7bSiNpFhz1Q+9A==" />
            <link href="https://triv.co.id/en" rel="canonical" />
            <link href="https://triv.co.id/id" rel="home" />
            <link href="https://triv.co.id/id" hrefLang="id" rel="alternate" />
            <link href="https://triv.co.id/en" hrefLang="en" rel="alternate" />
            <link href="https://triv.co.id/en" hrefLang="x-default" rel="alternate" />
            <title>TRIV: Indonesian Cryptocurrency &amp; Digital Asset Marketplace</title>
          </>
        }
      </head>
      <body>
        <HomePage lang={params.lang} objLang={objHome} liverates={liverates}/>
      </body>
    </html>
  );
}
