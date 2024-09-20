import Link from "next/link";
import Image from "next/image";
import { corporateMultipage } from "@/data/menu";
import Cta from "@/components/homes/home-4/Cta";
import Testimonials from "@/components/homes/home-4/Testimonials";
import { features5 } from "@/data/features";

const MissionAndVision = () => {
  return (
    <section
      className="page-section bg-scroll light-content"
      style={{
        backgroundImage: "url(/assets/images/mission&vision/mission&vision-bg.png)",
      }}
    >
      {/* Desktop Overlay */}
      <div className="bg-overlay bg-gradient-primary-alpha-1 d-none d-md-block" />
      {/* End Desktop Overlay */}
      {/* Mobile Overlay */}
      <div className="bg-overlay bg-primary-1 opacity-09 d-md-none" />
      {/* End Mobile Overlay */}
      <div className="container position-relative">
        <div className="row">
          <div className="col-md-7 col-lg-6 col-xl-5">
            <div>
              <h2 className="section-descr mb-3 mb-sm-40">رؤيتنا</h2>
              <p>
                أن نكون احد أبرز الشركات المهنية الوطنية الاستـــــشارات
                المهــــنية وتقديم خدمات المحاسبة والضـــــريبة بمخـــــتلف
                أنواعها المملكة وفق أعـــــــلى معايير الجـــــــــــــودة التي
                تتوافق مع قيمنا وتلبي احتيــــــــــاجات عملائنا وتجذب لنا افضل
                كــــفاءات الموارد البشرية.
              </p>
            </div>
            <div>
              <h2 className="section-descr mb-3 mb-sm-40">أهدافنا</h2>
              <p>
                هدفنا هو الحفاظ على جسر الثقة الذي يمتد دائما بيــــــننا وبين
                عمـــــلائنا من خلال تقديم خدمات ذات قيـــــمة مضافة لهــــم
                ابلإضافة إلى انجاز خــــدماتنا وفق أعلى معايير المهنية والتي
                تتفق بكل تــــــــأكيد مع قواعد السلوك المهني من نزاهه وموضـوعية
                وكفائة مهنية والعناية اللازمة والسرية والســلوك المهن.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionAndVision;
