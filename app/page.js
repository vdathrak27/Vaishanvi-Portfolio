import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <div className="container max-w-screen-xl mx-auto px-6 sm:px-8 py-8">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection/>
      </div>
      <Footer/>
    </main>
  );
}
