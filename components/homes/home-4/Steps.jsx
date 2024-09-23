import { stepsItems } from "@/data/steps";
import Image from "next/image";


export default function Steps() {
  return (
    <div className="position-relative main-sec-padding">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h2 className="section-title mb-70 mb-sm-50 text-center text-black">بماذا نتميز ؟ </h2>
        </div>
      </div>
      {/* Steps Grid */}
      <div className="row mb-n20 align-items-center justify-content-center">
        {/* Steps Item */}
        {stepsItems.map((item, index) => (
          <div className="col-6 col-xl-4">
            <div
              key={index}
              className="steps-2-item text-center light-content-2"
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
              <div className="pb-xs-30">
                <h4 className="steps-2-title fw-bold">{item.title}</h4>
                {/* <h4 className="steps-2-title mb-3">{item.sub_title}</h4> */}
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
