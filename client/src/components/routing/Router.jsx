import { BrowserRouter, Routes, Route } from "react-router";
import Home from "../homePage/Landing";
import Sandbox from "../sandbox/Sandbox";
import Learn from "../learn/Learn";
export default function ClientRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sandbox" element={<Sandbox />} />
        <Route path="/learn" element={<Learn />} />
      </Routes>
    </BrowserRouter>
  );
}
