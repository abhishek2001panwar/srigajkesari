import SriGajkesariNavbar from "@/components/Navbar";
import BuiltOnIntegrity from "@/components/sections/BuiltOnIntegrity";
import CollectionsShowcase from "@/components/sections/Collection";
import ContactShowroom from "@/components/sections/Contact";
import CraftVisionSection from "@/components/sections/CraftVisionSection";
import Footer from "@/components/sections/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ParallaxVisualBreak from "@/components/sections/Karigiri";
import OurBeginning from "@/components/sections/OurBeginning";
import CustomerReviews from "@/components/sections/Review";


export default function Home() {
  return (
<main className="relative ">
      <SriGajkesariNavbar theme="light" />
      
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Our Beginning (z-10) */}
      <div className="relative z-10">
        <OurBeginning />
      </div>

      {/* 3. Built on Integrity (z-30, negative top margin pulls it ON TOP of Our Beginning) */}
      <BuiltOnIntegrity />

     <CollectionsShowcase />
      <ParallaxVisualBreak />
     <CraftVisionSection />
     <ContactShowroom />
     <CustomerReviews />
     <Footer  />
    </main>
  );
}