import Image from 'next/image'
import React from 'react'

const NewsDetailContent = (props: {content:any}) => {
  const { content } = props
  return (
    <div className='news-detail-content'>
      <div className='header-content'>
        <h2>Masa Depan Cerah Solana dengan Persetujuan ETF Spot di Depan Mata</h2>
        <Image src='/images/samples/sample-news.png' alt='sample' width={0} height={0} sizes='100%'/>
      </div>
      <div className='detail-content'>
        <div className='ringkasan-content'>
          <p>Ringkasan</p>
          <ul>
            <li>Solana diprediksi akan mengalami kenaikan harga yang signifikan dengan persetujuan ETF spot.</li>
            <li>Utilitas, kapitalisasi pasar, desentralisasi, dan fungsi staking Solana membuatnya menjadi kandidat utama untuk ETF.</li>
            <li>Analisis GSR memperkirakan harga Solana dapat meningkat 1,4 hingga 8,9 kali dalam berbagai skenario.</li>
          </ul>
        </div>
        <p>
          Solana (SOL) diprediksi akan mengalami kenaikan harga yang signifikan setelah laporan mengenai ETF yang melacak aset SOL ETF spot ini dapat meningkatkan nilai SOL secara drastis dan mengubah pasar kripto.
        </p>
        <h5>Dasar Kuat Solana</h5>
        <p>
          Laporan dari GSR Markets menunjukkan bahwa token ini memiliki utilitas dan kapitalisasi pasar yang besar, menjadikannya salah satu dari tujuh kripto terbesar. Dengan desentralisasi dan fungsi staking yang kuat, Solana menjadi kandidat utama untuk persetujuan produk ETF dari Komisi Sekuritas dan Bursa AS (SEC). 
          Walaupun peluang untuk ETF spot masih kecil, ETF berbasis futures dapat tetap memberikan dampak positif.
        </p>
        <h5>Pengumuman VanEck dan Reaksi Pasar</h5>
        <p>
          VanEck telah mengajukan permohonan untuk ETF spot Solana, yang telah menarik perhatian investor dan analis. GSR merilis analisis yang memproyeksikan potensi 
          peningkatan harga SOL hingga sembilan kali lipat dalam kondisi yang tepat.
        </p>
        <h5>Estimasi Konservatif dan Potensi Kenaikan</h5>
        <p>
          Para peneliti menekankan bahwa estimasi mereka konservatif dan dampak sebenarnya bisa lebih besar, terutama dengan penggunaan aktif dalam staking dan aplikasi terdesentralisasi.
        </p>
        <Image src='/images/samples/graph.png' alt='graph' width={0} height={0} sizes='100%'/>
        <h5>Tantangan dan Peluang Persetujuan ETF Spot Solana</h5>
        <p>
          Meskipun SOL memiliki arsitektur blockchain canggih dan berbagai aplikasi terdesentralisasi, persetujuan ETF spot sangat tergantung pada regulasi di AS. GSR menyebutkan bahwa perubahan regulasi yang didukung bipartisan dapat meningkatkan peluang persetujuan ETF kripto, termasuk SOL.
        </p>
        <h5>Kesimpulan</h5>
        <p>
        Solana memiliki dasar kuat untuk pertumbuhan harga dengan potensi persetujuan ETF spot. Dengan utilitas dan kapitalisasi pasar yang meningkat, serta desentralisasi dan fungsi staking yang kuat, SOL siap meraih peluang besar di pasar kripto. Analisis GSR menunjukkan potensi lonjakan harga yang signifikan dalam berbagai skenario, menjadikan Solana sebagai kripto yang layak diperhatikan oleh investor.
        </p>
      </div>
    </div>
  )
}

export default NewsDetailContent
