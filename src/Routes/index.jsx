import { Route, Routes } from "react-router-dom";
import { ExpressPage } from "../Pages/ExpressPage";
import { HomePage } from "../Pages/HomePage";
import { MathPage } from "../Pages/MathPage";
import { PredictionPage } from "../Pages/PredictionPage";

export const RoutesComponents = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/predictions" element={<PredictionPage />} />
      <Route path="/daily" element={<ExpressPage />} />
      <Route path="/math" element={<MathPage />} />
    </Routes>
  );
};
