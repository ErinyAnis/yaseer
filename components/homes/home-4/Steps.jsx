import { stepsItems } from "@/data/steps";
import Image from "next/image";


export default function Steps() {
  return (
    <div className="container position-relative main-sec-padding">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h2 className="section-title mb-70 mb-sm-50 text-center">باقاتنا</h2>
        </div>
      </div>
      {/* Steps Grid */}
      <div className="row mb-n20 align-items-center justify-content-center">
        {/* Steps Item */}
        {stepsItems.map((item, index) => (
          <div className="col-6 col-xl-4 col-xxl-3">
            <div
              key={index}
              className="steps-2-item d-lg-flex align-items-center text-center gap-3 light-content-2"
            >
              <div className="steps-2-icon">
                {/* <Image
                  src={item.src}
                  alt={item.number}
                  width={105}
                  height={34}
                /> */}
                {item.icon}
              </div>
              <div className="steps-2-intro pb-xs-30">
                <h3 className="steps-2-title">{item.title}</h3>
                <h4 className="steps-2-title mb-0">{item.sub_title}</h4>
              </div>
            </div>
          </div>
        ))}
        {/* End Steps Item */}
      </div>
      {/* End Steps Grid */}
    </div>
  );
}
