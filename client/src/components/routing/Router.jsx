import { BrowserRouter, Routes, Route } from "react-router";
import Home from "../homePage/Landing";
import Sandbox from "../sandbox/Sandbox";
import Learn from "../Tabs/Learn";
import HowItWorks from "../Tabs/How";
export default function ClientRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sandbox" element={<Sandbox />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/howitworks" element={<HowItWorks />} />
      </Routes>
    </BrowserRouter>
  );
}
