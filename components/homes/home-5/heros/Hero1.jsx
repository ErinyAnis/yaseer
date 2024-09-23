import React from "react";
import Image from "next/image";

export default function Hero1() {
  return (
    <div className="min-height-100vh d-flex align-items-center pt-100 pb-100 pt-sm-120 pb-sm-120 hero-sec">
      {/* Home Section Content */}
      <div className="container home-content text-end">
        <Image
          src={"/assets/images/logo/yaseer-logo.png"}
          width="80"
          height="80"
          alt="Yaseer"
          className="wow fadeInDownShort mb-3"
        />
        <h1 className="section-title-tiny mb-40 mb-sm-30 wow fadeInDownShort fw-bold">
          شريكك لنجاح أعمالك
        </h1>

        <p className="section-title-tiny mb-50 mb-sm-30 wow fadeInDownShort">
          كانت مهنة المحاسبة ولا زالت عموداً فقرياً لنجاح نشاطك التجاري، الخدمي،
          الصناعي، أو غير الربحي .. نحن في شركة يسير ، نسعد بتقديم خدماتنا لك.
        </p>

        <a className="btn btn-mod btn-color btn-large wow fadeInDownShort btn-round btn-hover-anim">
          <span>اتصل بنا</span>
        </a>
      </div>
      {/* End Home Section Content */}
      {/* Scroll Down */}
      <div
        className="local-scroll scroll-down-3-wrap wow fadeInUp"
        data-wow-offset={0}
      ></div>
      {/* End Scroll Down */}
    </div>
  );
}
