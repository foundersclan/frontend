import { Routes, Route } from "react-router-dom";
import { Footer } from "./components/shared/Footer";
import { HomePage } from "./pages/HomePage";
import { PricingPage } from "./pages/PricingPage";
import { ApplyPage } from "./pages/ApplyPage";
import { AboutPage } from "./pages/AboutPage";

export default function FoundersClan_Campus_Catalyst() {
  return (
    <div className="min-h-screen bg-black">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/apply" element={<ApplyPage />} />
      </Routes>
      <Footer />
    </div>
  );
}