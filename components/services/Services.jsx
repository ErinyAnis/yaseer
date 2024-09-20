import dynamic from "next/dynamic";
import Image from "next/image";
const dark = false;
const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);

import { services6 } from "@/data/services";

const Services = () => {
  return (
    <>
      <ParallaxContainer
        className="page-section bg-dark-1 bg-dark-alpha-60 light-content parallax-5"
        style={{
          backgroundImage:
            "url(/assets/images/services/ourServices-bg.png)",
        }}
      >
        <div className="container position-relative pt-50 pb-100 pb-sm-20">
          {/* Section Content */}
          <div className="text-center">
            <div className="row justify-content-center">
              {/* Page Title */}
              <div className="col-md-9">
                <h2
                  className="section-caption-border mb-30 mb-xs-20 wow fadeInUp"
                  data-wow-duration="1.2s"
                >
                  خدماتنا
                </h2>
                <h3 className="hs-title-1 mb-30">
                  نقدم لك مجموعة متنوعة من خدماتنا المتخصصة.
                </h3>
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <p
                      className="section-descr mb-0 wow fadeInUp"
                      data-wow-delay="0.6s"
                      data-wow-duration="1.2s"
                    >
                      نوفر لك حلول محاسبية شاملة لتطوير أداء شركتك وتحقيق النجاح
                      المالي.
                    </p>
                  </div>
                </div>
              </div>
              {/* End Page Title */}
            </div>
          </div>
          {/* End Section Content */}
        </div>
      </ParallaxContainer>
      <section className="page-section pt-0" id="services">
        <div className="container position-relative mt-n120 mt-sm-n60">
          <div className="row mb-n30 justify-content-center">
            {services6.map((elm, i) => (
              <div
                key={i}
                className="col-md-6 col-lg-4 d-flex align-items-stretch mb-30"
              >
                <div className="services-3-item round text-center">
                  <div className="wow fadeInUpShort" data-wow-offset={50}>
                    <div className="services-3-icon">
                      <Image
                        src={elm.src}
                        alt={elm.title}
                        width={50}
                        height={50}
                      />
                    </div>
                    <h3 className="services-3-title">{elm.title}</h3>
                    <div className="services-3-text">{elm.text}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
