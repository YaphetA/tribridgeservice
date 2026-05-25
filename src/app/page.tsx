import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import EthiopiaSection from "@/components/EthiopiaSection";
import Industries from "@/components/Industries";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import ConsultationForm from "@/components/ConsultationForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <EthiopiaSection />
        <Industries />
        <WhyUs />
        <Testimonials />
        <ConsultationForm />
      </main>
      <Footer />
    </>
  );
}
