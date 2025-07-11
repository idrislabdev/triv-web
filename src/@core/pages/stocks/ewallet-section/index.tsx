import Image from "next/image";
import React, { useEffect } from "react";

const StocksEwalletSection = (props: { objLang: any }) => {
  const { objLang } = props;

  return (
    <section className="stocks-ewallet-section">
      <div className="ewallet-description">
        <h2>
          {objLang.title_1} <span>{objLang.title_2}</span> {objLang.title_3}
        </h2>
        <h5>{objLang.subtitle}</h5>
        <p>{objLang.description}</p>
      </div>
      <div className="ewallet-image">
        <div className="img"></div>
      </div>
    </section>
  );
};

export default StocksEwalletSection;
