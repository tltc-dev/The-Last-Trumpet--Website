import React from "react";
import TextAnimation from "@/components/ui/typography/TextAnimation";
import Globe from "@/components/ui/background-flare/globe";
import EventSection from "./components/EventSection";
import WorshipGallery from "./components/WorshipGallery";
import CustomLayout from "@/components/layout/custom-Layout/customLayout";
import Footer from "@/components/layout/Footer";

type Props = {};

const page = (props: Props) => {
  return (
    <CustomLayout className="flex flex-col gap-20 pt-44 relative w-full overflow-hidden">
      <TextAnimation
        phrase={["Stay Involved", "Upcoming Church Activities"]}
        className="heading text-center"
        as="h2"
      />
      <Globe />
      <EventSection />
      <TextAnimation
        phrase={["Our Worship", "Activities"]}
        className="heading text-center "
        as="h2"
      />
      <WorshipGallery />

      <section className="pt-20 padding h-full w-full">
        <TextAnimation
          phrase={["Our Journey on", "YouTube"]}
          className="heading text-center "
          as="h2"
        />
        <div className="w-full h-[500px]  mt-15"></div>
      </section>
      <Footer />
    </CustomLayout>
  );
};

export default page;
