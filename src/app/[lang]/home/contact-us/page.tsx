import Footer from '@/@core/components/footer'
import MainHeader from '@/@core/components/main-header'
import ContactUsFaqSection from '@/@core/pages/contact-us/faq-section';
import ContactUsHeaderSection from '@/@core/pages/contact-us/header-section'
import ContactUsInfoSection from '@/@core/pages/contact-us/info-section';
import { getDictionariesContactUs } from '@/app/dictionaries';
import '@/styles/contact-us.css'

export default async function  ContactUsPage({ params }: any) {
    const {
        header_section, 
        info_section,
        faq_section,
    } = await getDictionariesContactUs(params.lang);
    return (
        <html lang={params.lang}>
            <head>
                {params.lang === 'id' &&
                    <>
                        <meta name="csrf-token" content="DB5XMfj1/LR3EK7fgDfiSXguTH56xnmMnFhk7RAvjviE+J0YXfhu/YnqkBJSLdnjJvDqngtb3P4ppTeywssTGw==" />
                        <meta content="text/html; charset=UTF-8" httpEquiv="Content-Type" />
                        <meta content="width=device-width, initial-scale=1, shrink-to-fit=no" name="viewport" />
                        <meta content="Triv - Jual Beli eMoney dan Aset Digital Terbesar di Indonesia" name="title" />
                        <meta content="translation missing: id.layouts.front.meta.contact.description" name="description" />
                        <meta content="origin-when-crossorigin" name="referrer" />
                        <meta content="index, follow, noodp" name="robots" />
                        <meta content="index, follow, noodp" name="googlebot" />
                        <meta content="index, follow, noodp" name="msnbot" />
                        <meta content="id_ID" property="og:locale" />
                        <meta content="Triv" property="og:site_name" />
                        <meta content="website" property="og:type" />
                        <meta content="Contact Us" property="og:title" />
                        <meta content="translation missing: id.layouts.front.meta.contact.description" property="og:description" />
                        <meta content="https://triv.co.id/id/home/contact-us" property="og:url" />
                        <meta content="https://triv.co.id/assets/logo_triv-6bfd8b14aab606f32abb737168e7d6ce14c567877614d274e9675d768da1a505.png" property="og:image" />
                        <meta content="https://triv.co.id/assets/logo_triv-6bfd8b14aab606f32abb737168e7d6ce14c567877614d274e9675d768da1a505.png" property="og:image:secure_url" />
                        <meta content="196" property="og:image:width" />
                        <meta content="82" property="og:image:height" />
                        <meta content="summary_large_image" name="twitter:card" />
                        <meta content="Contact Us" name="twitter:title" />
                        <meta content="translation missing: id.layouts.front.meta.contact.description" name="twitter:description" />
                        <meta content="https://triv.co.id/assets/logo_triv-6bfd8b14aab606f32abb737168e7d6ce14c567877614d274e9675d768da1a505.png" name="twitter:image" />
                        <meta content="" name="author" />
                        <meta name="csrf-param" content="authenticity_token" />
                        <meta name="csrf-token" content="dlHDzfsrzuH0paKBkEmrFeNKLepnnrtHNRXxUv+PJVL+twnkXiZcqApfnExCU5C/vZSLChYDHjWA6KINLWu4sQ==" />
                        <link href="/assets/favicon-9de6a86b049b3b956dbc81cc43c816c4f656a017cb7978cb52485c17356448fa.ico" rel="icon" />
                        <link href="https://triv.co.id/id/home/contact-us" rel="canonical" />
                        <link href="https://triv.co.id/id" rel="home" />
                        <link href="https://triv.co.id/id/home/contact-us" hrefLang="id" rel="alternate" />
                        <link href="https://triv.co.id/en/home/contact-us" hrefLang="en" rel="alternate" />
                        <link href="https://triv.co.id/id/home/contact-us" hrefLang="x-default" rel="alternate" />
                        <title>Triv - Contact Us</title>
                    </>
                }
                {params.lang === 'en' &&
                    <>
                        <meta name="csrf-token" content="DB5XMfj1/LR3EK7fgDfiSXguTH56xnmMnFhk7RAvjviE+J0YXfhu/YnqkBJSLdnjJvDqngtb3P4ppTeywssTGw==" />
                        <meta content="text/html; charset=UTF-8" httpEquiv="Content-Type" />
                        <meta content="width=device-width, initial-scale=1, shrink-to-fit=no" name="viewport" />
                        <meta content="Triv - Jual Beli eMoney dan Aset Digital Terbesar di Indonesia" name="title" />
                        <meta content="translation missing: id.layouts.front.meta.contact.description" name="description" />
                        <meta content="origin-when-crossorigin" name="referrer" />
                        <meta content="index, follow, noodp" name="robots" />
                        <meta content="index, follow, noodp" name="googlebot" />
                        <meta content="index, follow, noodp" name="msnbot" />
                        <meta content="id_ID" property="og:locale" />
                        <meta content="Triv" property="og:site_name" />
                        <meta content="website" property="og:type" />
                        <meta content="Contact Us" property="og:title" />
                        <meta content="translation missing: id.layouts.front.meta.contact.description" property="og:description" />
                        <meta content="https://triv.co.id/id/home/contact-us" property="og:url" />
                        <meta content="https://triv.co.id/assets/logo_triv-6bfd8b14aab606f32abb737168e7d6ce14c567877614d274e9675d768da1a505.png" property="og:image" />
                        <meta content="https://triv.co.id/assets/logo_triv-6bfd8b14aab606f32abb737168e7d6ce14c567877614d274e9675d768da1a505.png" property="og:image:secure_url" />
                        <meta content="196" property="og:image:width" />
                        <meta content="82" property="og:image:height" />
                        <meta content="summary_large_image" name="twitter:card" />
                        <meta content="Contact Us" name="twitter:title" />
                        <meta content="translation missing: id.layouts.front.meta.contact.description" name="twitter:description" />
                        <meta content="https://triv.co.id/assets/logo_triv-6bfd8b14aab606f32abb737168e7d6ce14c567877614d274e9675d768da1a505.png" name="twitter:image" />
                        <meta content="" name="author" />
                        <meta name="csrf-param" content="authenticity_token" />
                        <meta name="csrf-token" content="dlHDzfsrzuH0paKBkEmrFeNKLepnnrtHNRXxUv+PJVL+twnkXiZcqApfnExCU5C/vZSLChYDHjWA6KINLWu4sQ==" />
                        <link href="/assets/favicon-9de6a86b049b3b956dbc81cc43c816c4f656a017cb7978cb52485c17356448fa.ico" rel="icon" />
                        <link href="https://triv.co.id/id/home/contact-us" rel="canonical" />
                        <link href="https://triv.co.id/id" rel="home" />
                        <link href="https://triv.co.id/id/home/contact-us" hrefLang="id" rel="alternate" />
                        <link href="https://triv.co.id/en/home/contact-us" hrefLang="en" rel="alternate" />
                        <link href="https://triv.co.id/id/home/contact-us" hrefLang="x-default" rel="alternate" />
                        <title>Triv - Contact Us</title>
                    </>
                }
            </head>
            <body>
                <MainHeader classText="header-white" lang={params.lang}/>
                <main className='contact-us-page sm:mobile-responsive md:mobile-responsive light-theme'>
                    <ContactUsHeaderSection objLang={header_section} />
                    <ContactUsInfoSection objLang={info_section} />
                    <ContactUsFaqSection objLang={faq_section} />
                </main>
                <Footer />
            </body>
        </html>
  )
}

