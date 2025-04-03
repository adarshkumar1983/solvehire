import Image from "next/image";
import Header from "./component/Header";
import Footer from "./component/Footer";
import HeroSection from "./component/HeroSection";
import TrustComponent from "./component/TrustComponent";
import ContainerPrimary from "./component/containerPrimary";
import ContainerSecondary from "./component/containerSecondry";
import ContainerTertiary from "./component/containerTertiary";
import ComparisonTable from "./component/ComparisonTable";
import TestimonialSlider from "./component/TestimonialSlider";
import FaqAccordion from "./component/FaqAccordion";
import SignupPage from "./component/SignupPage";

export default function Home() {
  return (
    <div className="w-full max-w-screen overflow-hidden">
      <Header />
      <HeroSection />
      <TrustComponent />
      <ContainerPrimary />
      <ContainerSecondary />
      <ContainerTertiary />
      <ComparisonTable />
      <TestimonialSlider />
      <FaqAccordion />
      <SignupPage />
      <Footer />
    </div>
  );
}