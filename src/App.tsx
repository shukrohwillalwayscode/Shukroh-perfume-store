import "./App.css";
import Navbar from "./components/navbar";
import HeroSection from "./components/hero-section";
import ProductSection from "./components/product-section";
import Message from "./components/message";
import Footer from "./components/footer";
import { Testimonials } from "./components/testimonials";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <div className="bg-white px-[50px] space-y-[50px] mt-[50px] max-md:px-[10px]">
        <Message />
        <ProductSection />
        <Testimonials />
      </div>
      <Footer />
    </>
  );
}

export default App;
