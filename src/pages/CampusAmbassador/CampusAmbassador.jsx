import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ApplyPage } from "./pages/ApplyPage";
import ClubProgram from "./pages/ClubProgram";
import { LazyMotion, domAnimation } from "framer-motion";

export default function CampusAmbassador() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/clubProgram" element={<ClubProgram />} />
          <Route path="/apply" element={<ApplyPage />} />
        </Routes>
      </div>
    </LazyMotion>
  );
}