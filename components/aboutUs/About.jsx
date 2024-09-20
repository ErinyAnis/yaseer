import dynamic from "next/dynamic";
const onePage = false;
const dark = false;
const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);

import Image from "next/image";
import About from "@/components/homes/home-1/About";


const AboutUs = () => {
  return (
    <section
      className={`page-section scrollSpysection ${
        dark ? "bg-dark-1 light-content" : ""
      }`}
      id="about"
    >
      <div className="container position-relative">
        <div className="row mb-60 mb-xs-30">
          <div className="col-md-6">
            <h2 className="section-caption mb-xs-10">قصتنا</h2>
            <h3 className="section-title mb-0">
              من نحن؟
            </h3>
          </div>
          <div className="col-md-6 relative text-start text-md-end pt-40 pt-sm-20 local-scroll">
            {/* Decorative Dots */}
            <div
              className="decoration-2 d-none d-md-block"
              data-rellax-y=""
              data-rellax-speed="0.7"
              data-rellax-percentage="-0.2"
            >
              <Image
                width="103"
                height="223"
                src="/assets/images/decoration-2.svg"
                alt=""
              />
            </div>
            {/* End Decorative Dots */}

            {/* <Link
              href={`/main-pages-services-1${dark ? "-dark" : ""}`}
              className="link-hover-anim underline align-middle"
              data-link-animate="y"
            >
              <span className="link-strong link-strong-unhovered">
                اعرف عن الشركة{" "}
                <i className="mi-arrow-left size-18" aria-hidden="true"></i>
              </span>
              <span
                className="link-strong link-strong-hovered"
                aria-hidden="true"
              >
                اعرف عن الشركة{" "}
                <i className="mi-arrow-left size-18" aria-hidden="true"></i>
              </span>
            </Link> */}
            <div
              className="link-hover-anim underline align-middle"
              data-link-animate="y"
            >
              <span className="link-strong link-strong-unhovered">
                اعرف عن الشركة{" "}
                <i className="mi-arrow-left size-18" aria-hidden="true"></i>
              </span>
              <span
                className="link-strong link-strong-hovered"
                aria-hidden="true"
              >
                اعرف عن الشركة{" "}
                <i className="mi-arrow-left size-18" aria-hidden="true"></i>
              </span>
            </div>
          </div>
        </div>
        <About />
      </div>
    </section>
  );
};

export default AboutUs;
