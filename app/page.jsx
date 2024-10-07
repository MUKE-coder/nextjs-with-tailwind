import HeroSection from "@/components/HeroSection";
import LinkButton from "@/components/LinkButton";
import Logos from "@/components/Logos";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <Logos />
    </div>
  );
}
