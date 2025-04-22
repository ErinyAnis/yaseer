import dynamic from "next/dynamic";

const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false,
  }
);

import AboutUs from "../components/aboutUs/About";
import MissionAndVision from "@/components/missionAndVision/MissionAndVision";
import Features from "@/components/features/Features";
import OurPartners from "@/components/ourPartners/OurPartners";
import OurStrength from "@/components/packages/OurStrength";
import DeviderSec from "@/components/deviderSec/DeviderSec";
import Hero1 from "@/components/homes/home-5/heros/Hero1";
import NewsLetter from "@/components/homes/home-4/NewsLetter";
import Services from "../components/services/Services";

export const metadata = {
  title: "الصفحة الرئيسية | يسير",
  description:
    "منــــــــشأة سعـــــــــودية قانونية , متخــــــــصصين خـــــــــــــدمة المحـــــــــاسبة للشركات والمـــــــــؤسسات بشــــــــــــكل مجدول , نعـــمل ً عن بعد وحـــــــــــــــــضوراي على تقــــــــديم خبرتنا المــــــــــحاسبة بطـــــــــــــــريقة متقدمة السهولة والجــــــــــوده والتكلفة المناسبة لعــــــــملاؤنا عن بعد نشــــارك مساعدة الشركات الناشئة تحسين النتائج المالية لتنمو نحو النجاح",
};

export default function Home() {
  return (
    <>
      <Hero1 />
      <OurStrength />
      <Services />
      <OurPartners />
      <NewsLetter />

    </>
  );
}
