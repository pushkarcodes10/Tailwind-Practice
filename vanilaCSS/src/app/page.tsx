import Image from "next/image";
import { Container } from "@/src/components/container";
import { Navbar } from "@/src/components/navbar";
import { Hero } from "@/src/components/hero";

export default function Home() {
  return (
    <div className="layout">
      <div className="layout-lines-container">
        <div className="left-line" />
        <div className="right-line" />
        <Container>
          <Navbar />
          <Hero />
        </Container>
        <div className="hero-image-container">
          <div className="horizontal-line"></div>
          <img className="hero-image" src="/hero-ui-v6.webp" alt="hero-image" />
        </div>
      </div>          
    </div>
  );
}
