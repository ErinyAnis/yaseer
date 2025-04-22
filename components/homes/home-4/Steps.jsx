import { stepsItems } from "@/data/steps";

export default function Steps() {
  return (
    <div className="position-relative main-sec-padding">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h2 className="section-title mb-70 mb-sm-50 text-center text-black">
            بماذا نتميز ؟
          </h2>
        </div>
      </div>
      <div className="row mb-n20 align-items-center justify-content-center">
        {stepsItems.map((item, index) => (
        <div class="flip-card col-6 col-xl-4">
          <div
            class="flip-card-inner steps-2-item text-center light-content-2"
            key={index}
          >
            <div class="flip-card-front">
              <div className="steps-2-icon">{item.icon}</div>
              <div className="pb-xs-30">
                <h4 className="steps-2-title fw-bold">{item.title}</h4>
              </div>
            </div>
            <div class="flip-card-back">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, inventore?</p>
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}
