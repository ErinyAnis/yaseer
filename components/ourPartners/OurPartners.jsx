import { features5 } from "@/data/features";
import ClientSlider from "@/components/others/ClientSlider";
import Image from "next/image";

const OurPartners = () => {
  return (
    <>
      {/* <section className="page-section z-index-1"> */}
        {/* <div className="container position-relative"> */}
          {/* <div className="row justify-content-center mb-50 mb-sm-50">
            <div className="col-md-10 col-lg-8  col-xl-6 text-center">
              <h2 className="section-title-small mb-20">شركائنا</h2>
              <p className="text-gray mb-0">
                نفخر بشراكاتنا المميزة التي تساهم في تعزيز خدماتنا وتقديم حلول
                مبتكرة تلبي احتياجات عملائنا في مختلف المجالات.
              </p>
            </div>
          </div> */}
          {/* Features Grid */}
          {/* <div className="row mt-n30 wow fadeInUp"> */}
            {/* Feature Item */}
            {/* {features5.map((elm) => (
              <div
                key={elm.id}
                className="col-sm-6 col-xl-3 d-flex align-items-stretch"
              >
                <div className="alt-features-item box-shadow text-center mt-30">
                  <div className="alt-features-icon ">
                    <Image
                      src={elm.src}
                      alt={elm.title}
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
              </div>
            ))} */}
            {/* End Feature Item */}

            {/* End Feature Item */}
          {/* </div> */}
          {/* End Features Grid */}
        {/* </div>
      </section> */}

      <section className="page-section pt-0">
        <div className="container relative">
          <div className="row wow fadeInUpShort justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-6 text-center mb-4">
              <h2 className="section-title-small mb-20">عملائنا</h2>
            </div>
            <hr className="mt-0 mb-0" />
            <div className="col-md-12">
              <ClientSlider />
            </div>
            <hr className="mt-0 mb-0" />
          </div>
        </div>
      </section>
    </>
  );
};

export default OurPartners;
