"use client";
import Image from "next/image";

export default function About() {
  return (
    <div className="row wow fadeInUp" data-wow-delay="0.5s">
      <div className="col-lg-6 mb-md-60">
        <div className="position-relative">
          {/* Image */}
          <div className="position-relative overflow-hidden">
            <Image
              width={960}
              height={539}
              src="/assets/images/aboutUs/about-us.png"
              className="image-fullwidth relative"
              alt="Image Description"
            />
          </div>
          {/* End Image */}
          {/* Decorative Waves */}
          <div
            className="decoration-1 d-none d-sm-block"
            data-rellax-y=""
            data-rellax-speed={1}
            data-rellax-percentage="0.1"
          >
            <Image
              width="159"
              height="74"
              src="/assets/images/decoration-1.svg"
              className="svg-shape"
              alt=""
            />
          </div>
          {/* End Decorative Waves */}
        </div>
      </div>
      <div className="col-lg-6">
        <h4 className="h5">عن شركتنا</h4>
        <p className="text-gray">
          منــــــــشأة سعـــــــــودية قانونية , متخــــــــصصين
          خـــــــــــــدمة المحـــــــــاسبة للشركات والمـــــــــؤسسات
          بشــــــــــــكل مجدول , نعـــمل ً عن بعد وحـــــــــــــــــضوراي على
          تقــــــــديم خبرتنا المــــــــــحاسبة بطـــــــــــــــريقة متقدمة
          السهولة والجــــــــــوده والتكلفة المناسبة لعــــــــملاؤنا عن بعد
          نشــــارك مساعدة الشركات الناشئة تحسين النتائج المالية لتنمو نحو
          النجاح
        </p>
        <h4 className="h5">رسالتنا</h4>
        <p className="text-gray">
          نسعى أن نكــــون الخيار الأفضل لتـــــــــــــقديم الاستشارات المهنية
          بكل دقة بما يعزز من استدامة علاقــــــــــــتنا الاستراتيجية وتقديم
          خدمات ذات قيـــــمة مضافة لعـــــــــــــــــــملائنا
        </p>
      </div>
    </div>
  );
}
