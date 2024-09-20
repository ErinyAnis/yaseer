import Image from "next/image";

const DeviderSec = () => {
  return (
    <section className="page-section">
      <div className="container position-relative z-index-1">
        <div className="row text-center justify-content-center">
          <div className="col-md-10 col-lg-8">
            <div className="text-center mb-40 mb-sm-30">
              <Image
                src="/assets/images/logo/mini-logo.png"
                width={50}
                height={50}
                alt="Image Description"
              />
            </div>
            <p className="section-descr-medium mb-50 mb-sm-40">
              توفير الوقت والجهد في الإدارة المالية يمنحك الفرصة للتركيز على نمو
              أعمالك واستكشاف استراتيجيات جديدة. استمتع بالتحرر من الأعباء
              المالية وركز على تحقيق رؤيتك وأهدافك بكفاءة أكبر!
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Line */}
      <div className="bg-line-2 mt-n10 mt-md-20 opacity-025">
        <Image
          src="/assets/images/demo-corporate/decoration-3.svg"
          width={1600}
          height={243}
          alt="decoration"
        />
      </div>
    </section>
  );
};

export default DeviderSec;
