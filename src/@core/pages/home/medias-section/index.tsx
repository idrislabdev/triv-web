import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';

const HomeMediaSection = (props: { objLang: any }) => {
  const { objLang } = props;
  return (
    <section className="home-media-section">
      <h2>{objLang.title}</h2>
      <Marquee>
        <div className="cnbc-logo"></div>
        <div className="kontan-logo"></div>
        <div className="dailysocial-logo"></div>
        <div className="tirto-logo"></div>
        <div className="detikfinance-logo"></div>
        <div className="kumparan-logo"></div>
        <div className="suara-logo"></div>
        <div className="beritasatu-logo"></div>
        <div className="tempo-logo"></div>
      </Marquee>
    </section>
  );
};

export default HomeMediaSection;
