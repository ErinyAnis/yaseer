import dynamic from "next/dynamic";
const onePage = false;
const dark = false;
const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);

import Header1Multipage from "@/components/headers/Header1Multipage";
import AnimatedText from "@/components/common/AnimatedText";
import Image from "next/image";
import Link from "next/link";
import Service2 from "@/components/homes/home-1/Service2";
import { features5 } from "@/data/features";
import Brands2 from "@/components/homes/home-1/Brands2";
import Brands from "@/components/homes/home-1/Brands";
import { menuItems } from "@/data/menu";
import Service from "../homes/home-4/Service";
export const metadata = {
  title:
    "Main Services 2 || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};

const Features = () => {
  return (
    <div className="container position-relative main-sec-padding">
      <div className="row">
        <div className="col-lg-6 mb-md-60 mb-sm-30">
          <h2 className="section-caption mb-xs-10">مميزاتنا</h2>
          <h3 className="section-title mb-30">
            لماذا نحن الخيار الأمثل لاحتياجاتك المحاسبية؟
          </h3>
          <div className="row">
            <div className="col-lg-10">
              <p
                className="section-descr mb-50 mb-sm-30 wow fadeInUp"
                data-wow-delay="0.4s"
              >
                إليك أسباب اختيارنا:
              </p>
            </div>
          </div>
          <ul
            className="nav nav-tabs services-tabs wow fadeInUp"
            data-wow-delay="0.55s"
            role="tablist"
          >
            <li role="presentation">
              <a
                href="#services-item-1"
                className="active"
                aria-controls="services-item-1"
                role="tab"
                aria-selected="true"
                data-bs-toggle="tab"
              >
                القانــــونية <span className="number">01</span>
              </a>
            </li>
            <li role="presentation">
              <a
                href="#services-item-2"
                aria-controls="services-item-2"
                role="tab"
                aria-selected="false"
                data-bs-toggle="tab"
              >
                الخصوصية <span className="number">02</span>
              </a>
            </li>
            <li role="presentation">
              <a
                href="#services-item-3"
                aria-controls="services-item-3"
                role="tab"
                aria-selected="false"
                data-bs-toggle="tab"
              >
                الخــــــــبرة <span className="number">03</span>
              </a>
            </li>
            <li role="presentation">
              <a
                href="#services-item-4"
                aria-controls="services-item-4"
                role="tab"
                aria-selected="false"
                data-bs-toggle="tab"
              >
                التكـــــــلفة <span className="number">04</span>
              </a>
            </li>
            <li role="presentation">
              <a
                href="#services-item-5"
                aria-controls="services-item-5"
                role="tab"
                aria-selected="false"
                data-bs-toggle="tab"
              >
                النتائج <span className="number">05</span>
              </a>
            </li>
          </ul>
        </div>
        <div
          className="col-lg-6 d-flex wow fadeInLeft"
          data-wow-delay="0.55s"
          data-wow-offset={275}
        >
          <div className="tab-content services-content">
            {/* Tab Content */}
            <div
              className="tab-pane services-content-item show fade active"
              id="services-item-1"
              role="tabpanel"
            >
              <div className="services-text">
                <div className="services-text-container">
                  <h4 className="services-title">القانــــونية</h4>
                  <p className="text-gray mb-0">
                    نقدم خدماتنا عبر عقد رسمي يضمن لك أعلى مستوى من الخدمة
                    المحاسبية. نحن ملتزمون بتقديم الدعم والمشورة اللازمة لتحقيق
                    أهدافك المالية بدقة واحترافية، مما يضمن لك الثقة والشفافية
                    في جميع تعاملاتك.
                  </p>
                </div>
              </div>
              <Image
                width={945}
                height={1016}
                className="services-image"
                src="/assets/images/features/Legal.png"
                alt="القانــــونية"
              />
            </div>
            {/* End Tab Content */}
            {/* Tab Content */}
            <div
              className="tab-pane services-content-item fade"
              id="services-item-2"
              role="tabpanel"
            >
              <div className="services-text">
                <div className="services-text-container">
                  <h4 className="services-title">الخصوصية</h4>
                  <p className="text-gray mb-0">
                    نتعهد بالحفاظ على سرية بياناتك وخصوصيتك وفقًا لاتفاقية رسمية
                    تضمن حماية معلوماتك. يمكنك الاطمئنان إلى أن جميع بياناتك
                    ستكون آمنة في أيدٍ أمينة، وسنبذل قصارى جهدنا لحمايتها من أي
                    وصول غير مصرح به.
                  </p>
                </div>
              </div>
              <Image
                width={945}
                height={1016}
                className="services-image"
                src="/assets/images/features/Privacy.png"
                alt="الخصوصية"
              />
            </div>
            {/* End Tab Content */}
            {/* Tab Content */}
            <div
              className="tab-pane services-content-item fade"
              id="services-item-3"
              role="tabpanel"
            >
              <div className="services-text">
                <div className="services-text-container">
                  <h4 className="services-title">الخــــــــبرة</h4>
                  <p className="text-gray mb-0">
                    فريقنا يتمتع بخبرة عالية في المحاسبة والإدارة المالية، مما
                    يمكننا من تقديم أفضل النتائج لعملائنا وتحقيق أهدافهم المالية
                    بفاعلية واحترافية.
                  </p>
                </div>
              </div>
              <Image
                width={945}
                height={1016}
                className="services-image"
                src="/assets/images/features/Experience.png"
                alt="الخــــــــبرة"
              />
            </div>
            {/* End Tab Content */}
            {/* Tab Content */}
            <div
              className="tab-pane services-content-item fade"
              id="services-item-4"
              role="tabpanel"
            >
              <div className="services-text">
                <div className="services-text-container">
                  <h4 className="services-title">التكـــــــلفة</h4>
                  <p className="text-gray mb-0">
                    نسهل لعملائنا الاستفادة من خبرة المحاسبين العالية بتكلفة أقل
                    من التوظيف، مما يمنحهم الفرصة لتحقيق أهدافهم المالية دون
                    الحاجة لتحمل الأعباء الإضافية.
                  </p>
                </div>
              </div>
              <Image
                width={945}
                height={1016}
                className="services-image"
                src="/assets/images/features/Cost.png"
                alt="التكـــــــلفة"
              />
            </div>
            {/* End Tab Content */}
            {/* Tab Content */}
            <div
              className="tab-pane services-content-item fade"
              id="services-item-5"
              role="tabpanel"
            >
              <div className="services-text">
                <div className="services-text-container">
                  <h4 className="services-title">النتائج</h4>
                  <p className="text-gray mb-0">
                    يمكنك الاعتماد علينا لتحقيق نتائج وتوصيات مالية واضحة تساعدك
                    في اتخاذ قراراتك بشكل أفضل، مما يعزز من استراتيجياتك المالية
                    ويزيد من فرص نجاحك.
                  </p>
                </div>
              </div>
              <Image
                width={945}
                height={1016}
                className="services-image"
                src="/assets/images/features/Results.png"
                alt="النتائج"
              />
            </div>
            {/* End Tab Content */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
