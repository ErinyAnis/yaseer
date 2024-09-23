import dynamic from "next/dynamic";

const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);

import Contact from "@/components/homes/home-6/Contact";
import AboutUs from "../components/aboutUs/About";
import MissionAndVision from "@/components/missionAndVision/MissionAndVision";
import Features from "@/components/features/Features";
import Services from "@/components/services/Services";
import OurPartners from "@/components/ourPartners/OurPartners";
import Packages from "@/components/packages/Packages";
import DeviderSec from "@/components/deviderSec/DeviderSec";
// import Hero1 from "@/components/homes/home-9/heros/Hero1";
import Hero1 from "@/components/homes/home-5/heros/Hero1";

export const metadata = {
  title: "الصفحة الرئيسية | يسير",
  description:
    "منــــــــشأة سعـــــــــودية قانونية , متخــــــــصصين خـــــــــــــدمة المحـــــــــاسبة للشركات والمـــــــــؤسسات بشــــــــــــكل مجدول , نعـــمل ً عن بعد وحـــــــــــــــــضوراي على تقــــــــديم خبرتنا المــــــــــحاسبة بطـــــــــــــــريقة متقدمة السهولة والجــــــــــوده والتكلفة المناسبة لعــــــــملاؤنا عن بعد نشــــارك مساعدة الشركات الناشئة تحسين النتائج المالية لتنمو نحو النجاح",
};

export default function Home() {
  return (
    <>
      {/* Home Section */}
      {/* hero-sec */}
      {/* <Hero1 /> */}
      <Hero1 />
      {/* end-hero-sec */}

      {/* services-sec */}
      {/* <AboutUs /> */}
      {/* end-services-sec */}

      {/* mission && vission */}
      {/* <MissionAndVision /> */}
      {/* end mission && vission */}

      {/* Backages */}
      <Packages />
      {/* end-Backages */}

      {/* features */}
      {/* <Features /> */}
      {/* end-features */}

      {/* services */}
      <Services />
      {/* end-services */}

      {/* our-partners */}
      <OurPartners />
      {/* end-our-partners */}

      {/* devider-sec */}
      {/* <DeviderSec /> */}
      {/* end-devider-sec */}

      {/* contact-sec */}
      <Contact />
      {/* end-contact-sec */}

      {/* End Home Section */}
    </>
  );
}
