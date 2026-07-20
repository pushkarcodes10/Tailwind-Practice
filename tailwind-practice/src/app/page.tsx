import { Navbar } from "../components/navbar";
import { Container } from "../components/container";
import { Hero } from "../components/hero";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col items-center [--background-width:308.4%] lg:[--background-width:198.96%] [background:radial-gradient(var(--background-width)_100%_at_50%_0%,#FFF_6.32%,#E0F0FF_29.28%,#E7EFFD_68.68%,#FFF_100%)]">
      <div className="pointer-events-none absolute inset-0 mx-auto w-full max-w-7xl">
        <div className="absolute inset-y-0 left-0 w-px bg-linear-to-b from-transparent via-neutral-300/60 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-px bg-linear-to-b from-transparent via-neutral-300/60 to-transparent" />
      </div>
      <Container>
        <Navbar />
        <Hero />
      </Container>
    </div>
  );
}