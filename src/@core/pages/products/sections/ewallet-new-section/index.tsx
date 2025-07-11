import Image from "next/image";
import React, { useEffect } from "react";

const ProductsEwalletNewSection = (props: { objLang: any }) => {
  const { objLang } = props;
  return (
    <section className="products-ewallet-new-section">
      <div className="ewallet-description">
        <h2 className="fade-in entry-1">
          {objLang.title_1} <span>{objLang.title_2}</span> {objLang.title_3}
        </h2>
        <h5 className="fade-in entry-2">{objLang.subtitle}</h5>
        <p className="fade-in entry-3">{objLang.description}</p>
      </div>
      <div className="ewallet-image">
        <div className="img"></div>
      </div>
    </section>
  );
};

export default ProductsEwalletNewSection;
