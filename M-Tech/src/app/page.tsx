import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TopFaculty from "@/components/TopFaculty";
import TopRecruiters from "@/components/TopRecruiters";
import PlacementStories from "@/components/PlacementStories";
import CampusCulture from "@/components/CampusCulture";
import LifeAtDAU from "@/components/LifeAtDAU";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import AboutUs from "@/components/AboutUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <TopRecruiters />
      <PlacementStories />
      <TopFaculty />
      <CampusCulture />
      <LifeAtDAU />
      <AboutUs/>
      <ContactForm />
      <Footer />
    </main>
  );
}
