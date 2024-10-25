import Hero from "@/Components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/Components/Services";
import Emergency from "@/Components/Emergency";
import Faq from "@/Components/Faq";
import Footer from "@/Components/Footer";
import Card from "@/Components/SubComponents/Card";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Emergency/>
      <Faq/>
      <Footer/>
    </div>
  );
}
