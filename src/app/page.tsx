"use client";
import Landing from "@/components/home/landing";
import FAQ from "@/components/home/FAQ";
import ScrollSection from "@/components/home/ScrollSection";
import Footer from "@/components/layout/Footer";
import EventTittle from "@/components/home/EventTittle";
import CustomLayout from "@/components/layout/custom-Layout/customLayout";
import EventPreviewTest from "@/components/home/EventPreview";
import { useEventList } from "./hooks/useEvents";
import { useFaqList } from "./hooks/useFAQ";

export default function Home() {

  const { data: events } = useEventList();
  const { data: faq } = useFaqList();

  return (
    <CustomLayout>
      <Landing events={(events ?? []).filter((e) => e.homeCarousel === true)} />
      <EventTittle />
      <EventPreviewTest events={(events ?? []).filter((e) => e.upcoming === true)} />
      <ScrollSection />
      <FAQ faq={faq} />
      <Footer />
    </CustomLayout>
  );
}
