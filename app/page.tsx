import { Footer, Header, Navbar } from "@components/common";
import {
  About,
  Contact,
  Experience,
  Home,
  Services,
  Testimonial,
  Work,
} from "@components/home";

export default function HomePage() {
  return (
    <>
      <Header />
      <Navbar />
      <main className="">
        <Home />
        <About />
        <Experience />
        <Services />
        <Work />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
