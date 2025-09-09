"use client";
import Landing from "@/components/home/landing";
import EventPreview from "@/components/home/EventPreview";
import FAQ from "@/components/home/FAQ";
import ScrollSection from "@/components/home/ScrollSection";
import Footer from "@/components/layout/Footer";
import EventTittle from "@/components/home/EventTittle";
import CustomLayout from "@/components/ui/custom-Layout/customLayout";
import LeadershipTeam from "./about-us/components/SectionOne";

export default function Home() {
  return (
    <CustomLayout>
      {/* <LeadershipTeam />
      <div className="h-screen w-full"></div> */}
      <Landing />
      <EventTittle />
      <EventPreview />

      <ScrollSection />
      <FAQ />
      <Footer />
    </CustomLayout>
  );
}

{
  /*  */
}
