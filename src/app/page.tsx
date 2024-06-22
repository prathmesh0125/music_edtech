import FeturedSection from "@/components/FeturedSection";
import Footer from "@/components/Footer";
import Herosection from "@/components/Herosection";
import Instructors from "@/components/Instructor";
import MusicSchoolTestimonials from "@/components/TestimonialCard";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import Whychooseus from "@/components/Whychooseus";

export default function Home() {
  return (
    <main className="min-h-screen bg-white/[0.96] antialiased text-black bg-grid-white/[0.02] dark:bg-black dark:text-white">
   
      <Herosection/>
      <FeturedSection/>
      <Whychooseus/>
      <MusicSchoolTestimonials/>
      <UpcomingWebinars/>
      <Instructors/>
      <Footer/>
    </main>
  );
}
