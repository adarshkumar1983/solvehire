import Head from "next/head";
import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import TrustComponent from "./components/TrustComponent";
import ContainerPrimary from "./components/containerPrimary";
import ContainerSecondary from "./components/containerSecondry";
import ContainerTertiary from "./components/containerTertiary";
import ComparisonTable from "./components/ComparisonTable";
import TestimonialSlider from "./components/TestimonialSlider";
import FaqAccordion from "./components/FaqAccordion";
import SignupPage from "./components/SignupPage";

export default function Home() {
  return (
    <>
      <Head>
        <title>My Next.js Project</title>
        <meta name="description" content="A high-performance Next.js website." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

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
    </>
  );
}