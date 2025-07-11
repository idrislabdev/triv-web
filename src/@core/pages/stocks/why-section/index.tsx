"use client";

import Image from "next/image";
import React, { useEffect } from "react";

const StocksWhySection = (props: { objLang: any }) => {
  const { objLang } = props;
  const inViewport = () => {
    const elements = document.getElementsByClassName("stocks-why-section");
    var element = elements[0];
    if (element) {
      const { top, bottom } = element.getBoundingClientRect();
      if (window.innerHeight > top && bottom > 0) {
        document
          .getElementsByClassName("stocks-why-section")[0]
          .classList.add("animate");
      } else {
        document
          .getElementsByClassName("stocks-why-section")[0]
          .classList.remove("animate");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", inViewport, { passive: true });
    document
      .getElementsByClassName("stocks-why-section")[0]
      .classList.add("animate");
  });
  return (
    <section className="stocks-why-section">
      <div className="container">
        <div className="title-container">
          <h1 className="fade-in entry-1">
            {objLang.title_1} <span>{objLang.title_2}</span> {objLang.title_3}
          </h1>
          <p className="fade-in entry-2">{objLang.description}</p>
        </div>
        <div className="description-container">
          <Image
            src="/images/backgrounds/rocket-background-new.png"
            className="fade-in entry-3"
            alt="rocket background"
            width={0}
            height={0}
            sizes="100%"
          />
          <div className="details-subcontainer">
            <div className="detail-subcontainer fade-in entry-3">
              <h5>{objLang.founded.value}</h5>
              <p>{objLang.founded.text}</p>
            </div>
            <div className="detail-subcontainer fade-in entry-4">
              <h5>{objLang.user_registered.value}</h5>
              <p>{objLang.user_registered.text}</p>
            </div>
            <div className="detail-subcontainer fade-in entry-5">
              <h5>{objLang.asset.value}</h5>
              <p>{objLang.asset.text}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StocksWhySection;
