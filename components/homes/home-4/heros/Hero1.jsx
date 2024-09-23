import { features } from "@/data/features";

import Image from "next/image";
export default function Hero1() {
  return (
    <div className="container position-relative d-flex align-items-center hero-sec main-sec-padding pt-0">
      {/* Home Section Content */}
      <div className="home-content">
        <div className="row flex-row-reverse align-items-center">
          {/* Home Section Text */}
          <div className="col-lg-7 d-flex align-items-center text-end order-first order-lg-last mb-md-60">
            <div className="w-100">
              <h1 className="hs-title-9 mb-40 mb-sm-20 wow fadeInUp">
                شريـــكـــك لنجــــاح أعمـــالك
              </h1>
              <p
                className="hs-descr mb-50 mb-sm-40 wow fadeInUp ps-lg-5"
                data-wow-delay="0.15s"
              >
                شريكك لنجاح أعمالك كانت مهنة المحاسبة ولا زالت عموداً فقرياً
                لنجاح نشاطك التجاري، الخدمي، الصناعي، أو غير الربحي .. نحن في
                شركة يسير ، نسعد بتقديم خدماتنا لك
              </p>
              <div
                className="wow fadeInUp wch-unset"
                data-wow-delay="0.3s"
                data-wow-offset={0}
              >
                <div className="local-scroll">
                  <a
                    // href="#contact"
                    className="btn btn-mod btn-color btn-large btn-round btn-hover-anim"
                  >
                    <span>اتصل بنا</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* End Home Section Text */}
          {/* Images */}
          <div className="col-lg-5">
            <div className="composition-8">
              {/* Decorative Dots */}
              <div
                className="composition-8-decoration-1 mt-n90 mt-md-n60 wow fadeIn"
                data-wow-duration="1.3s"
              >
                <Image
                  src="/assets/images/demo-corporate/decoration-1.svg"
                  width={253}
                  height={304}
                  alt="decoration icon"
                />
              </div>
              {/* End Decorative Dots */}
              {/* Main Image */}
              <div className="composition-8-image bg-white">
                <Image
                  src="/assets/images/hero-sec/hero-img.png"
                  width={706}
                  height={800}
                  alt="Yaseer: Your Partner in Success"
                  className="wow fadeScaleOutIn"
                  data-wow-duration="1.3s"
                />
              </div>
              {/* End Main Image */}
              {/* Overlay Buttons */}
              <div
                className="composition-8-decoration-2 local-scroll wow fadeIn animated"
                data-wow-duration="1.3s"
                data-wow-offset={0}
                style={{
                  visibility: "visible",
                  animationDuration: "1.3s",
                  animationName: "fadeIn",
                }}
              >
                <div className="mt-10">
                  <span className="btn btn-mod btn-w btn-with-icon btn-circle cursor-default">
                    <span className="btn-icon color-3 ms-2 me-0">
                      <Image
                        width={20}
                        height={20}
                        src="/assets/images/hero-sec/right-icon.svg"
                        alt="click icon"
                      />
                    </span>
                    <span data-btn-animate="y">
                      <span className="btn-animate-y">
                        <span className="btn-animate-y-1">دعم مستمر لعملك</span>
                        <span className="btn-animate-y-2" aria-hidden="true">
                          دعم مستمر لعملك
                        </span>
                      </span>
                    </span>
                  </span>
                </div>
                <div className="mt-10">
                  <span className="btn btn-mod btn-w btn-with-icon btn-circle cursor-default">
                    <span className="btn-icon color-2 ms-2 me-0">
                      <Image
                        width={20}
                        height={20}
                        src="/assets/images/hero-sec/right-icon.svg"
                        alt="click icon"
                      />
                    </span>
                    <span data-btn-animate="y">
                      <span className="btn-animate-y">
                        <span className="btn-animate-y-1">
                          خدمات محاسبية متخصصة
                        </span>
                        <span className="btn-animate-y-2" aria-hidden="true">
                          خدمات محاسبية متخصصة
                        </span>
                      </span>
                    </span>
                  </span>
                </div>
                <div className="mt-10">
                  <span className="btn btn-mod btn-w btn-with-icon btn-circle cursor-default">
                    <span className="btn-icon color-4 ms-2 me-0">
                      <Image
                        width={20}
                        height={20}
                        src="/assets/images/hero-sec/right-icon.svg"
                        alt="click icon"
                      />
                    </span>
                    <span data-btn-animate="y">
                      <span className="btn-animate-y">
                        <span className="btn-animate-y-1">
                          حلول مالية مبتكرة
                        </span>
                        <span className="btn-animate-y-2" aria-hidden="true">
                          حلول مالية مبتكرة{" "}
                        </span>
                      </span>
                    </span>
                  </span>
                </div>
              </div>

              {/* End Overlay Buttons */}
            </div>
          </div>
          {/* End Images */}
        </div>
      </div>
      {/* End Home Section Content */}
    </div>
  );
}
