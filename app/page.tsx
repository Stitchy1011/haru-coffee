import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutPreview from "@/components/AboutPreview";
import MenuPreview from "@/components/MenuPreview";
import ContactPreview from "@/components/ContactPreview";
import Footer from "@/components/Footer";
import LocationSection from "@/components/LocationSection";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <AboutPreview />
        <MenuPreview />
        <LocationSection />
        {/* <ContactPreview /> */}
      </main>

      <Footer />
    </>
  );
}