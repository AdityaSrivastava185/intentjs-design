import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import Features from "@/components/Features";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <Features/>
    <Footer/>
    </>
  );
}
