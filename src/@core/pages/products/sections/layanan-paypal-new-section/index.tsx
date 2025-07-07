"use client";

import {
  IsiPulsaIcon,
  JualBeliIcon,
  PlaneIcon,
  SwapIcon,
  TerimaIcon,
  WalletIcon,
} from "@/@core/components/custom-icons";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";

const ProductsLayananPaypalNewSection = (props: { objLang: any }) => {
  const { objLang } = props;
  const [elSwap, setElSwap] = useState("");
  const [elHoddl, setElHoddl] = useState("");
  const [elKirim, setElKirim] = useState("");
  const [elJualBeli, setElJualBeli] = useState("");
  const [elTerima, seElTerima] = useState("");
  const [elPulsa, setElPulsa] = useState("");

  const onScroll = useCallback(() => {
    const { scrollY } = window;
    const elements = document.getElementsByClassName(
      "products-layanan-new-section"
    );
    var element = elements[0];
    if (element) {
      if (scrollY > 3760) {
        setElSwap("0.80");
        setElHoddl("0.84");
        setElKirim("0.88");
        setElJualBeli("0.92");
        seElTerima("0.96");
        setElPulsa("1");
      }

      if (scrollY > 3403 && scrollY < 3760) {
        setElSwap("0.84");
        setElHoddl("0.88");
        setElKirim("0.92");
        setElJualBeli("0.96");
        seElTerima("1");
      }

      if (scrollY > 3103 && scrollY < 3403) {
        setElSwap("0.88");
        setElHoddl("0.92");
        setElKirim("0.96");
        setElJualBeli("1");
      }

      if (scrollY > 2803 && scrollY < 3103) {
        setElSwap("0.92");
        setElHoddl("0.96");
        setElKirim("1");
      }

      if (scrollY > 1503 && scrollY < 2803) {
        setElSwap("0.96");
        setElHoddl("1");
      }

      if (scrollY < 2100) {
        setElSwap("1");
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
  });

  return (
    <section className="products-layanan-new-section">
      <div className="title-container">
        <h2>
          {objLang.title_1} <span>{objLang.title_2}</span> {objLang.title_3}
        </h2>
        <p>{objLang.content}</p>
      </div>
      <div className="layanan-container">
        {/* <div className='card-subcontainer swap sticky top-[150px] translate-y-[0px]' style={{scale:elSwap}}>
          <div className='box-layanan'>
            <span><SwapIcon color={'#fff'} /></span>
            <div className='content'>
              <h5>{objLang.card.swap.title}</h5>
              <p>{objLang.card.swap.content}</p>
            </div>
          </div>
          <div className={`box-img ${objLang.card.swap.image_class}`}>
            <Image src={objLang.card.swap.image_url} alt={objLang.card.swap.title} width={0} height={0} sizes='100%'/>
          </div>
        </div> */}
        <div
          className="card-subcontainer hoddl sticky top-[170px] translate-y-[0px]"
          style={{ scale: elHoddl }}
        >
          <div className="box-layanan">
            <span>
              <WalletIcon color={"#fff"} />
            </span>
            <div className="content">
              <h5>{objLang.card.hoddl.title}</h5>
              <p>{objLang.card.hoddl.content}</p>
            </div>
          </div>
          <div className={`box-img ${objLang.card.hoddl.image_class}`}>
            <Image
              src={objLang.card.hoddl.image_url}
              alt={objLang.card.hoddl.title}
              width={0}
              height={0}
              sizes="100%"
            />
          </div>
        </div>
        <div
          className="card-subcontainer kirim sticky top-[190px] translate-y-[0px]"
          style={{ scale: elKirim }}
        >
          <div className="box-layanan">
            <span>
              <PlaneIcon color={"#fff"} />
            </span>
            <div className="content">
              <h5>{objLang.card.kirim.title}</h5>
              <p>{objLang.card.kirim.content}</p>
            </div>
          </div>
          <div className={`box-img ${objLang.card.kirim.image_class}`}>
            <Image
              src={objLang.card.kirim.image_url}
              alt={objLang.card.kirim.title}
              width={0}
              height={0}
              sizes="100%"
            />
          </div>
        </div>
        <div
          className="card-subcontainer jual-beli sticky top-[210px] translate-y-[0px]"
          style={{ scale: elJualBeli }}
        >
          <div className="box-layanan">
            <span>
              <JualBeliIcon color={"#fff"} />
            </span>
            <div className="content">
              <h5>{objLang.card.jual_beli.title}</h5>
              <p>{objLang.card.jual_beli.content}</p>
            </div>
          </div>
          <div className={`box-img ${objLang.card.jual_beli.image_class}`}>
            <Image
              src={objLang.card.jual_beli.image_url}
              alt={objLang.card.jual_beli.title}
              width={0}
              height={0}
              sizes="100%"
            />
          </div>
        </div>
        <div
          className="card-subcontainer terima sticky top-[230px] translate-y-[0px]"
          style={{ scale: elTerima }}
        >
          <div className="box-layanan">
            <span>
              <TerimaIcon color={"#fff"} />
            </span>
            <div className="content">
              <h5>{objLang.card.terima.title}</h5>
              <p>{objLang.card.terima.content}</p>
            </div>
          </div>
          <div className={`box-img ${objLang.card.terima.image_class}`}>
            <Image
              src={objLang.card.terima.image_url}
              alt={objLang.card.terima.title}
              width={0}
              height={0}
              sizes="100%"
            />
          </div>
        </div>
        {/* <div className='card-subcontainer pulsa sticky top-[250px] translate-y-[0px]' style={{scale:elPulsa}}>
          <div className='box-layanan'>
            <span><IsiPulsaIcon color={'#fff'} /></span>
            <div className='content'>
              <h5>{objLang.card.isi_pulsa.title}</h5>
              <p>{objLang.card.isi_pulsa.content}</p>
            </div>
          </div>
          <div className={`box-img ${objLang.card.isi_pulsa.image_class}`}>
            <Image src={objLang.card.isi_pulsa.image_url} alt={objLang.card.isi_pulsa.title} width={0} height={0} sizes='100%'/>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default ProductsLayananPaypalNewSection;
