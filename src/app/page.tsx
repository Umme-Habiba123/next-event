import HeroSections from "@/components/pages/home/HeroSections";
import ServiceSection from "@/components/pages/home/ServiceSection";
import SubscribeSection from "@/components/pages/home/SubscribeSection";
import TestimonialSection from "@/components/pages/home/TestimonialSection";
// import Image from "next/image";

export default function Home() {
  return (
    <div>
     <HeroSections></HeroSections>
     <ServiceSection></ServiceSection>
     <TestimonialSection></TestimonialSection>
     <SubscribeSection></SubscribeSection>
     
    </div>
  );
}
