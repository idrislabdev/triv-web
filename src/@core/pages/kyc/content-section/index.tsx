'use client';
import { ChevronRightIcon } from '@/@core/components/custom-icons';
import { useState } from 'react';
const KYCContentSection = () => {
  return (
    <section className="kyc-content-section">
      <div className="header-container">
        <h2>
          <span>UNDANG-UNDANG REPUBLIK INDONESIA NOMOR 8 TAHUN 2010 </span>
          <span>
            TENTANG PENCEGAHAN DAN PEMBERANTASAN TINDAK PIDANA PENCUCIAN UANG
          </span>
          <span>Dan</span>
          <span>
            UNDANG-UNDANG REPUBLIK INDONESIA NOMOR 9 TAHUN 2013 TENTANG
            PENCEGAHAN DAN PEMBERANTASAN TINDAK PIDANA PENDANAAN
          </span>
          <span>TERORISME</span>
        </h2>
      </div>
      <div className="content-container">
        <p>
          Dalam kegiatan Triv.co.id turut serta dan aktif mendukung usaha
          pemerintah untuk memberantas kegiatan TPPU dan pemberantasan tindak
          pidana pendanaan terorisme, maka seluruh customer Triv WAJIB untuk :
        </p>
        <ul>
          <li>
            Jika anda berencana melakukan transaksi pembelian / penjualan lebih
            dalam jumlah besar dan untuk menghindari pemblokiran pada akun anda.
            Download FORM ini dan menjelaskan asal muasal dana yang anda gunakan
            untuk bertransaksi dan asal muasal digital asset yang ada peroleh
            untuk dipergunakan di Triv.co.id.
          </li>
          <li>
            Kirimkan
            <ul>
              <li>
                <span>FOTO KTP</span>, - (bagi yang belum pernah melakukan
                verifikasi) - apabila pernah melakukan verifikasi pada
                Triv.co.id sebelumnya maka hanya kirimkan Form FOTO KTP yang
                dikirimkan WAJIB SESUAI DENGAN NAMA YANG ANDA GUNAKAN PADA BANK
              </li>
              <li>
                <span>FOTO DIRI</span> (bagi yang belum pernah melakukan
                verifikasi) - apabila pernah melakukan verifikasi pada
                Triv.co.id sebelumnya maka hanya kirimkan Form
              </li>
              <li>
                <span>SCAN FORM</span> ini setelah ditanda tangan di atas
                materai ke email help@triv.co.id
              </li>
            </ul>
          </li>
          <li>
            Untuk alasan keamanan semua hasil SCAN / FOTO KTP. Hanya boleh
            dilampirkan dalam format .jpeg atau .jpg atau .png
          </li>
          <li>
            Dengan mengirimkan form ini anda menyetujui bahwa Triv.co.id berhak
            melakukan verifikasi atas segala informasi yang anda berikan kepada
            Triv melalui pihak ketiga.
          </li>
          <li>
            Semua Transaksi Triv tetap bersifat otomatis 24/7 setelah anda
            melakukan verifikasi dalam system kami
          </li>
        </ul>
        <button>
          Download Form{' '}
          <span>
            <ChevronRightIcon />
          </span>
        </button>
      </div>
    </section>
  );
};

export default KYCContentSection;
