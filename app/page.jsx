import Hero from "@/components/preview/Hero";
import dynamic from "next/dynamic";

const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);

import HeaderPreview from "@/components/headers/HeaderPreview";
import Hero1 from "@/components/homes/home-4/heros/Hero1";
import Contact from "@/components/homes/home-6/Contact";
import AboutUs from "../components/aboutUs/About";
import MissionAndVision from "@/components/missionAndVision/MissionAndVision";
import Features from "@/components/features/Features";
import Services from "@/components/services/Services";
import OurPartners from "@/components/ourPartners/OurPartners";
import Packages from "@/components/packages/Packages";
import Footer9 from "@/components/footers/Footer9";
import FooterPreview from "@/components/footers/FooterPreview";
import DeviderSec from "@/components/deviderSec/DeviderSec";

export const metadata = {
  title: "الصفحة الرئيسية | يسير",
  description:
    "منــــــــشأة سعـــــــــودية قانونية , متخــــــــصصين خـــــــــــــدمة المحـــــــــاسبة للشركات والمـــــــــؤسسات بشــــــــــــكل مجدول , نعـــمل ً عن بعد وحـــــــــــــــــضوراي على تقــــــــديم خبرتنا المــــــــــحاسبة بطـــــــــــــــريقة متقدمة السهولة والجــــــــــوده والتكلفة المناسبة لعــــــــملاؤنا عن بعد نشــــارك مساعدة الشركات الناشئة تحسين النتائج المالية لتنمو نحو النجاح",
};

export default function Home() {
  return (
    <>
      <div className="theme-main">
        <div className="page" id="top">
          {/* Navigation Panel */}
          <nav className="main-nav transparent stick-fixed wow-menubar">
            <HeaderPreview />
          </nav>
          {/* End Navigation Panel */}
          <main id="main">
            {/* Home Section */}
            {/* hero-sec */}
            <Hero1 />
            {/* end-hero-sec */}

            {/* services-sec */}
            <AboutUs />
            {/* end-services-sec */}

            {/* mission && vission */}
            <MissionAndVision />
            {/* end mission && vission */}

            {/* features */}
            <Features />
            {/* end-features */}

            {/* services */}
            <Services />
            {/* end-services */}

            {/* our-partners */}
            <OurPartners />
            {/* end-our-partners */}

            {/* Backages */}
            <Packages />
            {/* end-Backages */}

            {/* devider-sec */}
            <DeviderSec />
            {/* end-devider-sec */}

            {/* contact-sec */}
            <Contact />
            {/* end-contact-sec */}

            {/* End Home Section */}
          </main>
          {/* Footer */}
          <footer className="page-section footer">
            <FooterPreview />
          </footer>

          {/* End Footer */}
        </div>
      </div>
    </>
  );
}
